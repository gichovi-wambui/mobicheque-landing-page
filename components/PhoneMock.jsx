"use client";

import { useEffect, useRef, useState } from "react";
import { CheckIcon, ShieldIcon, ClockIcon } from "./Icons";

/**
 * An in-browser mock of the MobiCheque capture screen.
 *
 * Rendered as DOM rather than a screenshot so it stays sharp at any density
 * and the extraction sequence can actually animate. The fields mirror what
 * the OCR service pulls off a cheque.
 */

const FIELDS = [
  { label: "Payee", value: "Acacia Supplies Ltd" },
  { label: "Amount", value: "KES 248,500.00" },
  { label: "Cheque No.", value: "000482913" },
  { label: "Date", value: "14 / 08 / 2026" },
  { label: "Drawer Bank", value: "Equity Bank" },
];

export default function PhoneMock({ className = "" }) {
  const ref = useRef(null);
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);

  // Only start the sequence once the phone is actually on screen.
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      const t = setTimeout(() => setRunning(true), 0);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRunning(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Reveal each extracted field in turn, hold, then loop.
  useEffect(() => {
    if (!running) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let timer;

    // Reduced motion: jump straight to the finished state, deferred so the
    // update does not run synchronously in the effect body.
    if (reduced) {
      timer = setTimeout(() => setStep(FIELDS.length), 0);
      return () => clearTimeout(timer);
    }

    const tick = () => {
      setStep((prev) => (prev > FIELDS.length + 2 ? -1 : prev + 1));
      timer = setTimeout(tick, 900);
    };
    timer = setTimeout(tick, 700);
    return () => clearTimeout(timer);
  }, [running]);

  const done = step >= FIELDS.length;

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Phone body */}
      <div className="relative mx-auto w-full max-w-[300px] rounded-[2.75rem] bg-mc-ink p-3 shadow-mc-lg ring-1 ring-black/5">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2.1rem] bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-medium text-mc-ink">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-mc-green" />
              <span className="text-mc-faint">5G</span>
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-5 py-3">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-mc-faint">
                Step 2 of 4
              </p>
              <p className="text-sm font-semibold text-mc-ink">Capture cheque</p>
            </div>
            <span className="rounded-full bg-mc-green-tint px-2.5 py-1 text-[10px] font-semibold text-mc-green-deep">
              Live
            </span>
          </div>

          {/* Cheque in the viewfinder */}
          <div className="mx-4 mb-4 overflow-hidden rounded-xl border border-mc-border bg-mc-surface">
            <div className="relative h-[150px] bg-[linear-gradient(135deg,#f2f7f5_0%,#e9f3ef_100%)]">
              {/* Cheque face */}
              <div className="absolute inset-3 rounded-lg bg-white p-2.5 shadow-sm ring-1 ring-mc-border-soft">
                <div className="flex items-start justify-between">
                  <div className="h-1.5 w-14 rounded-full bg-mc-ink/15" />
                  <div className="h-1.5 w-8 rounded-full bg-mc-ink/10" />
                </div>
                <div className="mt-3 space-y-1.5">
                  <div className="h-1.5 w-[70%] rounded-full bg-mc-ink/10" />
                  <div className="h-1.5 w-[45%] rounded-full bg-mc-ink/10" />
                </div>
                <div className="mt-3 flex items-end justify-between">
                  <div className="h-1.5 w-12 rounded-full bg-mc-ink/10" />
                  <div className="h-5 w-16 rounded border border-mc-green/30 bg-mc-green-tint" />
                </div>
                <div className="mt-2.5 flex gap-0.5">
                  {Array.from({ length: 22 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-2 w-[2px] rounded-sm bg-mc-ink/25"
                    />
                  ))}
                </div>
              </div>

              {/* Corner brackets */}
              {[
                "top-2 left-2 border-t-2 border-l-2 rounded-tl",
                "top-2 right-2 border-t-2 border-r-2 rounded-tr",
                "bottom-2 left-2 border-b-2 border-l-2 rounded-bl",
                "bottom-2 right-2 border-b-2 border-r-2 rounded-br",
              ].map((pos) => (
                <span
                  key={pos}
                  className={`absolute h-4 w-4 border-mc-green ${pos}`}
                />
              ))}

              {/* Scanning sweep */}
              {!done && (
                <span className="mc-animate-scan absolute inset-x-2 top-0 h-8 bg-[linear-gradient(180deg,transparent,rgba(0,168,107,0.22),transparent)]" />
              )}
            </div>
          </div>

          {/* Extracted fields */}
          <div className="px-5 pb-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-mc-faint">
              Extracted
            </p>

            <div className="space-y-1.5">
              {FIELDS.map((field, i) => {
                const shown = step > i;
                return (
                  <div
                    key={field.label}
                    className={`flex items-center justify-between rounded-lg border px-2.5 py-1.5 transition-all duration-500 ${
                      shown
                        ? "border-mc-green/25 bg-mc-green-wash opacity-100 translate-y-0"
                        : "border-mc-border-soft bg-white opacity-40 translate-y-1"
                    }`}
                  >
                    <span className="text-[10px] text-mc-muted">
                      {field.label}
                    </span>
                    {shown ? (
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-mc-ink">
                        {field.value}
                        <CheckIcon className="h-3 w-3 text-mc-green" />
                      </span>
                    ) : (
                      <span className="h-1.5 w-14 rounded-full bg-mc-ink/10" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Result banner */}
          <div className="px-5 pb-5">
            <div
              className={`flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all duration-500 ${
                done
                  ? "bg-mc-green text-white opacity-100"
                  : "bg-mc-surface text-mc-faint opacity-70"
              }`}
            >
              {done ? (
                <>
                  <ShieldIcon className="h-4 w-4 shrink-0" />
                  <span className="text-[11px] font-semibold leading-tight">
                    Checks passed &mdash; sent for review
                  </span>
                </>
              ) : (
                <>
                  <ClockIcon className="h-4 w-4 shrink-0" />
                  <span className="text-[11px] font-medium">
                    Reading cheque&hellip;
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating duplicate-check chip */}
      <div
        className={`absolute -right-2 top-[38%] hidden rounded-xl border border-mc-border bg-white/95 px-3 py-2 shadow-mc-md backdrop-blur transition-all duration-700 sm:block ${
          done ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
        }`}
      >
        <p className="text-[9px] uppercase tracking-widest text-mc-faint">
          Duplicate check
        </p>
        <p className="mt-0.5 flex items-center gap-1 text-xs font-semibold text-mc-ink">
          <CheckIcon className="h-3.5 w-3.5 text-mc-green" />
          No match found
        </p>
      </div>

      {/* Floating confidence chip */}
      <div
        className={`absolute -left-4 bottom-[22%] hidden rounded-xl border border-mc-border bg-white/95 px-3 py-2 shadow-mc-md backdrop-blur transition-all duration-700 sm:block ${
          step > 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
        }`}
      >
        <p className="text-[9px] uppercase tracking-widest text-mc-faint">
          OCR confidence
        </p>
        <p className="mt-0.5 text-xs font-semibold text-mc-ink">98.2%</p>
      </div>
    </div>
  );
}
