import { links, privacy } from "@/content/site";
import { AppScreenshot } from "../AppScreenshot";
import { Card } from "../Card";
import { CodeBlock } from "../CodeBlock";
import { Orb } from "../Orb";
import { Section } from "../Section";

export function Privacy() {
  return (
    <Section id={privacy.id}>
      <div className="flex items-center gap-3">
        <Orb size="marker" />
        <p className="text-[14px] leading-5 text-ink-muted">Privacy</p>
      </div>
      <h2 className="mt-4 max-w-[18ch] font-display text-[32px] leading-[38px] font-medium text-ink md:text-[44px] md:leading-[50px]">
        {privacy.title}
      </h2>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
        <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
          {privacy.statements.map((item) => (
            <li key={item.title}>
              <h3 className="text-[18px] leading-7 font-medium text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-6 text-ink-muted md:text-[16px] md:leading-7">
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        <AppScreenshot
          src={privacy.screenshot.src}
          alt={privacy.screenshot.alt}
          caption={privacy.screenshot.caption}
          className="lg:sticky lg:top-28"
        />
      </div>

      <Card className="mt-12">
        <h3 className="font-display text-[24px] leading-8 font-medium text-ink">
          {privacy.proof.title}
        </h3>
        <p className="prose-measure mt-3 text-[15px] leading-6 text-ink-muted md:text-[16px] md:leading-7">
          {privacy.proof.intro}
        </p>
        <div className="mt-5">
          <CodeBlock code={privacy.proof.code} language="xml" />
        </div>
        <p className="mt-4 text-[14px] leading-6 text-ink-muted">
          {privacy.proof.note}
        </p>
        <div className="mt-5 flex flex-wrap gap-4 text-[15px]">
          <a
            href={links.manifest}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink-muted"
          >
            {privacy.proof.manifestLinkLabel}
          </a>
          <a
            href={links.permissionAudit}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink-muted"
          >
            {privacy.proof.testLinkLabel}
          </a>
        </div>
      </Card>

      <p className="prose-measure mt-8 text-[15px] leading-6 text-ink-muted md:text-[16px] md:leading-7">
        {privacy.voiceNote}
      </p>
    </Section>
  );
}
