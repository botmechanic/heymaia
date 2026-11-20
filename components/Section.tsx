import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  surface?: boolean;
};

export function Section({
  id,
  children,
  className = "",
  surface = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-5 py-24 md:px-8 md:py-[140px] ${
        surface ? "bg-surface" : "bg-canvas"
      } ${className}`}
    >
      <Reveal className="mx-auto w-full min-w-0 max-w-6xl">{children}</Reveal>
    </section>
  );
}
