"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import TestimonialCard from "@/components/testimonials/testimonial-card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [carouselCurrent, setCarouselCurrent] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    setCarouselCurrent(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCarouselCurrent(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  return (
    <section className="p-5">
      <h2 className="text-2xl font-semibold text-green-400">Testimonials</h2>
      <Carousel className="mt-3" setApi={setCarouselApi} opts={{ align: "start", loop: true }}>
        <CarouselContent>
          <TestimonialCard title="Anna">
            Before I started working with Piotr, my biggest struggle was the lack of confidence in the gym. I would go and feel like I have no idea what I am supposed to be doing, and even while going in regularly, I would not feel or see any changes to my ability or physique.
            Piotr helped me by coming up with the exercise plan and teaching me the right techniques for each exercise. He makes it possible for me to come into the gym and feel confident with what I am doing. Our sessions are great, and he makes sure I progress consistently.
          </TestimonialCard>
          <TestimonialCard title="Nina">
            I’m very grateful for the support and guidance from my personal trainer, Piotrek, during my recovery from frozen shoulder illness. His knowledge, patience, empathy, and tailored exercises helped me regain mobility (plus lost weight) and confidence step by step. I highly recommend him to anyone looking for a professional and supportive trainer.
          </TestimonialCard>
        </CarouselContent>
      </Carousel>
      {
        carouselApi?.canScrollNext() &&
        <section className="mt-3 flex justify-center items-center">
          <Button onClick={() => carouselApi?.scrollTo(carouselCurrent - 1)}>Previous</Button>
          <Button onClick={() => carouselApi?.scrollTo(carouselCurrent + 1)}>Next</Button>
        </section>
      }
    </section>
  );
}
