"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo markSize={52} />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-sm px-3 py-2 text-sm tracking-wide transition-colors ${
                  active
                    ? "font-semibold text-navy"
                    : "text-muted hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="focus-ring ml-3 rounded-sm bg-navy px-4 py-2 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-navy-soft"
          >
            Talk to us
          </Link>
        </nav>
        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-sm border border-navy/20 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
            )}
          </svg>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-navy/10 bg-paper px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring block rounded-sm px-2 py-3 text-base text-navy"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-navy/10 pt-4 text-sm text-muted">
            {site.phoneDisplay}
          </p>
        </nav>
      ) : null}
    </header>
  );
}
