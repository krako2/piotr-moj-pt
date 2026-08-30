import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  showing: boolean
};

const initialState: FormState = {
  showing: false
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    show: (state) => {
      state.showing = true;
    },
    hide: (state) => {
      state.showing = false;
    }
  }
});

export const { show, hide } = formSlice.actions;
export default formSlice.reducer;
