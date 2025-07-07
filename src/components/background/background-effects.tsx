"use client";

import { ParticlesBackground } from "./particles-background";
import { SpotlightEffect } from "./spotlight-effect";
import { FloatingOrbs } from "./floating-orbs";

export function BackgroundEffects() {
  return (
    <>
      <ParticlesBackground />
      <SpotlightEffect />
      <FloatingOrbs />
    </>
  );
} 