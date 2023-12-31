import { configureStore } from '@reduxjs/toolkit';
import coinsListSlice from './coinsListSlice';

export const store = configureStore({
  reducer: {
    coinList: coinsListSlice,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
