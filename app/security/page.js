import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";
import Callout from "../../components/Callout";
import Button from "../../components/Button";
import SectionNav from "../../components/SectionNav";
import {
  LockIcon,
  ShieldIcon,
  AuditIcon,
  DuplicateIcon,
  RouteIcon,
  RecordsIcon,
  CheckIcon,
  ClockIcon,
} from "../../components/Icons";

export const metadata = {
  title: "Security & trust",
  description:
    "How MobiCheque handles cheque images and data: access control, encryption, audit trails, data retention, and our current compliance posture.",
};

/* ------------------------------------------------------------------
   NOTE FOR THE TEAM
   Values marked "Confirm" below are placeholders. Replace them with the
   real answer before this page goes in front of an institution -- a bank
   will verify every claim on this page during due diligence.
   ------------------------------------------------------------------ */

const CONTROLS = [
  {
    Icon: LockIcon,
    title: "Encryption in transit and at rest",
    body: "All traffic between the mobile app, the API and the console runs over TLS. Cheque images and extracted data are encrypted at rest in storage.",
  },
  {
    Icon: RouteIcon,
    title: "Role-based access control",
    body: "Console access is scoped by role. Reviewers, administrators and support staff see only what their role permits, and access is granted per institution.",
  },
  {
    Icon: AuditIcon,
    title: "Attributable audit trail",
    body: "Every action on a cheque — capture, extraction, each check, each decision — is timestamped and attributed to an identity. The trail is append-only.",
  },
  {
    Icon: DuplicateIcon,
    title: "Duplicate and replay protection",
    body: "Submissions are matched against cheque history before reaching a reviewer, so the same instrument cannot be presented twice through the platform.",
  },
  {
    Icon: ShieldIcon,
    title: "Human decision authority",
    body: "MobiCheque never clears, settles or releases funds. It gathers evidence and routes to your reviewer, who holds the decision.",
  },
  {
    Icon: RecordsIcon,
    title: "Retention and deletion",
    body: "Retention windows are configurable per institution, with defined deletion on expiry and on contract exit.",
  },
];

const DATA_HANDLED = [
  {
    category: "Cheque image",
    items: "Front and back capture of the physical instrument",
    purpose: "Source for extraction and reviewer verification",
  },
  {
    category: "Extracted fields",
    items: "Payee, amount, cheque number, date, drawer bank",
    purpose: "Verification checks and reviewer decisioning",
  },
  {
    category: "Submitter identity",
    items: "Name, contact details, institution linkage",
    purpose: "Attribution and status notification",
  },
  {
    category: "Decision record",
    items: "Reviewer identity, action taken, timestamp, rationale",
    purpose: "Audit trail and dispute resolution",
  },
  {
    category: "Technical logs",
    items: "Access logs, API calls, error traces",
    purpose: "Security monitoring and incident investigation",
  },
];

const POSTURE = [
  {
    status: "live",
    title: "Encryption, access control and audit logging",
    body: "Implemented across the platform today.",
  },
  {
    status: "live",
    title: "Human review on every cheque",
    body: "No cheque is auto-approved. A reviewer in your institution decides.",
  },
  {
    status: "planned",
    title: "Independent penetration test",
    body: "Not yet completed. We will publish the summary report and remediation status once it is.",
  },
  {
    status: "planned",
    title: "ISO 27001 / SOC 2",
    body: "Not currently certified. We are happy to complete your vendor security questionnaire in the meantime.",
  },
  {
    status: "planned",
    title: "Data Protection Act registration",
    body: "Registration status with the Office of the Data Protection Commissioner — confirm current position before publishing.",
  },
];

