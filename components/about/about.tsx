import Image from "next/image";
import ProgressCard from "@/components/about/progress-card";

export default function About() {
  const beforePhotoWidth: number = 1024;
  const beforePhotoHeight: number = 1024;
  const afterPhotoWidth: number = 1024;
  const afterPhotoHeight: number = 1024;  
  const sizeDivider: number = 5;
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center p-5 ">
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
      <section className="mt-5 sm:mt-0 sm:p-5 w-full">
        <h2 className="text-2xl font-semibold text-green-400">About me</h2>
        <p className="mt-3">Hey, I'm Piotrek, an exercise professional with a BSc (Hons) in Applied Sport & Exercise Science. I help people build muscle, lose fat and become confident in the gym through personalised, evidence-based coaching. Just effective training, accountability and a plan built around your life without extreme diets or complicated routines.</p>
      </section>
    </section>
  );
}
