"use client"

import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { hide } from "@/state/form/form-slice";
import { Page } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import NamePage from "@/components/consultation/pages/name-page";
import PreferredContactSelectionPage from "@/components/consultation/pages/preferred-contact-selection-page";
import PreferredContactPage from "@/components/consultation/pages/preferred-contact-page";
import ExperiencePage from "@/components/consultation/pages/experience-page";
import GoalPage from "@/components/consultation/pages/goal-page";
import BiggestStrugglePage from "@/components/consultation/pages/biggest-struggle-page";
import WillingToInvestPage from "@/components/consultation/pages/willing-to-invest-page";
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
            case Page.Name:
              return <NamePage />;
            case Page.PreferredContactSelection:
              return <PreferredContactSelectionPage />;
            case Page.PreferredContact:
              return <PreferredContactPage />;
            case Page.Experience:
              return <ExperiencePage />;
            case Page.Goal:
              return <GoalPage />;
            case Page.BiggestStruggle:
              return <BiggestStrugglePage />;
            case Page.WillingToInvest:
              return <WillingToInvestPage />;
            case Page.Summary:
              return <SummaryPage />;
            default:
              return <></>;
            }
          })()}
        </div>
      </div>
    </div>
  ) : null;
}
