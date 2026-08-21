"use client";

import { useState } from "react";
import {
  ScanIcon,
  OcrIcon,
  ShieldIcon,
  TrackIcon,
  RouteIcon,
  AuditIcon,
  CheckIcon,
  ClockIcon,
  AlertIcon,
  ArrowRightIcon,
} from "./Icons";

/**
 * Click-through tour of both surfaces. Built as DOM so it stays sharp, works
 * without a backend, and can be explored by a prospect who is not ready to
 * book a call yet.
 *
 * The data below is illustrative sample content, not real cheque data.
 */

/* ---------------------------------------------------------------- */
/* Shared chrome                                                     */
/* ---------------------------------------------------------------- */

function PhoneFrame({ children, caption }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[300px] rounded-[2.5rem] bg-mc-ink p-3 shadow-mc-lg ring-1 ring-black/5">
        <div className="overflow-hidden rounded-[1.9rem] bg-white">
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-medium text-mc-ink">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-mc-green" />
              <span className="text-mc-faint">5G</span>
            </div>
          </div>
          {children}
        </div>
      </div>
      {caption && (
        <p className="mt-5 max-w-xs text-center text-xs leading-relaxed text-mc-faint">
          {caption}
        </p>
      )}
    </div>
  );
}

function BrowserFrame({ children, path, caption }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-2xl border border-mc-border bg-white shadow-mc-lg">
        <div className="flex items-center gap-2 border-b border-mc-border bg-mc-surface px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-mc-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-mc-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-mc-border" />
          <span className="ml-3 truncate rounded-md bg-white px-3 py-1 font-mono text-[10px] text-mc-faint ring-1 ring-mc-border">
            {path}
          </span>
        </div>
        {children}
      </div>
      {caption && (
        <p className="mt-5 text-center text-xs leading-relaxed text-mc-faint">
          {caption}
        </p>
      )}
    </div>
  );
}

