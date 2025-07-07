"use client";

import { motion } from "framer-motion";

export function BioSection() {
  return (
    <motion.div
      className="text-sm sm:text-base md:text-lg lg:text-xl flex flex-col gap-3 sm:gap-4 text-gray-300 mx-auto leading-relaxed mb-6 sm:mb-8 max-w-3xl lg:max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="whitespace-normal text-center sm:text-left"
      >
        Hi! I&apos;m Hasib, a CS Undergrad at Baruch College. I&apos;m passionate about building innovative solutions and turning data into actionable insights.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="mt-2 whitespace-normal text-center sm:text-left"
      >
        I love exploring the intersection of technology and business, with particular interests in software engineering, full-stack development, and risk management, but always open to new opportunities.
      </motion.p>
    </motion.div>
  );
} 