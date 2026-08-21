import { AlertIcon, CheckIcon, ClockIcon } from "./Icons";

/**
 * Inline status note. `tone` is deliberately explicit so the interior pages
 * can distinguish what is live today from what is planned -- an institutional
 * buyer will read a vague claim as an overclaim.
 */

const TONES = {
  info: {
    Icon: CheckIcon,
    wrap: "border-mc-green/25 bg-mc-green-wash",
    chip: "bg-mc-green-tint text-mc-green-deep",
  },
  planned: {
    Icon: ClockIcon,
    wrap: "border-mc-amber/25 bg-mc-amber-tint",
    chip: "bg-white text-mc-amber",
  },
  warning: {
    Icon: AlertIcon,
    wrap: "border-mc-red/20 bg-mc-red-tint",
    chip: "bg-white text-mc-red",
  },
};

export default function Callout({ tone = "info", label, title, children }) {
  const t = TONES[tone] ?? TONES.info;

  return (
    <div className={`rounded-2xl border p-6 md:p-7 ${t.wrap}`}>
      <div className="flex items-start gap-4">
        <span
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${t.chip}`}
        >
          <t.Icon className="h-4 w-4" />
        </span>

        <div>
          {label && (
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-mc-muted">
              {label}
            </p>
          )}
          {title && (
            <h3 className="mt-1 font-semibold text-mc-ink">{title}</h3>
          )}
          <div className="mt-2 leading-relaxed text-mc-ink-soft">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
