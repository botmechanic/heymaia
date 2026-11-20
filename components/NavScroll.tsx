"use client";

import { useEffect, useState, type ReactNode } from "react";

export function NavScroll({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] ${
        scrolled
          ? "border-hairline bg-canvas/80 backdrop-blur-md"
          : "border-transparent bg-canvas"
      }`}
    >
      {children}
    </header>
  );
}
