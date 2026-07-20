import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: Props) {
  const isLight = tone === "light";
  return (
    <div
      className={
        "max-w-2xl " + (align === "center" ? "mx-auto text-center" : "")
      }
    >
      {eyebrow && (
        <div
          className={
            "mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] " +
            (isLight ? "text-[color:var(--gold)]" : "text-primary")
          }
        >
          <span
            aria-hidden
            className="h-px w-8 bg-current opacity-60"
          />
          {eyebrow}
        </div>
      )}
      <h2
        className={
          "font-serif text-3xl leading-[1.1] sm:text-4xl md:text-[2.75rem] " +
          (isLight ? "text-white" : "text-foreground")
        }
      >
        {title}
      </h2>
      {description && (
        <p
          className={
            "mt-4 text-base leading-relaxed sm:text-lg " +
            (isLight ? "text-white/75" : "text-muted-foreground")
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}