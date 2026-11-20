import { faq } from "@/content/site";

export function FAQ() {
  return (
    <div className="divide-y divide-hairline rounded-2xl border border-hairline bg-surface">
      {faq.items.map((item, index) => (
        <details
          key={item.question}
          className="group"
          open={index === 0}
        >
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-[16px] leading-6 text-ink focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-maia-presence md:px-6 md:text-[17px] md:leading-7 [&::-webkit-details-marker]:hidden">
            <span className="font-medium">{item.question}</span>
            <span className="shrink-0 text-ink-muted group-open:hidden" aria-hidden="true">
              +
            </span>
            <span className="hidden shrink-0 text-ink-muted group-open:inline" aria-hidden="true">
              −
            </span>
          </summary>
          <div className="px-5 pb-5 text-[15px] leading-6 text-ink-muted md:px-6 md:text-[16px] md:leading-7">
            <p className="prose-measure">{item.answer}</p>
            {"link" in item && item.link ? (
              <p className="mt-3">
                <a
                  href={item.link.href}
                  className="text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink-muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link.label}
                </a>
              </p>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}
