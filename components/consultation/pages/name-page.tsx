import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage, FormData, setData } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import { useEffect, useRef, useState } from "react";

export default function NamePage() {
  const data: FormData = useSelector((state: RootState) => state.form.data);

  const dispatch = useDispatch();

  const [blocked, setBlocked] = useState<boolean>(true);
  const nameInputRef = useRef<HTMLInputElement>(null);

  function checkIfTheNextPageShouldBeBlocked() {
    if (!nameInputRef.current) return;

    if (nameInputRef.current.value !== "") {
      setBlocked(false);
    } else {
      setBlocked(true);
    }
  }

  function submitPage() {
    if (!nameInputRef.current) return;
    dispatch(setData({...data, name: nameInputRef.current.value}));
    dispatch(setPage(Page.PreferredContactSelection));
  }

  useEffect(() => {
    if (!nameInputRef.current) return;
    nameInputRef.current.value = data.name;
  }, []);
  
  return (
    <>
      <label htmlFor="name" className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">What is your first name?</h1>
      </label>
      <div className="my-10 flex justify-center">
        <input ref={nameInputRef}
               onKeyDown={(e) => {
                if (e.key === "Enter" && !blocked) {
                  submitPage();
                }
               }}
               onChange={checkIfTheNextPageShouldBeBlocked}
               className="bg-(--placeholder-light) p-2 rounded-lg focus:outline-2 focus:outline-(--placeholder-extra-light) w-full max-w-100"
               type="text"
               name="name"
         />
      </div>
      <div className="flex justify-center">
        {blocked ? <Button variant="disabled">Next</Button> : <Button onClick={submitPage}>Next</Button>}
      </div>
    </>
  );
}
