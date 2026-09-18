"use client"

import ProgressCard from "@/components/about/progress-card";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export type BeforeAfterReadyState = {
  ready: number,
  setReady: Dispatch<SetStateAction<number>>,
}

export const BeforeAfterLoadContext = createContext<BeforeAfterReadyState>({ ready: 0, setReady: () => {} });

export default function BeforeAfter() {
  const beforePhotoWidth: number = 1024;
  const beforePhotoHeight: number = 1024;
  const afterPhotoWidth: number = 1024;
  const afterPhotoHeight: number = 1024;  
  const sizeDivider: number = 5;

  const [ready, setReady] = useState<number>(0);

  return (
    <BeforeAfterLoadContext value={{ ready, setReady }}>
      <div className={`flex justify-center items-center w-full opacity-0 ${ready === 2 ? "opacity-100 progress-photos-fade-in" : ""}`}>
        <div className="flex flex-col lg:flex-row p-5 pb-0 bg-(--placeholder)">
          <ProgressCard
            src="/before.jpg"
            alt="Old photo of Piotrek showing his gym progress"
            width={beforePhotoWidth / sizeDivider}
            height={beforePhotoHeight / sizeDivider}
            caption="24 Feb 2020"
          />
          <ProgressCard
            src="/after.jpg"
            alt="Recent photo of Piotrek showing his gym progress"
            width={afterPhotoWidth / sizeDivider}
            height={afterPhotoHeight / sizeDivider}
            caption="8 Sep 2026"
          />
        </div>
      </div>
    </BeforeAfterLoadContext>
  );
}
