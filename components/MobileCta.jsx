"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

/**
 * Bottom CTA bar for small screens.
 *
 * On mobile the navbar CTA scrolls out of view and never comes back, so the
 * only way to convert was to scroll all the way to the demo form. This keeps
 * the action reachable.
 *
 * Hides itself once the demo section is actually in view, so it never covers
 * the form it points at.
 */
export default function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [atDemo, setAtDemo] = useState(false);

  useEffect(() => {
    const demo = document.getElementById("demo");
    if (!demo || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => setAtDemo(entry.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(demo);
    return () => io.disconnect();
  }, []);

  const visible = show && !atDemo;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-mc-border bg-white/95 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-mc-ink">
            See it on a real cheque
          </p>
          <p className="truncate text-xs text-mc-muted">
            20-minute walkthrough
          </p>
        </div>

        <Link
          href="/#demo"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-mc-green px-5 py-2.5 text-sm font-semibold text-white shadow-mc-green"
        >
          Book a demo
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
