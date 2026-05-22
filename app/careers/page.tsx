import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Zap, Globe, Coffee, Laptop, TrendingUp, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import JobCard from "@/components/ui/JobCard";
import { JOBS } from "@/constants/data";

export const metadata: Metadata = {
  title: "Careers at NexWerk Technologies | Join Our Team",
  description:
    "Join NexWerk Technologies — we're hiring talented engineers, consultants, and analysts who want to build technology that makes a real difference.",
};

const PERKS = [
  { icon: Laptop, title: "Remote-Friendly", desc: "Most roles offer flexible remote work options." },
  { icon: TrendingUp, title: "Career Growth", desc: "Clear progression paths and skill development budgets." },
  { icon: Heart, title: "Health Benefits", desc: "Comprehensive health insurance for you and your family." },
  { icon: Coffee, title: "Work-Life Balance", desc: "Flexible hours and respect for your personal time." },
  { icon: Zap, title: "Exciting Projects", desc: "Work on real business problems with real impact." },
  { icon: Globe, title: "Diverse Team", desc: "Collaborative culture with people from across India." },
];

const VALUES = [
  { title: "Ownership", desc: "We trust our team to take ownership of their work and make decisions." },
  { title: "Transparency", desc: "Open communication — no surprises, no politics, no hidden agendas." },
  { title: "Growth Mindset", desc: "We invest in learning and support career growth at every level." },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          headline="Join the Team Building India's Next Wave of Business Tech"
          subtext="We're a small, focused team doing meaningful work. If you care about quality, ownership, and long-term impact — you'll fit right in."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
          badge="We're Hiring"
        />

        {/* Culture */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Our Culture</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">What It&apos;s Like to Work at NexWerk</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {VALUES.map((v, i) => (
                <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                  <div className="bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 p-6 transition-all">
                    <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Open Roles</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Current <span className="gradient-text">Opportunities</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {JOBS.map((job, i) => (
                <AnimatedSection key={job.id} direction="up" delay={i * 0.08}>
                  <JobCard job={job} />
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection direction="up" delay={0.3} className="mt-8 text-center">
              <p className="text-slate-500 text-sm mb-4">Don&apos;t see your role? We&apos;re always open to great people.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-blue-200"
              >
                Send an Open Application <ArrowRight size={15} />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Perks */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Why Join <span className="gradient-text">NexWerk</span>?
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {PERKS.map((perk, i) => (
                <AnimatedSection key={i} direction="up" delay={i * 0.06}>
                  <div className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                      <perk.icon size={18} className="text-blue-600" />
                    </div>
                    <p className="text-xs font-bold text-slate-900">{perk.title}</p>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{perk.desc}</p>
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
