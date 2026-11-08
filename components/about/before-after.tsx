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
  const sizeDivider: number = 4;

  const [ready, setReady] = useState<number>(0);

  return (
    <BeforeAfterLoadContext value={{ ready, setReady }}>
      <section className={`p-5 w-full opacity-0 ${ready === 2 ? "opacity-100 progress-photos-fade-in" : ""}`}>
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
        <section className="p-5">
          <h2 className="text-2xl font-semibold text-green-400">My qualifications</h2>
          <ul className="marker:text-green-400 list-disc list-inside mt-3">
            <li className="mt-3">BSc(Hons) Applied Sport and Exercise Science</li>
            <li className="mt-3">HND Fitness, Health and Exercise</li>
            <li className="mt-3">Level 3 GP Referral</li>
          </ul>
        </section>
      </section>
    </BeforeAfterLoadContext>
  );
}
