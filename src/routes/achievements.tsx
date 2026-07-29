import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";
import { ACHIEVEMENTS } from "../data/parc";
import { Trophy } from "lucide-react";

export const ACHIEVEMENTS = [
{
year: "2026",
title: "PARC Outreach Programme",
body: "PARC held an outreach programme at Holy Stars Schools, Umudioka, Awkuzu, Oyi LGA, bringing PARCites and volunteers together to engage, encourage and invest in young students.",
},
{
year: "2026",
title: "Weekly Intellectual Sessions",
body: "PARC continues to hold weekly intellectual sessions where members research, present and critically discuss economic, policy and social issues in an interactive academic environment.",
},
{
year: "2025",
title: "Participation in the 18th NAEE/IAEE Annual International Conference",
body: "PARC delegates participated in the 18th Nigerian Association for Energy Economics / International Association for Energy Economics Annual International Conference in Abuja, where PARC representatives were scheduled to contribute presentations to discussions on energy policy and developing economies.",
},
{
year: "2020",
title: "Contribution to Research on Entrepreneurship in Anambra State",
body: "Members of PARC–COOU assisted with the survey exercise for research examining the Igbo entrepreneurship model and entrepreneurial development in Anambra State.",
},
];
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
  {[
    {
      title: "Research",
      body: "PARC members have contributed to research activities, including fieldwork supporting research on entrepreneurship and economic development in Anambra State.",
    },
    {
      title: "Community Outreach",
      body: "PARC extended its work beyond the university through its 2026 outreach programme at Holy Stars Schools, Umudioka, Awkuzu.",
    },
    {
      title: "Intellectual Sessions",
      body: "PARC's weekly sessions provide a platform for members to research, present, question and debate important economic, policy and social issues.",
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
