import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";
import { ACTIVITIES } from "../data/parc";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities — PARC" },
      { name: "description", content: "The programs and disciplines through which PARC forms rigorous researchers, thinkers and leaders." },
      { property: "og:title", content: "Activities — PARC" },
      { property: "og:description", content: "PARC's focus areas and programs." },
      { property: "og:url", content: "/activities" },
    ],
    links: [{ rel: "canonical", href: "/activities" }],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Activities"
        title="Eight programs. One standard of excellence."
        description="Each of PARC's focus areas is a discipline in itself — a distinct way of forming the researcher, the writer and the leader."
      />
      <section className="container-parc py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {ACTIVITIES.map((a) => (
            <article key={a.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-30px_rgba(22,101,52,0.35)]">
              <div className="relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-[color:var(--gold)]/10">
                <a.icon className="h-14 w-14 text-primary/60" />
                <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Image placeholder</span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-serif text-2xl text-foreground">{a.title}</h2>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{a.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}