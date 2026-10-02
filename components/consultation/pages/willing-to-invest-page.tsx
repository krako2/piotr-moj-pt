import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage, FormData, setData } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import { useEffect, useRef } from "react";

export default function WillingToInvestPage() {
  const data: FormData = useSelector((state: RootState) => state.form.data);

  const dispatch = useDispatch();

  const selectRef = useRef<HTMLSelectElement>(null);

  function submitPage() {
    dispatch(setPage(Page.Summary));
  }

  useEffect(() => {
    if (!selectRef.current) return;
    selectRef.current.value = data.willingToInvest;
  }, []);

  return (
    <div className="form-fade-in">
      <label htmlFor="willing-to-invest" className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">Are you willing to invest in yourself to achieve your goals?</h1>
      </label>
      <div className="my-10 flex justify-center">
        <select autoFocus
                ref={selectRef}
                className="mx-2 bg-(--placeholder-light) p-3 rounded-2xl w-full max-w-120 focus:outline-2 focus:outline-(--placeholder-extra-light) appearance-none"
                onChange={() => {
                  if (!selectRef.current) return;

                  dispatch(setData({...data, willingToInvest: selectRef.current.value}))
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    selectRef.current?.showPicker();
                  }
                }}
                name="willing-to-invest"
                id="willing-to-invest"
        >
          <option value="I'm interested but need more information">I'm interested but need more information</option>
          <option value="Yes, I'm ready to commit">Yes, I'm ready to commit</option>
        </select>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => dispatch(setPage(Page.BiggestStruggle))}>Back</Button>
        <Button onClick={submitPage}>Next</Button>
      </div>
    </div>
  );
}
