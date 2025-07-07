"use client";

import { Suspense } from "react";
import Particles from "@/components/ui/particles";

export function ParticlesBackground() {
  return (
    <Suspense fallback={null}>
      <Particles
        className="absolute inset-0 z-0"
        quantity={50}
        staticity={50}
        ease={30}
        size={0.4}
        color="#c2f3ff"
      />
    </Suspense>
  );
} 