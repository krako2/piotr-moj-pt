"use client"

import Image from "next/image";
import { useState } from "react";

export default function HeroPhoto() {
  const heroPhotoWidth: number = 2160;
  const heroPhotoHeight: number = 2880;

  const [ready, setReady] = useState<boolean>(false);

  return (
    <section className={`relative p-5 bg-(--placeholder) w-full opacity-0 ${ready ? "opacity-100 hero-photo-fade-in" : ""}`}>
      <Image
        onLoad={() => setReady(true)}
        src="/hero-photo.jpg"
        alt="Piotrek smiling in his car wearing a black hoodie"
        width={heroPhotoWidth}
        height={heroPhotoHeight}
        loading="eager"
      />
    </section>
  );
}
