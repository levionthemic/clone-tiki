import { combineReducers } from "@reduxjs/toolkit";
import loginModalReducer from "./slices/loginModalSlice";
import categorySiderReducer from "./slices/categorySiderSlice";

export default combineReducers({
  isOpenLoginModal: loginModalReducer,
  categorySider: categorySiderReducer
});