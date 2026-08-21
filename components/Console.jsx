import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { CheckIcon, AlertIcon, ClockIcon } from "./Icons";

/**
 * Institution-side view. The previous landing page showed only the depositor
 * experience, which left the buyer -- a bank or SACCO -- with nothing to look
 * at. This renders the reviewer queue as DOM so it stays sharp and themeable.
 */

const ROWS = [
  {
    ref: "CHQ-000482913",
    payee: "Acacia Supplies Ltd",
    amount: "248,500.00",
    bank: "Equity Bank",
    status: "review",
    flag: "Awaiting reviewer",
  },
  {
    ref: "CHQ-000482847",
    payee: "Mwangi Hardware",
    amount: "62,000.00",
    bank: "KCB",
    status: "clear",
    flag: "All checks passed",
  },
  {
    ref: "CHQ-000482790",
    payee: "Riverbend Traders",
    amount: "1,150,000.00",
    bank: "Co-operative",
    status: "flag",
    flag: "Possible duplicate",
  },
  {
    ref: "CHQ-000482744",
    payee: "Nyali Contractors",
    amount: "89,750.00",
    bank: "Absa",
    status: "clear",
    flag: "All checks passed",
  },
];

const STATUS = {
  review: {
    label: "In review",
    Icon: ClockIcon,
    cls: "bg-mc-amber-tint text-mc-amber",
  },
  clear: {
    label: "Verified",
    Icon: CheckIcon,
    cls: "bg-mc-green-tint text-mc-green-deep",
  },
  flag: {
    label: "Flagged",
    Icon: AlertIcon,
    cls: "bg-mc-red-tint text-mc-red",
  },
};

const CAPABILITIES = [
  {
    title: "A single reviewer queue",
    body: "Incoming cheques arrive in one worklist, sorted by risk, with the captured image and extracted fields side by side.",
  },
  {
    title: "Decisions with evidence",
    body: "Each case carries the OCR output, confidence scores and every check that fired, so approvals do not rely on memory.",
  },
  {
    title: "Roles and team control",
    body: "Invite reviewers, set permissions, and keep an attributable record of who decided what and when.",
  },
];

export default function Console() {
  return (
    <section id="console" className="bg-mc-surface py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="For institutions"
          title="The console your reviewers work in"
          description="Depositors get an app. Your operations team gets a queue built for deciding on cheques quickly, with the full picture on every case."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Console mock.
              min-w-0 is load-bearing: grid items default to min-width:auto,
              so without it the table's min-w-[560px] inflates the whole
              track and pushes the page into horizontal scroll on mobile. */}
          <Reveal className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-mc-border bg-white shadow-mc-lg">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-mc-border bg-mc-surface px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-mc-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-mc-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-mc-border" />
                <span className="ml-3 rounded-md bg-white px-3 py-1 font-mono text-[10px] text-mc-faint ring-1 ring-mc-border">
                  console.mobicheque.app/queue
                </span>
              </div>

              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-mc-border px-5 py-4">
                <div>
                  <h3 className="text-sm font-semibold text-mc-ink">
                    Review queue
                  </h3>
                  <p className="text-xs text-mc-faint">
                    4 cheques awaiting action
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-mc-green-tint px-3 py-1 text-[10px] font-semibold text-mc-green-deep">
                    Live
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-[10px] font-medium text-mc-muted ring-1 ring-mc-border">
                    All banks
                  </span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left">
                  <thead>
                    <tr className="border-b border-mc-border-soft text-[10px] uppercase tracking-widest text-mc-faint">
                      <th className="px-5 py-3 font-semibold">Reference</th>
                      <th className="px-5 py-3 font-semibold">Payee</th>
                      <th className="px-5 py-3 font-semibold text-right">
                        Amount (KES)
                      </th>
                      <th className="px-5 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((row) => {
                      const s = STATUS[row.status];
                      return (
                        <tr
                          key={row.ref}
                          className="border-b border-mc-border-soft last:border-0 transition-colors hover:bg-mc-green-wash/60"
                        >
                          <td className="px-5 py-4">
                            <span className="font-mono text-xs text-mc-ink-soft">
                              {row.ref}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            <p className="text-sm font-medium text-mc-ink">
                              {row.payee}
                            </p>
                            <p className="text-[11px] text-mc-faint">
                              {row.bank}
                            </p>
                          </td>
                          <td className="px-5 py-4 text-right">
                            <span className="font-mono text-sm font-semibold text-mc-ink">
                              {row.amount}
                            </span>
                          </td>
                          <td className="px-5 py-4">
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${s.cls}`}
                            >
                              <s.Icon className="h-3 w-3" />
                              {s.label}
                            </span>
                            <p className="mt-1 text-[10px] text-mc-faint">
                              {row.flag}
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Footer stats */}
              <div className="grid grid-cols-3 divide-x divide-mc-border-soft border-t border-mc-border bg-mc-surface">
                {[
                  ["Cleared today", "128"],
                  ["Flagged", "6"],
                  ["Avg. decision", "3m 12s"],
                ].map(([label, value]) => (
                  <div key={label} className="px-5 py-4">
                    <p className="text-[10px] uppercase tracking-widest text-mc-faint">
                      {label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-mc-ink">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Capabilities */}
          <div className="min-w-0 space-y-8">
            {CAPABILITIES.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="border-l-2 border-mc-green/30 pl-6">
                  <h3 className="text-lg font-semibold text-mc-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-mc-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
