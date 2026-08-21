"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Sticky in-page section nav for the long interior pages.
 *
 * Horizontal rather than a left rail, because the pages use a centred
 * max-w-7xl layout that a fixed rail would collide with. Scrolls
 * horizontally on small screens and keeps the active item in view.
 *
 * Takes [{ id, label }] and expects matching ids on the page sections.
 */
export default function SectionNav({ items }) {
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const nodes = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!nodes.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -68% 0px", threshold: 0 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [items]);

  // Keep the active chip visible when the rail overflows on mobile.
  useEffect(() => {
    const link = linkRefs.current[active];
    const list = listRef.current;
    if (!link || !list) return;

    const linkBox = link.getBoundingClientRect();
    const listBox = list.getBoundingClientRect();

    if (linkBox.left < listBox.left || linkBox.right > listBox.right) {
      list.scrollTo({
        left: link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <div className="sticky top-[73px] z-40 border-b border-mc-border bg-white/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <nav aria-label="On this page">
          <ul
            ref={listRef}
            className="flex gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="shrink-0">
                  <a
                    ref={(el) => {
                      linkRefs.current[item.id] = el;
                    }}
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`block whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-mc-green-tint font-semibold text-mc-green-deep"
                        : "text-mc-muted hover:bg-mc-surface hover:text-mc-ink"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
