import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage, FormData, setData } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import { useEffect, useRef, useState } from "react";

export default function BiggestStrugglePage() {
  const data: FormData = useSelector((state: RootState) => state.form.data);
  const dispatch = useDispatch();

  const [blocked, setBlocked] = useState<boolean>(true);
  const biggestStruggleInputRef = useRef<HTMLInputElement>(null);

  function checkIfTheNextPageShouldBeBlocked() {
    if (!biggestStruggleInputRef.current) return;
    if (biggestStruggleInputRef.current.value !== "") {
      setBlocked(false);
    } else {
      setBlocked(true);
    }
  }

  function submitPage() {
    if (!biggestStruggleInputRef.current) return;
    dispatch(setData({...data, biggestStruggle: biggestStruggleInputRef.current.value}));
    dispatch(setPage(Page.WillingToInvest));
  }

  useEffect(() => {
    if (!biggestStruggleInputRef.current) return;
    biggestStruggleInputRef.current.value = data.biggestStruggle;
    checkIfTheNextPageShouldBeBlocked();
  }, []);

  return (
    <>
      <label htmlFor="biggest-struggle" className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">What is your biggest struggle that stands between you and your goals?</h1>
      </label>
      <div className="my-10 flex justify-center">
        <input autoFocus
               ref={biggestStruggleInputRef}
               onKeyDown={(e) => {
                if (e.key === "Enter" && !blocked) {
                  submitPage();
                }
               }}
               onChange={checkIfTheNextPageShouldBeBlocked}
               className="bg-(--placeholder-light) p-2 rounded-lg focus:outline-2 focus:outline-(--placeholder-extra-light) w-full max-w-140"
               type="text"
               name="biggest-struggle"
         />
      </div>
      <div className="flex justify-center">
        <Button onClick={() => dispatch(setPage(Page.Goal))}>Back</Button>
        {blocked ? <Button variant="disabled">Next</Button> : <Button onClick={submitPage}>Next</Button>}
      </div>
    </>
  );
}
