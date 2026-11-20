import type { Metadata } from "next";
import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import { Orb } from "@/components/Orb";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Maia type specimen",
  description: "Internal typography and token specimen for heymaia.app v2.",
  robots: {
    index: false,
    follow: false,
  },
};

const palette = [
  { name: "canvas", token: "--canvas", swatch: "bg-canvas", note: "Page background" },
  { name: "surface", token: "--surface", swatch: "bg-surface", note: "Raised panels" },
  { name: "ink", token: "--ink", swatch: "bg-ink", note: "Primary text" },
  { name: "inkMuted", token: "--ink-muted", swatch: "bg-ink-muted", note: "Secondary text" },
  { name: "hairline", token: "--hairline", swatch: "bg-hairline", note: "Rules / borders" },
  {
    name: "maiaPresence",
    token: "--maia-presence",
    swatch: "bg-maia-presence",
    note: "Orb + primary button only",
  },
  {
    name: "maiaGlow",
    token: "--maia-glow",
    swatch: "bg-maia-glow",
    note: "Orb gradient only",
  },
  { name: "success", token: "--success", swatch: "bg-success", note: "Copied feedback" },
] as const;

const typeRows = [
  {
    name: "display",
    className: "type-display",
    sample: "She remembers. She protects. She’s yours.",
    meta: "Newsreader 300 · 84/88 · 48/52 · −0.025em",
  },
  {
    name: "h2",
    className: "type-h2",
    sample: "Private by construction.",
    meta: "Newsreader 300 · 52/58 · 34/40 · −0.02em",
  },
  {
    name: "h3",
    className: "type-h3",
    sample: "No internet permission",
    meta: "Newsreader 400 · 26/34 · 22/30 · −0.01em",
  },
  {
    name: "lead",
    className: "type-lead",
    sample:
      "Maia is a warm AI companion that lives entirely on your Android phone. No cloud, no account, no internet permission.",
    meta: "Inter 400 · 22/34 · 19/30 · −0.01em",
  },
  {
    name: "body",
    className: "type-body",
    sample:
      "Your memories are encrypted on the phone with SQLCipher. The key is protected by the Android Keystore, hardware-backed on supported devices.",
    meta: "Inter 400 · 18/30 · 17/28",
  },
  {
    name: "small",
    className: "type-small",
    sample: "This site uses no cookies, analytics or trackers.",
    meta: "Inter 400 · 15/24",
  },
  {
    name: "label",
    className: "type-label",
    sample: "01 — Privacy",
    meta: "JetBrains Mono 500 · 12/16 · 0.12em · uppercase",
  },
  {
    name: "figure",
    className: "type-figure",
    sample: "Gemma 3 1B · SQLCipher 4.6.1 · Apache 2.0",
    meta: "JetBrains Mono 400 · 15/24 · tabular-nums",
  },
] as const;

