"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface VisualBreakProps {
  imageId: string;
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  overlayOpacity?: number;
}

export default function VisualBreak({
  imageId,
  headline,
  subtext,
  ctaLabel,
  ctaHref = "/contact",
  overlayOpacity = 0.55,
}: VisualBreakProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Parallax: image moves slower than scroll (scale + y)
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <div ref={ref} className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
      {/* Parallax image */}
      <motion.div
        className="absolute inset-0"
        style={{ scale, y }}
      >
        <Image
          src={`https://images.unsplash.com/photo-${imageId}?w=1600&q=75&auto=format&fit=crop`}
          alt={headline || "Visual break"}
          fill
          className="object-cover"
          loading="lazy"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900"
        style={{ opacity: overlayOpacity }}
      />

      {/* Optional content */}
      {(headline || ctaLabel) && (
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {headline && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white max-w-2xl leading-tight"
            >
              {headline}
            </motion.h2>
          )}
          {subtext && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-white/80 text-base sm:text-lg max-w-xl"
            >
              {subtext}
            </motion.p>
          )}
          {ctaLabel && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Link
                href={ctaHref}
                className="mt-6 inline-flex items-center px-8 py-3 rounded-full bg-white text-blue-700 font-semibold text-sm hover:bg-blue-50 hover:shadow-lg transition-all duration-200"
              >
                {ctaLabel}
              </Link>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
