import { createSlice } from "@reduxjs/toolkit";

export const searchBlurSlice = createSlice({
  name: "searchBlur",
  initialState: {
    value: false,
  },
  reducers: {
    on: (state) => {
      state.value = true;
    },
    off: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { on, off } = searchBlurSlice.actions;

export default searchBlurSlice.reducer;
