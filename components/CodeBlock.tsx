"use client";

import { useState } from "react";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export function CodeBlock({ code, language = "text" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const area = document.createElement("textarea");
        area.value = code;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.left = "-9999px";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        document.body.removeChild(area);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="relative max-w-full overflow-hidden rounded-xl border border-hairline bg-canvas">
      <div className="flex items-center justify-between gap-3 border-b border-hairline px-4 py-2">
        <span className="font-mono text-[12px] leading-5 text-ink-muted">
          {language}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="min-h-11 shrink-0 rounded-lg px-3 text-[14px] leading-5 text-ink-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maia-presence"
          aria-live="polite"
        >
          {copied ? (
            <span className="text-success">Copied</span>
          ) : (
            "Copy"
          )}
        </button>
      </div>
      <pre className="max-w-full overflow-x-auto p-4 text-[13px] leading-5 md:text-[14px] md:leading-6">
        <code className="font-mono text-ink whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
