import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage, FormData, setFormMessage, setData, setOk } from "@/state/form/form-slice";
import { show } from "@/state/privacy-policy/privacy-policy-slice";

import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";

// Edit
const TURNSTILE_SITE_KEY: string = "0x4AAAAAAF75p-C5HYfNwBoV";

export default function SummaryPage() {
  const data: FormData = useSelector((state: RootState) => state.form.data);
  const ok: boolean = useSelector((state: RootState) => state.form.ok);

  const [processing, setProcessing] = useState<boolean>(false);
  const [submitEnabled, setSubmitEnabled] = useState<boolean>(false);

  const dispatch = useDispatch();

  async function sendData() {
    setProcessing(true);

    const apiResponse = await fetch("/api", { method: "POST", body: JSON.stringify(data) });
    const apiMessage: string = await apiResponse.text();

    if (apiResponse.ok) { 
      dispatch(setOk());
    }

    dispatch(setFormMessage(apiMessage));
    dispatch(setPage(Page.Confirmation));
  }

  useEffect(() => {
    // @ts-ignore
    // ignoring because the 'turnstile' object comes from the Turnstile script from the remote url
    // so Typescript doesn't recognise it
    // https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit
    const widgetId = turnstile.render("#turnstile", {
      sitekey: `${TURNSTILE_SITE_KEY}`,
      callback: function(token: string) {
        dispatch(setData({...data, token: token}));
        setSubmitEnabled(true);
      },
      // Makes Next.js stop bitching
      "error-callback": function() {
        return true;
      },
    });
  }, []);

  return (
    <div className="form-fade-in">
      <div className="flex justify-center items-center text-center">
        <h1 className="text-4xl text-green-400 font-semibold">Here's a summary of what you said</h1>
      </div>
      <div className="mt-5 h-full max-h-70 overflow-y-scroll wrap-anywhere pr-5">
        <h2 className="my-2 text-2xl text-green-400 font-semibold">Name</h2>
        <p>{data.name}</p>
        <h2 className="my-2 text-2xl text-green-400 font-semibold">Preferred contact ({data.preferredContactMethod})</h2>
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
      <p className="mt-5">By submitting this form, you agree to the <button className="text-green-400 hover:font-semibold" onClick={() => dispatch(show())}>privacy policy</button>.</p>
      <div className="mt-5 flex justify-center">
        <Button onClick={() => dispatch(setPage(Page.WillingToInvest))}>Back</Button>
        {(() => {
          if (processing) return <Button variant="processing">Submit</Button>;
          else if (!submitEnabled) return <Button variant="disabled">Submit</Button>;
          else return <Button variant="special" onClick={sendData}>Submit</Button>;
        })()}
      </div>
      <div id="turnstile"
           className="mt-5 flex justify-center items-center"
           data-sitekey={TURNSTILE_SITE_KEY}
           data-theme="dark"
           data-size="normal"
      />
    </div>
  );
}
