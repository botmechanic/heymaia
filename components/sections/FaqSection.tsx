import { faq } from "@/content/site";
import { FAQ } from "../FAQ";
import { Section } from "../Section";

export function FaqSection() {
  return (
    <Section>
      <h2 className="max-w-[18ch] font-display text-[32px] leading-[38px] font-medium text-ink md:text-[44px] md:leading-[50px]">
        {faq.title}
      </h2>
      <div className="mt-10">
        <FAQ />
      </div>
    </Section>
  );
}
