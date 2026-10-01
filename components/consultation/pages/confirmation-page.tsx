import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage, FormData, setFormStatus, FormStatus } from "@/state/form/form-slice";

export default function ConfirmationPage() {
  const formStatus: FormStatus = useSelector((state: RootState) => state.form.status);

  if (formStatus === FormStatus.Success) {
    return <p>Success! Expect a response soon.</p>;
  }

  return <p>Something went wrong. Maybe one of your responses was too long.</p>;
}
