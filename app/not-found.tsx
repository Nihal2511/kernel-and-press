import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs tracking-[0.28em] text-amber">404</p>
      <h1 className="mt-3 font-serif text-4xl text-navy">This page was not pressed</h1>
      <p className="mt-4 text-muted">
        The link may be old. Return to {site.name} and start from the mill floor.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-cream"
      >
        Back home
      </Link>
    </div>
  );
}
