"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types";

const categoryColors: Record<string, string> = {
  CRM: "bg-violet-100 text-violet-700 border-violet-200",
  "Web Dev": "bg-blue-100 text-blue-700 border-blue-200",
  Automation: "bg-amber-100 text-amber-700 border-amber-200",
  Cloud: "bg-sky-100 text-sky-700 border-sky-200",
  "App Dev": "bg-emerald-100 text-emerald-700 border-emerald-200",
  IT: "bg-slate-100 text-slate-700 border-slate-200",
};

export default function BlogCard({ post }: { post: BlogPost }) {
  const colorClass = categoryColors[post.category] ?? "bg-slate-100 text-slate-700 border-slate-200";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg overflow-hidden transition-all duration-300"
    >
      {/* Cover image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={`https://images.unsplash.com/photo-${post.imageId}?w=600&q=75&auto=format&fit=crop`}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category + meta */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <Badge className={`text-xs font-medium border ${colorClass} px-2.5 py-0.5`}>
            {post.category}
          </Badge>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-slate-900 leading-snug mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* CTA */}
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:gap-2.5 transition-all duration-200"
        >
          Read Article <ArrowRight size={13} />
        </Link>
      </div>
    </motion.article>
  );
}
