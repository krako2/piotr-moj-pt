"use client"

import Image from "next/image";

import { useState } from "react";

export default function WhatYouGet() {
  const imageWidth: number = 2482;
  const imageHeight: number = 3509;
  const imageSizeDivider: number = 8;

  const [ready, setReady] = useState<boolean>(false);

  return (
    <section className={`p-5 flex flex-col sm:flex-row justify-center items-center`}>
      <section className={`flex justify-center items-center w-full opacity-0 ${ready ? "opacity-100 handbook-fade-in" : ""}`}>
        <div className="p-5 bg-(--placeholder)">
          <Image
            onLoad={() => setReady(true)}
            src="/handbook-page-1.png"
            alt="Front page of The 3 Foundations"
            width={imageWidth / imageSizeDivider}
            height={imageHeight / imageSizeDivider}
          />
        </div>
      </section>
      <section className=" p-5 w-full order-first sm:order-last">
        <h2 className="text-2xl font-semibold text-green-400">What you get + how it works</h2>
        <ul className="marker:text-green-400 list-disc list-inside mt-3">
          <li className="mt-3">Personalised training program in the Trainerize app</li>
          <li className="mt-3">Video demos for every exercise</li>
          <li className="mt-3">Weekly check-ins and feedback</li>
          <li className="mt-3">Nutritional guidance</li>
          <li className="mt-3">Personalised feedback videos</li>
          <li className="mt-3">Unlimited messaging in the app</li>
        </ul>
        <p className="mt-3">Not ready yet? Grab <a className="text-green-400 font-semibold focus:outline-2" href="https://drive.google.com/file/d/1AjESOjGaikgHVt6R8EM1O07VFQPQbTqW/view">The 3 Foundations</a> for free</p>
      </section>
    </section>
  );
}
