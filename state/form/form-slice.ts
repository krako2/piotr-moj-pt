import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum Page {
  Name,
  PreferredContactSelection,
  PreferredContact,
  Experience,
  Goal,
  BiggestStruggle,
  WillingToInvest,
  Summary,
};

export type FormData = {
  name: string
  preferredContactMethod: string
  preferredContact: string
  experience: string
  goal: string
  biggestStruggle: string
  willingToInvest: string
};

export interface FormState {
  showing: boolean
  page: Page
  data: FormData
};

const initialState: FormState = {
  showing: false,
  page: Page.Name,
  data: {
    name: "",
    preferredContactMethod: "Email",
    preferredContact: "",
    experience: "Beginner",
    goal: "",
    biggestStruggle: "",
    willingToInvest: "Need more info",
  },
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
    },
    setPage: (state, action: PayloadAction<Page>) => {
      state.page = action.payload;
    },
    setData: (state, action: PayloadAction<FormData>) => {
      state.data = action.payload;
    }
  }
});

export const { show, hide, setPage, setData } = formSlice.actions;
export default formSlice.reducer;
