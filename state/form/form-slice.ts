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
  Confirmation,
};

export enum FormStatus {
  Success,
  Failure,
}

export type FormData = {
  name: string
  preferredContactMethod: string
  preferredContact: string
  experienceMethod: string // Honeypot
  experience: string
  goal: string
  biggestStruggle: string
  willingToInvest: string
};

export interface FormState {
  showing: boolean
  page: Page
  data: FormData
  status: FormStatus
};

const initialState: FormState = {
  showing: false,
  page: Page.Name,
  data: {
    name: "",
    preferredContactMethod: "Email",
    preferredContact: "",
    experienceMethod: "", // Honeypot
    experience: "Beginner (new to training)",
    goal: "",
    biggestStruggle: "",
    willingToInvest: "I'm interested but need more information",
  },
  status: FormStatus.Failure,
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
    },
    setFormStatus: (state, action: PayloadAction<FormStatus>) => {
      state.status = action.payload;
    },
  }
});

export const { show, hide, setPage, setData, setFormStatus } = formSlice.actions;
export default formSlice.reducer;
