import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";
import { TEAM_MEMBERS, STATS, PRINCIPLES } from "@/constants/data";

export const metadata: Metadata = {
  title: "About NexWerk Technologies | Our Story, Mission & Team",
  description:
    "Learn about NexWerk Technologies — our mission, values, team, and commitment to long-term IT partnerships that drive real business results.",
};

const MILESTONES = [
  { year: "2016", event: "Founded in Delhi with a focus on custom web solutions for SMEs." },
  { year: "2018", event: "Launched our CRM practice — built first fully custom CRM for an e-commerce client." },
  { year: "2020", event: "Expanded to managed IT services and cloud infrastructure support." },
  { year: "2022", event: "Crossed 75 active clients and 100 projects delivered milestone." },
  { year: "2024", event: "Added AI-driven automation and mobile app development to our portfolio." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          headline="Your Long-Term Technology Partner"
          subtext="We build reliable, scalable digital systems for growing businesses — with transparency, security, and a commitment to your success."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
          badge="Who We Are"
        />

        {/* Company story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <AnimatedSection direction="left">
                <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Our Story</span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2 mb-5">
                  Built on the Belief That <span className="gradient-text">Technology Should Work for You</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  NexWerk Technologies was founded in 2016 with a simple conviction: Indian businesses deserve
                  the same quality of digital systems that global enterprises use — without the complexity or
                  the price tag.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We started as a web development shop, but quickly realized that our clients needed more than
                  just websites. They needed CRM systems that fit their sales processes, automations that saved
                  them hours each week, and IT support they could actually rely on.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Today, we serve 85+ clients across India — from early-stage startups to established enterprises —
                  as their dedicated technology partner. Not just a vendor. A partner.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-200"
                >
                  Work With Us <ArrowRight size={16} />
                </Link>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
                    alt="NexWerk team collaboration"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {STATS.map((stat, i) => (
                <AnimatedSection key={i} direction="up" delay={i * 0.08}>
                  <div className="bg-white rounded-2xl border border-slate-100 p-6 text-center hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="text-4xl font-extrabold text-blue-600">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-slate-500 font-medium mt-1">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">What We Stand For</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Mission & Core Values</h2>
              <p className="text-slate-500 text-lg mt-3 leading-relaxed">
                Every decision we make is guided by these four principles.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PRINCIPLES.map((p, i) => (
                <AnimatedSection key={i} direction="up" delay={i * 0.08}>
                  <div className="bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 p-6 hover:shadow-sm transition-all">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{p.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Meet the Team</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                The People Behind <span className="gradient-text">NexWerk</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {TEAM_MEMBERS.map((member, i) => (
                <AnimatedSection key={member.id} direction="up" delay={i * 0.07}>
                  <div className="group text-center">
                    <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-blue-500 to-sky-400 flex items-center justify-center text-white text-xl font-bold mx-auto mb-3 group-hover:scale-105 transition-transform duration-200 shadow-md">
                      {member.avatar}
                    </div>
                    <p className="text-sm font-bold text-slate-900">{member.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{member.role}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-14">
              <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Our Journey</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">Key Milestones</h2>
            </AnimatedSection>
            <div className="relative border-l-2 border-blue-200 pl-8 space-y-10">
              {MILESTONES.map((m, i) => (
                <AnimatedSection key={i} direction="left" delay={i * 0.1}>
                  <div className="relative">
                    <div className="absolute left-[-2.85rem] w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md" />
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">{m.year}</span>
                    <p className="text-slate-700 mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-linear-to-r from-blue-600 to-sky-500">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Ready to Start Something?</h2>
            <p className="text-blue-100 mb-7">Let&apos;s talk about your goals and how we can help.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-full font-semibold text-sm hover:bg-blue-50 hover:shadow-lg transition-all duration-200"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
