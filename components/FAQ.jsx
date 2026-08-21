"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ChevronDownIcon } from "./Icons";

const QUESTIONS = [
  {
    q: "Does MobiCheque move money or clear cheques?",
    a: "No. MobiCheque is a verification and tracking layer. It captures the cheque, extracts and checks the data, and routes it to your reviewers. Clearing, settlement and any movement of funds stay entirely with your institution and its existing rails.",
  },
  {
    q: "Is every cheque approved automatically?",
    a: "No, and that is deliberate. The automated checks gather evidence — extracted fields, confidence scores, duplicate matches and fraud signals — but a reviewer in your team makes the final decision. Human sign-off stays in the loop on every cheque.",
  },
  {
    q: "What does the OCR actually read?",
    a: "Payee name, amount, cheque number, date and drawer bank, each returned with a confidence score so reviewers can see which fields need a second look rather than re-keying everything.",
  },
  {
    q: "How are duplicate submissions caught?",
    a: "Each submission is matched against cheque history before it reaches a reviewer. A cheque that has already been presented is flagged with the earlier case attached, so the reviewer can compare the two directly.",
  },
  {
    q: "What do our reviewers need to get started?",
    a: "A browser. The console runs on the web with role-based access, so you invite your team, set permissions, and start working the queue. Depositors use the mobile app to submit.",
  },
  {
    q: "What happens to the cheque images and data?",
    a: "They move through access-controlled workflows, and every action taken on a cheque is timestamped and attributed. The result is a complete audit trail from capture through to final decision.",
  },
];

function Item({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-mc-border last:border-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-6 py-6 text-left"
      >
        <span
          className={`text-lg font-medium transition-colors ${
            isOpen ? "text-mc-green-deep" : "text-mc-ink"
          }`}
        >
          {item.q}
        </span>
        <span
          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "rotate-180 bg-mc-green text-white"
              : "bg-mc-surface text-mc-muted"
          }`}
        >
          <ChevronDownIcon className="h-4 w-4" />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl pr-12 leading-relaxed text-mc-muted">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="The questions institutions ask first"
          description="Straight answers on scope, control and what MobiCheque does and does not do."
        />

        <Reveal delay={80}>
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-mc-border bg-white px-8 shadow-mc-sm">
            {QUESTIONS.map((item, i) => (
              <Item
                key={item.q}
                item={item}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
