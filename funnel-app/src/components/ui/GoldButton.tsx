import type { AnchorHTMLAttributes } from "react";
import { ArrowRightIcon } from "../Icons";

type Variant = "solid" | "outline";

interface GoldButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  showArrow?: boolean;
}

export function GoldButton({
  variant = "solid",
  showArrow = true,
  className = "",
  children,
  ...rest
}: GoldButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]";
  const styles =
    variant === "solid"
      ? "bg-gradient-to-r from-[var(--color-accent-soft)] via-[var(--color-accent)] to-[var(--color-accent-deep)] text-[var(--color-ink)] shadow-[0_8px_30px_-8px_rgba(53,195,234,0.5)]"
      : "border border-[var(--color-gold-deep)] text-[var(--color-parchment)] hover:border-[var(--color-gold)]";

  return (
    <a className={`${base} ${styles} ${className}`} {...rest}>
      {children}
      {showArrow && <ArrowRightIcon width={16} height={16} />}
    </a>
  );
}
