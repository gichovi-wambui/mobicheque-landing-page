import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";
import Callout from "../../components/Callout";
import Button from "../../components/Button";
import SectionNav from "../../components/SectionNav";
import RoiCalculator from "../../components/RoiCalculator";
import { CheckIcon, ClockIcon, AlertIcon, RecordsIcon } from "../../components/Icons";

export const metadata = {
  title: "For banks",
  description:
    "The business case for MobiCheque: where the cost sits today, what assisted review changes, how a pilot is structured, and what you commit to.",
};

/* ------------------------------------------------------------------
   NOTE FOR THE TEAM
   This page deliberately makes no volume or performance claims, because
   there is no pilot data yet. Once a pilot completes, replace the
   "what we can and cannot claim" band with measured results.
   ------------------------------------------------------------------ */

const COST_CENTRES = [
  {
    Icon: ClockIcon,
    title: "Counter and back-office time",
    body: "Every cheque consumes staff minutes at intake, again at verification, and again at exception handling. It is the largest and least visible line.",
  },
  {
    Icon: AlertIcon,
    title: "Late-stage fraud discovery",
    body: "Duplicates and alterations found after processing has begun cost far more to unwind than the same issue caught at intake.",
  },
  {
    Icon: RecordsIcon,
    title: "Reconstruction on dispute",
    body: "When a cheque is queried weeks later, assembling who did what and when is manual archaeology across paper and systems.",
  },
];

const OUTCOMES = [
  {
    title: "Intake stops depending on the branch",
    body: "Cheques can be captured wherever the depositor is, which removes travel and banking-hours constraints from your intake channel.",
  },
  {
    title: "Reviewers start from evidence, not a blank page",
    body: "The fields are already extracted, the duplicate check has already run, and the flags are already attached. The reviewer confirms rather than transcribes.",
  },
  {
    title: "Risk surfaces at intake instead of downstream",
    body: "Duplicate and date checks run before a cheque enters your process, so the cheapest moment to catch a problem is the moment you catch it.",
  },
  {
    title: "Disputes resolve from a record, not a recollection",
    body: "Every action carries a timestamp and an identity, so answering a query weeks later is a lookup rather than an investigation.",
  },
];

const COMMITMENTS = [
  {
    q: "What does a pilot cost us operationally?",
    a: "A parallel run, so your live process is never dependent on us during evaluation. The main cost is reviewer time spent working cheques in both systems for the comparison period.",
  },
  {
    q: "What do we need to integrate?",
    a: "Nothing, to start. A pilot runs console-only. Deeper integration through API, webhooks or batch files is available once you have decided to proceed.",
  },
  {
    q: "Who makes the decision on each cheque?",
    a: "Your reviewer, every time. MobiCheque assembles the evidence and applies the checks; it has no authority to approve, clear or release anything.",
  },
  {
    q: "What happens to our data if we stop?",
    a: "Records are exported to you in a structured format and deleted on the agreed schedule, with written confirmation.",
  },
];

export default function ForBanksPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="For banks"
          title="The case for verifying cheques at intake"
          description="Written for the person who has to justify this internally. It covers where the cost actually sits, what changes, what a pilot involves, and what we are not claiming."
          meta={[
            { label: "Pilot structure", value: "Parallel run" },
            { label: "Integration to start", value: "None" },
            { label: "Decision authority", value: "Stays with you" },
          ]}
        />

        <SectionNav
          items={[
            { id: "framing", label: "What this is" },
            { id: "cost", label: "Current cost" },
            { id: "sizing", label: "Sizing it" },
            { id: "changes", label: "What changes" },
            { id: "claims", label: "Straight answer" },
            { id: "commitments", label: "Commitments" },
          ]}
        />


        {/* Honest framing up front */}
        <section id="framing" className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl">
              <Callout
                tone="info"
                label="What this is"
                title="Assisted review, not automated approval"
              >
                <p>
                  MobiCheque does not approve cheques on its own, and we are not
                  going to tell you it does. Every cheque reaches one of your
                  reviewers. What changes is how much work that reviewer has to
                  do to reach a confident decision, and how much of the risk has
                  already been surfaced before they open the case.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* Where cost sits */}
        <section id="cost" className="border-y border-mc-border bg-mc-surface py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="The current cost"
              title="Where cheque handling actually costs you"
              description="Rarely a single line in a budget, which is exactly why it persists."
            />

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {COST_CENTRES.map(({ Icon, title, body }, i) => (
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

        {/* ROI */}
        <section id="sizing" className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Sizing it"
              title="Model it with your own figures"
              description="We have no interest in showing you our numbers. Put yours in and see whether the case holds."
            />

            <Reveal delay={80}>
              <div className="mt-14">
                <RoiCalculator />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Outcomes */}
        <section id="changes" className="border-y border-mc-border bg-mc-surface py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="What changes"
              title="Four things that are different afterwards"
              description="Stated as mechanisms rather than percentages, because we do not yet have pilot data and will not invent it."
            />

            <div className="mx-auto mt-14 max-w-4xl space-y-4">
              {OUTCOMES.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="flex items-start gap-5 rounded-2xl border border-mc-border bg-white p-7">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mc-green-tint">
                      <CheckIcon className="h-4 w-4 text-mc-green" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-mc-ink">
                        {item.title}
                      </h3>
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

        {/* What we will not claim */}
        <section id="claims" className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Straight answer"
              title="What we can and cannot claim yet"
              description="You are going to ask this in diligence. Here it is upfront."
            />

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-2xl border border-mc-green/25 bg-mc-green-wash p-8">
                  <h3 className="font-semibold text-mc-ink">
                    What we can stand behind
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {[
                      "Fields are extracted automatically from the cheque image",
                      "Duplicate and date checks run before reviewer handoff",
                      "Every action is timestamped and attributed",
                      "No funds can move through the platform",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-mc-ink-soft"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mc-green-tint">
                          <CheckIcon className="h-2.5 w-2.5 text-mc-green" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="h-full rounded-2xl border border-mc-amber/25 bg-mc-amber-tint p-8">
                  <h3 className="font-semibold text-mc-ink">
                    What we will not claim
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {[
                      "A straight-through-processing rate — every cheque is reviewed today",
                      "A fraud-detection accuracy figure, until measured in a pilot",
                      "Time savings from other institutions — we have not run one yet",
                      "Security certifications we do not hold",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-mc-ink-soft"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white">
                          <ClockIcon className="h-2.5 w-2.5 text-mc-amber" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-mc-muted">
                We would rather be the vendor that told you the limits than the
                one you caught overstating them.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Commitments */}
        <section id="commitments" className="border-t border-mc-border bg-mc-surface py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Commitments"
              title="What a pilot asks of you"
            />

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
              {COMMITMENTS.map((item, i) => (
                <Reveal key={item.q} delay={i * 70}>
                  <div className="h-full rounded-2xl border border-mc-border bg-white p-7">
                    <h3 className="font-semibold text-mc-ink">{item.q}</h3>
                    <p className="mt-3 leading-relaxed text-mc-muted">
                      {item.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140}>
              <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-mc-border bg-white p-8 text-center">
                <h3 className="text-xl font-semibold text-mc-ink">
                  Scope a pilot against your volumes
                </h3>
                <p className="mx-auto mt-3 max-w-xl leading-relaxed text-mc-muted">
                  Bring your cheque volumes and current handling times. We will
                  size the parallel run and agree the success measures before
                  anything is signed.
                </p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button href="/#demo" withArrow>
                    Book a demo
                  </Button>
                  <Button href="/integration" variant="secondary">
                    See the architecture
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
