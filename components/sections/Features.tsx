import { features } from "@/content/site";
import { FeatureIcon } from "../icons";
import { Section } from "../Section";

export function Features() {
  return (
    <Section label={features.label}>
      <h2 className="type-h2 max-w-[18ch] text-ink">{features.title}</h2>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {features.items.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-hairline bg-surface p-6"
          >
            <FeatureIcon name={item.icon} className="text-ink-muted" />
            <h3 className="type-h3 mt-4 text-ink">{item.title}</h3>
            <p className="type-body mt-2 text-ink-muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
