import { ICoin } from '@/interfaces/coin';
import { createSlice } from '@reduxjs/toolkit';

interface IStateCoinList {
  coinList: ICoin[];
  soloCoin: any;
}

const coinListState: IStateCoinList = {
  coinList: [],
  soloCoin: [],
};

const coinListSlice = createSlice({
  name: 'coinList',
  initialState: coinListState,
  reducers: {
    setCoinList(state, action) {
      state.coinList = action.payload;
    },
    setSoloCoin(state, action) {
      state.soloCoin = [...state.soloCoin, ...action.payload];
    },
  },
});

export const { setCoinList, setSoloCoin } = coinListSlice.actions;
export default coinListSlice.reducer;
