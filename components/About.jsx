import Reveal from "./Reveal";

const STATS = [
  { value: "4", label: "Checks on every cheque" },
  { value: "5", label: "Fields extracted automatically" },
  { value: "100%", label: "Submissions with an audit trail" },
];

export default function About() {
  return (
    <section id="about" className="bg-mc-green-dark py-24 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-mc-green">
                <span className="h-1 w-1 rounded-full bg-mc-green" />
                Our position
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-balance md:text-4xl lg:text-[2.75rem]">
                We are not trying to replace the cheque.
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Cheques still carry real weight in how institutions and
                businesses settle with each other. What has not kept up is
                everything around them &mdash; the branch trip, the waiting, the
                silence after handing one over.
              </p>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                MobiCheque sits in that gap. It is a verification layer: it
                reads the cheque, checks it, and gives both sides a shared,
                recorded view of where it stands. Clearing and settlement stay
                exactly where they already are &mdash; with your institution.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 border-l-2 border-mc-green pl-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mc-green">
                  What that means
                </p>
                <p className="mt-2 text-xl font-semibold">
                  Verification and visibility. Not another payment rail.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <div className="grid gap-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90}>
                <div className="flex items-baseline gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                  <span className="text-4xl font-semibold tracking-[-0.02em] text-mc-green md:text-5xl">
                    {stat.value}
                  </span>
                  <span className="text-white/70">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
