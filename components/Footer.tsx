import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-navy/10 bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo invert markSize={64} href="/" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/80">
            {site.motto}
          </p>
          <p className="mt-3 text-xs tracking-wide text-cream/60">
            {site.legalName}
          </p>
        </div>
        <div>
          <h2 className="font-serif text-xl text-amber-bright">Visit</h2>
          <address className="mt-3 not-italic text-sm leading-relaxed text-cream/85">
            {site.address.line}
          </address>
          <p className="mt-4 text-sm">
            <a
              className="focus-ring rounded-sm underline decoration-amber/60 underline-offset-4 hover:text-amber-bright"
              href={`tel:${site.phoneTel}`}
            >
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-2 text-sm">
            <a
              className="focus-ring rounded-sm underline decoration-amber/60 underline-offset-4 hover:text-amber-bright"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </div>
        <div>
          <h2 className="font-serif text-xl text-amber-bright">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring rounded-sm text-cream/85 hover:text-amber-bright"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/55">
        © {new Date().getFullYear()} {site.legalName}. Cold pressed culinary oils
        from Telangana, India.
      </div>
    </footer>
  );
}
