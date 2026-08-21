import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";
import Callout from "../../components/Callout";
import Button from "../../components/Button";
import SectionNav from "../../components/SectionNav";
import ArchitectureDiagram from "../../components/ArchitectureDiagram";
import { CheckIcon } from "../../components/Icons";

export const metadata = {
  title: "Integration & architecture",
  description:
    "How MobiCheque connects to your systems: deployment options, integration paths, data residency, and where the platform sits relative to your existing clearing process.",
};

/* ------------------------------------------------------------------
   NOTE FOR THE TEAM
   Deployment options, residency and API specifics below must match what
   you can actually deliver. Anything you cannot commit to today should be
   moved to the roadmap band rather than stated as available.
   ------------------------------------------------------------------ */

const DEPLOYMENTS = [
  {
    name: "Managed cloud",
    tagline: "Fastest to pilot",
    body: "We host and operate the platform. Your institution gets an isolated tenant with its own data, users and configuration.",
    points: [
      "No infrastructure work on your side",
      "Isolated per-institution tenant",
      "We handle updates and monitoring",
    ],
    best: "Pilots and mid-sized institutions",
  },
  {
    name: "Private cloud",
    tagline: "Your infrastructure account",
    body: "The platform runs in a cloud account you own, in a region you choose. You keep infrastructure-level control and visibility.",
    points: [
      "You control the hosting region",
      "Your own network and key management",
      "We deploy and support remotely",
    ],
    best: "Institutions with residency requirements",
  },
  {
    name: "On-premise",
    tagline: "Inside your perimeter",
    body: "Deployment within your own data centre for institutions whose policy does not permit cloud processing of cheque data.",
    points: [
      "Runs entirely inside your network",
      "No external data egress",
      "Scoped per engagement",
    ],
    best: "Tier-1 banks with strict policy",
  },
];

const INTEGRATION_PATHS = [
  {
    name: "REST API",
    body: "Submit cheques, poll status and pull decisions programmatically. Suitable when you want MobiCheque behind your own front end.",
    effort: "Days",
  },
  {
    name: "Webhooks",
    body: "We push status changes to an endpoint you control as a cheque moves through capture, verification and decision.",
    effort: "Days",
  },
  {
    name: "Batch file exchange",
    body: "Scheduled structured exports and imports for institutions whose core systems prefer file drops over live calls.",
    effort: "Days to weeks",
  },
  {
    name: "Console only",
    body: "No integration at all to start. Your reviewers work in the hosted console and export records. The usual pilot starting point.",
    effort: "None",
  },
];

const ROLLOUT = [
  {
    n: "01",
    title: "Scoping",
    body: "We map your current cheque flow, agree the pilot scope, volumes and success measures, and complete your security review.",
    span: "Week 1–2",
  },
  {
    n: "02",
    title: "Environment setup",
    body: "Tenant provisioned, deployment model configured, reviewer roles created and your team invited to the console.",
    span: "Week 2–3",
  },
  {
    n: "03",
    title: "Parallel run",
    body: "Cheques are processed through MobiCheque alongside your existing process so results can be compared without operational risk.",
    span: "Week 3–8",
  },
  {
    n: "04",
    title: "Review and decision",
    body: "We report on measured results against the agreed success measures, and you decide whether to expand, integrate deeper, or stop.",
    span: "Week 8–10",
  },
];

