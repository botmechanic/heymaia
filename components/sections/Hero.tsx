import { hero } from "@/content/site";
import { AppScreenshot } from "../AppScreenshot";
import { Button } from "../Button";
import { Orb } from "../Orb";
import { Reveal } from "../Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="overflow-hidden px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16"
    >
      <Reveal className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[14px] leading-5 tracking-[0.02em] text-ink-muted md:text-[15px] md:leading-6">
            {hero.overline}
          </p>
          <h1 className="mt-4 max-w-[14ch] font-display text-[44px] leading-[48px] font-medium text-ink md:text-[64px] md:leading-[68px]">
            {hero.headline}
          </h1>
          <p className="prose-measure mt-6 text-[17px] leading-7 text-ink-muted md:text-[18px] md:leading-[30px]">
            {hero.subline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href} variant="primary" external>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="relative flex min-h-[28rem] items-center justify-center lg:min-h-[32rem] lg:justify-end">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-6">
            <Orb size="hero" />
          </div>
          <div className="relative z-10 w-full translate-y-10 sm:translate-y-14">
            <AppScreenshot
              src={hero.screenshot.src}
              alt={hero.screenshot.alt}
              priority
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
