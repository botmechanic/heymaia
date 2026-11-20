import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-hairline bg-surface p-6 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
