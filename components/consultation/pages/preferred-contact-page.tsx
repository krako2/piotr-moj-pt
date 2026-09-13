import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import { useRef, useState } from "react";

export default function PreferredContactPage() {
  const page: Page = useSelector((state: RootState) => state.form.page);
  const dispatch = useDispatch();

  const [blocked, setBlocked] = useState<boolean>(true);
  const preferredContactTextInputRef = useRef<HTMLInputElement>(null);

  function checkIfTheNextPageShouldBeBlocked() {
    if (!preferredContactTextInputRef.current) return;
    if (preferredContactTextInputRef.current.value !== "") {
      setBlocked(false);
    } else {
      setBlocked(true);
    }
  }

  return (
    <>
      <label htmlFor="preferred-contact" className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">What is your preferred method of contact?</h1>
      </label>
      <div className="my-10 flex justify-center">
        <input ref={preferredContactTextInputRef}
               onKeyDown={(e) => {
                if (e.key === "Enter" && !blocked) {
                  dispatch(setPage(Page.PreferredContactSelection));
                }
               }}
               onChange={checkIfTheNextPageShouldBeBlocked}
               className="bg-(--placeholder-light) p-2 rounded-lg focus:outline-2 focus:outline-(--placeholder-extra-light) w-full max-w-100"
               type="text"
               name="name"
         />
      </div>
      <div className="flex justify-center">
        <Button onClick={() => dispatch(setPage(Page.PreferredContactSelection))}>Back</Button>
        <Button onClick={() => dispatch(setPage(Page.PreferredContact))}>Next</Button>
      </div>
    </>
  );
}
