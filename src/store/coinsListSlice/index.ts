import { ICoin } from '@/interfaces/coin';
import { createSlice } from '@reduxjs/toolkit';

interface IStateCoinList {
  allCoins: ICoin[];
  soloCoin: any;
}

const coinListState: IStateCoinList = {
  allCoins: [],
  soloCoin: [],
};

const coinListSlice = createSlice({
  name: 'coinList',
  initialState: coinListState,
  reducers: {
    setAllCoins(state, action) {
      state.allCoins = action.payload;
    },
    setSoloCoin(state, action) {
      state.soloCoin = [...state.soloCoin, ...action.payload];
    },
  },
});

export const { setAllCoins, setSoloCoin } = coinListSlice.actions;
export default coinListSlice.reducer;
