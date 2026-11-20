import { links, underTheHood } from "@/content/site";
import { Section } from "../Section";

export function UnderTheHood() {
  return (
    <Section surface>
      <h2 className="max-w-[18ch] font-display text-[32px] leading-[38px] font-medium text-ink md:text-[44px] md:leading-[50px]">
        {underTheHood.title}
      </h2>
      <p className="prose-measure mt-4 text-[15px] leading-6 text-ink-muted md:text-[16px] md:leading-7">
        {underTheHood.intro}
      </p>

      <dl className="mt-10 grid gap-x-10 gap-y-6 rounded-2xl border border-hairline bg-canvas p-6 md:grid-cols-2 md:p-8">
        {underTheHood.specs.map((spec) => (
          <div key={spec.label}>
            <dt className="font-mono text-[12px] leading-5 tracking-[0.04em] text-ink-muted uppercase">
              {spec.label}
            </dt>
            <dd className="mt-1 text-[15px] leading-6 text-ink md:text-[16px] md:leading-7">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex flex-wrap gap-4 text-[15px]">
        <a
          href={links.edgeGuide}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink-muted"
        >
          {underTheHood.docsLabel}
        </a>
        <a
          href={links.prd}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink-muted"
        >
          {underTheHood.prdLabel}
        </a>
      </div>
    </Section>
  );
}
