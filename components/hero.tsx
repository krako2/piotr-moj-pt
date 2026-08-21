import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
      <div className="flex flex-wrap">
        <section className="px-5 sm:w-120 h-120">
          <h1 className="mt-20 leading-20 text-center sm:text-left text-6xl text-green-400 font-semibold">Stop guessing in the gym</h1>
          <p className="px-1 mt-5 text-lg text-center sm:text-left">Work one-on-one with Piotrek Moj</p>
          <div className="mt-5 text-center sm:text-left">
            <Button size="lg">Book your free consultation</Button>
          </div>
        </section>
        <section className="bg-gray-400 w-120 h-120">

        </section>
      </div>
    );
}
