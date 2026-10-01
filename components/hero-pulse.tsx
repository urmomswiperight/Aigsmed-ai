"use client";

import React from "react";
import { motion } from "framer-motion";

export function HeroPulse() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-25">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 320"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle grid reference lines */}
        <line
          x1="0"
          y1="160"
          x2="1440"
          y2="160"
          stroke="#1E293B"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {/* Base static faint clinical pulse trace */}
        <path
          d="M0,160 L450,160 L470,160 L485,120 L500,205 L515,90 L530,230 L545,160 L565,160 L780,160 L800,160 L815,130 L830,195 L845,105 L860,220 L875,160 L895,160 L1440,160"
          stroke="#0D9488"
          strokeWidth="1.5"
          strokeOpacity="0.2"
        />

        {/* Animated scanning pulse line */}
        <motion.path
          d="M0,160 L450,160 L470,160 L485,120 L500,205 L515,90 L530,230 L545,160 L565,160 L780,160 L800,160 L815,130 L830,195 L845,105 L860,220 L875,160 L895,160 L1440,160"
          stroke="#0D9488"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0.15, pathOffset: 0, opacity: 0.8 }}
          animate={{
            pathOffset: [0, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            pathOffset: {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </svg>
    </div>
  );
}
