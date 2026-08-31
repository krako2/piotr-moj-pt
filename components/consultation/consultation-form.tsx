"use client"

import { RootState } from "@/state/store";
import { useSelector, useDispatch } from "react-redux";
import { hide } from "@/state/form/form-slice";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function ConsultationForm() {
  const showing = useSelector((state: RootState) => state.form.showing);
  const dispatch = useDispatch();

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [carouselCurrent, setCarouselCurrent] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    setCarouselCurrent(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCarouselCurrent(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  if (!showing) return null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-(--placeholder) opacity-(--transparent-background-opacity) fade-in-transparent-background" />
      <div className="flex justify-center fixed top-0 left-0 w-full h-screen fade-in">
        <div className="flex justify-center items-center max-w-180 w-full p-5">
          <div className="relative bg-(--placeholder) p-5 w-full">
            <Button className="absolute right-5 z-1" onClick={() => dispatch(hide())}>Close</Button>
            <Carousel setApi={setCarouselApi} opts={{ align: "start", loop: true }}>
              <CarouselContent>
                <CarouselItem>
                  <div className="flex justify-center items-center text-center">
                    <h1 className="text-2xl text-green-400 font-semibold">What is your email address?</h1>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <section className="mt-3 flex justify-center items-center">
              <Button onClick={() => carouselApi?.scrollTo(carouselCurrent + 1)}>Next</Button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
