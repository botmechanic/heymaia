import { support } from "@/content/site";
import { Button } from "../Button";
import { Card } from "../Card";
import { Orb } from "../Orb";
import { Section } from "../Section";

export function Support() {
  return (
    <Section id={support.id} surface>
      <div className="flex items-center gap-3">
        <Orb size="marker" />
        <p className="text-[14px] leading-5 text-ink-muted">Support</p>
      </div>
      <h2 className="mt-4 max-w-[22ch] font-display text-[32px] leading-[38px] font-medium text-ink md:text-[44px] md:leading-[50px]">
        {support.title}
      </h2>
      <p className="prose-measure mt-5 text-[15px] leading-6 text-ink-muted md:text-[16px] md:leading-7">
        {support.body}
      </p>

      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {support.milestones.map((milestone) => (
          <li key={milestone.title}>
            <Card className="h-full">
              <p className="font-mono text-[13px] leading-5 text-ink-muted">
                {milestone.amount}
              </p>
              <h3 className="mt-3 text-[18px] leading-7 font-medium text-ink">
                {milestone.title}
              </h3>
              <p className="mt-2 text-[15px] leading-6 text-ink-muted">
                {milestone.body}
              </p>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Button href={support.cta.href} variant="primary" external>
          {support.cta.label}
        </Button>
      </div>
    </Section>
  );
}
