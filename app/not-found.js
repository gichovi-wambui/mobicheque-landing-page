import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { ArrowRightIcon } from "../components/Icons";

export const metadata = {
  title: "Page not found",
};

const SUGGESTIONS = [
  { href: "/product", label: "Product tour", note: "Both surfaces, click-through" },
  { href: "/security", label: "Security & trust", note: "Controls and posture" },
  { href: "/integration", label: "Integration", note: "Architecture and rollout" },
  { href: "/for-banks", label: "For banks", note: "The business case" },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 items-center bg-mc-surface py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-6 text-center">
          <p className="font-mono text-sm tracking-widest text-mc-green">404</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-mc-ink md:text-5xl">
            That page does not exist
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-mc-muted">
            The link may be out of date, or the page may have moved. Here is
            where most people are heading.
          </p>

          <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
            {SUGGESTIONS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between rounded-xl border border-mc-border bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-mc-green/30 hover:shadow-mc-sm"
              >
                <span>
                  <span className="block font-semibold text-mc-ink">
                    {item.label}
                  </span>
                  <span className="block text-sm text-mc-muted">
                    {item.note}
                  </span>
                </span>
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-mc-faint transition-transform group-hover:translate-x-1 group-hover:text-mc-green" />
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/" variant="secondary">
              Back to home
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
