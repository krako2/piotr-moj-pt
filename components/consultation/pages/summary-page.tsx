import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import { useState } from "react";

export default function SummaryPage() {
  const page: Page = useSelector((state: RootState) => state.form.page);
  const dispatch = useDispatch();

  const [blocked, setBlocked] = useState<boolean>(true);

  return (
    <>
      <div className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">Here's a summary of what you said</h1>
      </div>
    </>
  );
}
