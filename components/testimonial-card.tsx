import { ReactNode } from "react";
import { CarouselItem } from "@/components/ui/carousel";

export default function TestimonialCard({ children, title }: { children: ReactNode, title: string }) {
  return (
    <CarouselItem className="sm:basis-1/2">
      <section className="p-5 bg-(--placeholder)">
        <h2 className="text-green-400 font-semibold text-2xl">{title}</h2>
        <p className="mt-3 italic">"{children}"</p>
      </section>
    </CarouselItem>
  );
}
