import { footer } from "@/content/site";
import { Orb } from "./Orb";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas px-5 py-16 md:px-8">
      <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2.5">
            <Orb size="nav" />
            <span className="font-display text-[20px] leading-none font-medium tracking-[-0.02em] text-ink">
              {footer.wordmark}
            </span>
          </div>
          <p className="mt-3 max-w-sm text-[15px] leading-6 text-ink-muted">
            {footer.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-[15px] text-ink-muted underline decoration-transparent underline-offset-4 hover:text-ink hover:decoration-hairline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 w-full min-w-0 max-w-6xl space-y-2 border-t border-hairline pt-8 text-[14px] leading-6 text-ink-muted">
        <p>{footer.copyright}</p>
        <p>{footer.privacyLine}</p>
      </div>
    </footer>
  );
}
