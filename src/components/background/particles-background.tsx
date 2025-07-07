"use client";

import { Suspense } from "react";
import Particles from "@/components/ui/particles";

export function ParticlesBackground() {
  return (
    <Suspense fallback={null}>
      <Particles
        className="absolute inset-0 z-0"
        quantity={20}
        staticity={30}
        ease={20}
        size={0.3}
        color="#c2f3ff"
      />
    </Suspense>
  );
} 