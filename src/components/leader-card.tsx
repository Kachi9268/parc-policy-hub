import { User } from "lucide-react";
import type { Leader } from "../data/parc";

export function LeaderCard({ leader, featured = false }: { leader: Leader; featured?: boolean }) {
  return (
    <article
      className={
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-30px_rgba(22,101,52,0.35)] " +
        (featured ? "md:flex-row" : "")
      }
    >
      <div
        className={
          "relative flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-[color:var(--gold)]/10 " +
          (featured ? "aspect-[4/3] md:w-1/2 md:aspect-auto" : "aspect-[4/5]")
        }
        aria-hidden
      >
        <User className="h-16 w-16 text-primary/40" />
        <span className="absolute bottom-3 left-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Photo placeholder
        </span>
      </div>
      <div className={"flex flex-col p-6 " + (featured ? "md:w-1/2 md:justify-center md:p-10" : "")}>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {leader.position}
        </div>
        <h3 className={"mt-2 font-serif " + (featured ? "text-3xl" : "text-xl")}>
          {leader.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {leader.bio}
        </p>
      </div>
    </article>
  );
}