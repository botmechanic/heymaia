import { howItWorks } from "@/content/site";
import { AppScreenshot } from "../AppScreenshot";
import { FlowDiagram } from "../FlowDiagram";
import { Orb } from "../Orb";
import { Section } from "../Section";

export function HowItWorks() {
  return (
    <Section id={howItWorks.id} surface>
      <div className="flex items-center gap-3">
        <Orb size="marker" />
        <p className="text-[14px] leading-5 text-ink-muted">Memory</p>
      </div>
      <h2 className="mt-4 max-w-[18ch] font-display text-[32px] leading-[38px] font-medium text-ink md:text-[44px] md:leading-[50px]">
        {howItWorks.title}
      </h2>

      <div className="mt-12 rounded-2xl border border-hairline bg-canvas p-6 md:p-8">
        <FlowDiagram />
      </div>

      {/* Mobile: keep each point as text + screenshot */}
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

      {/* Desktop: shared rows so phones share one baseline */}
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
      <h3 className="text-[18px] leading-7 font-medium text-ink">{title}</h3>
      <p className="mt-2 text-[15px] leading-6 text-ink-muted md:text-[16px] md:leading-7">
        {body}
      </p>
    </div>
  );
}
