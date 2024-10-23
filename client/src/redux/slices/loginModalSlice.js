import { createSlice } from "@reduxjs/toolkit";

export const loginModalSlice = createSlice({
  name: "isOpenLoginModal",
  initialState: {
    value: false,
  },
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close } = loginModalSlice.actions;

export default loginModalSlice.reducer;
