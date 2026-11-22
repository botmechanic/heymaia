import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  surface?: boolean;
};

export function Section({
  id,
  label,
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
      <Reveal className="mx-auto w-full min-w-0 max-w-[1200px]">
        {label ? (
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-x-8">
            <p className="type-label text-ink-muted lg:sticky lg:top-28 lg:col-span-3 lg:self-start">
              {label}
            </p>
            <div className="min-w-0 lg:col-span-8 lg:col-start-5">{children}</div>
          </div>
        ) : (
          children
        )}
      </Reveal>
    </section>
  );
}