function ChequeFace({ compact = false }) {
  return (
    <div
      className={`rounded-lg bg-white p-3 shadow-sm ring-1 ring-mc-border-soft ${
        compact ? "" : "p-4"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="h-1.5 w-16 rounded-full bg-mc-ink/15" />
        <div className="h-1.5 w-9 rounded-full bg-mc-ink/10" />
      </div>
      <div className="mt-3.5 space-y-2">
        <div className="h-1.5 w-[72%] rounded-full bg-mc-ink/10" />
        <div className="h-1.5 w-[48%] rounded-full bg-mc-ink/10" />
      </div>
      <div className="mt-3.5 flex items-end justify-between">
        <div className="h-1.5 w-14 rounded-full bg-mc-ink/10" />
        <div className="h-6 w-20 rounded border border-mc-green/30 bg-mc-green-tint" />
      </div>
      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: 26 }).map((_, i) => (
          <span key={i} className="h-2.5 w-[2px] rounded-sm bg-mc-ink/25" />
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Mobile app screens                                                */
/* ---------------------------------------------------------------- */

const FIELDS = [
  { label: "Payee", value: "Acacia Supplies Ltd", conf: 99 },
  { label: "Amount", value: "KES 248,500.00", conf: 98 },
  { label: "Cheque No.", value: "000482913", conf: 99 },
  { label: "Date", value: "14 / 08 / 2026", conf: 94 },
  { label: "Drawer Bank", value: "Equity Bank", conf: 97 },
];

function AppCapture() {
  return (
    <>
      <div className="px-5 py-3">
        <p className="text-[10px] uppercase tracking-widest text-mc-faint">
          Step 1 of 4
        </p>
        <p className="text-sm font-semibold text-mc-ink">Capture cheque</p>
      </div>

      <div className="mx-4 mb-4 overflow-hidden rounded-xl border border-mc-border">
        <div className="relative h-[170px] bg-[linear-gradient(135deg,#f2f7f5,#e9f3ef)] p-3">
          <ChequeFace />
          {[
            "top-2 left-2 border-t-2 border-l-2 rounded-tl",
            "top-2 right-2 border-t-2 border-r-2 rounded-tr",
            "bottom-2 left-2 border-b-2 border-l-2 rounded-bl",
            "bottom-2 right-2 border-b-2 border-r-2 rounded-br",
          ].map((pos) => (
            <span
              key={pos}
              className={`absolute h-5 w-5 border-mc-green ${pos}`}
            />
          ))}
        </div>
      </div>

      <div className="px-5 pb-5">
        <div className="flex items-center gap-2 rounded-xl bg-mc-green-wash px-3 py-2.5">
          <CheckIcon className="h-4 w-4 shrink-0 text-mc-green" />
          <span className="text-[11px] font-medium text-mc-ink">
            Edges detected &middot; focus sharp
          </span>
        </div>
        <div className="mt-3 rounded-xl bg-mc-green py-3 text-center text-xs font-semibold text-white">
          Capture
        </div>
      </div>
    </>
  );
}

function AppConfirm() {
  return (
    <>
      <div className="px-5 py-3">
        <p className="text-[10px] uppercase tracking-widest text-mc-faint">
          Step 2 of 4
        </p>
        <p className="text-sm font-semibold text-mc-ink">Confirm details</p>
      </div>

      <div className="space-y-1.5 px-5 pb-4">
        {FIELDS.map((f) => (
          <div
            key={f.label}
            className="rounded-lg border border-mc-green/20 bg-mc-green-wash px-3 py-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-mc-muted">{f.label}</span>
              <span
                className={`font-mono text-[9px] ${
                  f.conf >= 97 ? "text-mc-green" : "text-mc-amber"
                }`}
              >
                {f.conf}%
              </span>
            </div>
            <p className="mt-0.5 text-[11px] font-semibold text-mc-ink">
              {f.value}
            </p>
          </div>
        ))}
      </div>

      <div className="px-5 pb-5">
        <p className="text-[10px] leading-relaxed text-mc-faint">
          Tap any field to correct it before submitting.
        </p>
        <div className="mt-3 rounded-xl bg-mc-green py-3 text-center text-xs font-semibold text-white">
          Submit cheque
        </div>
      </div>
    </>
  );
}

function AppChecks() {
  const checks = [
    { label: "Duplicate history", result: "No match found", ok: true },
    { label: "Date validity", result: "Within validity period", ok: true },
    { label: "Amount consistency", result: "Figures and words agree", ok: true },
    { label: "Image quality", result: "Passed", ok: true },
  ];

  return (
    <>
      <div className="px-5 py-3">
        <p className="text-[10px] uppercase tracking-widest text-mc-faint">
          Step 3 of 4
        </p>
        <p className="text-sm font-semibold text-mc-ink">Verification</p>
      </div>

      <div className="space-y-1.5 px-5 pb-4">
        {checks.map((c) => (
          <div
            key={c.label}
            className="flex items-center justify-between rounded-lg border border-mc-border-soft px-3 py-2.5"
          >
            <div>
              <p className="text-[10px] text-mc-muted">{c.label}</p>
              <p className="mt-0.5 text-[11px] font-medium text-mc-ink">
                {c.result}
              </p>
            </div>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-mc-green-tint">
              <CheckIcon className="h-3 w-3 text-mc-green" />
            </span>
          </div>
        ))}
      </div>

      <div className="px-5 pb-5">
        <div className="flex items-center gap-2 rounded-xl bg-mc-green px-3 py-2.5 text-white">
          <RouteIcon className="h-4 w-4 shrink-0" />
          <span className="text-[11px] font-semibold">
            Sent to your bank&rsquo;s reviewer
          </span>
        </div>
      </div>
    </>
  );
}

function AppTrack() {
  const timeline = [
    { label: "Submitted", time: "09:41", state: "done" },
    { label: "Checks completed", time: "09:41", state: "done" },
    { label: "In reviewer queue", time: "09:42", state: "done" },
    { label: "Reviewer decision", time: "Pending", state: "active" },
    { label: "Final status", time: "—", state: "idle" },
  ];

  return (
    <>
      <div className="px-5 py-3">
        <p className="text-[10px] uppercase tracking-widest text-mc-faint">
          Step 4 of 4
        </p>
        <p className="text-sm font-semibold text-mc-ink">Track cheque</p>
      </div>

      <div className="mx-5 mb-4 rounded-xl border border-mc-border bg-mc-surface p-3">
        <p className="font-mono text-[10px] text-mc-faint">CHQ-000482913</p>
        <p className="mt-1 text-sm font-semibold text-mc-ink">
          KES 248,500.00
        </p>
        <p className="text-[10px] text-mc-muted">Acacia Supplies Ltd</p>
      </div>

      <div className="px-5 pb-5">
        {timeline.map((t, i) => (
          <div key={t.label} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  t.state === "done"
                    ? "bg-mc-green"
                    : t.state === "active"
                      ? "bg-mc-amber"
                      : "bg-mc-border"
                }`}
              >
                {t.state === "done" && (
                  <CheckIcon className="h-2.5 w-2.5 text-white" />
                )}
              </span>
              {i < timeline.length - 1 && (
                <span
                  className={`w-px flex-1 ${
                    t.state === "done" ? "bg-mc-green/40" : "bg-mc-border"
                  }`}
                />
              )}
            </div>

            <div className={i < timeline.length - 1 ? "pb-4" : ""}>
              <p
                className={`text-[11px] font-medium ${
                  t.state === "idle" ? "text-mc-faint" : "text-mc-ink"
                }`}
              >
                {t.label}
              </p>
              <p className="text-[10px] text-mc-faint">{t.time}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------------------------------------------------------------- */
/* Console screens                                                   */
/* ---------------------------------------------------------------- */

const QUEUE = [
  {
    ref: "CHQ-000482913",
    payee: "Acacia Supplies Ltd",
    amount: "248,500.00",
    status: "review",
    note: "Awaiting reviewer",
  },
  {
    ref: "CHQ-000482847",
    payee: "Mwangi Hardware",
    amount: "62,000.00",
    status: "clear",
    note: "All checks passed",
  },
  {
    ref: "CHQ-000482790",
    payee: "Riverbend Traders",
    amount: "1,150,000.00",
    status: "flag",
    note: "Possible duplicate",
  },
];

const STATUS = {
  review: { label: "In review", Icon: ClockIcon, cls: "bg-mc-amber-tint text-mc-amber" },
  clear: { label: "Verified", Icon: CheckIcon, cls: "bg-mc-green-tint text-mc-green-deep" },
  flag: { label: "Flagged", Icon: AlertIcon, cls: "bg-mc-red-tint text-mc-red" },
};

function ConsoleQueue() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-mc-border px-5 py-4">
        <div>
          <h3 className="text-sm font-semibold text-mc-ink">Review queue</h3>
          <p className="text-xs text-mc-faint">Sorted by risk</p>
        </div>
        <span className="rounded-full bg-mc-green-tint px-3 py-1 text-[10px] font-semibold text-mc-green-deep">
          Live
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-left">
          <thead>
            <tr className="border-b border-mc-border-soft text-[10px] uppercase tracking-widest text-mc-faint">
              <th className="px-5 py-3 font-semibold">Reference</th>
              <th className="px-5 py-3 font-semibold">Payee</th>
              <th className="px-5 py-3 text-right font-semibold">Amount</th>
              <th className="px-5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {QUEUE.map((r) => {
              const s = STATUS[r.status];
              return (
                <tr key={r.ref} className="border-b border-mc-border-soft last:border-0">
                  <td className="px-5 py-4 font-mono text-xs text-mc-ink-soft">
                    {r.ref}
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-mc-ink">
                    {r.payee}
                  </td>
                  <td className="px-5 py-4 text-right font-mono text-sm font-semibold text-mc-ink">
                    {r.amount}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${s.cls}`}
                    >
                      <s.Icon className="h-3 w-3" />
                      {s.label}
                    </span>
                    <p className="mt-1 text-[10px] text-mc-faint">{r.note}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

function ConsoleCase() {
  return (
    <div className="grid gap-0 md:grid-cols-2">
      {/* Image side */}
      <div className="border-mc-border p-5 md:border-r">
        <p className="text-[10px] uppercase tracking-widest text-mc-faint">
          Captured image
        </p>
        <div className="mt-3 rounded-xl bg-[linear-gradient(135deg,#f2f7f5,#e9f3ef)] p-3">
          <ChequeFace />
        </div>
        <p className="mt-3 font-mono text-[10px] text-mc-faint">
          CHQ-000482913 &middot; captured 09:41
        </p>
      </div>

      {/* Detail side */}
      <div className="p-5">
        <p className="text-[10px] uppercase tracking-widest text-mc-faint">
          Extracted &amp; checked
        </p>

        <div className="mt-3 space-y-1.5">
          {FIELDS.slice(0, 4).map((f) => (
            <div
              key={f.label}
              className="flex items-center justify-between rounded-lg bg-mc-surface px-3 py-2"
            >
              <span className="text-[10px] text-mc-muted">{f.label}</span>
              <span className="text-[11px] font-semibold text-mc-ink">
                {f.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-mc-green/25 bg-mc-green-wash px-3 py-2.5">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold text-mc-ink">
            <CheckIcon className="h-3.5 w-3.5 text-mc-green" />
            4 of 4 checks passed
          </p>
        </div>

        <div className="mt-4 flex gap-2">
          <span className="flex-1 rounded-lg bg-mc-green py-2.5 text-center text-[11px] font-semibold text-white">
            Approve
          </span>
          <span className="flex-1 rounded-lg border border-mc-border py-2.5 text-center text-[11px] font-semibold text-mc-ink">
            Reject
          </span>
        </div>

        <p className="mt-3 text-[10px] leading-relaxed text-mc-faint">
          The reviewer decides. MobiCheque never approves on its own.
        </p>
      </div>
    </div>
  );
}

function ConsoleAudit() {
  const events = [
    { actor: "Depositor", action: "Cheque captured and submitted", time: "09:41:02" },
    { actor: "System", action: "Fields extracted (5 of 5)", time: "09:41:06" },
    { actor: "System", action: "Duplicate check — no match", time: "09:41:07" },
    { actor: "System", action: "Routed to review queue", time: "09:41:08" },
    { actor: "J. Wanjiru", action: "Opened case", time: "09:52:33" },
    { actor: "J. Wanjiru", action: "Approved — forwarded to processing", time: "09:54:11" },
  ];

  return (
    <div className="p-5">
      <p className="text-[10px] uppercase tracking-widest text-mc-faint">
        Audit trail &middot; CHQ-000482913
      </p>

      <div className="mt-4 space-y-0">
        {events.map((e, i) => (
          <div key={e.time} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={`h-2 w-2 rounded-full ${
                  e.actor === "System" ? "bg-mc-border" : "bg-mc-green"
                }`}
              />
              {i < events.length - 1 && (
                <span className="w-px flex-1 bg-mc-border" />
              )}
            </div>

            <div className={i < events.length - 1 ? "pb-4" : ""}>
              <p className="text-[11px] font-medium text-mc-ink">{e.action}</p>
              <p className="font-mono text-[10px] text-mc-faint">
                {e.actor} &middot; {e.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-2 rounded-lg bg-mc-surface px-3 py-2.5 text-[10px] leading-relaxed text-mc-muted">
        Append-only. Every entry carries an identity and a timestamp, so a query
        weeks later is a lookup rather than an investigation.
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Tour shell                                                        */
/* ---------------------------------------------------------------- */

const SURFACES = {
  app: {
    label: "Mobile app",
    sub: "What the depositor uses",
    steps: [
      {
        Icon: ScanIcon,
        title: "Capture",
        body: "Edge detection and quality checks run live, so a blurred or cropped frame is rejected before it becomes a submission.",
        render: () => (
          <PhoneFrame caption="Quality is enforced at capture, not discovered later by a reviewer.">
            <AppCapture />
          </PhoneFrame>
        ),
      },
      {
        Icon: OcrIcon,
        title: "Confirm",
        body: "Extracted fields are shown back with a confidence score each. Anything the OCR was unsure about is visible and correctable before submission.",
        render: () => (
          <PhoneFrame caption="Low-confidence fields are surfaced rather than silently accepted.">
            <AppConfirm />
          </PhoneFrame>
        ),
      },
      {
        Icon: ShieldIcon,
        title: "Checks",
        body: "Duplicate history, date validity, amount consistency and image quality all run before the cheque reaches a human.",
        render: () => (
          <PhoneFrame caption="Checks complete in seconds, then the case is routed to your reviewer.">
            <AppChecks />
          </PhoneFrame>
        ),
      },
      {
        Icon: TrackIcon,
        title: "Track",
        body: "The depositor follows the cheque through each stage and sees the same status your team sees, at the same time.",
        render: () => (
          <PhoneFrame caption="No silence after handover — both sides see one shared status.">
            <AppTrack />
          </PhoneFrame>
        ),
      },
    ],
  },
  console: {
    label: "Reviewer console",
    sub: "What your team uses",
    steps: [
      {
        Icon: RouteIcon,
        title: "Queue",
        body: "One worklist, sorted by risk. Flagged cheques rise; clean ones still require a decision but take seconds.",
        render: () => (
          <BrowserFrame
            path="console.mobicheque.app/queue"
            caption="A single worklist replaces chasing cheques across desks and systems."
          >
            <ConsoleQueue />
          </BrowserFrame>
        ),
      },
      {
        Icon: OcrIcon,
        title: "Case",
        body: "The captured image sits beside the extracted fields and every check that ran. The reviewer confirms rather than transcribes.",
        render: () => (
          <BrowserFrame
            path="console.mobicheque.app/cheques/000482913"
            caption="Evidence and decision on one screen. The reviewer holds the authority."
          >
            <ConsoleCase />
          </BrowserFrame>
        ),
      },
      {
        Icon: AuditIcon,
        title: "Audit",
        body: "Every action — automated or human — is timestamped and attributed on an append-only trail.",
        render: () => (
          <BrowserFrame
            path="console.mobicheque.app/cheques/000482913/audit"
            caption="Disputes resolve from a record instead of a recollection."
          >
            <ConsoleAudit />
          </BrowserFrame>
        ),
      },
    ],
  },
};

export default function ProductTour() {
  const [surface, setSurface] = useState("app");
  const [step, setStep] = useState(0);

  const current = SURFACES[surface];
  const active = current.steps[step];

  const switchSurface = (key) => {
    setSurface(key);
    setStep(0);
  };

  return (
    <div>
      {/* Surface tabs */}
      <div className="flex justify-center">
        <div className="inline-flex gap-1 rounded-full border border-mc-border bg-white p-1.5 shadow-mc-sm">
          {Object.entries(SURFACES).map(([key, cfg]) => (
            <button
              key={key}
              type="button"
              onClick={() => switchSurface(key)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                surface === key
                  ? "bg-mc-green text-white shadow-mc-green"
                  : "text-mc-ink-soft hover:bg-mc-green-wash"
              }`}
            >
              {cfg.label}
              <span
                className={`ml-2 hidden text-xs font-normal sm:inline ${
                  surface === key ? "text-white/70" : "text-mc-faint"
                }`}
              >
                {cfg.sub}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Steps */}
        <div className="space-y-3">
          {current.steps.map((s, i) => {
            const isActive = i === step;
            return (
              <button
                key={s.title}
                type="button"
                onClick={() => setStep(i)}
                className={`w-full rounded-2xl border p-6 text-left transition-all duration-300 ${
                  isActive
                    ? "border-mc-green/30 bg-white shadow-mc-md"
                    : "border-mc-border bg-white/50 hover:bg-white"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      isActive
                        ? "bg-mc-green text-white"
                        : "bg-mc-surface text-mc-muted"
                    }`}
                  >
                    <s.Icon className="h-5 w-5" />
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-mc-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className={`font-semibold ${
                          isActive ? "text-mc-ink" : "text-mc-ink-soft"
                        }`}
                      >
                        {s.title}
                      </h3>
                    </div>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        isActive ? "text-mc-muted" : "text-mc-faint"
                      }`}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}

          {/* Stepper controls */}
          <div className="flex items-center justify-between pt-3">
            <div className="flex gap-1.5">
              {current.steps.map((s, i) => (
                <span
                  key={s.title}
                  className={`h-1 w-8 rounded-full transition-colors ${
                    i <= step ? "bg-mc-green" : "bg-mc-border"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setStep((p) => (p + 1) % current.steps.length)}
              className="group inline-flex items-center gap-2 rounded-full border border-mc-border bg-white px-4 py-2 text-sm font-semibold text-mc-ink transition-colors hover:border-mc-green/40 hover:bg-mc-green-wash"
            >
              Next
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Screen */}
        <div className="flex justify-center lg:sticky lg:top-28">
          <div key={`${surface}-${step}`} className="w-full animate-[mc-fade-up_0.5s_cubic-bezier(0.16,1,0.3,1)]">
            {active.render()}
          </div>
        </div>
      </div>
    </div>
  );
}
