import Reveal from "./Reveal";

/**
 * Consistent section header. Note the hierarchy: the eyebrow is a small
 * uppercase label and the h2 is the largest element -- the previous build
 * had these inverted.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-mc-green ${
              centered ? "justify-center" : ""
            }`}
          >
            <span className="h-1 w-1 rounded-full bg-mc-green" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={60}>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.02em] text-mc-ink leading-[1.12] text-balance">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={120}>
          <p
            className={`mt-5 text-lg leading-relaxed text-mc-muted ${
              centered ? "mx-auto max-w-2xl" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
