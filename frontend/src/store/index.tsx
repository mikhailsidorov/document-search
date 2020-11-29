import { createSlice, configureStore } from '@reduxjs/toolkit';

export const documentsSlice = createSlice({
  name: 'documents',
  initialState: [],
  reducers: {
    getDocuments: () => {},
    getDocument: () => {},
  },
});

export const store = configureStore({
  reducer: documentsSlice.reducer,
});
