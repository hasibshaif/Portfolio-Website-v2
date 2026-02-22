"use client";

import { useEffect, useState } from "react";

/**
 * Optional: Renders a small dot that follows the cursor.
 * Enable by using this in layout and adding "cursor: none" to body in globals.css (Option A).
 * Remove the component and the CSS to restore the default cursor.
 */
export function CursorFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_6px_rgba(255,255,255,0.5)] transition-transform duration-75"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)` }}
      aria-hidden
    />
  );
}
