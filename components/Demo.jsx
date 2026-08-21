"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Button from "./Button";
import { CheckIcon, MailIcon } from "./Icons";

const CONTACT_EMAIL = "mobicheque@gmail.com";

const ORG_TYPES = ["Bank", "SACCO", "Business", "Other"];

const PROMISE = [
  "A 20-minute walkthrough of the app and console",
  "A look at how the checks run on a real cheque",
  "Answers on integration and rollout",
];

/**
 * There is no backend on the landing site, so submitting composes a prefilled
 * email rather than pretending to POST somewhere. Swap `handleSubmit` for a
 * real endpoint when one exists.
 */
export default function Demo() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    type: "Bank",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Demo request — ${form.org || form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Organisation: ${form.org}`,
      `Type: ${form.type}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  const field =
    "w-full rounded-xl border border-mc-border bg-white px-4 py-3 text-mc-ink placeholder:text-mc-faint transition-colors focus:border-mc-green focus:outline-none";

  return (
    <section id="demo" className="bg-mc-surface py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Pitch */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-mc-green">
                <span className="h-1 w-1 rounded-full bg-mc-green" />
                Book a demo
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-mc-ink text-balance md:text-4xl lg:text-[2.75rem]">
                See it run on a real cheque
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 text-lg leading-relaxed text-mc-muted">
                Tell us a little about your organisation and we will walk you
                through capture, extraction, the checks, and the reviewer queue
                your team would actually use.
              </p>
            </Reveal>

            <Reveal delay={170}>
              <ul className="mt-8 space-y-3">
                {PROMISE.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-mc-ink-soft"
                  >
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mc-green-tint">
                      <CheckIcon className="h-2.5 w-2.5 text-mc-green" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={220}>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-mc-muted transition-colors hover:text-mc-green-deep"
              >
                <MailIcon className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={140}>
            <div className="rounded-2xl border border-mc-border bg-white p-8 shadow-mc-md md:p-10">
              {sent ? (
                <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mc-green-tint">
                    <CheckIcon className="h-7 w-7 text-mc-green" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-mc-ink">
                    Your email is ready to send
                  </h3>
                  <p className="mt-3 max-w-sm leading-relaxed text-mc-muted">
                    We opened a prefilled message in your mail app. Send it and
                    we will get back to you within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-medium text-mc-green-deep underline underline-offset-4"
                  >
                    Edit the details
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-mc-ink"
                      >
                        Full name
                      </label>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={update("name")}
                        className={field}
                        placeholder="Jane Wanjiru"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-mc-ink"
                      >
                        Work email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                        className={field}
                        placeholder="jane@institution.co.ke"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="org"
                      className="mb-2 block text-sm font-medium text-mc-ink"
                    >
                      Organisation
                    </label>
                    <input
                      id="org"
                      required
                      value={form.org}
                      onChange={update("org")}
                      className={field}
                      placeholder="Institution name"
                    />
                  </div>

                  <div>
                    <span className="mb-2 block text-sm font-medium text-mc-ink">
                      Organisation type
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {ORG_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, type }))}
                          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                            form.type === type
                              ? "bg-mc-green text-white"
                              : "bg-mc-surface text-mc-ink-soft hover:bg-mc-green-wash"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-mc-ink"
                    >
                      What would you like to see?
                      <span className="ml-1 font-normal text-mc-faint">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={update("message")}
                      className={`${field} resize-none`}
                      placeholder="Volumes, current process, anything specific…"
                    />
                  </div>

                  <Button type="submit" className="w-full" withArrow>
                    Request a demo
                  </Button>

                  <p className="text-center text-xs text-mc-faint">
                    We use your details only to respond to this request.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
