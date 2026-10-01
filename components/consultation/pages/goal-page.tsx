import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage, FormData, setData } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import { useEffect, useRef, useState } from "react";

export default function GoalPage() {
  const data: FormData = useSelector((state: RootState) => state.form.data);
  const dispatch = useDispatch();

  const [blocked, setBlocked] = useState<boolean>(true);
  const goalInputRef = useRef<HTMLInputElement>(null);

  function checkIfTheNextPageShouldBeBlocked() {
    if (!goalInputRef.current) return;
    if (goalInputRef.current.value !== "") {
      setBlocked(false);
    } else {
      setBlocked(true);
    }
  }

  function submitPage() {
    if (!goalInputRef.current) return;
    dispatch(setData({...data, goal: goalInputRef.current.value}));
    dispatch(setPage(Page.BiggestStruggle));
  }

  useEffect(() => {
    if (!goalInputRef.current) return;
    goalInputRef.current.value = data.goal;
    checkIfTheNextPageShouldBeBlocked();
  }, []);

  return (
    <div className="form-fade-in">
      <label htmlFor="goal" className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">What is your main goal within training, health and nutrition?</h1>
      </label>
      <div className="my-10 flex justify-center">
        <input autoFocus
               ref={goalInputRef}
               onKeyDown={(e) => {
                if (e.key === "Enter" && !blocked) {
                  submitPage();
                }
               }}
               onChange={checkIfTheNextPageShouldBeBlocked}
               className="bg-(--placeholder-light) p-2 rounded-lg focus:outline-2 focus:outline-(--placeholder-extra-light) w-full max-w-140"
               type="text"
               name="goal"
         />
      </div>
      <div className="flex justify-center">
        <Button onClick={() => dispatch(setPage(Page.Experience))}>Back</Button>
        {blocked ? <Button variant="disabled">Next</Button> : <Button onClick={submitPage}>Next</Button>}
      </div>
    </div>
  );
}
