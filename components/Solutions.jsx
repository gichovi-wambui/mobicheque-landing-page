import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { BankIcon, SaccoIcon, BusinessIcon, PersonIcon, CheckIcon } from "./Icons";

const SOLUTIONS = [
  {
    Icon: BankIcon,
    title: "Banks",
    body: "Extend cheque intake beyond branch hours and give your operations team a single verified queue to work from.",
    points: ["Branch-free intake", "Risk-sorted queue", "Attributable decisions"],
  },
  {
    Icon: SaccoIcon,
    title: "SACCOs",
    body: "Let members deposit cheques from where they are, while the SACCO keeps a clear record of every submission.",
    points: ["Member self-service", "Shared status view", "Searchable history"],
  },
  {
    Icon: BusinessIcon,
    title: "Businesses",
    body: "Log incoming cheques as they arrive and reconcile against a digital record instead of a drawer of paper.",
    points: ["Capture on receipt", "Reconciliation records", "Duplicate protection"],
  },
  {
    Icon: PersonIcon,
    title: "Individuals",
    body: "Scan a cheque, pick your institution, and follow it through to cleared or rejected without a branch trip.",
    points: ["Scan from anywhere", "Pick your bank", "Live status updates"],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Solutions"
          title="Built for every side of the cheque"
          description="The same verification layer, framed around what each party actually needs from it."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {SOLUTIONS.map(({ Icon, title, body, points }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-mc-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-mc-green/30 hover:shadow-mc-md">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mc-green-tint text-mc-green-deep transition-colors duration-300 group-hover:bg-mc-green group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.01em] text-mc-ink">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-mc-muted">{body}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="inline-flex items-center gap-1.5 rounded-full bg-mc-surface px-3 py-1.5 text-xs font-medium text-mc-ink-soft"
                    >
                      <CheckIcon className="h-3 w-3 text-mc-green" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
