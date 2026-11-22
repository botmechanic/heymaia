import { useCases } from "@/content/site";
import { ConversationCard } from "../ConversationCard";
import { Section } from "../Section";

export function UseCases() {
  return (
    <Section id={useCases.id} label={useCases.label}>
      <h2 className="type-h2 max-w-[18ch] text-ink">{useCases.title}</h2>
      <p className="type-lead prose-measure mt-5 text-ink-muted">{useCases.lead}</p>

      <div className="mt-16 md:mt-20">
        {useCases.cases.map((item, index) => {
          const reverse = index % 2 === 1;
          return (
            <article
              key={item.id}
              className={`grid items-start gap-8 border-t border-hairline py-12 md:grid-cols-2 md:gap-12 md:py-16 ${
                index === useCases.cases.length - 1 ? "border-b" : ""
              }`}
            >
              <div className={reverse ? "md:order-2" : undefined}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <p className="type-label text-ink-muted">{item.category}</p>
                  {"tag" in item && item.tag ? (
                    <span className="inline-flex items-center rounded-full border border-hairline px-2.5 py-1 type-label text-ink-muted">
                      {item.tag}
                    </span>
                  ) : null}
                </div>
                <h3 className="type-h3 mt-4 max-w-[22ch] text-ink">{item.title}</h3>
                <div className="mt-5 space-y-4">
                  {item.paragraphs.map((paragraph, paragraphIndex) => {
                    const isQuote =
                      paragraphIndex === 0 && "attribution" in item;
                    return (
                      <p
                        key={paragraph}
                        className={`prose-measure ${
                          isQuote
                            ? "type-italic text-ink"
                            : "type-body text-ink-muted"
                        }`}
                      >
                        {paragraph}
                        {isQuote &&
                        "attribution" in item &&
                        item.attribution ? (
                          <span className="mt-3 block type-small text-ink-muted">
                            {item.attribution}
                          </span>
                        ) : null}
                      </p>
                    );
                  })}
                  {"mutedNote" in item && item.mutedNote ? (
                    <p className="type-small prose-measure text-ink-muted">
                      {item.mutedNote}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className={reverse ? "md:order-1" : undefined}>
                <ConversationCard
                  messages={item.conversation.messages}
                  caption={item.conversation.caption}
                />
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 md:mt-10">
        <h3 className="type-h3 text-ink">{useCases.more.title}</h3>
        <ul className="mt-8 border-t border-hairline">
          {useCases.more.items.map((item) => (
            <li
              key={item.title}
              className="grid gap-2 border-b border-hairline py-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-8 md:py-6"
            >
              <p className="type-h3 text-ink">{item.title}</p>
              <div>
                <p className="type-body text-ink-muted">{item.body}</p>
                {"href" in item && item.href ? (
                  <a href={item.href} className="link-ink type-small mt-3 inline-flex">
                    {"linkLabel" in item && item.linkLabel
                      ? item.linkLabel
                      : item.title}
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
