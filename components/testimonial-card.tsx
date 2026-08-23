import { ReactNode } from "react";

export default function TestimonialCard({ children, title }: { children: ReactNode, title: string }) {
  return (
    <section className="p-5 bg-(--placeholder)">
      <h2 className="text-green-400 font-semibold text-2xl">{title}</h2>
      <p className="mt-3 italic">"{children}"</p>
    </section>
  );
}
