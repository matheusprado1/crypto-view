import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: null,
  balance: null,
  isConnected: false,
};

const metamaskSlice = createSlice({
  name: "metamask",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setIsConnected: (state, action) => {
      state.isConnected = action.payload;
    },
  },
});

export const { setAccount, setBalance, setIsConnected } = metamaskSlice.actions;

export default metamaskSlice.reducer;