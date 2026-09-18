import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} (${site.legalName}): 100% pure cold-pressed culinary oils from Sangareddy, Telangana.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.28em] text-amber">
        ABOUT
      </p>
      <h1 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
        Pressed for the family you love
      </h1>
      <p className="mt-4 text-sm tracking-wide text-tan">{site.legalName}</p>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
        <p>
          At Kernel &amp; Press, we produce 100% pure, wholesome culinary oils
          cold-pressed using mechanical expellers with zero added heat—preserving
          vital nutrients, natural antioxidants, and rich authentic flavors.
        </p>
        <p>
          Every batch is double-filtered to eliminate free fatty acids (FFA),
          ensuring superior shelf life, clarity, and digestive health.
        </p>
        <p>
          Crafted inside a strictly dust-free, hygienic processing facility, our
          expellers and equipment are thoroughly steam-cleaned every day to
          eliminate contaminants, residues, and impurities—giving your kitchen
          the cleanest, farm-fresh oil possible.
        </p>
        <p>
          We work from Plot 105, Teja Garden, Kulabgoor, Sangareddy, Telangana.
          The mill is built for the way Indian homes still choose oil: by the
          seed, for the people around the table.
        </p>
      </div>

      <div className="mt-12 grid gap-4 border border-navy/10 bg-paper p-6 sm:grid-cols-3">
        <div>
          <p className="text-xs tracking-[0.2em] text-amber">PRESS</p>
          <p className="mt-2 font-serif text-xl text-navy">Mechanical only</p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-amber">HEAT</p>
          <p className="mt-2 font-serif text-xl text-navy">None added</p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-amber">FILTER</p>
          <p className="mt-2 font-serif text-xl text-navy">Double, for FFA</p>
        </div>
      </div>

      <div className="mt-10">
        <ButtonLink href="/contact" variant="navy">
          Visit or write to us
        </ButtonLink>
      </div>
    </div>
  );
}
