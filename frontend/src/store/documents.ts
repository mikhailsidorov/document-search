import { createSlice, PayloadAction, createAsyncThunk, SerializedError } from '@reduxjs/toolkit';

import { IDocument, IDocumentsGetListParams } from '../types';

import { documentsAPI } from '../api';

export interface IDocumentsState {
  documents: Array<IDocument>;
  loading: boolean;
  error: SerializedError | null;
}

export const fetchDocuments = createAsyncThunk(
  'documents/fetchDocuments',
  async (params: IDocumentsGetListParams, thunkAPI) => {
    const response = await documentsAPI.getList(params);
    return response.data;
  }
);

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
    builder.addCase(fetchDocuments.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDocuments.fulfilled, (state, action) => {
      state.documents = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchDocuments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});
