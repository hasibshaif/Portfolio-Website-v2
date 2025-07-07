"use client";

import { motion } from "framer-motion";

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/5 left-1/6 w-16 sm:w-20 lg:w-32 h-16 sm:h-20 lg:h-32 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-purple-500/10 rounded-full blur-xl"
          animate={{
            y: [0, 8, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </div>
  );
} 