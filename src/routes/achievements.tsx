import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";
import { ACHIEVEMENTS } from "../data/parc";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — PARC" },
      { name: "description", content: "A timeline of PARC's research, presentations, recognitions and community engagement." },
      { property: "og:title", content: "Achievements — PARC" },
      { property: "og:description", content: "Milestones from the Policy Analysis and Research Congress." },
      { property: "og:url", content: "/achievements" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
  component: AchievementsPage,
});

function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="A record of rigorous work."
        description="Presentations, recognitions, community engagement and the events that have shaped PARC."
      />
      <section className="container-parc py-20 md:py-24">
        <ol className="relative border-l border-border pl-8 md:pl-12">
          {ACHIEVEMENTS.map((a) => (
            <li key={a.title} className="relative pb-10 last:pb-0">
              <span aria-hidden className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:-left-[57px]">
                <Trophy className="h-4 w-4" />
              </span>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{a.year}</div>
              <h3 className="mt-1 font-serif text-2xl text-foreground">{a.title}</h3>
              <p className="mt-2 max-w-2xl text-muted-foreground">{a.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {["Partnerships", "Community Outreach", "Major Events"].map((t) => (
            <div key={t} className="rounded-2xl border border-dashed border-border bg-[color:var(--surface)] p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">Placeholder — content forthcoming.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}