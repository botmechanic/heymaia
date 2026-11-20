import { links, nav } from "@/content/site";
import { Button } from "./Button";
import { GitHubIcon } from "./icons";
import { MobileNav } from "./MobileNav";
import { NavScroll } from "./NavScroll";
import { Orb } from "./Orb";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <NavScroll>
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-[4.25rem] md:px-8">
        <a
          href="#top"
          className="inline-flex min-h-11 items-center gap-2.5 rounded-full pr-2 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maia-presence"
        >
          <Orb size="nav" />
          <span className="font-display text-[20px] leading-none font-medium tracking-[-0.02em]">
            {nav.wordmark}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-full px-3 text-[15px] leading-6 text-ink-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maia-presence"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            href={links.github}
            external
            variant="secondary"
            className="hidden sm:inline-flex"
          >
            <GitHubIcon />
            {nav.githubLabel}
          </Button>
          <MobileNav />
        </div>
      </div>
    </NavScroll>
  );
}