export default function IntegrationPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Integration & architecture"
          title="Where MobiCheque sits, and what it never touches"
          description="Written for the technical reviewers. This page covers the boundary, the deployment options, the integration paths and how a pilot actually runs."
          meta={[
            { label: "Fastest start", value: "Console only" },
            { label: "Typical pilot", value: "8–10 weeks" },
            { label: "Core banking change", value: "Not required to pilot" },
          ]}
        />

        <SectionNav
          items={[
            { id: "architecture", label: "Architecture" },
            { id: "deployment", label: "Deployment" },
            { id: "connection", label: "Connection" },
            { id: "rollout", label: "Rollout" },
          ]}
        />


        {/* Architecture */}
        <section id="architecture" className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Architecture"
              title="The boundary, drawn explicitly"
              description="The most common question from an integration team is where responsibility transfers. This is the answer."
            />

            <Reveal delay={80}>
              <div className="mt-14">
                <ArchitectureDiagram />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mx-auto mt-10 max-w-3xl">
                <Callout
                  tone="info"
                  label="Clearing"
                  title="We sit upstream of your clearing process"
                >
                  <p>
                    MobiCheque prepares and verifies the cheque before it enters
                    your existing clearing arrangements. It does not replace,
                    bypass or interact with those arrangements, and it does not
                    submit anything to a clearing house on your behalf.
                  </p>
                </Callout>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Deployment */}
        <section id="deployment" className="border-y border-mc-border bg-mc-surface py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Deployment"
              title="Three ways to run it"
              description="Chosen by your policy on where cheque data may be processed, not by which tier you buy."
            />

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {DEPLOYMENTS.map((option, i) => (
                <Reveal key={option.name} delay={i * 90}>
                  <div className="flex h-full flex-col rounded-2xl border border-mc-border bg-white p-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-mc-green">
                      {option.tagline}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.01em] text-mc-ink">
                      {option.name}
                    </h3>
                    <p className="mt-3 leading-relaxed text-mc-muted">
                      {option.body}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {option.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2.5 text-sm text-mc-ink-soft"
                        >
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mc-green-tint">
                            <CheckIcon className="h-2.5 w-2.5 text-mc-green" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto border-t border-mc-border-soft pt-5">
                      <p className="text-xs uppercase tracking-[0.12em] text-mc-faint">
                        Best fit
                      </p>
                      <p className="mt-1.5 text-sm font-medium text-mc-ink">
                        {option.best}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mx-auto mt-10 max-w-3xl">
                <Callout
                  tone="planned"
                  label="Confirm before publishing"
                  title="Data residency"
                >
                  <p>
                    State your current hosting provider and region explicitly
                    here. Kenyan institutions increasingly require in-country
                    residency, and a vague answer on this point stalls reviews.
                  </p>
                </Callout>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Integration paths */}
        <section id="connection" className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Connection"
              title="How deep you integrate is your call"
              description="A pilot needs no integration at all. Deeper connection is available when you are ready for it."
              align="left"
            />

            <Reveal delay={80}>
              <div className="mt-12 overflow-hidden rounded-2xl border border-mc-border">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-left">
                    <thead className="bg-mc-surface">
                      <tr className="text-xs uppercase tracking-[0.12em] text-mc-faint">
                        <th className="px-6 py-4 font-semibold">Path</th>
                        <th className="px-6 py-4 font-semibold">
                          What it gives you
                        </th>
                        <th className="px-6 py-4 font-semibold">
                          Effort on your side
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {INTEGRATION_PATHS.map((row) => (
                        <tr
                          key={row.name}
                          className="border-t border-mc-border-soft bg-white"
                        >
                          <td className="px-6 py-5 align-top">
                            <span className="font-semibold text-mc-ink">
                              {row.name}
                            </span>
                          </td>
                          <td className="px-6 py-5 align-top text-mc-muted">
                            {row.body}
                          </td>
                          <td className="px-6 py-5 align-top">
                            <span className="rounded-full bg-mc-green-tint px-3 py-1 text-xs font-semibold text-mc-green-deep">
                              {row.effort}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Rollout */}
        <section id="rollout" className="border-y border-mc-border bg-mc-surface py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Rollout"
              title="What a pilot actually looks like"
              description="Structured as a parallel run so nothing in your live process depends on us while we are being evaluated."
            />

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {ROLLOUT.map((step, i) => (
                <Reveal key={step.n} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-mc-border bg-white p-7">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mc-green text-sm font-semibold text-white">
                        {step.n}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-mc-faint">
                        {step.span}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-mc-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-mc-muted">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140}>
              <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-mc-border bg-white p-8 text-center">
                <h3 className="text-xl font-semibold text-mc-ink">
                  Want the technical detail?
                </h3>
                <p className="mx-auto mt-3 max-w-xl leading-relaxed text-mc-muted">
                  We will walk your integration and security teams through the
                  architecture, answer questions live, and scope a pilot against
                  your actual volumes.
                </p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button href="/#demo" withArrow>
                    Book a technical session
                  </Button>
                  <Button href="/security" variant="secondary">
                    Read the security page
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
