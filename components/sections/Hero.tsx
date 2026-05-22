"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FloatingTechCards from "@/components/ui/FloatingTechCards";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image — data-center / server room */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Primary dark overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950/92 via-blue-950/88 to-slate-900/92" />
        {/* Animated blue color sweep */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-blue-700/20 via-transparent to-sky-700/20"
          animate={{ opacity: [0.4, 0.85, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Subtle dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1.5px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Floating tech image cards */}
      <FloatingTechCards />

      {/* Center content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 w-full">
        <div className="max-w-2xl mx-auto text-center">
          <div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/25 backdrop-blur-sm border border-blue-400/40 text-blue-300 text-xs font-semibold mb-7 tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Trusted IT Partner for Growing Businesses
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-tight tracking-tight"
            >
              Build Smarter.{" "}
              <span className="gradient-text">Scale Faster.</span>{" "}
              Grow Fearlessly.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.57, ease: EASE }}
              className="mt-5 text-lg text-blue-100/75 leading-relaxed"
            >
              NexWerk Technologies delivers enterprise-grade web development, CRM systems,
              business automation, and managed IT — engineered for reliability and
              built for long-term growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.69, ease: EASE }}
              className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full text-base font-semibold shadow-lg shadow-blue-900/50 hover:shadow-blue-700/50 transition-all duration-300 flex items-center gap-2"
                  >
                    Start Your Project
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-white px-8 py-3 rounded-full text-base font-semibold hover:border-blue-400 hover:text-blue-300 transition-all duration-300 bg-white/10 backdrop-blur-sm"
                  >
                    Explore Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.81, ease: EASE }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6"
            >
              {[
                { val: "120+", label: "Projects Delivered" },
                { val: "85+", label: "Happy Clients" },
                { val: "99%", label: "Uptime" },
                { val: "8+", label: "Years Experience" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <span className="text-xl font-bold text-white">{val}</span>
                  <span className="text-[11px] text-blue-200 font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("#services")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 hover:text-blue-400 transition-colors z-10"
        aria-label="Scroll to services"
      >
        <span className="text-xs font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
