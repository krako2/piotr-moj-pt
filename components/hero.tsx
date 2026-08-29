import Image from "next/image";
import ConsultationButton from "./consultation/consultation-button";

export default function Hero() {
  const heroPhotoWidth: number = 2160;
  const heroPhotoHeight: number = 2880;
  return (
    <div className="flex flex-col p-5 sm:flex-row justify-center items-center">
      <section className="p-5 w-full">
        <h1 className="leading-15 text-center sm:text-left text-5xl text-green-400 font-semibold">Stop guessing in the gym</h1>
        <p className="mt-5 text-lg text-center sm:text-left">Work one-on-one with Piotrek Moj</p>
        <div className="flex justify-center sm:justify-start mt-5 text-center sm:text-left">
          <ConsultationButton />
        </div>
      </section>
      <section className="p-5 bg-(--placeholder) w-full">
        <Image
          src="/hero-photo.jpg"
          alt="Piotrek smiling in his car wearing a black hoodie"
          width={heroPhotoWidth}
          height={heroPhotoHeight}
          loading="eager"
        />
      </section>
    </div>
  );
}
