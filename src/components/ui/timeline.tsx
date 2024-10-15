"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null); // Timeline container reference
  const containerRef = useRef<HTMLDivElement>(null); // Track the wrapper container
  const [containerHeight, setContainerHeight] = useState(0); // Store the height

  // Calculate height and ensure accurate measurements
  useEffect(() => {
    const calculateHeight = () => {
      if (ref.current) {
        setContainerHeight(ref.current.scrollHeight); // Get the full scrollable height
      }
    };

    calculateHeight(); // Initial calculation
    window.addEventListener("resize", calculateHeight); // Recalculate on resize

    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  // Use scroll tracking with containerRef to monitor progress
  const { scrollYProgress } = useScroll({
    target: containerRef, // Use the timeline wrapper as the scroll target
    offset: ["start start", "end end"], // Match the start and end offsets
  });

  // Use height transformation mapped to scroll progress
  const beamHeight = useTransform(scrollYProgress, [0, 1], [0, containerHeight]);

  return (
    <section id="timeline">
      <div ref={containerRef} className="flex flex-col gap-4 items-start">
        <div className="bg-transparent w-full">
          <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex justify-start pt-5 md:pt-40 md:gap-10"
              >
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                  </div>
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-xl font-bold text-white dark:text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-white">
                    {item.title}
                  </h3>
                  {item.content}
                </div>
              </div>
            ))}

            {/* Gradient Beam */}
            <div
              className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]"
              style={{ height: `${containerHeight}px` }}
            >
              <motion.div
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-blue-800 via-white to-transparent rounded-full"
                style={{ height: beamHeight }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
