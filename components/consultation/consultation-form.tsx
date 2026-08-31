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
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-screen p-5">
      <div className="flex justify-center items-center relative bg-(--placeholder) p-5 max-w-180 w-full h-full rounded-2xl">
        <Button className="absolute top-5 right-5" onClick={() => dispatch(hide())}>Close</Button>
        <Form action="/api" formMethod="POST">
          <label htmlFor="email" className="flex justify-center items-center text-center">
            <h1 className="text-4xl text-green-400 font-semibold">What is your email address?</h1>
          </label>
          <div className="my-5 flex justify-center">
            <input className="bg-(--placeholder-light) p-2 rounded-lg" size={30} type="email" name="email" />
          </div>
          <label htmlFor="name" className="flex justify-center items-center text-center">
            <h1 className="text-4xl text-green-400 font-semibold">What is your first name?</h1>
          </label>
          <div className="my-5 flex justify-center">
            <input className="bg-(--placeholder-light) p-2 rounded-lg" size={30} type="text" name="name" />
          </div>
        </Form>
      </div>
    </div>
  );
}
