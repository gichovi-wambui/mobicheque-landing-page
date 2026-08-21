import Image from "next/image";
import Link from "next/link";
import { MailIcon } from "./Icons";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Product tour", href: "/product" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Verification engine", href: "/#verification" },
      { label: "Reviewer console", href: "/#console" },
    ],
  },
  {
    heading: "For institutions",
    links: [
      { label: "For banks", href: "/for-banks" },
      { label: "For SACCOs", href: "/for-saccos" },
      { label: "Integration", href: "/integration" },
      { label: "Security & trust", href: "/security" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "The problem", href: "/#problem" },
      { label: "Book a demo", href: "/#demo" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-mc-green-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo/logo.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span className="text-lg font-semibold">MobiCheque</span>
            </div>

            <p className="mt-5 max-w-xs leading-relaxed text-white/60">
              A verification layer for cheques &mdash; scan, extract, check and
              track, with a full audit trail behind every decision.
            </p>

            <a
              href="mailto:mobicheque@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              <MailIcon className="h-4 w-4" />
              mobicheque@gmail.com
            </a>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} MobiCheque. All rights reserved.
          </p>

          <p className="text-center md:text-right">
            MobiCheque verifies and tracks cheques. It does not clear, settle or
            hold funds.
          </p>
        </div>
      </div>
    </footer>
  );
}
