import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} in Sangareddy, Telangana. ${site.phoneDisplay}, ${site.email}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.28em] text-amber">
        CONTACT
      </p>
      <h1 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
        The mill is in Sangareddy
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        Reach {site.legalName} for household orders, trade enquiries, or a
        visit. We read every note.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-navy">Address</h2>
            <address className="mt-2 not-italic leading-relaxed text-muted">
              {site.address.line}
            </address>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Phone</h2>
            <p className="mt-2">
              <a
                className="focus-ring rounded-sm text-lg text-navy underline decoration-amber underline-offset-4"
                href={`tel:${site.phoneTel}`}
              >
                {site.phoneDisplay}
              </a>
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-navy">Email</h2>
            <p className="mt-2">
              <a
                className="focus-ring rounded-sm text-lg text-navy underline decoration-amber underline-offset-4"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>
          </section>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
