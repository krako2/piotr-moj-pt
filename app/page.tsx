import CloudflareTurnstile from "@/components/cloudflare-turnstile";
import AnimatedBackground from "@/components/animated-background/animated-background";
import MainContent from "@/components/main-content";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Testimonials from "@/components/testimonials/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ConsultationForm from "@/components/consultation/consultation-form";

import StoreProvider from "@/state/store-provider";

export default function Home() {
  return (
    <>
      <CloudflareTurnstile />
      <StoreProvider>
        <AnimatedBackground />
        <MainContent>
          <Hero />
          <About />
          <Testimonials />
          <Contact />
          <Footer />
        </MainContent>
        <ConsultationForm />
      </StoreProvider>
    </>
  );
}