const QUESTIONNAIRE = [
  {
    q: "Does MobiCheque hold, move or settle funds?",
    a: "No. MobiCheque is a capture and verification layer. It has no access to accounts, no payment rails, and no ability to move value. Clearing and settlement remain entirely within your institution and its existing arrangements.",
  },
  {
    q: "Who owns the data?",
    a: "The institution. MobiCheque processes cheque data on your behalf under contract. You can export your records, and data is deleted on exit according to the agreed schedule.",
  },
  {
    q: "Where is data hosted?",
    a: "Confirm before publishing — state the hosting provider and region. Kenyan institutions increasingly require in-country residency, so answer this explicitly rather than generically.",
  },
  {
    q: "Can MobiCheque staff see our cheque data?",
    a: "Access is restricted to what is required for support and incident response, is logged, and is granted on a least-privilege basis. Define and document your internal access policy here.",
  },
  {
    q: "What happens during an incident?",
    a: "Document your incident response process: detection, containment, your notification commitment and timeline to affected institutions, and post-incident reporting.",
  },
  {
    q: "How do we exit?",
    a: "Records are exportable in a structured format. On termination, data is returned or deleted per the contract, with written confirmation of deletion.",
  },
  {
    q: "Is the platform penetration tested?",
    a: "Not yet independently tested. State the planned date and the scope once scheduled.",
  },
  {
    q: "What are the availability commitments?",
    a: "Define your target uptime, maintenance windows, support hours and escalation path before signing an institutional agreement.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Security & trust"
          title="What we do with your cheque data — and what we cannot do with it"
          description="This page is written for the people who have to sign off on us: risk, security and compliance. It states what is implemented today, what is not yet, and what we will answer in writing."
          meta={[
            { label: "Funds access", value: "None" },
            { label: "Decision authority", value: "Your reviewer" },
            { label: "Data owner", value: "Your institution" },
          ]}
        />

        <SectionNav
          items={[
            { id: "scope", label: "Scope" },
            { id: "controls", label: "Controls" },
            { id: "data", label: "Data inventory" },
            { id: "posture", label: "Current posture" },
            { id: "diligence", label: "Due diligence" },
          ]}
        />


        {/* Scope boundary */}
        <section id="scope" className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl">
              <Callout
                tone="info"
                label="Scope boundary"
                title="MobiCheque never touches money"
              >
                <p>
                  The platform captures a cheque, extracts its fields, runs
                  verification checks and routes the case to a reviewer. It
                  holds no accounts, connects to no payment rail, and has no
                  mechanism to release funds. Every clearing and settlement
                  action stays inside your existing process.
                </p>
              </Callout>
            </div>
          </div>
        </section>

        {/* Controls */}
        <section id="controls" className="border-y border-mc-border bg-mc-surface py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Controls"
              title="What is in place today"
              description="The controls below are implemented and can be demonstrated during a technical review."
            />

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CONTROLS.map(({ Icon, title, body }, i) => (
                <Reveal key={title} delay={i * 70}>
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

        {/* Data handled */}
        <section id="data" className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Data inventory"
              title="Exactly what we process"
              description="No category of data beyond this list is collected or retained by the platform."
              align="left"
            />

            <Reveal delay={80}>
              <div className="mt-12 overflow-hidden rounded-2xl border border-mc-border">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-left">
                    <thead className="bg-mc-surface">
                      <tr className="text-xs uppercase tracking-[0.12em] text-mc-faint">
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold">
                          What it contains
                        </th>
                        <th className="px-6 py-4 font-semibold">Why we hold it</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DATA_HANDLED.map((row) => (
                        <tr
                          key={row.category}
                          className="border-t border-mc-border-soft bg-white"
                        >
                          <td className="px-6 py-5 align-top">
                            <span className="font-semibold text-mc-ink">
                              {row.category}
                            </span>
                          </td>
                          <td className="px-6 py-5 align-top text-mc-muted">
                            {row.items}
                          </td>
                          <td className="px-6 py-5 align-top text-mc-muted">
                            {row.purpose}
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

        {/* Honest posture */}
        <section id="posture" className="border-y border-mc-border bg-mc-surface py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Current posture"
              title="What we have, and what we do not have yet"
              description="We would rather tell you now than have you discover it in diligence. This list is kept current."
            />

            <div className="mx-auto mt-14 max-w-3xl space-y-3">
              {POSTURE.map((item, i) => {
                const live = item.status === "live";
                return (
                  <Reveal key={item.title} delay={i * 60}>
                    <div className="flex items-start gap-4 rounded-2xl border border-mc-border bg-white p-6">
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                          live
                            ? "bg-mc-green-tint text-mc-green-deep"
                            : "bg-mc-amber-tint text-mc-amber"
                        }`}
                      >
                        {live ? (
                          <CheckIcon className="h-4 w-4" />
                        ) : (
                          <ClockIcon className="h-4 w-4" />
                        )}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-semibold text-mc-ink">
                            {item.title}
                          </h3>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                              live
                                ? "bg-mc-green-tint text-mc-green-deep"
                                : "bg-mc-amber-tint text-mc-amber"
                            }`}
                          >
                            {live ? "In place" : "Not yet"}
                          </span>
                        </div>
                        <p className="mt-2 leading-relaxed text-mc-muted">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pre-answered questionnaire */}
        <section id="diligence" className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Vendor due diligence"
              title="Answers before you send the questionnaire"
              description="The questions institutional security teams ask us most often, answered in advance."
            />

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
              {QUESTIONNAIRE.map((item, i) => (
                <Reveal key={item.q} delay={i * 50}>
                  <div className="h-full rounded-2xl border border-mc-border bg-white p-7">
                    <h3 className="font-semibold text-mc-ink">{item.q}</h3>
                    <p className="mt-3 leading-relaxed text-mc-muted">
                      {item.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-mc-border bg-mc-surface p-8 text-center">
                <h3 className="text-xl font-semibold text-mc-ink">
                  Need this in your own format?
                </h3>
                <p className="mx-auto mt-3 max-w-xl leading-relaxed text-mc-muted">
                  Send us your vendor security questionnaire and we will
                  complete it and return it with supporting detail.
                </p>
                <div className="mt-7 flex justify-center">
                  <Button href="/#demo" withArrow>
                    Talk to us
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
