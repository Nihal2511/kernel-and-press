import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { processSteps, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our process",
  description: `How ${site.name} cold-presses culinary oils: selected seeds, mechanical expeller with no added heat, double filtration for FFA, and hygienic packing from a daily steam-cleaned facility.`,
};

function SeedIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16 text-navy" aria-hidden>
      <ellipse cx="24" cy="34" rx="10" ry="16" fill="currentColor" opacity="0.15" transform="rotate(-25 24 34)" />
      <ellipse cx="40" cy="30" rx="8" ry="13" fill="#c9912a" opacity="0.85" transform="rotate(20 40 30)" />
      <ellipse cx="32" cy="38" rx="7" ry="11" fill="#5c4330" opacity="0.7" />
    </svg>
  );
}

function PressIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
      <rect x="18" y="10" width="6" height="36" fill="#1e3350" />
      <rect x="40" y="10" width="6" height="36" fill="#1e3350" />
      <rect x="28" y="16" width="8" height="28" fill="#8aa0b8" />
      <path d="M28 22c6 4 8 8 8 16" stroke="#f6f1e7" strokeWidth="2" fill="none" />
      <ellipse cx="32" cy="52" rx="6" ry="8" fill="#c9912a" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
      <path d="M16 14h32l-12 16v16l-8 6V30L16 14z" fill="#1e3350" />
      <path d="M24 22h16" stroke="#c9912a" strokeWidth="2" />
      <path d="M26 28h12" stroke="#c9912a" strokeWidth="2" />
    </svg>
  );
}

function PackIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
      <rect x="20" y="14" width="24" height="36" rx="2" fill="#1e3350" />
      <rect x="24" y="20" width="16" height="10" fill="#f6f1e7" opacity="0.9" />
      <ellipse cx="32" cy="42" rx="5" ry="7" fill="#c9912a" />
    </svg>
  );
}

const processIcons = [SeedIcon, PressIcon, FilterIcon, PackIcon];

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.28em] text-amber">
        OUR PROCESS
      </p>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl text-navy sm:text-5xl">
        From selected seed to a clean bottle
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        Cold-pressed here means mechanical pressure and no added heat—then
        double filtration and packing from a facility that is steam-cleaned
        every day.
      </p>

      <ol className="mt-14 space-y-8">
        {processSteps.map((step, index) => {
          const Icon = processIcons[index] ?? SeedIcon;
          return (
          <li
            key={step.number}
            className="grid items-center gap-6 border border-navy/10 bg-paper p-6 sm:grid-cols-[auto_1fr] sm:p-8"
          >
            <div className="flex h-24 w-24 items-center justify-center border border-navy/10 bg-cream">
              <Icon />
            </div>
            <div>
              <p className="font-serif text-sm tracking-[0.2em] text-amber">
                STEP {step.number}
              </p>
              <h2 className="mt-1 font-serif text-3xl text-navy">{step.title}</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </li>
          );
        })}
      </ol>

      <section className="mt-14 bg-navy p-8 text-cream sm:p-10">
        <h2 className="font-serif text-3xl">Daily steam-cleaning</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-cream/80">
          Crafted inside a strictly dust-free, hygienic processing facility,
          our expellers and equipment are thoroughly steam-cleaned every day to
          eliminate contaminants, residues, and impurities—giving your kitchen
          the cleanest, farm-fresh oil possible.
        </p>
        <div className="mt-6">
          <ButtonLink href="/about" variant="amber">
            Read the brand story
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
