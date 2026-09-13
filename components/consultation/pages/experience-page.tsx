import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { Page, setPage } from "@/state/form/form-slice";

import { Button } from "@/components/ui/button";

import { useRef, useState } from "react";

export default function ExperiencePage() {
  const page: Page = useSelector((state: RootState) => state.form.page);
  const dispatch = useDispatch();

  const [blocked, setBlocked] = useState<boolean>(true);
  const nameInputRef = useRef<HTMLInputElement>(null);

  function checkIfTheNextPageShouldBeBlocked() {
    if (!nameInputRef.current) return;
    if (nameInputRef.current.validity.valid && nameInputRef.current.value !== "") {
      setBlocked(false);
    } else {
      setBlocked(true);
    }
  }

  return (
    <>
    </>
  );
}
