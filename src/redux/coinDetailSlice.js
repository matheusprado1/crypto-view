import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk para buscar detalhes de uma moeda específica
export const fetchCoinDetail = createAsyncThunk("coinDetail/fetchCoinDetail", async (id) => {
  const response = await axios.get(`/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`)
  return response.data
});

// Async thunk para buscar detalhes de gráfico de uma moeda específica
export const fetchCoinChart = createAsyncThunk("coinDetail/fetchCoinChart", async (id) => {
  const response = await axios.get(`/coins/${id}/market_chart?vs_currency=brl&days=7`)
  return response.data
})

const initialState = {
  coin: null,
  chart: null,
  status: "idle",
  error: null,
}

export const coinDetailSlice = createSlice({
  name: "coinDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinDetail.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchCoinDetail.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.coin = action.payload
      })
      .addCase(fetchCoinDetail.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(fetchCoinChart.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchCoinChart.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.chart = action.payload
      })
      .addCase(fetchCoinChart.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export default coinDetailSlice.reducer;
