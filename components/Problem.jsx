import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ClockIcon, AlertIcon, PaperIcon, ArrowRightIcon } from "./Icons";

const PAIN = [
  {
    Icon: ClockIcon,
    title: "The branch trip",
    body: "A cheque cannot start moving until someone physically carries it to a counter during banking hours.",
  },
  {
    Icon: AlertIcon,
    title: "Late fraud discovery",
    body: "Alterations, duplicates and stale-dated cheques surface deep into the process, after effort has already been spent.",
  },
  {
    Icon: PaperIcon,
    title: "Records that go quiet",
    body: "Once a cheque is handed over, neither the depositor nor the institution has a live view of where it actually is.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The problem"
          title="Cheques still move at the speed of paper"
          description="Cheques remain central to how institutions and businesses pay each other. The instrument is not the problem — the manual handling around it is."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PAIN.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-mc-border bg-mc-surface p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-mc-border bg-white text-mc-ink-soft shadow-mc-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-mc-ink">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-mc-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Before / after */}
        <Reveal delay={120}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-mc-border bg-white shadow-mc-sm">
            <div className="grid md:grid-cols-[1fr_auto_1fr]">
              <div className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mc-faint">
                  Today
                </p>
                <p className="mt-3 text-xl font-semibold leading-snug text-mc-ink-soft">
                  Travel to a branch, hand over the cheque, wait without
                  visibility.
                </p>
              </div>

              <div className="flex items-center justify-center border-mc-border px-6 py-2 md:border-x">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mc-green-tint">
                  <ArrowRightIcon className="h-5 w-5 rotate-90 text-mc-green md:rotate-0" />
                </span>
              </div>

              <div className="bg-mc-green-wash p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mc-green">
                  With MobiCheque
                </p>
                <p className="mt-3 text-xl font-semibold leading-snug text-mc-ink">
                  Scan where you are, get verified in minutes, track it to a
                  final status.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
