import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";
import { SectionHeading } from "../components/section-heading";
import { CORE_VALUES } from "../data/parc";
import { User } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PARC — Policy Analysis and Research Congress" },
      { name: "description", content: "History, vision, mission and core values of the Policy Analysis and Research Congress at COOU Igbariam." },
      { property: "og:title", content: "About PARC" },
      { property: "og:description", content: "The story, vision and values of PARC." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About PARC"
        title="A student-led institute for a thinking generation."
        description="PARC was formed at Chukwuemeka Odumegwu Ojukwu University to give serious students a serious home — one where research, argument and leadership are practised as disciplines, not hobbies."
      />
      <section className="container-parc py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <SectionHeading eyebrow="Our History" title="Founded on a simple conviction." />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>The Policy Analysis and Research Congress was founded at COOU Igbariam by <strong className="font-semibold text-foreground">Dr. Chukwunonso Ekesiobi</strong> — an economist, policy analyst and lecturer in the Department of Economics — who believed the university should be more than a place to earn a degree; it should be a place to form minds.</p>
              <p>From weekly meetings in modest rooms to a growing body of research, presentations and public engagement, PARC has become a standing forum for rigorous thinking on the campus.</p>
              <p>Today, PARC is a student-led congress: day-to-day activities and administration are carried by an elected student Executive Council, working under the guidance and mentorship of the Founder and Convener.</p>
            </div>
          </div>
          <aside className="rounded-2xl border border-border bg-[color:var(--surface)] p-8">
            <div className="flex items-center gap-4">
              <img
                src="/images/coou-logo.jpg"
                alt="Chukwuemeka Odumegwu Ojukwu University crest"
                width={64}
                height={64}
                className="h-16 w-16 shrink-0 object-contain"
                loading="lazy"
                decoding="async"
              />
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Affiliated Institution</div>
                <div className="mt-1 font-serif text-lg leading-tight text-foreground">Chukwuemeka Odumegwu Ojukwu University</div>
              </div>
            </div>
            <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">At a Glance</div>
            <dl className="mt-6 space-y-5">
              {[
                ["Institution", "Chukwuemeka Odumegwu Ojukwu University"],
                ["Campus", "Igbariam, Anambra State"],
                ["Established", "2000"],
                ["Focus", "Policy · Research · Leadership"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col border-b border-border pb-4 last:border-0 last:pb-0">
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                  <dd className="mt-1 font-serif text-lg text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-y border-border bg-[color:var(--surface)]">
        <div className="container-parc py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { label: "Vision", body: "To be a foremost student-led policy institute in Africa — cultivating thinkers whose research, judgement and leadership shape the public conversation." },
              { label: "Mission", body: "To equip members with the analytical, communicative and moral tools to produce rigorous policy work and lead with clarity in academic, civic and professional life." },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-card p-8 md:p-10">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{c.label}</div>
                <p className="mt-4 font-serif text-2xl leading-[1.25] text-foreground sm:text-3xl">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-parc py-20 md:py-24">
        <SectionHeading eyebrow="Core Values" title="The standards we hold ourselves to." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{v.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-[color:var(--surface)]">
        <div className="container-parc py-20 md:py-24">
          <SectionHeading eyebrow="Founder & Convener" title="Dr. Chukwunonso Ekesiobi." description="PARC combines the vision and mentorship of its founder with the energy and leadership of its student executives." />
          <div className="mt-10 grid gap-8 md:grid-cols-[280px_1fr] md:items-start md:gap-12">
            <div className="mx-auto flex aspect-square w-full max-w-[280px] flex-col items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-[color:var(--gold)]/10">
              <User className="h-16 w-16 text-primary/40" />
              <span className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Portrait forthcoming</span>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Founder & Convener</div>
              <h3 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">Dr. Chukwunonso Ekesiobi</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Economist, policy analyst and lecturer in the Department of Economics at Chukwuemeka Odumegwu Ojukwu University, Igbariam. Founder and convener of the Policy Analysis and Research Congress.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <em>Full biography placeholder — an extended profile of Dr. Ekesiobi's academic work, research and public engagement will appear here.</em>
              </p>
              <blockquote className="mt-8 border-l-2 border-primary/40 pl-5 font-serif text-xl leading-snug text-foreground sm:text-2xl">
                <span className="text-primary">"</span>Placeholder for the Founder's welcome message — a statement from Dr. Ekesiobi on the vision, purpose and future of PARC.<span className="text-primary">"</span>
                <footer className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Dr. Chukwunonso Ekesiobi — Founder & Convener, PARC</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
