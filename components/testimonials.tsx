import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TestimonialCard from "@/components/testimonial-card";

export default function Testimonials() {
  return (
    <section className="p-5">
      <h2 className="text-2xl font-semibold text-green-400">Testimonials</h2>
      <Carousel className="mt-5">
        <CarouselContent>
          <CarouselItem className="sm:basis-1/2">
            <TestimonialCard title="Nina S.">
              I’m very grateful for the support and guidance from my personal trainer, Piotrek, during my recovery from frozen shoulder illness. His knowledge, patience, empathy, and tailored exercises helped me regain mobility (plus lost weight) and confidence step by step. I highly recommend him to anyone looking for a professional and supportive trainer.
            </TestimonialCard>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      {/* <CarouselPrevious suppressHydrationWarning className="left-10 top-80" />
      <CarouselNext suppressHydrationWarning className="right-10 top-80" /> */}
    </section>
  );
}
