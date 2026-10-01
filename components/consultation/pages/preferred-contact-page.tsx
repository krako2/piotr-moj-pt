import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage, FormData, setData } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import { useEffect, useRef, useState } from "react";

export default function PreferredContactPage() {
  const data: FormData = useSelector((state: RootState) => state.form.data);

  const dispatch = useDispatch();

  const [blocked, setBlocked] = useState<boolean>(true);
  const preferredContactTextInputRef = useRef<HTMLInputElement>(null);

  function checkIfTheNextPageShouldBeBlocked() {
    if (!preferredContactTextInputRef.current) return;

    let blockedCondition: boolean = false;

    switch (data.preferredContactMethod) {
    case "Email":
      // I took this regex pattern from StackOverflow: https://stackoverflow.com/a/50914014
      blockedCondition = preferredContactTextInputRef.current.value.match("^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$") !== null;
      break;
    case "Instagram":
      blockedCondition = preferredContactTextInputRef.current.value !== "";
      break;
    case "WhatsApp":
      blockedCondition = preferredContactTextInputRef.current.value.match("^[0-9]*$") !== null && preferredContactTextInputRef.current.value !== "";
      break;
    default:
      blockedCondition = preferredContactTextInputRef.current.value !== "";
    }

    if (blockedCondition) {
      setBlocked(false);
    } else {
      setBlocked(true);
    }
  }

  function submitPage() {
    if (!preferredContactTextInputRef.current) return;
    dispatch(setData({...data, preferredContact: preferredContactTextInputRef.current.value}));
    dispatch(setPage(Page.Experience));
  }

  useEffect(() => {
    if (!preferredContactTextInputRef.current) return;
    preferredContactTextInputRef.current.value = data.preferredContact;
    checkIfTheNextPageShouldBeBlocked();
  }, []);

  return (
    <div className="form-fade-in">
      <label htmlFor="preferred-contact" className="flex justify-center items-center text-center">
        {(() => {
          switch (data.preferredContactMethod) {
          case "Email":
            return <h1 className="text-4xl text-green-400 font-semibold">What is your email address?</h1>;
          case "Instagram":
            return <h1 className="text-4xl text-green-400 font-semibold">What is your Instagram handle?</h1>;
          case "WhatsApp":
            return <h1 className="text-4xl text-green-400 font-semibold">What is your phone number (for WhatsApp)?</h1>;
          default:
            return <></>;
          }
        })()}
      </label>
      <div className="my-10 flex justify-center">
        <input autoFocus
               ref={preferredContactTextInputRef}
               onKeyDown={(e) => {
                if (e.key === "Enter" && !blocked) {
                  submitPage();
                }
               }}
               onChange={checkIfTheNextPageShouldBeBlocked}
               className="bg-(--placeholder-light) p-2 rounded-lg focus:outline-2 focus:outline-(--placeholder-extra-light) w-full max-w-100"
               type="text"
               name="preferred-contact"
         />
      </div>
      <div className="flex justify-center">
        <Button onClick={() => dispatch(setPage(Page.PreferredContactSelection))}>Back</Button>
        {blocked ? <Button variant="disabled">Next</Button> : <Button onClick={submitPage}>Next</Button>}
      </div>
    </div>
  );
}
