import { support } from "@/content/site";
import { Button } from "../Button";
import { Card } from "../Card";
import { Section } from "../Section";

export function Support() {
  return (
    <Section id={support.id} label={support.label} surface>
      <h2 className="type-h2 max-w-[22ch] text-ink">{support.title}</h2>
      <p className="type-lead prose-measure mt-5 text-ink-muted">{support.body}</p>

      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {support.milestones.map((milestone) => (
          <li key={milestone.title}>
            <Card className="h-full">
              <p className="type-figure text-ink-muted">{milestone.amount}</p>
              <h3 className="type-h3 mt-3 text-ink">{milestone.title}</h3>
              <p className="type-body mt-2 text-ink-muted">{milestone.body}</p>
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
