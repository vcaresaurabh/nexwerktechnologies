"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp } from "lucide-react";
import type { CaseStudy } from "@/types";

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg overflow-hidden transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={`https://images.unsplash.com/photo-${cs.imageId}?w=700&q=75&auto=format&fit=crop`}
          alt={cs.client}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold">
            {cs.industry}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
          {cs.client}
        </h3>

        <div className="space-y-3 mt-3">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Challenge</p>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">{cs.challenge}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Solution</p>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">{cs.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 mb-2">
            <TrendingUp size={13} />
            Key Results
          </div>
          <div className="grid grid-cols-3 gap-2">
            {cs.results.map((r, i) => (
              <div key={i} className="text-center p-2 rounded-lg bg-slate-50 border border-slate-100">
                <p className="text-sm font-bold text-blue-600 leading-tight">{r.value}</p>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{r.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
