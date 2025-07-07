"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProfilePicture() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
      className="mb-8 flex justify-center"
    >
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
        <Image
          src="/img/hasib_mufg.JPG"
          alt="Hasib Shaif"
          fill
          className="object-cover"
          priority
        />
        {/* Glowing ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-400/50"
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 40px rgba(59, 130, 246, 0.8)",
              "0 0 20px rgba(59, 130, 246, 0.5)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
} 