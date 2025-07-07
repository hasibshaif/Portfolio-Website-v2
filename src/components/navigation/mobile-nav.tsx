"use client";

import { useState } from "react";
import { IconMenu, IconX } from "@tabler/icons-react";
import { NavigationLink } from "./types";

interface MobileNavProps {
  links: NavigationLink[];
  onLinkClick: (href: string) => void;
}

export function MobileNav({ links, onLinkClick }: MobileNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    onLinkClick(href);
    setMobileMenuOpen(false);
  };

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-white font-bold text-lg">Hasib Shaif</h1>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-black/90 backdrop-blur-sm border-t border-white/10">
          <div className="flex flex-col py-2">
            {links.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link.href)}
                className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors"
              >
                {link.icon}
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 