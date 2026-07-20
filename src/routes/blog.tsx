import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";
import { BLOG_CATEGORIES, BLOG_POSTS } from "../data/parc";
import { Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — PARC" },
      { name: "description", content: "Policy analysis, economic insights, research highlights, weekly recaps and commentary from PARC members." },
      { property: "og:title", content: "Blog — PARC" },
      { property: "og:description", content: "Writing from the Policy Analysis and Research Congress." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [cat, setCat] = useState<string>("All");
  const filters = useMemo(() => ["All", ...BLOG_CATEGORIES], []);
  const posts = cat === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === cat);

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Writing from the congress."
        description="Original analysis, weekly recaps, member spotlights and commentary — published by PARC's editorial team and members."
      />
      <section className="container-parc py-16 md:py-20">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setCat(f)}
              className={
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition " +
                (cat === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-primary")
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-30px_rgba(22,101,52,0.35)]">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/10 via-primary/5 to-[color:var(--gold)]/10">
                <span className="absolute left-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                  {p.category}
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Cover placeholder
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl leading-snug text-foreground group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.readingTime}</span>
                  <span>By {p.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">No posts in this category yet.</p>
        )}
      </section>
    </>
  );
}