"use client";

import { motion } from "framer-motion";

export function AnimatedName() {
  return (
    <motion.h1 
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-clip-text text-transparent"
        style={{
          background: "linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)",
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientShift 3s ease-in-out infinite",
        }}
      >
        Hasib
      </motion.span>{" "}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-clip-text text-transparent"
        style={{
          background: "linear-gradient(45deg, #06b6d4, #8b5cf6, #3b82f6, #06b6d4)",
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientShift 3s ease-in-out infinite 1.5s",
        }}
      >
        Shaif
      </motion.span>
    </motion.h1>
  );
} 