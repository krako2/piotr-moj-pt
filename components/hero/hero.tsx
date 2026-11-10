import Image from "next/image";
import ConsultationButton from "../consultation/consultation-button";
import HeroPhoto from "@/components/hero/hero-photo";

export default function Hero() {
  const socialsWidth: number = 256;
  const socialsHeight: number = 256;
  const socialsSizeDivider: number = 8;
  
  return (
    <div className="flex flex-col p-5 sm:flex-row justify-center items-center">
      <section className="p-5 w-full hero-text-fade-in">
        <h1 className="leading-15 text-center sm:text-left text-5xl text-green-400 font-semibold">Stop guessing in the gym</h1>
        <p className="mt-5 text-lg text-center sm:text-left">Online 1:1 coaching with Piotrek</p>
        <div className="flex justify-center sm:justify-start mt-5 text-center sm:text-left">
          <ConsultationButton />
        </div>
        <div className="mt-5">
          <a className="mx-5 filter-instagram" href="https://www.instagram.com/piotrekmojpt/">
            <Image className="inline hover:scale-125" src="/instagram.svg" alt="Facebook logo" width={socialsWidth / socialsSizeDivider} height={socialsHeight / socialsSizeDivider} />
          </a>
          <a className="mx-5 filter-youtube" href="https://www.youtube.com/@PiotrekMojPT">
            <Image className="inline hover:scale-125" src="/youtube.svg" alt="Facebook logo" width={socialsWidth / socialsSizeDivider} height={socialsHeight / socialsSizeDivider} />
          </a>
          <a className="mx-5 filter-tiktok" href="https://www.tiktok.com/@piotrekmojpt">
            <Image className="inline hover:scale-125" src="/tiktok.svg" alt="Facebook logo" width={socialsWidth / socialsSizeDivider} height={socialsHeight / socialsSizeDivider} />
          </a>
          <a className="mx-5 filter-facebook" href="https://www.facebook.com/piotrekmojpt">
            <Image className="inline hover:scale-125" src="/facebook.svg" alt="Facebook logo" width={socialsWidth / socialsSizeDivider} height={socialsHeight / socialsSizeDivider} />
          </a>
        </div>
      </section>
      <HeroPhoto />
    </div>
  );
}
