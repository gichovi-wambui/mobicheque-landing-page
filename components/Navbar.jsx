"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "./Icons";
import Button from "./Button";

const LINKS = [
  { href: "/product", label: "Product" },
  { href: "/security", label: "Security" },
  { href: "/integration", label: "Integration" },
  { href: "/for-banks", label: "For banks" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the page from scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-mc-border bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-2.5"
          aria-label="MobiCheque home"
        >
          <Image
            src="/logo/logo.png"
            alt=""
            width={32}
            height={32}
            priority
            className="h-8 w-8 rounded-lg object-contain"
          />
          <span className="text-lg font-semibold tracking-[-0.01em] text-mc-ink">
            MobiCheque
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-mc-ink-soft transition-colors hover:bg-mc-green-wash hover:text-mc-green-deep"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/#demo" size="md" withArrow>
            Book a demo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-mc-ink transition-colors hover:bg-mc-green-wash lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-mc-border bg-white transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-xl px-4 py-3 text-base font-medium text-mc-ink-soft transition-colors hover:bg-mc-green-wash hover:text-mc-green-deep"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="/#demo"
            className="mt-3 w-full"
            onClick={close}
            withArrow
          >
            Book a demo
          </Button>
        </div>
      </div>
    </header>
  );
}
