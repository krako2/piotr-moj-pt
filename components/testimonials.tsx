import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <section className="p-5">
      <h2 className="text-2xl font-semibold text-green-400">Testimonials</h2>
      <Carousel className="p-5">
        <CarouselContent>
          <CarouselItem className="sm:basis-1/2">
            <div className="h-100 bg-(--placeholder)"></div>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2">
            <div className="h-100 bg-(--placeholder)"></div>
          </CarouselItem>
          <CarouselItem className="sm:basis-1/2">
            <div className="h-100 bg-(--placeholder)"></div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious suppressHydrationWarning className="left-10 top-80" />
        <CarouselNext suppressHydrationWarning className="right-10 top-80" />
      </Carousel>
    </section>
  );
}
