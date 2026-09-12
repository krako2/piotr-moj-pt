import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum Page {
  Email,
  Name,
  Enquiry,
  Message,
  Summary
};

export enum ContactMethod {
  WhatsApp,
  Instagram,
  Email
};

export enum Experience {
  Beginner,
  SomeExperience,
  Experienced
};

export enum Investment {
  Willing,
  NeedMoreInfo
};

export type FormData = {
  name: string,
  preferredContactMethod: ContactMethod,
  experience: Experience,
  goal: string,
  biggestStruggle: string,
  willingToInvest: Investment
};

export interface FormState {
  showing: boolean,
  page: Page
};

const initialState: FormState = {
  showing: false,
  page: Page.Email
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
    }
  }
});

export const { show, hide, setPage } = formSlice.actions;
export default formSlice.reducer;
