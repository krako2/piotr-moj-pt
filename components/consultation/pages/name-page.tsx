import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import { useRef, useState } from "react";

export default function NamePage() {
  const page: Page = useSelector((state: RootState) => state.form.page);
  const dispatch = useDispatch();

  const [blocked, setBlocked] = useState<boolean>(true);
  const nameInputRef = useRef<HTMLInputElement>(null);

  function checkIfTheNextPageShouldBeBlocked() {
    if (!nameInputRef.current) return;
    // I took this regex pattern from StackOverflow: https://stackoverflow.com/a/50914014
    if (nameInputRef.current.validity.valid && nameInputRef.current.value !== "") {
      setBlocked(false);
    } else {
      setBlocked(true);
    }
  }
  
  return (
    <>
      <label htmlFor="name" className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">What is your first name?</h1>
      </label>
      <div className="my-10 flex justify-center">
        <input ref={nameInputRef}
               onKeyDown={(e) => {
                checkIfTheNextPageShouldBeBlocked();
                if (e.key === "Enter" && !blocked) {
                  dispatch(setPage(Page.Enquiry));
                }
               }}
               className="bg-(--placeholder-light) p-2 rounded-lg focus:outline-2 focus:outline-(--placeholder-extra-light) w-full max-w-100"
               type="text"
               name="name"
         />
      </div>
      <div className="flex justify-center">
        <Button onClick={() => dispatch(setPage(Page.Email))}>Back</Button>
        {blocked ? <Button variant="disabled">Next</Button> : <Button onClick={() => dispatch(setPage(Page.Enquiry))}>Next</Button>}
      </div>
    </>
  );
}
