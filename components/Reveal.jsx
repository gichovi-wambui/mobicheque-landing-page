"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades + lifts children into view once, the first time they intersect.
 * Falls back to visible immediately when IntersectionObserver is missing,
 * and CSS handles prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // No observer support: show the content rather than leaving it hidden.
    // Deferred so the state update does not run synchronously in the effect.
    if (typeof IntersectionObserver === "undefined") {
      const t = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ "--mc-delay": `${delay}ms` }}
      className={`mc-reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
