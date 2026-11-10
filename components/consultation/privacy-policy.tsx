"use client"

import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { hide } from "@/state/privacy-policy/privacy-policy-slice";

import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  const showing: boolean = useSelector((state: RootState) => state.privacyPolicy.showing);

  const dispatch = useDispatch();

  return showing ? (
    <div className="fixed top-0 flex justify-center items-center w-full h-full p-5 form-fade-in">
      <div className="flex flex-col justify-center items-center bg-(--placeholder) p-5 max-w-180 w-full max-h-180 h-full rounded-2xl">
        <div className="relative w-full h-10 overflow-y-clip">
          <Button className="absolute right-0"
            onClick={() => dispatch(hide())}>
              Close
          </Button>
        </div>
        <div className="flex justify-center items-center w-full h-full overflow-auto">
          <div className="p-5 form-fade-in overflow-y-scroll max-h-120">
            <h1 className="text-4xl text-green-400 font-semibold text-center">Privacy policy</h1>
            <p className="mt-3 italic text-center">Last updated: 10/11/2026</p>
            <h2 className="mt-3 text-2xl text-green-400 font-semibold">Who I am</h2>
            <p className="mt-3">I’m Piotrek Moj, an online personal trainer based in Aberdeen, UK. I’m responsible for any personal information you share through this website. You can contact me at emails@piotrmoj.com.</p>
            <h2 className="mt-3 text-2xl text-green-400 font-semibold">What I collect</h2>
            <p className="mt-3">When you fill in my enquiry form, I collect:</p>
            <ul className="indent-5 mt-3 marker:text-green-400 list-disc list-inside">
              <li>your first name</li>
              <li>your contact details: an email address, phone number or Instagram handle, whichever you choose</li>
              <li>your training goals and experience</li>
            </ul>
            <p className="mt-3">I don’t collect anything else through the form.</p>
            <h2 className="mt-3 text-2xl text-green-400 font-semibold">Why I collect it</h2>
            <p className="mt-3">I use your information only to:</p>
            <ul className="indent-5 mt-3 marker:text-green-400 list-disc list-inside">
              <li>reply to your enquiry</li>
              <li>work out whether my coaching fits your goals</li>
              <li>send you details about working with me</li>
            </ul>
            <p className="mt-3">I won’t add you to a mailing list or send you marketing unless you ask me to. I will never sell your information or share it for advertising.</p>
            <h2 className="mt-3 text-2xl text-green-400 font-semibold">Legal basis</h2>
            <p className="mt-3">I process your information because you’ve asked me to get in touch about coaching. That counts as taking steps at your request before entering into a contract under UK GDPR.</p>
            <h2 className="mt-3 text-2xl text-green-400 font-semibold">Who can see it</h2>
            <p className="mt-3">Only me. Your information is stored securely in my email inbox. If you become a client, your details are moved to my coaching app, Trainerize, which keeps its own privacy and security standards.</p>
            <h2 className="mt-3 text-2xl text-green-400 font-semibold">How long I keep it</h2>
            <p className="mt-3">If you don’t become a client, I delete your information within 6 months of your inquiry. If you become a client, I keep it for as long as we work together and for a reasonable period afterwards.</p>
            <h2 className="mt-3 text-2xl text-green-400 font-semibold">Your rights</h2>
            <p className="mt-3">You can ask me at any time to:</p>
            <ul className="indent-5 mt-3 marker:text-green-400 list-disc list-inside">
              <li>show you the information I hold about you</li>
              <li>correct it</li>
              <li>delete it</li>
            </ul>
            <p className="mt-3">Just email emails@piotrmoj.com and I’ll sort it out within one month.</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
