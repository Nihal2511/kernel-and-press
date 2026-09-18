import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
  markSize?: number;
  showWordmark?: boolean;
  href?: string;
  invert?: boolean;
};

export function Logo({
  className = "",
  markSize = 56,
  showWordmark = true,
  href = "/",
  invert = false,
}: LogoProps) {
  const inner = (
    <>
      <Image
        src="/mark.png"
        alt=""
        width={markSize}
        height={markSize}
        className="h-auto w-auto shrink-0"
        style={{ height: markSize, width: "auto" }}
        priority
      />
      {showWordmark ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={`font-serif text-[1.15rem] font-semibold tracking-[0.04em] sm:text-[1.35rem] ${invert ? "text-cream" : "text-navy"}`}
          >
            {site.name}
          </span>
          <span
            className={`mt-1 font-sans text-[0.62rem] font-medium tracking-[0.28em] ${invert ? "text-amber-bright" : "text-navy-soft"}`}
          >
            {site.tagline}
          </span>
        </span>
      ) : null}
    </>
  );

  const classes = `inline-flex items-center gap-3 focus-ring rounded-sm ${className}`;

  if (!href) {
    return <span className={classes}>{inner}</span>;
  }

  return (
    <Link href={href} className={classes} aria-label={`${site.name} home`}>
      {inner}
    </Link>
  );
}
