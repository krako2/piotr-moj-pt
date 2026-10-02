import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage, FormData, setData } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import { useEffect, useRef } from "react";

export default function PreferredContactSelectionPage() {
  const data: FormData = useSelector((state: RootState) => state.form.data);

  const dispatch = useDispatch();

  const selectRef = useRef<HTMLSelectElement>(null);

  function submitPage() {
    dispatch(setPage(Page.PreferredContact));
  }

  useEffect(() => {
    if (!selectRef.current) return;
    selectRef.current.value = data.preferredContactMethod;
  }, []);

  return (
    <div className="form-fade-in">
      <label htmlFor="preferred-contact-selection" className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">What is your preferred method of contact?</h1>
      </label>
      <div className="my-10 flex justify-center">
        <select autoFocus
                ref={selectRef}
                className="mx-2 bg-(--placeholder-light) p-3 rounded-2xl w-full max-w-60 focus:outline-2 focus:outline-(--placeholder-extra-light) appearance-none"
                onChange={() => {
                  if (!selectRef.current) return;

                  dispatch(setData({...data, preferredContactMethod: selectRef.current.value, preferredContact: ""}))
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    selectRef.current?.showPicker();
                  }
                }}
                name="preferred-contact-selection"
                id="preferred-contact-selection"
        >
          <option value="Email">Email</option>
          <option value="Instagram">Instagram</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => dispatch(setPage(Page.Name))}>Back</Button>
        <Button onClick={submitPage}>Next</Button>
      </div>
    </div>
  );
}
