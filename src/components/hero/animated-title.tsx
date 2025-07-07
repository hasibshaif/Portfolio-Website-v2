"use client";

import { motion } from "framer-motion";

export function AnimatedTitle() {
  return (
    <motion.p 
      className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 font-semibold"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-clip-text text-transparent"
        style={{
          background: "linear-gradient(45deg, #a855f7, #14b8a6, #10b981, #a855f7)",
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientShift 4s ease-in-out infinite 2s",
        }}
      >
        CS Undergrad at Baruch
      </motion.span>
    </motion.p>
  );
} 