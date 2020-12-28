import { createSlice, PayloadAction, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IDocument, IDocumentGetParams, IDocumentsGetListParams, IValidationError } from '../types';

import { documentsAPI } from '../api';

export interface IDocumentsState {
  documents: Array<IDocument>;
  loading: boolean;
  error: IValidationError | SerializedError | null;
}

export const fetchDocuments = createAsyncThunk<
  IDocument[],
  IDocumentGetParams | IDocumentsGetListParams,
  { rejectValue: IValidationError }
>('documents/fetchDocuments', async (params, { rejectWithValue }) => {
  let response;
  try {
    if ('id' in params) {
      response = await documentsAPI.get(params);
      return [response.data];
    } else {
      response = await documentsAPI.getList(params);
      return response.data;
    }
  } catch (err) {
    const error: AxiosError<IValidationError> = err;

    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data as IValidationError);
  }
});

export const documentsSlice = createSlice({
  name: 'documents',
  initialState: {
    documents: [],
    loading: false,
    error: null,
  } as IDocumentsState,
  reducers: {
    updateDocuments: (state, action: PayloadAction<Array<IDocument>>) => {
      state.documents = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDocuments.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDocuments.fulfilled, (state, action) => {
      state.documents = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchDocuments.rejected, (state, action) => {
      state.documents = [];
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
      state.loading = false;
    });
  },
});
