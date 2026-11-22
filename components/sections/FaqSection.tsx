import { faq } from "@/content/site";
import { FAQ } from "../FAQ";
import { Section } from "../Section";

export function FaqSection() {
  return (
    <Section label={faq.label}>
      <h2 className="type-h2 max-w-[18ch] text-ink">{faq.title}</h2>
      <div className="mt-10">
        <FAQ />
      </div>
    </Section>
  );
}
