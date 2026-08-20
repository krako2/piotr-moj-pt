import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1 className="mt-20 leading-20 text-center text-6xl text-green-400 font-semibold">Stop guessing in the gym</h1>
      <p className="mt-5 text-lg text-center">Work one-on-one with Piotr Moj</p>
      <div className="mt-5 text-center">
        <Button>Book your free consultation</Button>
      </div>
    </>
  );
}
