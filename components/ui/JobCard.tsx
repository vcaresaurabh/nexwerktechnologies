"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Job } from "@/types";

export default function JobCard({ job }: { job: Job }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-md p-6 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 border text-xs font-medium">
              {job.department}
            </Badge>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Clock size={11} /> {job.type}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <MapPin size={11} /> {job.location}
            </span>
          </div>
          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {job.title}
          </h3>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed line-clamp-2">
            {job.description}
          </p>
        </div>
        <motion.div
          whileHover={{ x: 3 }}
          className="shrink-0 w-9 h-9 rounded-full bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
        >
          <ArrowRight size={15} className="text-blue-600 group-hover:text-white transition-colors" />
        </motion.div>
      </div>

      {/* Requirements */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
        {job.requirements.slice(0, 3).map((r, i) => (
          <span key={i} className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
            {r}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
