import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import { useRef, useState, useEffect } from "react";

export default function EmailPage() {
  const page: Page = useSelector((state: RootState) => state.form.page);
  const dispatch = useDispatch();

  const [blocked, setBlocked] = useState<boolean>(true);
  const emailInputRef = useRef<HTMLInputElement>(null);

  function checkIfTheNextPageShouldBeBlocked() {
    if (!emailInputRef.current) return;
    // I took this regex pattern from StackOverflow: https://stackoverflow.com/a/50914014
    if (emailInputRef.current.value.match("^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$") !== null) {
      setBlocked(false);
    } else {
      setBlocked(true);
    }
  }

  return (
    <>
      <label htmlFor="email" className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">What is your email address?</h1>
      </label>
      <div className="my-10 flex justify-center">
        <input ref={emailInputRef}
               onKeyDown={(e) => {
                checkIfTheNextPageShouldBeBlocked();
                if (e.key === "Enter" && !blocked) {
                  dispatch(setPage(Page.Name));
                }
               }}
               className="bg-(--placeholder-light) p-2 rounded-lg focus:outline-2 focus:outline-(--placeholder-extra-light) w-full max-w-100"
               type="email"
               name="email"
         />
      </div>
      <div className="flex justify-center">
        {blocked ? <Button variant="disabled">Next</Button> : <Button onClick={() => dispatch(setPage(Page.Name))}>Next</Button>}
      </div>
    </>
  );
}
