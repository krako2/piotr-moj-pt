"use client"

import { useDispatch } from "react-redux";
import { show } from "@/state/privacy-policy/privacy-policy-slice";

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <footer className="m-5 flex flex-col justify-center items-center h-30 bg-(--placeholder)">
      <p>&copy; { new Date().getFullYear() } Piotrek Moj. All rights reserved.</p>
      <button className="text-green-400 hover:font-semibold"
        onClick={() => dispatch(show())}>
        Privacy Policy
      </button>
    </footer>
  );
}
