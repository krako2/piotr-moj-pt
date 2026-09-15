"use client"

import ProgressCard from "@/components/about/progress-card";

export default function BeforeAfter() {
  const beforePhotoWidth: number = 1024;
  const beforePhotoHeight: number = 1024;
  const afterPhotoWidth: number = 1024;
  const afterPhotoHeight: number = 1024;  
  const sizeDivider: number = 5;

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col lg:flex-row p-5 pb-0 bg-(--placeholder)">
        <ProgressCard
          src="/before.png"
          alt="Old photo of Piotrek two years into training"
          width={beforePhotoWidth / sizeDivider}
          height={beforePhotoHeight / sizeDivider}
          caption="24 Feb 2020, been strength training 2 years by now"
        />
        <ProgressCard
          src="/after.png"
          alt="Recent photo of Piotrek showing his gym progress"
          width={afterPhotoWidth / sizeDivider}
          height={afterPhotoHeight / sizeDivider}
          caption="22 Dec 2025"
        />
      </div>
    </div>
  );
}
