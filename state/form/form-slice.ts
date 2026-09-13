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

export enum ContactMethod {
  Email,
  Instagram,
  WhatsApp,
};

export enum Experience {
  Beginner,
  SomeExperience,
  Experienced,
};

export enum Investment {
  Willing,
  NeedMoreInfo,
};

export type FormData = {
  name: string
  preferredContactMethod: ContactMethod
  experience: Experience
  goal: string
  biggestStruggle: string
  willingToInvest: Investment
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
    preferredContactMethod: ContactMethod.Email,
    experience: Experience.Beginner,
    goal: "",
    biggestStruggle: "",
    willingToInvest: Investment.NeedMoreInfo
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
    addData: (state, action: PayloadAction<FormData>) => {
      state.data = action.payload;
    }
  }
});

export const { show, hide, setPage } = formSlice.actions;
export default formSlice.reducer;
