import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface IConter {
  number: number;
}

const counterState: IConter = {
  number: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterState,
  reducers: {
    setcounter(state, action) {
      state.number = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setcounter } = counterSlice.actions;
export default counterSlice.reducer;
