import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page } from "@/state/form/form-slice";

export default function NamePage() {
  const page: Page = useSelector((state: RootState) => state.form.page);
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="name" className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">What is your first name?</h1>
      </label>
      <div className="my-10 flex justify-center">
        <input className="bg-(--placeholder-light) p-2 rounded-lg focus:outline-2 focus:outline-(--placeholder-extra-light) w-full max-w-100" type="text" name="name" />
      </div>
    </>
  );
}
