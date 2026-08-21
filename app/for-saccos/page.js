import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";
import Callout from "../../components/Callout";
import Button from "../../components/Button";
import {
  PersonIcon,
  ClockIcon,
  RecordsIcon,
  ShieldIcon,
  CheckIcon,
} from "../../components/Icons";

export const metadata = {
  title: "For SACCOs",
  description:
    "MobiCheque for SACCOs: let members deposit cheques without travelling to an office, and give your staff one verified queue to work from.",
};

/* ------------------------------------------------------------------
   NOTE FOR THE TEAM
   A SACCO buys differently from a bank: smaller team, tighter budget,
   member experience matters more than integration depth. This page is
   deliberately lighter on architecture and heavier on member service.
   ------------------------------------------------------------------ */

const PRESSURES = [
  {
    Icon: PersonIcon,
    title: "Members travel to deposit",
    body: "A member holding a cheque has to reach an office during working hours. For members outside town, that is a day lost to a single transaction.",
  },
  {
    Icon: ClockIcon,
    title: "A small team absorbs every cheque",
    body: "SACCOs rarely have a dedicated cheque desk. The same few staff handle intake, verification and member queries on top of everything else.",
  },
  {
    Icon: RecordsIcon,
    title: "Records live in more than one place",
    body: "When a member asks where their cheque is, answering it means checking a book, a spreadsheet and someone's memory.",
  },
];

const OUTCOMES = [
  {
    title: "Members deposit from where they are",
    body: "Capture happens on the member's phone. No travel, no office hours, no queue — and the SACCO still controls what happens next.",
  },
  {
    title: "Your staff work one list",
    body: "Every submission lands in a single queue with the fields already extracted and the checks already run. Staff confirm rather than transcribe.",
  },
  {
    title: "Member questions answer themselves",
    body: "Members see their own cheque status live, which removes most of the calls asking where a cheque has got to.",
  },
  {
    title: "One record per cheque",
    body: "Capture, checks, decision and timing all sit on a single timestamped record instead of across three systems.",
  },
];

const FIT = [
  {
    good: true,
    title: "A good fit if",
    points: [
      "Members regularly travel to deposit cheques",
      "A small team handles cheque intake alongside other duties",
      "You want member self-service without building an app",
      "You need a clean record for queries and disputes",
    ],
  },
  {
    good: false,
    title: "Probably not yet if",
    points: [
      "You handle only a handful of cheques a month",
      "You need deep core-system integration on day one",
      "You are looking for automated approval without review",
      "Your members would not use a smartphone app",
    ],
  },
];

export default function ForSaccosPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="For SACCOs"
          title="Let members deposit cheques without the journey"
          description="SACCOs feel cheque handling differently from banks: fewer staff, members spread further out, and every query landing on the same desk. This page is written for that."
          meta={[
            { label: "To start", value: "No integration" },
            { label: "Staff training", value: "One session" },
            { label: "Decision authority", value: "Stays with you" },
          ]}
        />

        {/* Pressures */}
        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="What it costs today"
              title="Three pressures we hear from SACCOs"
            />

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {PRESSURES.map(({ Icon, title, body }, i) => (
                <Reveal key={title} delay={i * 90}>
                  <div className="h-full rounded-2xl border border-mc-border bg-white p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mc-green-tint text-mc-green-deep">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold text-mc-ink">
                      {title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-mc-muted">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="border-y border-mc-border bg-mc-surface py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="What changes"
              title="Four things that are different afterwards"
              description="Stated as mechanisms, not percentages — we have not run a SACCO pilot yet and will not invent the numbers from one."
            />

            <div className="mx-auto mt-14 max-w-4xl space-y-4">
              {OUTCOMES.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="flex items-start gap-5 rounded-2xl border border-mc-border bg-white p-7">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mc-green-tint">
                      <CheckIcon className="h-4 w-4 text-mc-green" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-mc-ink">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-mc-muted">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Fit */}
        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Fit"
              title="Whether this is worth your time"
              description="We would rather you self-select out now than discover it three weeks into a pilot."
            />

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
              {FIT.map((col, i) => (
                <Reveal key={col.title} delay={i * 80}>
                  <div
                    className={`h-full rounded-2xl border p-8 ${
                      col.good
                        ? "border-mc-green/25 bg-mc-green-wash"
                        : "border-mc-amber/25 bg-mc-amber-tint"
                    }`}
                  >
                    <h3 className="font-semibold text-mc-ink">{col.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {col.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-mc-ink-soft"
                        >
                          <span
                            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                              col.good ? "bg-mc-green-tint" : "bg-white"
                            }`}
                          >
                            {col.good ? (
                              <CheckIcon className="h-2.5 w-2.5 text-mc-green" />
                            ) : (
                              <ClockIcon className="h-2.5 w-2.5 text-mc-amber" />
                            )}
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Boundary + CTA */}
        <section className="border-t border-mc-border bg-mc-surface py-24 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <Callout
              tone="info"
              label="Scope"
              title="Your SACCO keeps the decision and the member relationship"
            >
              <p>
                MobiCheque captures and verifies. It holds no member accounts,
                moves no funds, and approves nothing on its own. Every cheque is
                decided by your staff, and the member stays yours throughout.
              </p>
            </Callout>

            <Reveal delay={100}>
              <div className="mt-12 rounded-2xl border border-mc-border bg-white p-8 text-center">
                <h3 className="text-xl font-semibold text-mc-ink">
                  Start with a small pilot
                </h3>
                <p className="mx-auto mt-3 max-w-xl leading-relaxed text-mc-muted">
                  A few hundred cheques over a few weeks, run alongside your
                  current process, is enough to know whether this works for your
                  members.
                </p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button href="/#demo" withArrow>
                    Book a demo
                  </Button>
                  <Button href="/product" variant="secondary">
                    See the product tour
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
