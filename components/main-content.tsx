"use client"

import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

import { ReactNode } from "react"

export default function MainContent({ children }: {children: ReactNode }) {
  const isFormShowing: boolean = useSelector((state: RootState) => state.form.showing);

  return <main className={`${isFormShowing ? "h-dvh overflow-hidden" : ""}`}>{children}</main>;
}
