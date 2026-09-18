import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { oils, processSteps, site } from "@/lib/site";

const values = [
  {
    title: "Cold-pressed, zero added heat",
    body: "Mechanical expellers only. We do not add heat, so nutrients, natural antioxidants, and the seed’s own flavour stay in the bottle.",
  },
  {
    title: "Double-filtered for FFA",
    body: "Every batch is double-filtered to eliminate free fatty acids—for clearer oil, longer shelf life, and oil that is kinder on digestion.",
  },
  {
    title: "Steam-cleaned, every day",
    body: "Our dust-free facility steam-cleans expellers and equipment daily, so residues and impurities do not travel from one run to the next.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-navy/10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.32em] text-amber">
              {site.tagline}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-navy sm:text-5xl lg:text-[3.35rem]">
              {site.motto}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              100% pure, wholesome culinary oils from {site.legalName} in
              Sangareddy, Telangana—pressed for Indian kitchens that still
              choose the seed first.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/products" variant="amber">
                See our oils
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Contact the mill
              </ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-amber/15 blur-3xl" aria-hidden />
            <Image
              src="/logo.jpg"
              alt={`${site.name} logo: seeds entering a mechanical press, a drop of oil below`}
              width={706}
              height={768}
              className="relative z-10 w-full rounded-sm shadow-[0_24px_60px_-28px_rgba(30,51,80,0.55)]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.28em] text-amber">
          WHY THIS PRESS
        </p>
        <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
          Industrial care, kitchen honesty
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <article
              key={item.title}
              className="border border-navy/10 bg-paper p-6 shadow-[0_10px_30px_-22px_rgba(30,51,80,0.4)]"
            >
              <div className="mb-4 h-1 w-10 bg-amber" aria-hidden />
              <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.28em] text-amber-bright">
                FROM SEED TO TIN
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Four steps. No shortcuts.
              </h2>
            </div>
            <ButtonLink href="/process" variant="amber">
              Walk the process
            </ButtonLink>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.number} className="border border-cream/15 p-5">
                <span className="font-serif text-3xl text-amber-bright">
                  {step.number}
                </span>
                <h3 className="mt-3 font-serif text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.28em] text-amber">
          EXAMPLE RANGE
        </p>
        <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
          Oils Indian kitchens know
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          A sample of common cold-pressed culinary oils. Pack sizes and the
          live lineup will be updated as SKUs are confirmed.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {oils.map((oil) => (
            <li
              key={oil.slug}
              className="border border-navy/10 bg-paper p-5"
            >
              <p className="text-xs tracking-[0.18em] text-tan uppercase">
                {oil.originNote}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-navy">{oil.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {oil.blurb}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ButtonLink href="/products" variant="navy">
            View all placeholders
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
