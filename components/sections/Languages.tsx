"use client";

import { useId, useState } from "react";
import { languages } from "@/content/site";
import { Section } from "../Section";

type LanguageId = (typeof languages.items)[number]["id"];

export function Languages() {
  const baseId = useId();
  const [activeId, setActiveId] = useState<LanguageId>(languages.items[0].id);
  const active =
    languages.items.find((item) => item.id === activeId) ?? languages.items[0];
  const tablistId = `${baseId}-tabs`;
  const panelId = `${baseId}-panel`;

  function selectByOffset(offset: number) {
    const index = languages.items.findIndex((item) => item.id === activeId);
    const next =
      (index + offset + languages.items.length) % languages.items.length;
    const nextItem = languages.items[next];
    setActiveId(nextItem.id);
    document.getElementById(`${baseId}-tab-${nextItem.id}`)?.focus();
  }

  return (
    <Section id={languages.id} label={languages.label} surface>
      <h2 className="type-h2 max-w-[20ch] text-ink">{languages.title}</h2>
      <p className="type-lead prose-measure mt-5 text-ink-muted">
        {languages.subtitle}
      </p>

      <div
        id={tablistId}
        role="tablist"
        aria-label="Supported languages"
        className="mt-10 flex flex-wrap gap-2"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            event.preventDefault();
            selectByOffset(1);
          } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            event.preventDefault();
            selectByOffset(-1);
          } else if (event.key === "Home") {
            event.preventDefault();
            setActiveId(languages.items[0].id);
            document
              .getElementById(`${baseId}-tab-${languages.items[0].id}`)
              ?.focus();
          } else if (event.key === "End") {
            event.preventDefault();
            const last = languages.items[languages.items.length - 1];
            setActiveId(last.id);
            document.getElementById(`${baseId}-tab-${last.id}`)?.focus();
          }
        }}
      >
        {languages.items.map((item) => {
          const selected = item.id === activeId;
          return (
            <button
              key={item.id}
              id={`${baseId}-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              lang={item.lang}
              onClick={() => setActiveId(item.id)}
              className={`inline-flex min-h-11 items-center rounded-full border px-4 text-[14px] leading-5 transition-[border-color,background-color,color] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maia-presence ${
                selected
                  ? "border-ink bg-surface text-ink"
                  : "border-hairline bg-transparent text-ink-muted hover:border-ink-muted hover:text-ink"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active.id}`}
        lang={active.lang}
        className="mt-8 rounded-2xl border border-hairline bg-surface p-6 md:p-8"
      >
        <div
          key={active.id}
          className="preview-fade flex flex-col gap-4"
        >
          <p className="max-w-[42ch] text-[17px] leading-7 text-ink md:text-[18px] md:leading-[30px]">
            {active.greeting}
          </p>
          <span className="inline-flex w-fit items-center rounded-full border border-hairline px-3 py-1 text-[11px] leading-4 tracking-[0.04em] text-ink-muted">
            {active.badge}
          </span>
        </div>
      </div>

      <p className="mt-6 max-w-[62ch] text-[13px] leading-5 text-ink-muted md:text-[14px] md:leading-6">
        {languages.note}
      </p>
    </Section>
  );
}
