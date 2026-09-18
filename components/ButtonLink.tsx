import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "navy" | "amber" | "ghost";
};

export function ButtonLink({ href, children, variant = "navy" }: Props) {
  const styles = {
    navy: "bg-navy text-cream hover:bg-navy-soft",
    amber:
      "bg-amber text-navy-deep hover:bg-amber-bright",
    ghost:
      "border border-navy/25 bg-transparent text-navy hover:border-amber hover:text-navy-deep",
  }[variant];

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}
