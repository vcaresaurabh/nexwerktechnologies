"use client";

import { motion } from "framer-motion";
import { Globe, Users, Zap, Shield, Smartphone, Lock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TechMarquee from "@/components/ui/TechMarquee";
import { SERVICES } from "@/constants/data";

const iconMap: Record<string, React.ElementType> = {
  Globe, Users, Zap, Shield, Smartphone, Lock,
};

const cardColors = [
  { bg: "from-blue-50 to-indigo-50", icon: "text-blue-600", border: "hover:border-blue-300" },
  { bg: "from-violet-50 to-purple-50", icon: "text-violet-600", border: "hover:border-violet-300" },
  { bg: "from-amber-50 to-yellow-50", icon: "text-amber-600", border: "hover:border-amber-300" },
  { bg: "from-emerald-50 to-teal-50", icon: "text-emerald-600", border: "hover:border-emerald-300" },
  { bg: "from-sky-50 to-cyan-50", icon: "text-sky-600", border: "hover:border-sky-300" },
  { bg: "from-rose-50 to-pink-50", icon: "text-rose-600", border: "hover:border-rose-300" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            End-to-End Digital{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            From building your digital presence to automating your operations — we handle
            the technology so you can focus on growing your business.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const color = cardColors[i % cardColors.length];

            return (
              <AnimatedSection key={service.id} direction="up" delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card
                    className={`h-full border border-slate-200 ${color.border} transition-all duration-300 card-glow cursor-default overflow-hidden group`}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${color.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={22} className={color.icon} />
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-slate-900 mb-2">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-1.5">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                            <CheckCircle2 size={13} className={color.icon} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA banner */}
        <AnimatedSection direction="up" delay={0.4} className="mt-14">
          <div className="rounded-2xl bg-linear-to-r from-blue-600 to-sky-500 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h3 className="text-xl font-bold mb-1">Not sure which service fits your needs?</h3>
              <p className="text-blue-100 text-sm">Talk to our experts — we&apos;ll help you find the right solution.</p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="shrink-0 bg-white text-blue-700 font-semibold text-sm px-7 py-3 rounded-full hover:shadow-lg transition-all duration-200"
            >
              Get Free Consultation
            </motion.a>
          </div>
        </AnimatedSection>
      </div>

      {/* Tech stack marquee */}
      <TechMarquee />
    </section>
  );
}
