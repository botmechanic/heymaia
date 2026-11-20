"use client";

import { useId } from "react";

type OrbSize = "hero" | "marker" | "nav";

const sizeClass: Record<OrbSize, string> = {
  hero: "h-60 w-60 md:h-80 md:w-80",
  marker: "h-10 w-10",
  nav: "h-7 w-7",
};

type OrbProps = {
  size?: OrbSize;
  className?: string;
  decorative?: boolean;
};

export function Orb({
  size = "marker",
  className = "",
  decorative = true,
}: OrbProps) {
  const uid = useId().replace(/:/g, "");
  const isHero = size === "hero";
  const gradId = `orb-grad-${uid}`;
  const shineId = `orb-shine-${uid}`;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${sizeClass[size]} ${className}`}
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "Maia orb"}
    >
      <div
        className={`absolute inset-[-18%] rounded-full bg-maia-glow/40 orb-glow ${
          isHero ? "blur-3xl" : "blur-md"
        }`}
      />
      <div className="relative h-full w-full orb-breathe">
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
          <defs>
            <radialGradient id={gradId} cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="var(--maia-glow)" />
              <stop offset="55%" stopColor="var(--maia-presence)" />
              <stop
                offset="100%"
                stopColor="var(--maia-presence)"
                stopOpacity="0.92"
              />
            </radialGradient>
            <radialGradient id={shineId} cx="32%" cy="28%" r="45%">
              <stop offset="0%" stopColor="white" stopOpacity="0.35" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill={`url(#${gradId})`} />
          <circle cx="50" cy="50" r="46" fill={`url(#${shineId})`} />
        </svg>
      </div>
    </div>
  );
}
