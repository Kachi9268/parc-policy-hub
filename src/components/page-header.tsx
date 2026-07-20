import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="border-b border-border bg-[color:var(--surface)]">
      <div className="container-parc py-16 md:py-24">
        {eyebrow && (
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span aria-hidden className="h-px w-8 bg-current opacity-60" />
            {eyebrow}
          </div>
        )}
        <h1 className="font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}