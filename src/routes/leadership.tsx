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
    name: "Dr. Chukwunonso Ekesiobi",
    position: "Founder & Convener",
    bio: "Economist, policy analyst and lecturer in the Department of Economics at COOU, Igbariam. Founder and convener of PARC, providing vision and mentorship to the student Executive Council. Full biography and portrait forthcoming.",
    image: "/images/founder/dr-chukwunonso-ekesiobi.jpg",
  };
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Founder and student executives."
        description="PARC is founded and convened by Dr. Chukwunonso Ekesiobi, and led day-to-day by an elected student Executive Council working under his mentorship."
      />
      <section className="container-parc py-16 md:py-20">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Founder & Convener</div>
          <p className="mt-3 text-muted-foreground">The founder provides the vision and mentorship that guides PARC's student leadership.</p>
        </div>
        <div className="mt-10">
          <LeaderCard leader={founder} featured />
        </div>
      </section>
      <div className="border-t border-border" />
      <Group title="Student Executive Council" description="The elected student leaders — president and vice president — who lead PARC's day-to-day direction and strategy under the Founder's mentorship." leaders={EXECUTIVE_LEADERSHIP} />
      <div className="border-t border-border" />
      <Group title="Administration" leaders={ADMINISTRATION} />
      <div className="border-t border-border" />
      <Group title="Research & Communications" leaders={RESEARCH_COMMS} />
      <div className="border-t border-border" />
      <Group title="Operations & Technical" leaders={OPERATIONS} />
    </>
  );
}