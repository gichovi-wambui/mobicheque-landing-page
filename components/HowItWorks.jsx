"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { ScanIcon, OcrIcon, ShieldIcon, TrackIcon, CheckIcon } from "./Icons";

const STEPS = [
  {
    id: "capture",
    n: "01",
    Icon: ScanIcon,
    title: "Capture the cheque",
    body: "Photograph the cheque from any phone. Edge detection and quality checks catch a blurred or cropped frame before it is ever submitted.",
    detail: ["Auto edge detection", "Blur & glare rejection", "Front and back capture"],
  },
  {
    id: "extract",
    n: "02",
    Icon: OcrIcon,
    title: "Extract every field",
    body: "OCR reads the payee, amount, cheque number, date and drawer bank straight off the image, with a confidence score attached to each field.",
    detail: ["Payee & amount", "Cheque number & date", "Per-field confidence"],
  },
  {
    id: "verify",
    n: "03",
    Icon: ShieldIcon,
    title: "Run the checks",
    body: "Every submission is tested against duplicate history, date validity and fraud signals, then routed to a reviewer with the evidence attached.",
    detail: ["Duplicate history match", "Stale & post-dated flags", "Reviewer routing"],
  },
  {
    id: "track",
    n: "04",
    Icon: TrackIcon,
    title: "Track to a final status",
    body: "The depositor follows the cheque through each stage, and the institution keeps a timestamped record of every decision taken on it.",
    detail: ["Live status updates", "Timestamped audit trail", "Cleared or rejected outcome"],
  },
];

/* ----------------------------------------------------------------
   Visual panel shown for the active step
   ---------------------------------------------------------------- */
function StepVisual({ index }) {
  const step = STEPS[index];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-mc-border bg-white p-7 shadow-mc-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mc-green-tint text-mc-green-deep">
          <step.Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-xs tracking-widest text-mc-faint">
          {step.n} / 04
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-[-0.01em] text-mc-ink">
        {step.title}
      </h3>
      <p className="mt-3 leading-relaxed text-mc-muted">{step.body}</p>

      <ul className="mt-6 space-y-2.5 border-t border-mc-border-soft pt-6">
        {step.detail.map((d) => (
          <li key={d} className="flex items-center gap-2.5 text-sm text-mc-ink-soft">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mc-green-tint">
              <CheckIcon className="h-2.5 w-2.5 text-mc-green" />
            </span>
            {d}
          </li>
        ))}
      </ul>

      {/* Progress rail */}
      <div className="mt-7 flex gap-1.5">
        {STEPS.map((s, i) => (
          <span
            key={s.id}
            className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
              i <= index ? "bg-mc-green" : "bg-mc-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  // Drive the sticky visual from whichever step block is centred in view.
  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean);
    if (!nodes.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number(entry.target.dataset.index);
            if (!Number.isNaN(i)) setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="bg-mc-surface py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From a photo to a verified decision"
          description="Four stages, each one leaving a record behind. Scroll through to see what happens at every step."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Step list */}
          <div className="space-y-4">
            {STEPS.map((step, i) => {
              const isActive = i === active;
              return (
                <div
                  key={step.id}
                  data-index={i}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  onMouseEnter={() => setActive(i)}
                  className={`cursor-default rounded-2xl border p-6 transition-all duration-300 ${
                    isActive
                      ? "border-mc-green/30 bg-white shadow-mc-md"
                      : "border-transparent bg-transparent hover:bg-white/60"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold transition-colors duration-300 ${
                        isActive
                          ? "bg-mc-green text-white"
                          : "bg-white text-mc-faint ring-1 ring-mc-border"
                      }`}
                    >
                      {step.n}
                    </span>

                    <div>
                      <h3
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          isActive ? "text-mc-ink" : "text-mc-ink-soft"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`mt-2 leading-relaxed transition-colors duration-300 ${
                          isActive ? "text-mc-muted" : "text-mc-faint"
                        }`}
                      >
                        {step.body}
                      </p>

                      {/* The sticky visual is desktop-only, so mobile gets the
                          same detail inline rather than losing it entirely. */}
                      <ul className="mt-4 space-y-2 lg:hidden">
                        {step.detail.map((d) => (
                          <li
                            key={d}
                            className="flex items-center gap-2.5 text-sm text-mc-ink-soft"
                          >
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mc-green-tint">
                              <CheckIcon className="h-2.5 w-2.5 text-mc-green" />
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky visual */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <StepVisual index={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
