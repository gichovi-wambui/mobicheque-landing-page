import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "../lib/site";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import MobileCta from "../components/MobileCta";
import StructuredData from "../components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MobiCheque | Deposit Cheques Anytime Anywhere Zero Hassle",
    template: "%s | MobiCheque",
  },
  description:
    "MobiCheque turns a phone camera into a cheque intake desk. Scan a cheque, extract every field automatically, run duplicate and fraud checks, and route it to your reviewers with a complete audit trail.",
  keywords: [
    "cheque verification",
    "cheque scanning",
    "OCR cheque",
    "fraud detection",
    "banks Kenya",
    "SACCO",
    "fintech Kenya",
  ],
  openGraph: {
    type: "website",
    siteName: "MobiCheque",
    title: "MobiCheque | Verify every cheque before you clear it",
    description:
      "Scan, extract, verify and track cheques — with a full audit trail behind every decision.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MobiCheque | Verify every cheque before you clear it",
    description:
      "Scan, extract, verify and track cheques — with a full audit trail behind every decision.",
    images: ["/og.png"],
  },
};

export const viewport = {
  themeColor: "#00a86b",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <StructuredData />
        <ScrollProgress />
        {children}
        <BackToTop />
        <MobileCta />
      </body>
    </html>
  );
}
