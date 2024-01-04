import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  avaxPrice: 0,
  walletBalance: { avaxBalance: '0.000', mcvBalance: '0.000' },
};

export const globalInfoSlice = createSlice({
  name: "globalInfo",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAvaxPrice: (state, action) => {
      state.avaxPrice = action.payload;
    },
    setWalletBalance: (state, action) => {
      state.walletBalance = { ...state.walletBalance, ...action.payload }
    },
  },
});

export const { setLoading, setAvaxPrice, setWalletBalance } = globalInfoSlice.actions;

export default globalInfoSlice.reducer;
