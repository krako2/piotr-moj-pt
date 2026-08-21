import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
      <section className="px-5">
        <h1 className="mt-20 leading-20 text-center text-6xl text-green-400 font-semibold">Stop guessing in the gym</h1>
        <p className="mt-5 text-lg text-center">Work one-on-one with Piotrek Moj</p>
        <div className="mt-5 text-center">
          <Button size="lg">Book your free consultation</Button>
        </div>
      </section>
    );
}
