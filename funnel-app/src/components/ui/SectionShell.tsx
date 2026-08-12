import type { PropsWithChildren } from "react";

type Tone = "base" | "panel" | "deep";

const toneClasses: Record<Tone, string> = {
  base: "bg-[var(--color-ink)]",
  panel: "bg-[var(--color-ink-soft)]",
  deep: "bg-[radial-gradient(circle_at_50%_0%,#0e2530_0%,var(--color-ink)_65%)]",
};

export function SectionShell({
  id,
  tone = "base",
  children,
  className = "",
}: PropsWithChildren<{ id?: string; tone?: Tone; className?: string }>) {
  return (
    <section id={id} className={`py-20 md:py-28 ${toneClasses[tone]} ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  title,
  intro,
  align = "center",
}: {
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      <h2 className="text-3xl md:text-[2.6rem] font-semibold leading-tight text-[var(--color-parchment)]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base md:text-lg text-[var(--color-muted)]">{intro}</p>}
    </div>
  );
}
