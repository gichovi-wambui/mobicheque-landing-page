import Reveal from "./Reveal";

/**
 * Shared hero for the interior pages. Keeps /security, /integration,
 * /for-banks and /about visually consistent with each other and distinct
 * from the landing hero.
 */
export default function PageHero({ eyebrow, title, description, meta }) {
  return (
    <section className="relative overflow-hidden border-b border-mc-border bg-mc-surface">
      <div
        aria-hidden="true"
        className="mc-grid-bg mc-fade-mask pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-30%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-mc-green/8 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-mc-green">
              <span className="h-1 w-1 rounded-full bg-mc-green" />
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-mc-ink text-balance md:text-5xl">
              {title}
            </h1>
          </Reveal>

          {description && (
            <Reveal delay={120}>
              <p className="mt-6 text-lg leading-relaxed text-mc-muted">
                {description}
              </p>
            </Reveal>
          )}

          {meta && meta.length > 0 && (
            <Reveal delay={180}>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-mc-border pt-7">
                {meta.map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs font-medium uppercase tracking-[0.12em] text-mc-faint">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 font-semibold text-mc-ink">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
