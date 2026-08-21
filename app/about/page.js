import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";
import Button from "../../components/Button";
import { MailIcon } from "../../components/Icons";

export const metadata = {
  title: "About",
  description:
    "Who is building MobiCheque, what we believe about cheques, and how to reach us.",
};

/* ------------------------------------------------------------------
   NOTE FOR THE TEAM  --  THIS PAGE NEEDS REAL DATA BEFORE IT SHIPS
   Replace every TEAM entry below with real names, roles and short bios.
   Institutional buyers check who is behind a vendor; placeholder people
   are worse than no team page at all. Add photos to /public/team/ and
   set `photo` to the filename, or leave it null to use initials.
   ------------------------------------------------------------------ */

const TEAM = [
  {
    name: "Add founder name",
    role: "Founder",
    bio: "One or two sentences: relevant background, and why this problem. Prior institution names carry real weight with a bank buyer.",
    photo: null,
  },
  {
    name: "Add team member",
    role: "Engineering",
    bio: "What they build and what they built before. Keep it concrete.",
    photo: null,
  },
  {
    name: "Add team member",
    role: "Operations",
    bio: "Cheque, banking or compliance experience belongs here if you have it.",
    photo: null,
  },
];

const BELIEFS = [
  {
    title: "The cheque is not the problem",
    body: "Cheques persist because they solve something real for institutions and businesses. We are not trying to argue them out of existence — we are trying to remove the manual handling stacked around them.",
  },
  {
    title: "The institution keeps the decision",
    body: "A verification tool that quietly takes on decision authority becomes a liability the moment something goes wrong. Ours does not decide. It gathers evidence and hands it to a person who does.",
  },
  {
    title: "Claims should survive a pilot",
    body: "It is easy to write a percentage on a website. We would rather state the mechanism honestly now and publish measured numbers once a real pilot has produced them.",
  },
  {
    title: "Records beat recollection",
    body: "Most of the pain in cheque disputes is reconstruction. Everything the platform does leaves an attributable, timestamped trace, because that is what makes a later question answerable.",
  },
];

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About"
          title="A verification layer for an instrument nobody has modernised"
          description="MobiCheque exists because cheque handling stayed manual while everything around it went digital. We are building the layer that closes that gap without asking anyone to abandon the instrument."
        />

        {/* What we believe */}
        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="What we believe"
              title="Four positions we build from"
            />

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
              {BELIEFS.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-mc-border bg-white p-8">
                    <span className="font-mono text-xs text-mc-green">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-mc-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-mc-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="border-y border-mc-border bg-mc-surface py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Team"
              title="The people behind it"
              description="Institutional buyers want to know who they are trusting. Here we are."
            />

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((person, i) => (
                <Reveal key={person.role + i} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-mc-border bg-white p-8">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mc-green-tint text-lg font-semibold text-mc-green-deep">
                      {initials(person.name)}
                    </span>
                    <h3 className="mt-6 text-lg font-semibold text-mc-ink">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-mc-green">
                      {person.role}
                    </p>
                    <p className="mt-4 leading-relaxed text-mc-muted">
                      {person.bio}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-mc-ink md:text-4xl">
                Talk to us directly
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-mc-muted">
                Whether you want a demo, a security questionnaire completed, or
                just to test whether this is worth your time &mdash; write to us.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/#demo" withArrow>
                  Book a demo
                </Button>
                <a
                  href="mailto:mobicheque@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-mc-border bg-white px-7 py-3.5 font-semibold text-mc-ink transition-colors hover:border-mc-green/40 hover:bg-mc-green-wash"
                >
                  <MailIcon className="h-4 w-4" />
                  mobicheque@gmail.com
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
