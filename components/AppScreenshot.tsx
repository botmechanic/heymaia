type AppScreenshotProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
};

/** Real device captures. Plain img for static export (no next/image optimizer). */
export function AppScreenshot({
  src,
  alt,
  caption,
  priority = false,
  className = "",
}: AppScreenshotProps) {
  return (
    <figure className={`mx-auto w-full max-w-[320px] md:max-w-[360px] ${className}`}>
      <div className="overflow-hidden rounded-[2rem] border border-hairline bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={1080}
          height={2400}
          decoding="async"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className="block h-auto w-full"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-[14px] leading-5 text-ink-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
