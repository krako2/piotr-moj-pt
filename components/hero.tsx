import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col p-5 sm:flex-row justify-center items-center">
      <section className="p-5 w-full">
        <h1 className="leading-20 text-center sm:text-left text-5xl text-green-400 font-semibold">Stop guessing in the gym</h1>
        <p className="mt-5 text-lg text-center sm:text-left">Work one-on-one with Piotrek Moj</p>
        <div className="flex justify-center sm:justify-start mt-10 text-center sm:text-left">
          <Button size="lg">Book your free consultation</Button>
        </div>
      </section>
      <section className="p-5 bg-(--placeholder) w-full h-120">

      </section>
    </div>
  );
}
