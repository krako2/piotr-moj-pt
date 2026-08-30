"use client"

import Form from "next/form";
import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { hide } from "@/state/form/form-slice";
import { Button } from "@/components/ui/button";

export default function ConsultationForm() {
  const showing = useSelector((state: RootState) => state.form.showing);
  const dispatch = useDispatch();

  if (!showing) return null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-(--placeholder) opacity-80" />
      <div className="flex justify-center fixed top-0 left-0 w-full h-screen">
        <div className="flex justify-center items-center max-w-180 p-5">
          <div className="relative bg-(--placeholder) p-5 w-full">
            <Button className="absolute right-5" onClick={() => dispatch(hide())}>Close</Button>
            <Form className="mt-10" action="">
              <label htmlFor="email"><h1 className="text-2xl text-green-400 font-semibold">What is your email address?</h1></label>
              <input type="email" name="email" />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
