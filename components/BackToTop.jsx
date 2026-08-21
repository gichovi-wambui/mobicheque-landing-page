"use client";

import { useEffect, useState } from "react";
import { ArrowRightIcon } from "./Icons";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-24 right-5 z-40 lg:bottom-6 lg:right-6 flex h-11 w-11 items-center justify-center rounded-full border border-mc-border bg-white shadow-mc-md transition-all duration-300 hover:border-mc-green/40 hover:bg-mc-green-wash ${
        show
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowRightIcon className="h-5 w-5 -rotate-90 text-mc-ink" />
    </button>
  );
}
