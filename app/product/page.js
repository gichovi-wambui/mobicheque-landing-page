import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";
import Button from "../../components/Button";
import Callout from "../../components/Callout";
import ProductTour from "../../components/ProductTour";
import ChequeAnnotator from "../../components/ChequeAnnotator";
import { CheckIcon } from "../../components/Icons";

export const metadata = {
  title: "Product tour",
  description:
    "Click through both sides of MobiCheque: the capture app the depositor uses, and the reviewer console your operations team works in.",
};

const EXTRACTED = [
  ["Payee", "Name the cheque is made out to"],
  ["Amount", "Figures, cross-checked against words where legible"],
  ["Cheque number", "Instrument reference used for duplicate matching"],
  ["Date", "Checked for stale-dated and post-dated instruments"],
  ["Drawer bank", "Institution the cheque is drawn on"],
];

const CHECKS = [
  {
    title: "Duplicate history",
    body: "The cheque number and drawer details are matched against prior submissions. A repeat presentation is flagged with the earlier case attached so the reviewer can compare them directly.",
  },
  {
    title: "Date validity",
    body: "Stale-dated and post-dated instruments are identified at intake rather than discovered downstream.",
  },
  {
    title: "Amount consistency",
    body: "Where both are legible, the figure and written amounts are compared and any disagreement is raised.",
  },
  {
    title: "Image quality",
    body: "Blur, glare and cropping are caught at capture, so a reviewer never receives an unreadable submission.",
  },
];

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Product tour"
          title="Both sides of the product, without booking a call"
          description="MobiCheque has two surfaces: the app a depositor captures with, and the console your reviewers decide in. Click through either one below."
          meta={[
            { label: "Surfaces", value: "App + console" },
            { label: "Fields extracted", value: "5 per cheque" },
            { label: "Checks at intake", value: "4" },
          ]}
        />

        {/* The tour */}
        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <ProductTour />
            </Reveal>

            <Reveal delay={120}>
              <p className="mx-auto mt-16 max-w-2xl text-center text-sm leading-relaxed text-mc-faint">
                Screens above use illustrative sample data. In a demo we run the
                same flow on a real cheque.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Annotated cheque */}
        <section className="border-y border-mc-border bg-mc-surface py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="On the cheque"
              title="What we read, region by region"
              description="Hover or tap any highlighted area to see the value pulled from it, and how confident the extraction was."
            />

            <Reveal delay={80}>
              <div className="mt-14">
                <ChequeAnnotator />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Extraction detail */}
        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionHeading
                  eyebrow="Extraction"
                  title="What comes off the cheque"
                  description="Five fields, each returned with its own confidence score so a reviewer knows which ones deserve a second look."
                  align="left"
                />

                <Reveal delay={100}>
                  <div className="mt-10 overflow-hidden rounded-2xl border border-mc-border bg-white">
                    {EXTRACTED.map(([field, detail], i) => (
                      <div
                        key={field}
                        className={`flex items-start gap-4 p-5 ${
                          i > 0 ? "border-t border-mc-border-soft" : ""
                        }`}
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mc-green-tint">
                          <CheckIcon className="h-3.5 w-3.5 text-mc-green" />
                        </span>
                        <div>
                          <p className="font-semibold text-mc-ink">{field}</p>
                          <p className="mt-1 text-sm leading-relaxed text-mc-muted">
                            {detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              <div>
                <SectionHeading
                  eyebrow="Verification"
                  title="What runs before a human sees it"
                  description="Every check completes at intake, so the reviewer opens a case that already carries its evidence."
                  align="left"
                />

                <div className="mt-10 space-y-4">
                  {CHECKS.map((check, i) => (
                    <Reveal key={check.title} delay={i * 70}>
                      <div className="rounded-2xl border border-mc-border bg-white p-6">
                        <h3 className="font-semibold text-mc-ink">
                          {check.title}
                        </h3>
                        <p className="mt-2 leading-relaxed text-mc-muted">
                          {check.body}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Boundary reminder */}
        <section className="border-t border-mc-border bg-mc-surface py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl">
              <Callout
                tone="info"
                label="Decision authority"
                title="The reviewer decides — every time"
              >
                <p>
                  Nothing in this tour shows MobiCheque approving a cheque on its
                  own, because it does not. The platform assembles evidence and
                  routes the case. Approval, rejection, clearing and settlement
                  all remain with your institution.
                </p>
              </Callout>

              <Reveal delay={100}>
                <div className="mt-12 rounded-2xl border border-mc-border bg-white p-8 text-center">
                  <h3 className="text-xl font-semibold text-mc-ink">
                    See it on a real cheque
                  </h3>
                  <p className="mx-auto mt-3 max-w-xl leading-relaxed text-mc-muted">
                    A demo runs this same flow end to end, against your own
                    volumes and cheque formats.
                  </p>
                  <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                    <Button href="/#demo" withArrow>
                      Book a demo
                    </Button>
                    <Button href="/for-banks" variant="secondary">
                      Read the business case
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
