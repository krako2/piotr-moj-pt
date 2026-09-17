import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage, FormData, setData } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

export default function SummaryPage() {
  const data: FormData = useSelector((state: RootState) => state.form.data);

  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">Here's a summary of what you said</h1>
      </div>
      <div className="mt-5 max-h-110 overflow-y-scroll break-all">
        <h2 className="my-2 text-2xl text-green-400 font-semibold">Name</h2>
        <p>{data.name}</p>
        <h2 className="my-2 text-2xl text-green-400 font-semibold">Preferred contact</h2>
        <p>{data.preferredContact}</p>
        <h2 className="my-2 text-2xl text-green-400 font-semibold">Experience level</h2>
        <p>{data.experience}</p>
        <h2 className="my-2 text-2xl text-green-400 font-semibold">Main goal</h2>
        <p>{data.goal}</p>
        <h2 className="my-2 text-2xl text-green-400 font-semibold">Biggest struggle</h2>
        <p>{data.biggestStruggle}</p>
        <h2 className="my-2 text-2xl text-green-400 font-semibold">Willing to invest?</h2>
        <p>{data.willingToInvest}</p>
      </div>
      <div className="mt-5 flex justify-center">
        <Button onClick={() => dispatch(setPage(Page.WillingToInvest))}>Back</Button>
        <Button variant="special">Submit</Button>
      </div>
    </>
  );
}
