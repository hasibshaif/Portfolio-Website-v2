"use client";

import { cn } from "@/lib/utils";
import DoubleUnderline from "../text/double-underline";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useState } from "react";

export type SkillData = {
  name: string;
  image: string;
};

export default function AvatarList({
  data,
  heading,
  size = "md",
  className,
}: {
  data: SkillData[];
  heading: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes: Record<"sm" | "md" | "lg", string> = {
    lg: "p-1 w-20 h-20", // Large size
    md: "p-0.5 w-16 h-16 md:w-20 md:h-20", // Medium size, responsive adjustment
    sm: "p-0.5 w-12 h-12 sm:w-14 sm:h-14", // Small size, responsive adjustment
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="w-full text-center">
      {/* Heading under the avatar list */}
      <DoubleUnderline className="text-xl font-semibold mb-6">
        {heading}
      </DoubleUnderline>

      {/* Avatar List */}
      <div className={cn("flex justify-center flex-wrap gap-6", className)}>
      {data.map((item, idx) => (
          <div
            key={item.name}
            className="group relative z-0 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            <div
              className={cn(
                "relative overflow-hidden rounded-full bg-white",
                sizes[size] ?? sizes.md
              )}
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-full object-contain w-full h-full"
                style={{ padding: "4px" }}
              />
            </div>

            {/* Animated Tooltip */}
            <AnimatePresence mode="popLayout">
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs sm:text-sm flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-2 py-1 sm:px-4 sm:py-2"
                  >
                  <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                  <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                  <div className="font-bold text-white relative z-30 text-base">
                    {item.name}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
