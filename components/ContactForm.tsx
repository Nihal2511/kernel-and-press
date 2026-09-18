"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    );

    setStatus("ready");
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-sm border border-navy/10 bg-paper p-6 shadow-[0_12px_40px_-24px_rgba(30,51,80,0.45)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-1.5 w-full rounded-sm border border-navy/20 bg-cream px-3 py-2.5 text-ink outline-none focus:border-amber"
          />
        </label>
        <label className="block text-sm font-medium text-navy">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-1.5 w-full rounded-sm border border-navy/20 bg-cream px-3 py-2.5 text-ink outline-none focus:border-amber"
          />
        </label>
      </div>
      <label className="mt-5 block text-sm font-medium text-navy">
        Phone
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91"
          className="mt-1.5 w-full rounded-sm border border-navy/20 bg-cream px-3 py-2.5 text-ink outline-none focus:border-amber"
        />
      </label>
      <label className="mt-5 block text-sm font-medium text-navy">
        How can we help?
        <textarea
          required
          name="message"
          rows={5}
          className="mt-1.5 w-full rounded-sm border border-navy/20 bg-cream px-3 py-2.5 text-ink outline-none focus:border-amber"
        />
      </label>
      <button
        type="submit"
        className="focus-ring mt-6 inline-flex rounded-sm bg-amber px-6 py-3 text-sm font-semibold tracking-wide text-navy-deep transition-colors hover:bg-amber-bright"
      >
        Send via email
      </button>
      <p className="mt-3 text-sm text-muted">
        Opens your email app addressed to{" "}
        <a className="underline decoration-amber underline-offset-4" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        . No account needed.
      </p>
      {status === "ready" ? (
        <p className="mt-3 text-sm text-navy" role="status">
          If nothing opened, copy the details and email us directly.
        </p>
      ) : null}
    </form>
  );
}
