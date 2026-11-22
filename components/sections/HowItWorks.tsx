import { howItWorks } from "@/content/site";
import { AppScreenshot } from "../AppScreenshot";
import { FlowDiagram } from "../FlowDiagram";
import { Section } from "../Section";

export function HowItWorks() {
  return (
    <Section id={howItWorks.id} label={howItWorks.label}>
      <h2 className="type-h2 max-w-[18ch] text-ink">{howItWorks.title}</h2>

      <div className="mt-12 rounded-2xl border border-hairline bg-surface p-6 md:p-8">
        <FlowDiagram />
      </div>

      <div className="mt-10 grid gap-10 md:hidden">
        {howItWorks.points.map((point) => (
          <div key={point.title} className="flex flex-col gap-6">
            <PointCopy title={point.title} body={point.body} />
            <AppScreenshot
              src={point.screenshot.src}
              alt={point.screenshot.alt}
              caption={point.screenshot.caption}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 hidden md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-8">
        {howItWorks.points.map((point) => (
          <PointCopy key={point.title} title={point.title} body={point.body} />
        ))}
        {howItWorks.points.map((point) => (
          <AppScreenshot
            key={point.screenshot.src}
            src={point.screenshot.src}
            alt={point.screenshot.alt}
            caption={point.screenshot.caption}
          />
        ))}
      </div>
    </Section>
  );
}

function PointCopy({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="type-h3 text-ink">{title}</h3>
      <p className="type-body mt-2 text-ink-muted">{body}</p>
    </div>
  );
}
