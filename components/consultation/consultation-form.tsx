"use client"

import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { hide } from "@/state/form/form-slice";
import { Button } from "@/components/ui/button";

export default function ConsultationForm() {
  const showing = useSelector((state: RootState) => state.form.showing);
  const dispatch = useDispatch();

  if (!showing) return null;

  return (
    <div className="flex justify-center fixed top-0 left-0 w-full h-screen">
      <div className="flex justify-center items-center max-w-240 p-5">
        <div className="relative bg-(--placeholder) p-5 w-full">
          <Button className="absolute right-5" onClick={() => dispatch(hide())}>Close</Button>
          <h1 className="mt-10 text-2xl text-green-400 font-semibold">What's your email address?</h1>
          <p className="mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui optio, repellat labore id laborum adipisci cum neque vel nam explicabo a earum amet, doloremque perferendis quidem. Inventore cupiditate aliquid quidem.</p>
        </div>
      </div>
    </div>
  );
}
