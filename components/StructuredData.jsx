import { SITE_URL } from "../lib/site";
/**
 * JSON-LD structured data.
 *
 * Helps search engines and AI assistants describe MobiCheque accurately
 * rather than guessing. Claims here are deliberately narrow and match the
 * site copy -- structured data that overstates gets you described wrongly
 * in exactly the places you cannot correct.
 *
 * Update SITE_URL to the production domain.
 */


const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MobiCheque",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/logo.png`,
  description:
    "MobiCheque is a cheque capture and verification layer for banks, SACCOs and businesses. It extracts cheque fields, runs duplicate and fraud checks, and routes cases to institutional reviewers. It does not clear, settle or hold funds.",
  email: "mobicheque@gmail.com",
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
};

const software = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MobiCheque",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web, Android, iOS",
  url: SITE_URL,
  description:
    "Scan a cheque, extract payee, amount, cheque number, date and drawer bank automatically, run duplicate and date checks, and route the case to a reviewer with a full audit trail.",
  featureList: [
    "Cheque image capture with quality checks",
    "OCR field extraction with per-field confidence scores",
    "Duplicate detection against cheque history",
    "Date validity and amount consistency checks",
    "Reviewer queue with human decision authority",
    "Timestamped, attributable audit trail",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Banks, SACCOs, businesses",
  },
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }}
      />
    </>
  );
}
