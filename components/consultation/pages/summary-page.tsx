import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page } from "@/state/form/form-slice";

export default function SummaryPage() {
  const page: Page = useSelector((state: RootState) => state.form.page);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">Here's a summary of what you said</h1>
      </div>
    </>
  );
}
