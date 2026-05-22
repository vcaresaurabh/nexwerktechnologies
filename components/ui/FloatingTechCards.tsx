"use client";

import { motion } from "framer-motion";
import { Globe, Users, Zap, Shield, Lock, Star } from "lucide-react";
import { FLOATING_CARDS } from "@/constants/data";

const iconMap: Record<string, React.ElementType> = {
  Globe, Users, Zap, Shield, Lock, Star,
};

const colorConfig: Record<string, { strip: string; iconBg: string; iconColor: string; border: string }> = {
  blue:    { strip: "#3b82f6", iconBg: "rgba(59,130,246,0.25)",   iconColor: "#93c5fd", border: "rgba(59,130,246,0.3)" },
  sky:     { strip: "#0ea5e9", iconBg: "rgba(14,165,233,0.25)",   iconColor: "#7dd3fc", border: "rgba(14,165,233,0.3)" },
  amber:   { strip: "#f59e0b", iconBg: "rgba(245,158,11,0.25)",   iconColor: "#fcd34d", border: "rgba(245,158,11,0.3)" },
  violet:  { strip: "#8b5cf6", iconBg: "rgba(139,92,246,0.25)",   iconColor: "#c4b5fd", border: "rgba(139,92,246,0.3)" },
  emerald: { strip: "#10b981", iconBg: "rgba(16,185,129,0.25)",   iconColor: "#6ee7b7", border: "rgba(16,185,129,0.3)" },
  rose:    { strip: "#f43f5e", iconBg: "rgba(244,63,94,0.25)",    iconColor: "#fda4af", border: "rgba(244,63,94,0.3)" },
};

export default function FloatingTechCards() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {FLOATING_CARDS.map((card) => {
        const Icon = iconMap[card.icon];
        const c = colorConfig[card.color];

        return (
          <motion.div
            key={card.id}
            className="absolute hidden lg:block pointer-events-auto"
            style={{ ...card.position, width: card.width, rotate: card.rotate }}
            animate={{
              y: [0, -card.floatY, 0],
              rotate: [card.rotate - 1, card.rotate + 1, card.rotate - 1],
            }}
            transition={{ duration: card.duration, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
            whileHover={{ scale: 1.08, zIndex: 20 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden p-4"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: `1px solid ${c.border}`,
                boxShadow: `0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)`,
              }}
            >
              {/* Colored top accent strip */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${c.strip}cc, ${c.strip}44)` }}
              />

              {/* Header row — icon + optional live indicator */}
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: c.iconBg }}
                >
                  <Icon size={15} style={{ color: c.iconColor }} />
                </div>
                {card.live && (
                  <div className="flex items-center gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: c.strip }}
                    />
                    <span className="text-[9px] font-semibold" style={{ color: c.strip }}>LIVE</span>
                  </div>
                )}
              </div>

              {/* Stat */}
              <div className="text-white font-bold text-base leading-tight">{card.stat}</div>

              {/* Label */}
              <div className="text-white/50 text-[10px] font-medium mt-0.5 leading-tight">{card.label}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
