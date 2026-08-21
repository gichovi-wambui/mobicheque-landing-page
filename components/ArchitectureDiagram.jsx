import { ScanIcon, OcrIcon, ShieldIcon, RouteIcon, BankIcon } from "./Icons";

/**
 * Where MobiCheque sits. The key message is the boundary: everything inside
 * the dashed band is ours, everything after it is the institution's existing
 * process. Built as DOM rather than an image so it reflows on mobile.
 */

const STAGES = [
  {
    Icon: ScanIcon,
    label: "Capture",
    detail: "Mobile app or branch device",
  },
  {
    Icon: OcrIcon,
    label: "Extract",
    detail: "OCR reads the cheque fields",
  },
  {
    Icon: ShieldIcon,
    label: "Verify",
    detail: "Duplicate, date and fraud checks",
  },
  {
    Icon: RouteIcon,
    label: "Review",
    detail: "Your reviewer decides in the console",
  },
];

export default function ArchitectureDiagram() {
  return (
    <div className="rounded-2xl border border-mc-border bg-white p-6 md:p-10">
      {/* Upstream */}
      <div className="flex flex-col items-center">
        <span className="rounded-full bg-mc-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-mc-muted">
          Depositor or branch staff
        </span>
        <span className="my-4 h-6 w-px bg-mc-border" />
      </div>

      {/* MobiCheque boundary */}
      <div className="relative rounded-2xl border-2 border-dashed border-mc-green/40 bg-mc-green-wash/60 p-6 md:p-8">
        <span className="absolute -top-3 left-6 rounded-full bg-mc-green px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
          MobiCheque
        </span>

        <div className="grid gap-4 md:grid-cols-4">
          {STAGES.map((stage, i) => (
            <div key={stage.label} className="relative">
              <div className="h-full rounded-xl border border-mc-border bg-white p-5 text-center">
                <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg bg-mc-green-tint text-mc-green-deep">
                  <stage.Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-semibold text-mc-ink">{stage.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-mc-muted">
                  {stage.detail}
                </p>
              </div>

              {/* Connector on desktop */}
              {i < STAGES.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-11px] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-mc-green/40 md:block"
                />
              )}
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-mc-muted">
          No funds move inside this boundary. MobiCheque produces a verified,
          documented case — not a payment instruction.
        </p>
      </div>

      {/* Handoff */}
      <div className="flex flex-col items-center">
        <span className="my-4 h-6 w-px bg-mc-border" />
        <span className="rounded-full border border-mc-border bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-mc-faint">
          Handoff
        </span>
        <span className="my-4 h-6 w-px bg-mc-border" />
      </div>

      {/* Downstream */}
      <div className="rounded-2xl border border-mc-border bg-mc-surface p-6 md:p-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-mc-ink-soft ring-1 ring-mc-border">
            <BankIcon className="h-6 w-6" />
          </span>
          <div>
            <p className="font-semibold text-mc-ink">
              Your existing systems and clearing process
            </p>
            <p className="mt-1.5 leading-relaxed text-mc-muted">
              Core banking, your clearing arrangements and settlement continue
              exactly as they do today. MobiCheque hands off a verified case and
              stops there.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
