import { RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import { Page, setPage } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

export default function ConfirmationPage() {
  const formMessage: string = useSelector((state: RootState) => state.form.message);
  const formOk: boolean = useSelector((state: RootState) => state.form.ok);

  const dispatch = useDispatch();

  return (
    <div className="form-fade-in">
      <p>{formMessage}</p>
      { formOk ? <div className="mt-5 flex justify-center">
        <Button onClick={() => dispatch(setPage(Page.Summary))}>Back</Button>
      </div> : null }
    </div>
  );
}
