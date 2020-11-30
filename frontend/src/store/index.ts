import { configureStore } from '@reduxjs/toolkit';
import { documentsSlice } from './documents';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    documents: documentsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
