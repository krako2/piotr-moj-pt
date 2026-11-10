import { createSlice } from "@reduxjs/toolkit";

export interface PrivacyPolicyState {
  showing: boolean
};

const initialState: PrivacyPolicyState = {
  showing: false,
};

const privacyPolicySlice = createSlice({
  name: "privacyPolicy",
  initialState,
  reducers: {
    show: (state) => {
      state.showing = true;
    },
    hide: (state) => {
      state.showing = false;
    },
  }
});

export const { show, hide } = privacyPolicySlice.actions;
export default privacyPolicySlice.reducer;
