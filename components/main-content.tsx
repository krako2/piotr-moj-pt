"use client"

import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

import { ReactNode } from "react"

export default function MainContent({ children }: {children: ReactNode }) {
  const showing = useSelector((state: RootState) => state.form.showing);

  return <main className={`${showing ? "fixed left-0 right-0" : ""}`}>{children}</main>;
}
