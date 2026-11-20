import { howItWorks } from "@/content/site";

export function FlowDiagram() {
  const steps = howItWorks.flow;

  return (
    <ol className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
      {steps.map((step, index) => (
        <li
          key={step.label}
          className="flex flex-1 flex-col md:min-w-0 md:items-center"
        >
          <div className="flex items-start gap-3 md:flex-col md:items-center md:gap-3 md:text-center">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface font-mono text-[12px] text-ink-muted md:mt-0">
              {index + 1}
            </span>
            <div className="min-w-0">
              <p className="text-[15px] leading-6 text-ink md:text-[16px] md:leading-7">
                {step.label}
              </p>
              {"detail" in step && step.detail ? (
                <p className="mt-1 text-[13px] leading-5 text-ink-muted">
                  {step.detail}
                </p>
              ) : null}
            </div>
          </div>
          {index < steps.length - 1 ? (
            <div
              className="my-1 ml-4 h-4 w-px bg-hairline md:mx-auto md:mt-4 md:mb-0 md:h-px md:w-[calc(100%-2rem)]"
              aria-hidden="true"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
