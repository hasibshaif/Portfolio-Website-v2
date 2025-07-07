"use client";

import React from "react";
import Image from "next/image";

export function ProfilePicture() {
  return (
    <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-6 sm:mb-8">
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30 shadow-lg">
        <Image
          src="/img/hasib_mufg.JPG"
          alt="Hasib Shaif"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
} 