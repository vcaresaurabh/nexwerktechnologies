"use client";

import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";
import { STATS, PRINCIPLES } from "@/constants/data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <AnimatedSection direction="left">
            <span className="inline-block text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5">
              Your Long-Term{" "}
              <span className="gradient-text">Technology Partner</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              NexWerk Technologies is an IT services company dedicated to empowering
              businesses with reliable, scalable digital systems. We believe in
              understanding your business first — then building solutions that grow with you.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              We work with startups, SMEs, and enterprises across India, delivering
              transparent, performance-first technology partnerships. No over-engineering.
              No short-term delivery. Just systems built to last.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRINCIPLES.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200"
                >
                  <CheckCircle2 size={18} className="text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{p.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Stats */}
          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-5">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-100 p-6 text-center hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="text-4xl font-extrabold text-blue-600 mb-1">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tagline card */}
            <div className="mt-5 rounded-2xl bg-linear-to-br from-blue-600 to-sky-500 p-6 text-white">
              <p className="text-lg font-bold leading-snug">
                &ldquo;Long-term reliability, not short-term delivery.&rdquo;
              </p>
              <p className="text-blue-100 text-sm mt-2">
                That&apos;s the NexWerk promise — every project, every client.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
