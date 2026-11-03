import Image from "next/image";
import ProgressCard from "@/components/about/progress-card";
import BeforeAfter from "@/components/about/before-after";

export default function About() {
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center p-5 ">
      <BeforeAfter />
      <section className="mt-5 sm:mt-0 sm:p-5 w-full">
        <h2 className="text-2xl font-semibold text-green-400">About me</h2>
        <p className="mt-3">Hey, I'm Piotrek, an exercise professional with a BSc (Hons) in Applied Sport & Exercise Science. I help people build muscle, lose fat and become confident in the gym through personalised, evidence-based coaching. Just effective training, accountability and a plan built around your life without extreme diets or complicated routines.</p>
      </section>
    </section>
  );
}
