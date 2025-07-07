"use client";

import { motion } from "framer-motion";
import { ProfilePicture } from "./profile-picture";
import { AnimatedName } from "./animated-name";
import { AnimatedTitle } from "./animated-title";
import { BioSection } from "./bio-section";
import { ResumeButton } from "./resume-button";

export function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 flex flex-col justify-center items-center py-20 sm:py-32"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto flex-1 flex flex-col justify-center"
      >
        <ProfilePicture />
        <AnimatedName />
        <AnimatedTitle />
        <BioSection />
        <ResumeButton />
      </motion.div>
    </motion.section>
  );
} 