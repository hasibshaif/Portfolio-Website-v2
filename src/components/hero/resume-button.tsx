"use client";

import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function ResumeButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="flex justify-center items-center"
    >
      <LinkPreview
        url="/documents/Hasib Shaif - Resume.pdf"
        isStatic={true}
        imageSrc="/img/link-previews/about/resume-preview.PNG"
        className="inline-block"
      >
                        <motion.button
                  className="relative inline-flex h-10 sm:h-12 overflow-hidden rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("/documents/Hasib Shaif - Resume.pdf", "_blank")}
                >
                  <span className="absolute inset-0 scale-[100] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
                    View Resume
                  </span>
                </motion.button>
      </LinkPreview>
    </motion.div>
  );
} 