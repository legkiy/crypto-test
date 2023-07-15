import { ICoin, ICoinsATH } from '@/interfaces/coin';
import { createSlice } from '@reduxjs/toolkit';

interface IStateCoinList {
  allCoins: ICoin[];
  soloCoin: any;
  allCoinsList: ICoinsATH[];
}

const coinListState: IStateCoinList = {
  allCoins: [],
  soloCoin: [],
  allCoinsList: [],
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
    setAllCoinsList(state, action) {
      state.allCoinsList = action.payload;
    },
  },
});

export const { setAllCoins, setSoloCoin, setAllCoinsList } =
  coinListSlice.actions;
export default coinListSlice.reducer;
