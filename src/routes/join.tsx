import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/page-header";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join PARC — Membership" },
      { name: "description", content: "Who can join PARC, membership benefits and how to apply." },
      { property: "og:title", content: "Join PARC" },
      { property: "og:description", content: "Become a member of the Policy Analysis and Research Congress." },
      { property: "og:url", content: "/join" },
    ],
    links: [{ rel: "canonical", href: "/join" }],
  }),
  component: JoinPage,
});

function JoinPage() {
  const benefits = [
    "Weekly intellectual sessions with peers and mentors",
    "Structured practice in research, writing and public speaking",
    "Publication opportunities in PARC editorial channels",
    "Mentorship from senior members and alumni",
    "A durable network of principled thinkers and leaders",
    "Recognition through PARC's presenter and research programs",
  ];
  const steps = [
    { n: "01", t: "Express interest", d: "Reach out via our contact page or the application link below." },
    { n: "02", t: "Orientation", d: "Attend an introductory session to understand PARC's culture, standards and programs." },
    { n: "03", t: "Active participation", d: "Engage in weekly sessions, contribute to research and complete a probation period." },
    { n: "04", t: "Full membership", d: "Confirmed as a full member of the congress with access to all directorates." },
  ];
  return (
    <>
      <PageHeader
        eyebrow="Join PARC"
        title="Become a member of the congress."
        description="PARC is open to serious students who take ideas seriously. If you want to be formed as a researcher, thinker and leader, we invite you to apply."
      />
      <section className="container-parc py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-serif text-3xl text-foreground">Who can join</h2>
            <p className="mt-4 text-muted-foreground">
              Membership is open to all students of Chukwuemeka Odumegwu Ojukwu University who are committed to intellectual rigor, integrity and consistent participation. We welcome members from every faculty and level of study.
            </p>
            <h2 className="mt-10 font-serif text-3xl text-foreground">Benefits of membership</h2>
            <ul className="mt-4 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-[color:var(--surface)] p-8 md:p-10">
            <h2 className="font-serif text-3xl text-foreground">Application process</h2>
            <ol className="mt-6 space-y-6">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <div className="font-serif text-3xl text-primary">{s.n}</div>
                  <div>
                    <div className="font-semibold text-foreground">{s.t}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Start your application <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}