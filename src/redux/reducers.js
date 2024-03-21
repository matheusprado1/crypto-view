import { combineReducers } from "@reduxjs/toolkit";
import metamaskReducer from "./metamaskSlice"
import coinsReducer from "./coinsSlice"
import coinDetailReducer from "./coinDetailSlice"

const rootReducer = combineReducers({
  metamask: metamaskReducer,
  coins: coinsReducer,
  coinDetail: coinDetailReducer
});

export default rootReducer;