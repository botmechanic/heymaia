import { hero } from "@/content/site";
import { Orb } from "./Orb";

/**
 * TODO: Swap this HTML/CSS mock for real app screenshots once capture assets land.
 */
export function PhoneMock() {
  return (
    <div
      className="mx-auto w-full max-w-[280px] rounded-[2rem] border border-hairline bg-surface p-3 shadow-[0_24px_60px_-28px_rgba(36,29,21,0.35)]"
      aria-hidden="true"
    >
      <div className="overflow-hidden rounded-[1.4rem] border border-hairline bg-canvas">
        <div className="flex items-center gap-2 border-b border-hairline px-3 py-2.5">
          <Orb size="nav" />
          <span className="text-[13px] leading-5 text-ink-muted">
            {hero.phone.header}
          </span>
        </div>
        <div className="flex flex-col gap-3 p-3 pb-4">
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-user-bubble px-3 py-2 text-[13px] leading-5 text-ink">
            {hero.phone.userMessage}
          </div>
          <div className="max-w-[90%] text-[13px] leading-5 text-ink">
            {hero.phone.maiaReply}
          </div>
          <div className="inline-flex max-w-full items-center gap-2 self-start rounded-full border border-hairline bg-surface px-2.5 py-1.5 text-[11px] leading-4 text-ink-muted">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-maia-presence" />
            <span className="truncate">{hero.phone.memoryChip}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
