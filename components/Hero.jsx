import Button from "./Button";
import Reveal from "./Reveal";
import PhoneMock from "./PhoneMock";
import { CheckIcon } from "./Icons";

const PROOF = [
  "OCR field extraction",
  "Duplicate detection",
  "Full audit trail",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* Background grid, faded at the edges */}
      <div
        aria-hidden="true"
        className="mc-grid-bg mc-fade-mask pointer-events-none absolute inset-0"
      />
      {/* Soft green bloom behind the phone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-mc-green/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-mc-border bg-white/80 px-3.5 py-1.5 text-xs font-medium text-mc-ink-soft shadow-mc-sm backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-mc-green opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mc-green" />
                </span>
                Built for banks, SACCOs and businesses in Kenya
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-mc-ink md:text-5xl lg:text-6xl text-balance">
                Verify every cheque
                <br />
                <span className="text-mc-green">before you clear it.</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-mc-muted">
                MobiCheque turns a phone camera into a cheque intake desk. Scan
                a cheque, extract every field automatically, run it through
                duplicate and fraud checks, and route it to your reviewers with
                a complete audit trail.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="#demo" withArrow>
                  Book a demo
                </Button>
                <Button href="#how-it-works" variant="secondary">
                  See how it works
                </Button>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                {PROOF.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-mc-ink-soft"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-mc-green-tint">
                      <CheckIcon className="h-3 w-3 text-mc-green" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Product */}
          <Reveal delay={220} className="flex justify-center lg:justify-end">
            <PhoneMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
