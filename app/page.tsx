import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="px-5">
        <h1 className="mt-20 leading-20 text-center text-6xl text-green-400 font-semibold">Stop guessing in the gym</h1>
        <p className="mt-5 text-lg text-center">Work one-on-one with Piotr Moj</p>
        <div className="mt-5 text-center">
          <Button className="cursor-pointer">Book your free consultation</Button>
        </div>
      </div>
      <div className="px-5">
        <h2 className="mt-5 text-2xl font-semibold text-green-400">About</h2>
        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eos odio, placeat minus architecto dignissimos ullam excepturi deleniti fugiat illum aspernatur odit, laboriosam vel saepe laborum. Possimus impedit culpa magni.</p>
      </div>
      <div className="px-5">
        <h2 className="mt-5 text-2xl font-semibold text-green-400">Testimonials</h2>
        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eos odio, placeat minus architecto dignissimos ullam excepturi deleniti fugiat illum aspernatur odit, laboriosam vel saepe laborum. Possimus impedit culpa magni.</p>
      </div>
      <div className="px-5">
        <h2 className="mt-5 text-2xl font-semibold text-green-400">Get in contact</h2>
        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eos odio, placeat minus architecto dignissimos ullam excepturi deleniti fugiat illum aspernatur odit, laboriosam vel saepe laborum. Possimus impedit culpa magni.</p>
      </div>
    </>
  );
}
