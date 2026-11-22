import { links, underTheHood } from "@/content/site";
import { Section } from "../Section";

export function UnderTheHood() {
  return (
    <Section label={underTheHood.label} surface>
      <h2 className="type-h2 max-w-[18ch] text-ink">{underTheHood.title}</h2>
      <p className="type-lead prose-measure mt-4 text-ink-muted">
        {underTheHood.intro}
      </p>

      <dl className="mt-10 grid gap-x-10 gap-y-6 rounded-2xl border border-hairline bg-canvas p-6 md:grid-cols-2 md:p-8">
        {underTheHood.specs.map((spec) => (
          <div key={spec.label}>
            <dt className="type-label text-ink-muted">{spec.label}</dt>
            <dd className="type-body mt-1 text-ink">{spec.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={links.edgeGuide}
          target="_blank"
          rel="noopener noreferrer"
          className="link-ink type-small"
        >
          {underTheHood.docsLabel}
        </a>
        <a
          href={links.prd}
          target="_blank"
          rel="noopener noreferrer"
          className="link-ink type-small"
        >
          {underTheHood.prdLabel}
        </a>
      </div>
    </Section>
  );
}
