import { createSlice } from "@reduxjs/toolkit";

export const categorySiderSlice = createSlice({
  name: "categorySider",
  initialState: {
    value: null,
  },
  reducers: {
    fetchSuccess: (state, value) => {
      state.value = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchSuccess } = categorySiderSlice.actions;

export default categorySiderSlice.reducer;
