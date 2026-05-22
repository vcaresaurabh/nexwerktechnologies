"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb { label: string; href?: string }

interface PageHeroProps {
  headline: string;
  subtext?: string;
  breadcrumbs?: Breadcrumb[];
  badge?: string;
}

export default function PageHero({ headline, subtext, breadcrumbs, badge }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-blue-300 mb-5"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={13} className="text-blue-400/60" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide mb-4"
          >
            {badge}
          </motion.div>
        )}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl"
        >
          {headline}
        </motion.h1>

        {/* Subtext */}
        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-blue-100/70 max-w-2xl leading-relaxed"
          >
            {subtext}
          </motion.p>
        )}
      </div>
    </section>
  );
}
