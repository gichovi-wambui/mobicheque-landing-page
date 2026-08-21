import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  OcrIcon,
  DuplicateIcon,
  ShieldIcon,
  RouteIcon,
  AuditIcon,
  LockIcon,
  TrackIcon,
  RecordsIcon,
} from "./Icons";

/**
 * Replaces the old Features and Security sections, which repeated the same
 * three claims between them. One section, two tiers: the checks that run on
 * every cheque, then the controls around them.
 */

const CHECKS = [
  {
    Icon: OcrIcon,
    title: "Field extraction",
    body: "Payee, amount, cheque number, date and drawer bank are read off the image, each with its own confidence score.",
    tag: "Automated",
  },
  {
    Icon: DuplicateIcon,
    title: "Duplicate detection",
    body: "Every submission is matched against cheque history so the same instrument cannot be presented twice.",
    tag: "Automated",
  },
  {
    Icon: ShieldIcon,
    title: "Fraud signals",
    body: "Alterations, mismatched amounts and inconsistent formatting are flagged with the evidence attached to the case.",
    tag: "Automated",
  },
  {
    Icon: RouteIcon,
    title: "Reviewer routing",
    body: "Flagged and clean cheques alike land in a reviewer queue, so a person makes the final call with full context.",
    tag: "Human in the loop",
  },
];

const CONTROLS = [
  {
    Icon: LockIcon,
    title: "Secure handling",
    body: "Cheque images and extracted data move through access-controlled workflows.",
  },
  {
    Icon: AuditIcon,
    title: "Audit trail",
    body: "Every action is timestamped and attributed, from capture through final decision.",
  },
  {
    Icon: TrackIcon,
    title: "Status visibility",
    body: "Both sides see the same stage the cheque is at, at the same time.",
  },
  {
    Icon: RecordsIcon,
    title: "Digital records",
    body: "Searchable cheque history replaces filing and manual reconciliation.",
  },
];

export default function Verification() {
  return (
    <section id="verification" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The verification engine"
          title="What runs on every cheque"
          description="MobiCheque does not decide on its own. It gathers the evidence, applies the checks, and hands a reviewer everything they need to decide quickly."
        />

        {/* Primary checks */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CHECKS.map(({ Icon, title, body, tag }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-mc-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-mc-green/30 hover:shadow-mc-md">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mc-green-tint text-mc-green-deep transition-colors duration-300 group-hover:bg-mc-green group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      tag === "Automated"
                        ? "bg-mc-green-wash text-mc-green-deep"
                        : "bg-mc-amber-tint text-mc-amber"
                    }`}
                  >
                    {tag}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-mc-ink">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-mc-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Controls band */}
        <Reveal delay={100}>
          <div className="mt-8 rounded-2xl border border-mc-border bg-mc-surface p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mc-faint">
              And around all of it
            </p>

            <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {CONTROLS.map(({ Icon, title, body }) => (
                <div key={title}>
                  <Icon className="h-5 w-5 text-mc-green" />
                  <h4 className="mt-4 font-semibold text-mc-ink">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-mc-muted">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
