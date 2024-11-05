import { createSlice } from "@reduxjs/toolkit";

export const loginModalSlice = createSlice({
  name: "isOpenLoginModal",
  initialState: {
    phoneNumber: false,
    email: false,
    otpConfirm: {
      value: false,
      phoneNumber: ""
    },
    signup: false,
    forgotPassword: false,
    enterPassword: false
  },
  reducers: {
    openPhoneNumber: (state) => {
      state.phoneNumber = true;
    },
    closePhoneNumber: (state) => {
      state.phoneNumber = false;
    },
    openEmail: (state) => {
      state.email = true;
    },
    closeEmail: (state) => {
      state.email = false;
    },
    openOtpConfirm: (state, action) => {
      state.otpConfirm.value = true;
      state.otpConfirm.phoneNumber = action.payload;
    },
    closeOtpConfirm: (state) => {
      state.otpConfirm.value = false;
    },
    openSignUp: (state) => {
      state.signup = true;
    },
    closeSignUp: (state) => {
      state.signup = false;
    },
    openForgotPassword: (state) => {
      state.forgotPassword = true;
    },
    closeForgotPassword: (state) => {
      state.forgotPassword = false;
    },
    openEnterPassword: (state) => {
      state.enterPassword = true;
    },
    closeEnterPassword: (state) => {
      state.enterPassword = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openPhoneNumber,
  closePhoneNumber,
  openEmail,
  closeEmail,
  openOtpConfirm,
  closeOtpConfirm,
  openSignUp,
  closeSignUp,
  openForgotPassword,
  closeForgotPassword,
  openEnterPassword,
  closeEnterPassword
} = loginModalSlice.actions;

export default loginModalSlice.reducer;
