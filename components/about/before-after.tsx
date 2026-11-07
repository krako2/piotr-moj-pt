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
        <div className="p-5 bg-(--placeholder)">
          <div className="flex flex-col lg:flex-row ">
            <ProgressCard
              src="/before.jpg"
              alt="Old photo of Piotrek showing his gym progress"
              width={beforePhotoWidth / sizeDivider}
              height={beforePhotoHeight / sizeDivider}
            />
            <ProgressCard
              src="/after.jpg"
              alt="Recent photo of Piotrek showing his gym progress"
              width={afterPhotoWidth / sizeDivider}
              height={afterPhotoHeight / sizeDivider}
            />
          </div>
          <p className="mt-5 text-center">Me, 2020 -&gt; 2026</p>
        </div>
      </div>
    </BeforeAfterLoadContext>
  );
}
