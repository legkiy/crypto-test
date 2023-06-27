import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counter';
import { createWrapper } from 'next-redux-wrapper';
import coinsListSlice from './coinsListSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    coinList: coinsListSlice,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
