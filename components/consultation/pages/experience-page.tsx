import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage, FormData, setData } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import { useEffect, useRef } from "react";

export default function ExperiencePage() {
  const data: FormData = useSelector((state: RootState) => state.form.data);
  const dispatch = useDispatch();

  const selectRef = useRef<HTMLSelectElement>(null);

  function submitPage() {
    if (!selectRef.current) return;
    dispatch(setData({...data, experience: selectRef.current.value}));
    dispatch(setPage(Page.Goal));
  }

  useEffect(() => {
    if (!selectRef.current) return;
    selectRef.current.value = data.experience;
  }, []);

  return (
    <>
      <label htmlFor="experience" className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">Where are you currently with your training?</h1>
      </label>
      <div className="my-10 flex justify-center">
        <select autoFocus
                ref={selectRef}
                className="bg-(--placeholder-light) p-3 rounded-2xl w-full max-w-120 focus:outline-2 focus:outline-(--placeholder-extra-light) appearance-none"
                onChange={() => {
                  if (!selectRef.current) return;

                  dispatch(setData({...data, experience: selectRef.current.value}))
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    selectRef.current?.showPicker();
                  }
                }}
                name="experience"
                id="experience"
        >
          <option value="Beginner (new to training)">Beginner (new to training)</option>
          <option value="Some experience (0-1 years)">Some experience (0-1 years)</option>
          <option value="Experienced (1+ years and ready to take it to the next level)">Experienced (1+ years and ready to take it to the next level)</option>
        </select>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => dispatch(setPage(Page.PreferredContact))}>Back</Button>
        <Button onClick={submitPage}>Next</Button>
      </div>
    </>
  );
}
