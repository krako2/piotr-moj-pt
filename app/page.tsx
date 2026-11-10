import CloudflareTurnstile from "@/components/cloudflare-turnstile";
import AnimatedBackground from "@/components/animated-background/animated-background";
import MainContent from "@/components/main-content";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Testimonials from "@/components/testimonials/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ConsultationForm from "@/components/consultation/consultation-form";
import PrivacyPolicy from "@/components/consultation/privacy-policy";

import StoreProvider from "@/state/store-provider";
import WhatYouGet from "@/components/what-you-get";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <CloudflareTurnstile />
      <StoreProvider>
        <AnimatedBackground />
        <MainContent>
          <Hero />
          <WhatYouGet />
          <About />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
        </MainContent>
        <ConsultationForm />
        <PrivacyPolicy />
      </StoreProvider>
    </>
  );
}
