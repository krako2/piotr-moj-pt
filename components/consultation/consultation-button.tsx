"use client"

import { Button } from "@/components/ui/button";

import { useDispatch } from "react-redux";
import { show } from "@/state/form/form-slice";

export default function ConsultationButton() {
  const dispatch = useDispatch();

  return <Button size="lg" onClick={() => dispatch(show())}>Book your free consultation</Button>;
}
