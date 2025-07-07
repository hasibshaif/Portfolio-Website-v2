"use client";

import { motion } from "framer-motion";

export function SpotlightEffect() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
      <motion.div
        className="w-full max-w-4xl aspect-square bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
} 