import { links, privacy } from "@/content/site";
import { AppScreenshot } from "../AppScreenshot";
import { Card } from "../Card";
import { CodeBlock } from "../CodeBlock";
import { Section } from "../Section";

export function Privacy() {
  return (
    <Section id={privacy.id} label={privacy.label} surface>
      <h2 className="type-h2 max-w-[18ch] text-ink">{privacy.title}</h2>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
        <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
          {privacy.statements.map((item) => (
            <li key={item.title}>
              <h3 className="type-h3 text-ink">{item.title}</h3>
              <p className="type-body mt-2 text-ink-muted">{item.body}</p>
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
        <h3 className="type-h3 text-ink">{privacy.proof.title}</h3>
        <p className="type-body prose-measure mt-3 text-ink-muted">
          {privacy.proof.intro}
        </p>
        <div className="mt-5">
          <CodeBlock code={privacy.proof.code} language="xml" />
        </div>
        <p className="type-small mt-4 text-ink-muted">{privacy.proof.note}</p>
        <div className="mt-5 flex flex-wrap gap-4">
          <a
            href={links.manifest}
            target="_blank"
            rel="noopener noreferrer"
            className="link-ink type-small"
          >
            {privacy.proof.manifestLinkLabel}
          </a>
          <a
            href={links.permissionAudit}
            target="_blank"
            rel="noopener noreferrer"
            className="link-ink type-small"
          >
            {privacy.proof.testLinkLabel}
          </a>
        </div>
      </Card>

      <p className="type-body prose-measure mt-8 text-ink-muted">
        {privacy.voiceNote}
      </p>
    </Section>
  );
}
