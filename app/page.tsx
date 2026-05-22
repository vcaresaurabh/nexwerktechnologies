import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import VisualBreak from "@/components/ui/VisualBreak";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <VisualBreak
          imageId="1522071820081-009f0129c71c"
          headline="Partnering with Businesses Across India to Build What Lasts"
          subtext="From startups to enterprises — we build reliable digital systems that grow with you."
          ctaLabel="Learn About Us"
          ctaHref="/about"
          overlayOpacity={0.6}
        />
        <About />
        <Testimonials />
        <VisualBreak
          imageId="1600880292203-757bb62b4baf"
          headline="Ready to Transform Your Business?"
          subtext="Let's discuss your goals and build a roadmap tailored to your needs."
          ctaLabel="Start a Conversation"
          ctaHref="/contact"
          overlayOpacity={0.55}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
