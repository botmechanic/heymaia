import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-[15px] leading-6 font-medium transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-maia-presence";

const variants: Record<Variant, string> = {
  primary: "bg-maia-presence text-on-presence",
  secondary:
    "border border-ink/25 bg-transparent text-ink hover:border-ink/40",
  ghost: "bg-transparent text-ink-muted hover:text-ink",
};

export function Button({
  variant = "secondary",
  href,
  children,
  className = "",
  external,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
