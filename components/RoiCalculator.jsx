"use client";

import { useMemo, useState } from "react";

/**
 * Deliberately transparent: every input is visible and adjustable, and the
 * arithmetic is stated under the result. An ROI widget that hides its
 * assumptions gets dismissed by the exact audience it is aimed at.
 *
 * Defaults are illustrative starting points, not claims. The reviewer is
 * expected to replace them with their own figures.
 */

const FIELDS = [
  {
    key: "volume",
    label: "Cheques handled per month",
    min: 100,
    max: 20000,
    step: 100,
    suffix: "",
  },
  {
    key: "minutesNow",
    label: "Staff minutes per cheque today",
    min: 1,
    max: 30,
    step: 1,
    suffix: " min",
  },
  {
    key: "minutesAfter",
    label: "Staff minutes per cheque with assisted review",
    min: 1,
    max: 30,
    step: 1,
    suffix: " min",
  },
  {
    key: "costPerHour",
    label: "Fully loaded staff cost per hour (KES)",
    min: 200,
    max: 5000,
    step: 50,
    suffix: "",
  },
];

const fmt = (n) =>
  new Intl.NumberFormat("en-KE", { maximumFractionDigits: 0 }).format(n);

export default function RoiCalculator() {
  const [values, setValues] = useState({
    volume: 2000,
    minutesNow: 8,
    minutesAfter: 3,
    costPerHour: 900,
  });

  const set = (key) => (e) =>
    setValues((prev) => ({ ...prev, [key]: Number(e.target.value) }));

  const result = useMemo(() => {
    const savedMinutes = Math.max(
      0,
      (values.minutesNow - values.minutesAfter) * values.volume
    );
    const savedHours = savedMinutes / 60;
    const monthly = savedHours * values.costPerHour;

    return {
      savedHours,
      monthly,
      annual: monthly * 12,
      perCheque: values.volume > 0 ? monthly / values.volume : 0,
    };
  }, [values]);

  const invalid = values.minutesAfter >= values.minutesNow;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
      {/* Inputs */}
      <div className="rounded-2xl border border-mc-border bg-white p-8">
        <h3 className="text-lg font-semibold text-mc-ink">Your numbers</h3>
        <p className="mt-2 text-sm leading-relaxed text-mc-muted">
          Replace these with your own. Nothing is sent anywhere &mdash; this runs
          entirely in your browser.
        </p>

        <div className="mt-8 space-y-7">
          {FIELDS.map((field) => (
            <div key={field.key}>
              <div className="flex items-baseline justify-between">
                <label
                  htmlFor={field.key}
                  className="text-sm font-medium text-mc-ink"
                >
                  {field.label}
                </label>
                <span className="font-mono text-sm font-semibold text-mc-green-deep">
                  {fmt(values[field.key])}
                  {field.suffix}
                </span>
              </div>

              <input
                id={field.key}
                type="range"
                min={field.min}
                max={field.max}
                step={field.step}
                value={values[field.key]}
                onChange={set(field.key)}
                className="mt-3 w-full accent-[var(--mc-green)]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="flex flex-col rounded-2xl border border-mc-border bg-mc-green-dark p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mc-green">
          Estimated staff time recovered
        </p>

        {invalid ? (
          <p className="mt-6 leading-relaxed text-white/70">
            Set the assisted-review time below your current time to see an
            estimate.
          </p>
        ) : (
          <>
            <p className="mt-5 text-5xl font-semibold tracking-[-0.03em]">
              {fmt(result.savedHours)}
              <span className="ml-2 text-xl font-medium text-white/60">
                hrs / month
              </span>
            </p>

            <dl className="mt-8 space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-baseline justify-between">
                <dt className="text-white/60">Monthly value</dt>
                <dd className="font-mono text-lg font-semibold">
                  KES {fmt(result.monthly)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-white/60">Annual value</dt>
                <dd className="font-mono text-lg font-semibold text-mc-green">
                  KES {fmt(result.annual)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="text-white/60">Per cheque</dt>
                <dd className="font-mono text-lg font-semibold">
                  KES {fmt(result.perCheque)}
                </dd>
              </div>
            </dl>
          </>
        )}

        <p className="mt-auto pt-8 text-xs leading-relaxed text-white/45">
          Handling time only. Excludes fraud loss avoided, returned-cheque
          rework and deposits retained through better customer experience,
          which are real but harder to attribute. Figures are your inputs, not
          our claims.
        </p>
      </div>
    </div>
  );
}
