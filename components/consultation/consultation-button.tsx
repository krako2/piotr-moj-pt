"use client"

import { Button } from "@/components/ui/button";

import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { show } from "@/state/form/form-slice";

export default function ConsultationButton() {
  const showing = useSelector((state: RootState) => state.form.showing);
  const dispatch = useDispatch();

  return <Button size="lg" onClick={() => dispatch(show())}>Book your free consultation</Button>;
}
