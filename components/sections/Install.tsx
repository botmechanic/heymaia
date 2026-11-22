import { install } from "@/content/site";
import { CodeBlock } from "../CodeBlock";
import { Section } from "../Section";

export function Install() {
  return (
    <Section id={install.id} label={install.label}>
      <h2 className="type-h2 max-w-[18ch] text-ink">{install.title}</h2>
      <p className="mt-4 inline-flex rounded-full border border-hairline bg-surface px-3 py-1.5 type-small text-ink-muted">
        {install.earlyNote}
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-hairline bg-surface">
        <table className="w-full text-left type-body">
          <caption className="sr-only">Device requirements</caption>
          <tbody>
            {install.requirements.map((row) => (
              <tr
                key={row.label}
                className="border-b border-hairline last:border-b-0"
              >
                <th
                  scope="row"
                  className="w-[30%] px-5 py-4 align-top font-medium text-ink md:px-6"
                >
                  {row.label}
                </th>
                <td className="px-5 py-4 text-ink-muted md:px-6">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ol className="mt-12 space-y-10">
        {install.steps.map((step, index) => (
          <li
            key={step.title}
            className="grid gap-3 md:grid-cols-[3rem_minmax(0,1fr)]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline type-figure text-ink-muted">
              {index + 1}
            </span>
            <div className="min-w-0 max-w-full">
              <h3 className="type-h3 text-ink">{step.title}</h3>
              <p className="type-body prose-measure mt-2 text-ink-muted">
                {step.body}
              </p>
              {"links" in step && step.links ? (
                <div className="mt-3 flex flex-wrap gap-4">
                  {step.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-ink type-small"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
              {"code" in step && step.code ? (
                <div className="mt-4">
                  <CodeBlock code={step.code} language="bash" />
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-10">
        <a
          href={install.readmeCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-ink type-small"
        >
          {install.readmeCta.label}
        </a>
      </p>
    </Section>
  );
}
