import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { oils, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cold pressed oils",
  description: `Example culinary oil range from ${site.name}: groundnut, sesame, coconut, mustard, sunflower, and almond—updated as SKUs are confirmed.`,
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.28em] text-amber">
        OILS
      </p>
      <h1 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
        Culinary oils, pressed without added heat
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        The cards below are an example of the cold-pressed oils Indian kitchens
        typically keep on the shelf. They are not a live catalogue yet—names,
        variants, and pack sizes will be updated when production SKUs are
        locked.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {oils.map((oil) => (
          <article
            key={oil.slug}
            className="flex flex-col border border-navy/10 bg-paper p-7 shadow-[0_10px_30px_-22px_rgba(30,51,80,0.4)]"
          >
            <p className="text-xs font-medium tracking-[0.2em] text-tan uppercase">
              Example SKU
            </p>
            <h2 className="mt-2 font-serif text-3xl text-navy">{oil.name}</h2>
            <p className="mt-1 text-sm text-amber">{oil.originNote}</p>
            <p className="mt-4 flex-1 leading-relaxed text-muted">{oil.blurb}</p>
            <p className="mt-5 text-sm text-navy">
              Mechanical expeller · zero added heat · double-filtered
            </p>
          </article>
        ))}
      </div>
      <aside className="mt-12 border-l-4 border-amber bg-cream-dark/60 p-6">
        <h2 className="font-serif text-2xl text-navy">Lineup can change</h2>
        <p className="mt-2 max-w-3xl leading-relaxed text-muted">
          If you cook for a household, a cloud kitchen, or a kirana that wants
          a consistent cold-pressed supply, tell us which seeds you need. We
          will confirm what is on the mill floor.
        </p>
        <div className="mt-5">
          <ButtonLink href="/contact" variant="amber">
            Ask about availability
          </ButtonLink>
        </div>
      </aside>
    </div>
  );
}
