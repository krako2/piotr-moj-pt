import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="p-5">
      <h2 className="text-2xl font-semibold text-green-400">Get in contact</h2>
      <p className="mt-3"> If you'd prefer, you can get in contact through email directly: <a href="mailto:piotrmojpt@gmail.com" className="text-green-400 font-semibold">piotrmojpt@gmail.com</a></p>
      <div className="flex justify-center items-center">
        <Button size="lg" className="mt-10">Book your free consultation</Button>
      </div>
    </section>
  );
}
