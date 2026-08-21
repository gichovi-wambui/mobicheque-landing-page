"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Route-level error boundary. Keeps a runtime failure from showing the user
 * a blank page, and gives them a way out.
 */
export default function Error({ error, reset }) {
  useEffect(() => {
    // Replace with your error reporting service when one is wired up.
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-mc-surface px-6">
      <div className="w-full max-w-md text-center">
        <p className="font-mono text-sm tracking-widest text-mc-green">Error</p>

        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-mc-ink">
          Something went wrong
        </h1>

        <p className="mt-4 leading-relaxed text-mc-muted">
          This page failed to load. Trying again usually clears it.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-mc-green px-6 py-3 font-semibold text-white shadow-mc-green transition-colors hover:bg-[#019660]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-mc-border bg-white px-6 py-3 font-semibold text-mc-ink transition-colors hover:bg-mc-green-wash"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
