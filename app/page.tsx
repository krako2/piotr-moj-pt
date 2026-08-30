import AnimatedBackground from "@/components/animated-background/animated-background";
import Hero from "@/components/hero";
import About from "@/components/about/about";
import Testimonials from "@/components/testimonials/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ConsultationForm from "@/components/consultation/consultation-form";

import StoreProvider from "@/state/store-provider";

export default function Home() {
  return (
    <>
      <StoreProvider>
        <AnimatedBackground />
        <main>
          <Hero />
          <About />
          <Testimonials />
          <Contact />
          <Footer />
          <ConsultationForm />
        </main>
      </StoreProvider>
    </>
  );
}