export default function TypeSpecimenPage() {
  return (
    <div className="bg-canvas text-ink">
      <header className="border-b border-hairline">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-5 md:px-8">
          <div>
            <p className="type-label text-ink-muted">Specimen · v2</p>
            <h1 className="type-h3 mt-2">Typography and tokens</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="link-ink type-small">
              Back to site
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16">
        <section className="border-b border-hairline pb-16">
          <p className="type-label text-ink-muted">01 — Type scale</p>
          <p className="type-lead prose-measure mt-4 text-ink-muted">
            Eight styles only. Headings stay light; hierarchy comes from size and
            whitespace. Italic is used once below for emphasis.
          </p>

          <div className="mt-12 space-y-12">
            {typeRows.map((row) => (
              <div
                key={row.name}
                className="grid gap-4 border-t border-hairline pt-8 md:grid-cols-[10rem_minmax(0,1fr)]"
              >
                <div>
                  <p className="type-label text-ink-muted">{row.name}</p>
                  <p className="type-small mt-2 text-ink-muted">{row.meta}</p>
                </div>
                <div className="min-w-0">
                  <p className={`${row.className} text-ink`}>{row.sample}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="type-body prose-measure mt-12 text-ink">
            Occasional italic:{" "}
            <span className="type-italic">
              she keeps a private journal
            </span>
            , never in terracotta.
          </p>
        </section>

        <section className="border-b border-hairline py-16">
          <p className="type-label text-ink-muted">02 — Palette</p>
          <p className="type-lead prose-measure mt-4 text-ink-muted">
            Morning Hearth and Evening Hearth tokens. Terracotta and amber stay
            reserved.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {palette.map((swatch) => (
              <li
                key={swatch.name}
                className="overflow-hidden rounded-lg border border-hairline bg-surface"
              >
                <div className={`h-20 border-b border-hairline ${swatch.swatch}`} />
                <div className="p-4">
                  <p className="type-figure text-ink">{swatch.name}</p>
                  <p className="type-small mt-1 text-ink-muted">{swatch.token}</p>
                  <p className="type-small mt-2 text-ink-muted">{swatch.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-b border-hairline py-16">
          <p className="type-label text-ink-muted">03 — Buttons and links</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button type="button" className="btn btn-primary">
              Get Maia on GitHub
            </button>
            <button type="button" className="btn btn-secondary">
              How it works
            </button>
            <a href="#ledger" className="link-ink type-small">
              Verify it in the repo
            </a>
          </div>
          <p className="type-small mt-6 text-ink-muted">
            Primary: terracotta / white. Secondary: hairline border, 8&nbsp;px
            radius, 44&nbsp;px height. Link underline turns terracotta on hover.
          </p>
        </section>

        <section id="ledger" className="border-b border-hairline py-16">
          <p className="type-label text-ink-muted">04 — Privacy ledger row</p>
          <p className="type-lead prose-measure mt-4 text-ink-muted">
            Disclosure-table tone: claim, enforcement, verify.
          </p>

          <div className="mt-10 overflow-hidden rounded-lg border border-hairline bg-surface">
            <div className="hidden border-b border-hairline md:grid md:grid-cols-[1.1fr_1.4fr_0.9fr]">
              <p className="type-label px-5 py-3 text-ink-muted">Claim</p>
              <p className="type-label px-5 py-3 text-ink-muted">
                How it’s enforced
              </p>
              <p className="type-label px-5 py-3 text-ink-muted">Verify it</p>
            </div>
            <div className="grid gap-4 px-5 py-5 md:grid-cols-[1.1fr_1.4fr_0.9fr] md:gap-6 md:py-6">
              <div>
                <p className="type-label text-ink-muted md:hidden">Claim</p>
                <h2 className="type-h3 mt-2 text-ink md:mt-0">
                  No internet permission
                </h2>
              </div>
              <div>
                <p className="type-label text-ink-muted md:hidden">
                  How it’s enforced
                </p>
                <p className="type-body mt-2 text-ink-muted md:mt-0">
                  Manifest strips{" "}
                  <span className="type-figure text-ink">INTERNET</span> and{" "}
                  <span className="type-figure text-ink">ACCESS_NETWORK_STATE</span>
                  . A unit test fails the build if they reappear.
                </p>
              </div>
              <div>
                <p className="type-label text-ink-muted md:hidden">Verify it</p>
                <a
                  href="https://github.com/botmechanic/maia/blob/main/app/src/test/java/com/example/PermissionAuditTest.kt"
                  className="link-ink type-small mt-2 inline-flex items-center gap-1 md:mt-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PermissionAuditTest.kt
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-hairline py-16">
          <p className="type-label text-ink-muted">05 — Code</p>
          <div className="mt-8 max-w-3xl">
            <CodeBlock
              language="xml"
              code={`<uses-permission android:name="android.permission.INTERNET" tools:node="remove" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" tools:node="remove" />`}
            />
            <p className="type-small mt-4 text-success">Copied confirmation uses sage.</p>
          </div>
        </section>

        <section className="py-16">
          <p className="type-label text-ink-muted">06 — Presence</p>
          <div className="mt-10 flex flex-wrap items-end gap-10">
            <div className="text-center">
              <Orb size="hero" />
              <p className="type-small mt-4 text-ink-muted">Hero · ~220–320&nbsp;px</p>
            </div>
            <div className="text-center">
              <Orb size="marker" />
              <p className="type-small mt-4 text-ink-muted">Marker · 40&nbsp;px</p>
            </div>
            <div className="text-center">
              <Orb size="nav" />
              <p className="type-small mt-4 text-ink-muted">Nav · 28&nbsp;px</p>
            </div>
          </div>
          <p className="type-small prose-measure mt-8 text-ink-muted">
            Amber appears only inside the orb. Terracotta is reserved for the orb
            and the single primary button per section.
          </p>
        </section>
      </main>
    </div>
  );
}
