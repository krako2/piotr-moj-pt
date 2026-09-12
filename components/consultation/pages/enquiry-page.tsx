import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import { useState } from "react";

export default function EnquiryPage() {
  const page: Page = useSelector((state: RootState) => state.form.page);
  const dispatch = useDispatch();

  const [blocked, setBlocked] = useState<boolean>(true);

  return (
    <>
      <label htmlFor="enquiry-type" className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">What is the nature of your enquiry?</h1>
      </label>
      <div className="my-10 flex justify-center">
        <input className="bg-(--placeholder-light) p-2 rounded-lg focus:outline-2 focus:outline-(--placeholder-extra-light) w-full max-w-100" type="text" name="enquiry-type" />
      </div>
    </>
  );
}
