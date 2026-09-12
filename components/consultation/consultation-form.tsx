"use client"

import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { hide } from "@/state/form/form-slice";
import { Page } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import EmailPage from "@/components/consultation/pages/email-page";
import NamePage from "@/components/consultation/pages/name-page";
import EnquiryPage from "@/components/consultation/pages/enquiry-page";
import MessagePage from "@/components/consultation/pages/message-page";
import SummaryPage from "@/components/consultation/pages/summary-page";

export default function ConsultationForm() {
  const showing: boolean = useSelector((state: RootState) => state.form.showing);
  const page: Page = useSelector((state: RootState) => state.form.page);

  const dispatch = useDispatch();

  return showing ? (
    <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen p-5">
      <div className="flex justify-center items-center relative bg-(--placeholder) p-5 max-w-180 w-full h-full rounded-2xl">
        <Button className="absolute top-5 right-5" onClick={() => dispatch(hide())}>Close</Button>
        <div>
          {(() => {
            switch (page) {
            case Page.Email:
              return <EmailPage />;
            case Page.Name:
              return <NamePage />;
            case Page.Enquiry:
              return <EnquiryPage />
            case Page.Message:
              return <MessagePage />
            case Page.Summary:
              return <SummaryPage />
            default:
              return <></>;
            }
          })()}
        </div>
      </div>
    </div>
  ) : null;
}
