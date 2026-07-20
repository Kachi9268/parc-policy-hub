import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";
import { LeaderCard } from "../components/leader-card";
import { ADMINISTRATION, EXECUTIVE_LEADERSHIP, OPERATIONS, RESEARCH_COMMS } from "../data/parc";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — PARC" },
      { name: "description", content: "Meet the founder, executives, directorates and technical leadership stewarding PARC at COOU Igbariam." },
      { property: "og:title", content: "Leadership — PARC" },
      { property: "og:description", content: "The leaders of the Policy Analysis and Research Congress." },
      { property: "og:url", content: "/leadership" },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
  component: LeadershipPage,
});

function Group({ title, description, leaders }: { title: string; description?: string; leaders: { name: string; position: string; bio: string }[] }) {
  return (
    <section className="container-parc py-16 md:py-20">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{title}</div>
        {description && <p className="mt-3 text-muted-foreground">{description}</p>}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leaders.map((l) => (
          <LeaderCard key={l.name} leader={l} />
        ))}
      </div>
    </section>
  );
}

function LeadershipPage() {
  const founder = {
    name: "Founder",
    position: "Founder",
    bio: "Placeholder for the founder's biography. Full profile, portrait and message forthcoming.",
  };
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="The people behind the congress."
        description="PARC is stewarded by a dedicated team of student leaders across executive, administrative, research, communications and technical directorates."
      />
      <section className="container-parc py-16 md:py-20">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Founder</div>
          <p className="mt-3 text-muted-foreground">The founder's profile is featured below.</p>
        </div>
        <div className="mt-10">
          <LeaderCard leader={founder} featured />
        </div>
      </section>
      <div className="border-t border-border" />
      <Group title="Executive Leadership" description="The president and vice president lead PARC's overall direction and strategy." leaders={EXECUTIVE_LEADERSHIP} />
      <div className="border-t border-border" />
      <Group title="Administration" leaders={ADMINISTRATION} />
      <div className="border-t border-border" />
      <Group title="Research & Communications" leaders={RESEARCH_COMMS} />
      <div className="border-t border-border" />
      <Group title="Operations & Technical" leaders={OPERATIONS} />
    </>
  );
}