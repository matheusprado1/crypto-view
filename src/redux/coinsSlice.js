import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk para buscar moedas do mercado
export const fetchMarketCoins = createAsyncThunk("coins/fetchMarketCoins", async () => {
  const response = await axios.get("/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false")
  return response.data
});

// Async thunk para buscar moedas em alta
export const fetchTrendingCoins = createAsyncThunk("coins/fetchTrendingCoins", async () => {
  const response = await axios.get("/search/trending")
  return response.data
})

const initialState = {
  marketCoins: [],
  trendingCoins: {},
  status: "idle",
  error: null,
}

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingCoins.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchTrendingCoins.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.trendingCoins = action.payload
      })
      .addCase(fetchTrendingCoins.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(fetchMarketCoins.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchMarketCoins.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.marketCoins = action.payload
      })
      .addCase(fetchMarketCoins.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export default coinsSlice.reducer;
