import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Users, Zap, Shield, Smartphone, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TechMarquee from "@/components/ui/TechMarquee";
import { SERVICES } from "@/constants/data";

export const metadata: Metadata = {
  title: "Our Services | NexWerk Technologies",
  description:
    "Explore NexWerk Technologies' full range of IT services: web development, CRM systems, business automation, managed IT, app development, and cloud security.",
};

const iconMap: Record<string, React.ElementType> = {
  Globe, Users, Zap, Shield, Smartphone, Lock,
};

const cardColors = [
  { bg: "from-blue-50 to-indigo-50", icon: "text-blue-600", accent: "bg-blue-600" },
  { bg: "from-violet-50 to-purple-50", icon: "text-violet-600", accent: "bg-violet-600" },
  { bg: "from-amber-50 to-yellow-50", icon: "text-amber-600", accent: "bg-amber-600" },
  { bg: "from-emerald-50 to-teal-50", icon: "text-emerald-600", accent: "bg-emerald-600" },
  { bg: "from-sky-50 to-cyan-50", icon: "text-sky-600", accent: "bg-sky-600" },
  { bg: "from-rose-50 to-pink-50", icon: "text-rose-600", accent: "bg-rose-600" },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "We learn your business goals, pain points, and technical constraints through structured workshops and interviews." },
  { step: "02", title: "Solution Design", desc: "We propose a clear architecture and roadmap — what we'll build, how long it'll take, and what it will cost." },
  { step: "03", title: "Build & Iterate", desc: "Development happens in short sprints with regular demos. You see progress every week, not after months." },
  { step: "04", title: "Launch & Support", desc: "We handle deployment, testing, and handover — then stay available for ongoing support and improvements." },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          headline="End-to-End IT Services for Growing Businesses"
          subtext="From building your digital presence to automating your operations — we handle the technology so you can focus on growth."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
          badge="What We Do"
        />

        {/* Services grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {SERVICES.map((service, i) => {
                const Icon = iconMap[service.icon];
                const color = cardColors[i % cardColors.length];
                const isEven = i % 2 === 0;

                return (
                  <AnimatedSection key={service.id} direction={isEven ? "left" : "right"} delay={0.1}>
                    <div
                      id={service.id}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                        !isEven ? "lg:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Content */}
                      <div>
                        <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${color.bg} flex items-center justify-center mb-5`}>
                          <Icon size={26} className={color.icon} />
                        </div>
                        <h2 className="text-2xl font-extrabold text-slate-900 mb-3">{service.title}</h2>
                        <p className="text-slate-600 leading-relaxed mb-5">{service.longDescription || service.description}</p>

                        {service.benefits && (
                          <ul className="space-y-2">
                            {service.benefits.map((b, j) => (
                              <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                                <CheckCircle2 size={15} className={`${color.icon} mt-0.5 shrink-0`} />
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}

                        <Link
                          href="/contact"
                          className={`mt-7 inline-flex items-center gap-2 ${color.accent} hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-md`}
                        >
                          Discuss This Service <ArrowRight size={15} />
                        </Link>
                      </div>

                      {/* Visual card */}
                      <div className={`rounded-2xl bg-linear-to-br ${color.bg} p-8 border border-slate-100`}>
                        <div className="grid grid-cols-2 gap-3">
                          {(service.features || []).map((f, j) => (
                            <div key={j} className="bg-white rounded-xl p-4 border border-white/80 shadow-sm">
                              <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${color.bg} flex items-center justify-center mb-2`}>
                                <Icon size={16} className={color.icon} />
                              </div>
                              <p className="text-xs font-semibold text-slate-700">{f}</p>
                            </div>
                          ))}
                          {service.benefits?.slice(0, 1).map((b, j) => (
                            <div key={`b-${j}`} className="col-span-2 bg-white/70 rounded-xl p-4 border border-white/80">
                              <p className="text-xs text-slate-600 leading-relaxed">&ldquo;{b}&rdquo;</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        <TechMarquee />

        {/* Process */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">How We Work</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Our <span className="gradient-text">Delivery Process</span>
              </h2>
              <p className="text-slate-500 text-lg mt-3">Simple, transparent, and results-focused.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS.map((p, i) => (
                <AnimatedSection key={i} direction="up" delay={i * 0.1}>
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-blue-200 hover:shadow-sm transition-all relative">
                    <span className="text-5xl font-extrabold text-blue-100 absolute top-4 right-5 select-none">{p.step}</span>
                    <h3 className="text-base font-bold text-slate-900 mb-2 relative">{p.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed relative">{p.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-linear-to-r from-blue-600 to-sky-500">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Not Sure Where to Start?</h2>
            <p className="text-blue-100 mb-7">Let&apos;s have a free 30-minute consultation to understand your needs.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-full font-semibold text-sm hover:bg-blue-50 hover:shadow-lg transition-all duration-200">
              Book Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
