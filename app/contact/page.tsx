import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact NexWerk Technologies | Get a Free Consultation",
  description:
    "Get in touch with NexWerk Technologies. We respond within 1–2 business days. Let's discuss your project.",
};

const FAQ = [
  {
    q: "How quickly can you start on a project?",
    a: "For most projects, we can start within 1–2 weeks of signing an agreement. Urgent needs can sometimes be accommodated faster.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. While we're based in India, we work with clients globally. Most of our collaboration happens remotely via video calls and async tools.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer fixed-price project quotes, monthly retainers for ongoing support, and hourly engagements for short-term consulting. We share a detailed quote after an initial discovery call.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Absolutely. We offer flexible support packages — from basic bug-fix retainers to full managed IT services — depending on your needs.",
  },
  {
    q: "Can I see examples of your work before committing?",
    a: "Yes. We're happy to share case studies, past project summaries, and references on request during our initial consultation.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          headline="Let's Build Something Great Together"
          subtext="Tell us about your project. We'll get back to you within 1–2 business days with a thoughtful response."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          badge="Get In Touch"
        />

        {/* Contact form section — reuse existing component */}
        <Contact />

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-12">
              <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Before You Reach Out</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Frequently Asked Questions</h2>
            </AnimatedSection>
            <div className="space-y-4">
              {FAQ.map((item, i) => (
                <AnimatedSection key={i} direction="up" delay={i * 0.07}>
                  <div className="bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 p-6 transition-all">
                    <h3 className="font-bold text-slate-900 mb-2 text-sm">{item.q}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.a}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
