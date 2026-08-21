import { BankIcon, SaccoIcon, BusinessIcon, PersonIcon } from "./Icons";
import Reveal from "./Reveal";

const AUDIENCE = [
  { label: "Banks", Icon: BankIcon },
  { label: "SACCOs", Icon: SaccoIcon },
  { label: "Businesses", Icon: BusinessIcon },
  { label: "Individuals", Icon: PersonIcon },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-mc-border bg-mc-surface py-10">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-mc-faint">
            One verification layer for the whole cheque ecosystem
          </p>
        </Reveal>

        <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {AUDIENCE.map(({ label, Icon }, i) => (
            <Reveal key={label} delay={i * 70}>
              <div className="flex items-center justify-center gap-2.5 rounded-xl border border-mc-border bg-white px-4 py-3.5 shadow-mc-sm">
                <Icon className="h-5 w-5 text-mc-green" />
                <span className="text-sm font-semibold text-mc-ink">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
