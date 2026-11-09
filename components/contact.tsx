import ConsultationButton from "@/components/consultation/consultation-button";

export default function Contact() {
  return (
    <section className="p-5">
      <h2 className="text-2xl font-semibold text-green-400">Get in contact</h2>
      <p className="mt-3"> If you'd prefer, you can get in contact through email directly: <a href="mailto:emails@piotrmoj.com" className="text-green-400 font-semibold">emails@piotrmoj.com</a></p>
      <div className="flex justify-center items-center mt-5">
        <ConsultationButton />
      </div>
    </section>
  );
}
