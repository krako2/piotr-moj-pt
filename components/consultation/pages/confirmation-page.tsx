import { RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import { Page, setPage, FormStatus } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

export default function ConfirmationPage() {
  const formStatus: FormStatus = useSelector((state: RootState) => state.form.status);
  const dispatch = useDispatch();

  if (formStatus === FormStatus.Success) {
    return <p className="form-fade-in">Success! Expect a response soon.</p>;
  }

  return (
    <div className="form-fade-in">
      <p>Submission failed. Maybe one of your responses was too long.</p>
      <div className="mt-5 flex justify-center">
        <Button onClick={() => dispatch(setPage(Page.Summary))}>Back</Button>
      </div>
    </div>
  );
}
