import { factsStrip } from "@/content/site";

export function FactsStrip() {
  return (
    <section
      aria-label="Product facts"
      className="border-y border-hairline bg-canvas px-5 md:px-8"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-[1200px] grid-cols-2 md:grid-cols-4">
        {factsStrip.items.map((item, index) => (
          <div
            key={item.label}
            className={`px-4 py-6 md:px-6 md:py-8 ${
              index % 2 === 1 ? "border-l border-hairline" : ""
            } ${index > 1 ? "border-t border-hairline md:border-t-0" : ""} ${
              index > 0 ? "md:border-l md:border-hairline" : ""
            }`}
          >
            <p className="type-label text-ink-muted">{item.label}</p>
            <p className="type-figure mt-3 text-ink">{item.figure}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
