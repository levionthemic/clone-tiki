import { combineReducers } from "@reduxjs/toolkit";
import loginModalReducer from "./slices/loginModalSlice";
import categorySiderReducer from "./slices/categorySiderSlice";
import searchBlurReducer from "./slices/searchBlurSlice";

export default combineReducers({
  isOpenLoginModal: loginModalReducer,
  categorySider: categorySiderReducer,
  searchBlur: searchBlurReducer,
});