import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

export default function PreferredContactSelectionPage() {
  const page: Page = useSelector((state: RootState) => state.form.page);
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="preferred-contact-selection" className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">What is your preferred method of contact?</h1>
      </label>
      <div className="my-10 flex justify-center">
        <select name="preferred-contact-selection"
                id="preferred-contact-selection"
                className="bg-(--placeholder-light) p-3 rounded-2xl w-full max-w-60 focus:outline-2 focus:outline-(--placeholder-extra-light) appearance-none"
        >
          <option>Email</option>
          <option>Instagram</option>
          <option>WhatsApp</option>
        </select>
      </div>
      <div className="flex justify-center">
        <Button onClick={() => dispatch(setPage(Page.Name))}>Back</Button>
        <Button onClick={() => dispatch(setPage(Page.PreferredContact))}>Next</Button>
      </div>
    </>
  );
}
