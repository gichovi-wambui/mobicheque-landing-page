"use client";

import { useState } from "react";
import { CheckIcon } from "./Icons";

/**
 * Hover or tap a region of the cheque to see what MobiCheque reads there.
 *
 * Regions are positioned in percentages over a drawn cheque so the whole
 * thing scales cleanly and needs no image asset. Sample data throughout --
 * this is not a real instrument.
 */

const REGIONS = [
  {
    id: "payee",
    label: "Payee",
    value: "Acacia Supplies Ltd",
    conf: 99,
    note: "Read from the 'Pay' line. Matched against your existing records where available.",
    box: { top: "30%", left: "6%", width: "58%", height: "13%" },
  },
  {
    id: "amount-words",
    label: "Amount in words",
    value: "Two hundred forty eight thousand five hundred",
    conf: 96,
    note: "Cross-checked against the figure box. A disagreement between the two is flagged for the reviewer.",
    box: { top: "45%", left: "6%", width: "58%", height: "13%" },
  },
  {
    id: "amount",
    label: "Amount in figures",
    value: "KES 248,500.00",
    conf: 98,
    note: "The figure box. This is the value carried through the rest of the checks.",
    box: { top: "45%", left: "68%", width: "26%", height: "16%" },
  },
  {
    id: "date",
    label: "Date",
    value: "14 / 08 / 2026",
    conf: 94,
    note: "Checked for stale-dated and post-dated instruments at intake, before a reviewer sees the case.",
    box: { top: "12%", left: "66%", width: "28%", height: "13%" },
  },
  {
    id: "micr",
    label: "MICR line",
    value: "000482913  068  12345",
    conf: 99,
    note: "Cheque number, branch and account routing. This is the key used to match against duplicate history.",
    box: { top: "80%", left: "6%", width: "72%", height: "14%" },
  },
  {
    id: "signature",
    label: "Signature area",
    value: "Present — not verified",
    conf: null,
    note: "We detect that a signature is present. We do not attempt to verify it — signature verification stays with your institution.",
    box: { top: "62%", left: "62%", width: "32%", height: "15%" },
  },
];

export default function ChequeAnnotator({ className = "" }) {
  const [activeId, setActiveId] = useState("amount");
  const active = REGIONS.find((r) => r.id === activeId);

  return (
    <div className={`grid gap-8 lg:grid-cols-[1.25fr_0.75fr] ${className}`}>
      {/* Cheque */}
      <div>
        <div className="relative aspect-[2.35/1] w-full overflow-hidden rounded-2xl border border-mc-border bg-[linear-gradient(135deg,#f7fbf9,#eef6f2)] p-5 shadow-mc-sm">
          {/* Drawn cheque furniture */}
          <div className="absolute inset-5">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <div className="h-2 w-24 rounded-full bg-mc-ink/20" />
                <div className="h-1.5 w-16 rounded-full bg-mc-ink/10" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="h-1.5 w-[52%] rounded-full bg-mc-ink/12" />
              <div className="h-1.5 w-[46%] rounded-full bg-mc-ink/12" />
            </div>

            <div className="absolute bottom-8 left-0 flex gap-1">
              {Array.from({ length: 34 }).map((_, i) => (
                <span key={i} className="h-3 w-[2px] rounded-sm bg-mc-ink/25" />
              ))}
            </div>
          </div>

          {/* Hot regions */}
          {REGIONS.map((r) => {
            const isActive = r.id === activeId;
            return (
              <button
                key={r.id}
                type="button"
                style={r.box}
                onMouseEnter={() => setActiveId(r.id)}
                onFocus={() => setActiveId(r.id)}
                onClick={() => setActiveId(r.id)}
                aria-label={`${r.label}: ${r.value}`}
                className={`absolute rounded-md border-2 transition-all duration-200 ${
                  isActive
                    ? "border-mc-green bg-mc-green/12"
                    : "border-mc-green/25 bg-transparent hover:border-mc-green/60 hover:bg-mc-green/8"
                }`}
              >
                <span
                  className={`absolute -top-2.5 left-1.5 rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider transition-opacity duration-200 ${
                    isActive
                      ? "bg-mc-green text-white opacity-100"
                      : "bg-white text-mc-muted opacity-0 ring-1 ring-mc-border"
                  }`}
                >
                  {r.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Region boxes are small on a phone-sized cheque, so touch users get
            proper 44px-tall targets instead. */}
        <div className="mt-4 flex flex-wrap gap-2 lg:hidden">
          {REGIONS.map((r) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setActiveId(r.id)}
              aria-pressed={r.id === activeId}
              className={`min-h-[44px] rounded-full px-4 py-2.5 text-xs font-medium transition-colors ${
                r.id === activeId
                  ? "bg-mc-green text-white"
                  : "bg-mc-surface text-mc-ink-soft"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-mc-faint">
          <span className="hidden lg:inline">Hover or tap a highlighted region. </span>
          <span className="lg:hidden">Choose a field above. </span>
          Sample cheque &mdash; not a real instrument.
        </p>
      </div>

      {/* Read-out */}
      <div className="flex flex-col rounded-2xl border border-mc-border bg-white p-7 shadow-mc-sm">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-mc-faint">
          Extracted value
        </p>

        <h3 className="mt-3 text-lg font-semibold text-mc-ink">
          {active.label}
        </h3>

        <p className="mt-2 break-words font-mono text-sm font-semibold text-mc-green-deep">
          {active.value}
        </p>

        {active.conf !== null ? (
          <div className="mt-5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-mc-muted">OCR confidence</span>
              <span
                className={`font-mono font-semibold ${
                  active.conf >= 97 ? "text-mc-green" : "text-mc-amber"
                }`}
              >
                {active.conf}%
              </span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-mc-surface">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  active.conf >= 97 ? "bg-mc-green" : "bg-mc-amber"
                }`}
                style={{ width: `${active.conf}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="mt-5 rounded-lg bg-mc-surface px-3 py-2">
            <p className="text-xs font-medium text-mc-muted">
              Detected, not scored
            </p>
          </div>
        )}

        <p className="mt-6 border-t border-mc-border-soft pt-5 text-sm leading-relaxed text-mc-muted">
          {active.note}
        </p>

        <div className="mt-auto pt-6">
          <div className="flex items-center gap-2 rounded-lg bg-mc-green-wash px-3 py-2.5">
            <CheckIcon className="h-4 w-4 shrink-0 text-mc-green" />
            <span className="text-xs font-medium text-mc-ink">
              {REGIONS.filter((r) => r.conf !== null).length} fields extracted
              per cheque
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
