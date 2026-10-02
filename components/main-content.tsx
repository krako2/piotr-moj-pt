"use client"

import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

import { ReactNode, useEffect, useRef } from "react"

let lastScrollPosition: number = 0;

export default function MainContent({ children }: {children: ReactNode }) {
  const showing = useSelector((state: RootState) => state.form.showing);
  const mainRef = useRef<HTMLElement>(null);
  
  if (mainRef.current && showing) {
    mainRef.current.style.top = `-${window.scrollY}px`;
    lastScrollPosition = window.scrollY;
  }

  useEffect(() => {
    if (mainRef.current && !showing) {
      window.scrollTo(0, lastScrollPosition);
    }
  }, [showing]);

  return <main ref={mainRef} className={`${showing ? "fixed left-0 right-0" : ""}`}>{children}</main>;
}
