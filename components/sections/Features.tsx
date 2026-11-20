import { features } from "@/content/site";
import { FeatureIcon } from "../icons";
import { Section } from "../Section";

export function Features() {
  return (
    <Section>
      <h2 className="max-w-[18ch] font-display text-[32px] leading-[38px] font-medium text-ink md:text-[44px] md:leading-[50px]">
        {features.title}
      </h2>
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.items.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-hairline bg-surface p-6"
          >
            <FeatureIcon name={item.icon} className="text-ink-muted" />
            <h3 className="mt-4 text-[18px] leading-7 font-medium text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-[15px] leading-6 text-ink-muted">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
