type Message = {
  role: "user" | "maia";
  text: string;
  memory?: string;
  list?: readonly string[];
};

type ConversationCardProps = {
  messages: readonly Message[];
  caption: string;
};

export function ConversationCard({ messages, caption }: ConversationCardProps) {
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-2xl border border-hairline bg-surface p-5 md:p-6">
        <ul className="flex flex-col gap-4">
          {messages.map((message, index) => (
            <li key={`${message.role}-${index}`} className="min-w-0">
              {message.role === "user" ? (
                <>
                  <span className="sr-only">You said: </span>
                  <p className="ml-auto max-w-[92%] rounded-2xl rounded-br-md bg-user-bubble px-3.5 py-2.5 type-small text-ink">
                    {message.text}
                  </p>
                </>
              ) : (
                <>
                  <span className="sr-only">Maia replied: </span>
                  <div className="max-w-[95%] space-y-3">
                    <p className="type-small text-ink">{message.text}</p>
                    {message.list ? (
                      <ul className="space-y-2 border-l border-hairline pl-3">
                        {message.list.map((item) => (
                          <li key={item} className="type-body text-ink">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {message.memory ? (
                      <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-hairline bg-canvas px-2.5 py-1.5 type-small text-ink-muted">
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-maia-presence"
                          aria-hidden="true"
                        />
                        <span className="min-w-0 truncate">{message.memory}</span>
                      </p>
                    ) : null}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-3 type-small text-ink-muted">{caption}</figcaption>
    </figure>
  );
}
