import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import {
  ShieldIcon,
  RouteIcon,
  BankIcon,
  PersonIcon,
  ArrowRightIcon,
  ScanIcon,
  SaccoIcon,
} from "./Icons";

/**
 * Routes each evaluator to the page written for them. A landing scroll gets
 * the first meeting; these pages are what survive the review that follows.
 */

const PAGES = [
  {
    href: "/product",
    Icon: ScanIcon,
    audience: "Start here",
    title: "Product tour",
    body: "Click through both surfaces without booking a call — the capture app a depositor uses, and the queue, case view and audit trail your reviewers work in.",
  },
  {
    href: "/security",
    Icon: ShieldIcon,
    audience: "Risk & security",
    title: "Security & trust",
    body: "Controls in place today, exactly what data we process, our honest compliance posture, and the vendor questionnaire answered in advance.",
  },
  {
    href: "/integration",
    Icon: RouteIcon,
    audience: "IT & integration",
    title: "Integration & architecture",
    body: "Where we sit relative to your clearing process, the three deployment models, connection paths, and how a pilot is structured.",
  },
  {
    href: "/for-banks",
    Icon: BankIcon,
    audience: "Operations & finance",
    title: "For banks",
    body: "Where cheque handling actually costs you, a calculator you drive with your own figures, and a plain statement of what we will not claim.",
  },
  {
    href: "/for-saccos",
    Icon: SaccoIcon,
    audience: "SACCOs",
    title: "For SACCOs",
    body: "Written for a smaller team and members spread further out: member self-service, one queue for staff, and an honest fit check.",
  },
  {
    href: "/about",
    Icon: PersonIcon,
    audience: "Everyone",
    title: "About us",
    body: "Who is building this, the positions we build from, and how to reach us directly.",
  },
];

export default function DeepDive() {
  return (
    <section id="deep-dive" className="bg-mc-surface py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Go deeper"
          title="Written for whoever has to sign off"
          description="Institutional evaluation runs through several desks. Each one has a page here."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PAGES.map((page, i) => (
            <Reveal key={page.href} delay={i * 80}>
              <Link
                href={page.href}
                className="group flex h-full flex-col rounded-2xl border border-mc-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-mc-green/30 hover:shadow-mc-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mc-green-tint text-mc-green-deep transition-colors duration-300 group-hover:bg-mc-green group-hover:text-white">
                    <page.Icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-mc-surface px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-mc-muted">
                    {page.audience}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-mc-ink">
                  {page.title}
                </h3>
                <p className="mt-3 leading-relaxed text-mc-muted">{page.body}</p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mc-green-deep">
                  Read the page
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
