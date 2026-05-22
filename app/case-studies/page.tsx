import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { CASE_STUDIES } from "@/constants/data";

export const metadata: Metadata = {
  title: "Case Studies | NexWerk Technologies",
  description:
    "Real results for real businesses. Explore how NexWerk Technologies has helped clients across e-commerce, logistics, SaaS, and retail with web, CRM, and automation solutions.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          headline="Real Results. Real Businesses."
          subtext="From reducing manual work by 70% to cutting infrastructure costs by 35% — here's what we've built for our clients."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
          badge="Client Success"
        />

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CASE_STUDIES.map((cs, i) => (
                <AnimatedSection key={cs.id} direction="up" delay={i * 0.1}>
                  <CaseStudyCard cs={cs} />
                </AnimatedSection>
              ))}
            </div>

            {/* CTA */}
            <AnimatedSection direction="up" delay={0.4} className="mt-16">
              <div className="rounded-2xl bg-linear-to-r from-blue-600 to-sky-500 p-8 md:p-10 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Ready to Write Your Own Success Story?</h3>
                <p className="text-blue-100 mb-7">Tell us about your challenge — we&apos;ll show you what&apos;s possible.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-full font-semibold text-sm hover:bg-blue-50 hover:shadow-lg transition-all duration-200"
                >
                  Start Your Project <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
