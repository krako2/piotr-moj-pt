import Hero from "@/components/hero";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import AnimatedBackground from "@/components/animated-background/animated-background";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
