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
              <p>The Policy Analysis and Research Congress was founded in 2017 at COOU Igbariam by <strong className="font-semibold text-foreground">Dr. Chukwunonso Ekesiobi</strong> — an economist, policy analyst and lecturer in the Department of Economics — who believed the university should be more than a place to earn a degree; it should be a place to form minds.</p>
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
            <div className="mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-border">
  <img
    src="/images/founder/dr-chukwunonso-ekesiobi.jpg"
    alt="Dr. Chukwunonso Ekesiobi"
    className="h-full w-full object-cover"
    loading="lazy"
  />
</div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Founder & Convener</div>
              <h3 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">Dr. Chukwunonso Ekesiobi</h3>
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
  <p>
    Dr. Chukwunonso Sylvester Ekesiobi is an economist, researcher and Senior
    Lecturer in the Department of Economics at Chukwuemeka Odumegwu Ojukwu
    University (COOU), Igbariam. His academic interests span Energy Economics,
    Policy Economics, Environmental Economics, Social Research and
    International Economic Relations. His{" "}
    <a
      href="https://coou.edu.ng/staff/view-staff?id=823"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary hover:underline"
    >
      official COOU staff profile
    </a>{" "}
    provides a detailed record of his academic career, research interests,
    publications and university service.
  </p>  <p>
    Dr. Ekesiobi earned a First-Class Honours degree in Economics from Anambra
    State University in 2008, now Chukwuemeka Odumegwu Ojukwu University.
    According to his official university profile, he was the first student in
    the Department of Economics at COOU to achieve a First-Class degree. He
    subsequently obtained an MSc in Public Sector Economics from the University
    of Nigeria, Nsukka, in 2013, followed by a PhD in Energy/Welfare Economics
    from the same university in 2024. His doctoral research examined energy
    efficiency, transition and quality of life in Nigeria.{" "}
    <a
      href="https://coou.edu.ng/staff/view-staff?id=823"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary hover:underline"
    >
      COOU Staff Profile
    </a>
  </p>  <p>
    He joined the services of COOU in 2010 as a Graduate Assistant in the
    Department of Economics and has since taken on extensive academic and
    administrative responsibilities. His university profile records nine years
    of service as Departmental Examination Officer and six years as Faculty
    Examination Officer, alongside participation in faculty and university
    committees concerned with examinations, academic standards, quality
    assurance, strategic planning, research and institutional development.{" "}
    <a
      href="https://coou.edu.ng/staff/view-staff?id=823"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary hover:underline"
    >
      COOU Staff Profile
    </a>
  </p>  <p>
    His academic work has produced research across areas including energy
    efficiency, environmental sustainability, public finance, financial
    development, economic growth and development. His published research
    includes work on the relationship between international trade, foreign
    direct investment and carbon emissions in Nigeria, as well as energy
    efficiency investment and the implications of financial development and
    debt. His{" "}
    <a
      href="https://coou.edu.ng/staff/view-staff?id=823"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary hover:underline"
    >
      COOU research profile
    </a>{" "}
    provides a comprehensive list of his journal articles, book chapters,
    books, conference papers and other research outputs.
  </p>  <p>
    Dr. Ekesiobi has also participated in academic conferences and professional
    research activities, including conferences of the Nigerian Economic Society
    (NES) and the Nigeria Association for Energy Economics/International
    Association for Energy Economics (NAEE/IAEE). His university profile
    records presentations on issues including macroeconomic policy, economic
    diversification, energy security, energy poverty and sustainable
    development.{" "}
    <a
      href="https://coou.edu.ng/staff/view-staff?id=823"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary hover:underline"
    >
      COOU Staff Profile
    </a>
  </p>  <p>
    His research and professional activities have received support through
    research and travel grants from organisations including the Institute for
    New Economic Thinking (INET), the Nigerian Tax Research Network (NTRN) and
    the Federal Inland Revenue Service (FIRS), according to his official
    university profile. The same profile records consultancy engagements
    involving organisations including the International Centre for Tax and
    Development, INET, NTRN and the Energy Commission of Nigeria.{" "}
    <a
      href="https://coou.edu.ng/staff/view-staff?id=823"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary hover:underline"
    >
      COOU Staff Profile
    </a>
  </p>  <p>
    Beyond his academic work, Dr. Ekesiobi has held leadership and service roles
    within the Nigerian Economic Society. His COOU profile records his service
    as Secretary of the NES Anambra State Chapter and South-East Zone, as well
    as his role as Special Assistant to the NES President on Student Matters
    and pioneer National Student Liaison Officer. In October 2025, the Nigerian
    Economic Society recognised his service with its Gold Medal Award at the
    society's 66th annual conference.{" "}
    <a
      href="https://coou.edu.ng/news/view-news.php?slug=coou-celebrates-dr-chukwunonso-ekesiobi-on-the-reception-of-the-nigerian-economic-society-nes-gold-medal-award"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary hover:underline"
    >
      COOU announcement on the NES Gold Medal Award
    </a>
  </p>  <p>
    His research standing has also received recent recognition. In COOU's
    announcement of its Top 5 Ranking Global Research Scientists based on the
    AD Scientific Index 2025–2026, Dr. Ekesiobi was ranked No. 2 among the
    university's five highlighted scientists, in the field of Economics &
    Econometrics. The university's announcement identifies this specifically as
    a research-scientist ranking rather than a general ranking of lecturers.{" "}
    <a
      href="https://coou.edu.ng/news/view-news?slug=meet-coou-s-top-5-ranking-global-research-scientists"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary hover:underline"
    >
      COOU Top 5 Global Research Scientists
    </a>
  </p>  <p>
    Dr. Ekesiobi's commitment to student development is also reflected in his
    work outside conventional academic responsibilities. COOU identifies him as
    a staff adviser to the Idemili Students Association and as the Convener of
    the Policy Analysis and Research Congress (PARC), describing PARC as a
    youth-oriented, policy-based think tank. Through PARC, he provides the
    vision and mentorship for a student-led platform focused on research,
    policy analysis, intellectual development and evidence-based engagement.{" "}
    <a
      href="https://coou.edu.ng/staff/view-staff?id=823"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary hover:underline"
    >
      COOU Staff Profile
    </a>
  </p>  <p>
    His wider public engagement includes contributions as a guest writer for
    Vanguard and appearances as a socioeconomic analyst on Anambra Broadcasting
    Television and radio, as recorded in his university profile.{" "}
    <a
      href="https://coou.edu.ng/staff/view-staff?id=823"
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary hover:underline"
    >
      COOU Staff Profile
    </a>
  </p>  <p>
    Today, Dr. Ekesiobi combines teaching, research, institutional service and
    mentorship. His work reflects a sustained interest in economics not merely
    as an academic discipline, but as a means of understanding society,
    evaluating policy and contributing to Nigeria's development. Through the
    Policy Analysis and Research Congress, he continues to support the
    development of students interested in research, critical thinking, policy
    and leadership.
  </p>
</div>
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
