import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";
import { Trophy } from "lucide-react";

const ACHIEVEMENTS = [
  {
    year: "2026",
    title: "PARC Outreach Programme",
    body: "PARC organised a community outreach programme at Holy Stars Schools, Umudioka, Awkuzu, Oyi Local Government Area, where members engaged secondary school students through mentorship, education and leadership-focused activities.",
  },
  {
    year: "2026",
    title: "Weekly Intellectual Sessions",
    body: "PARC continues to organise weekly intellectual sessions where members present research, debate contemporary policy and economic issues, strengthen critical thinking and develop public speaking skills.",
  },
];

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — PARC" },
      {
        name: "description",
        content:
          "A timeline of PARC's research, presentations, recognitions and community engagement.",
      },
      { property: "og:title", content: "Achievements — PARC" },
      {
        property: "og:description",
        content: "Milestones from the Policy Analysis and Research Congress.",
      },
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
        description="Research, intellectual development, community engagement and activities that have shaped PARC."
      />

      <section className="container-parc py-20 md:py-24">
        <ol className="relative border-l border-border pl-8 md:pl-12">
          {ACHIEVEMENTS.map((a) => (
            <li key={`${a.year}-${a.title}`} className="relative pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:-left-[57px]"
              >
                <Trophy className="h-4 w-4" />
              </span>

              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {a.year}
              </div>

              <h3 className="mt-1 font-serif text-2xl text-foreground">
                {a.title}
              </h3>

              <p className="mt-2 max-w-2xl text-muted-foreground">
                {a.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Research Culture",
              body: "PARC promotes a culture of rigorous research by encouraging members to investigate public policy, economics and contemporary issues through evidence-based inquiry and structured presentations.",
            },
            {
              title: "Community Outreach",
              body: "Beyond the university, PARC contributes to society through outreach programmes that promote education, mentorship and community development.",
            },
            {
              title: "Intellectual Development",
              body: "Through weekly presentations, discussions and constructive debates, PARC develops members' analytical thinking, communication skills and leadership capacity.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-[color:var(--surface)] p-6"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {item.title}
              </div>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
