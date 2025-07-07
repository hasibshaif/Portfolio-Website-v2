"use client";

import React from "react";
import Image from "next/image";

export function ResumeButton() {
  return (
    <a
      href="/documents/Hasib Shaif - Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
    >
      <Image
        src="/icons/doc-icons/email-icon.svg"
        alt="Resume"
        width={20}
        height={20}
        className="object-contain"
      />
      View Resume
    </a>
  );
} 