import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, Sparkles, Trophy, FileText, ImageIcon, Calendar } from "lucide-react";
import heroImg from "../assets/hero-library.jpg";
import { SectionHeading } from "../components/section-heading";
import { ParcMark } from "../components/parc-mark";
import { ACTIVITIES, ACHIEVEMENTS, BLOG_POSTS, EXECUTIVE_LEADERSHIP } from "../data/parc";
import { GALLERY_IMAGES } from "../data/gallery";
import { LeaderCard } from "../components/leader-card";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PARC — Policy Analysis and Research Congress | COOU Igbariam" },
      {
        name: "description",
        content:
          "A student-led policy institute at Chukwuemeka Odumegwu Ojukwu University advancing research, critical thinking and principled leadership.",
      },
      { property: "og:title", content: "PARC — Policy Analysis and Research Congress" },
      {
        property: "og:description",
        content:
          "A student-led policy institute at COOU Igbariam advancing research, critical thinking and leadership.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Policy Analysis and Research Congress (PARC)",
          alternateName: "PARC COOU",
          url: "/",
          parentOrganization: {
            "@type": "CollegeOrUniversity",
            name: "Chukwuemeka Odumegwu Ojukwu University",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Igbariam",
            addressRegion: "Anambra",
            addressCountry: "NG",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Affiliation />
      <AboutPreview />
      <VisionMission />
      <WhatWeDo />
      <LeadershipPreview />
      <AchievementsPreview />
      <ResearchSpotlight />
      <LatestArticles />
      <GalleryPreview />
      <Testimonials />
      <JoinCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[color:var(--surface)]">
      <div className="container-parc grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <ParcMark className="h-14 w-14" />
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              COOU · Igbariam Campus
            </div>
          </div>
          <h1 className="font-serif text-4xl leading-[1.02] text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
  A student-led{" "}
  <span className="text-primary">policy</span>{" "}
        {" "}
  <span className="text-primary">think tank</span>{" "}
  advancing progress through knowledge.
</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The Policy Analysis and Research Congress advances rigorous research,
            critical thinking and principled leadership at Chukwuemeka Odumegwu
            Ojukwu University, Igbariam.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-sm transition hover:brightness-95"
            >
              Join PARC
            </Link>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-8 border-t border-border pt-8">
            {[
              ["8", "Focus areas"],
              ["15+", "Executive members"],
              ["Weekly", "Intellectual sessions"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-3xl text-primary">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] sm:aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-[0_40px_80px_-40px_rgba(22,101,52,0.35)]">
            <img
              src="/images/parc-executives.jpg"
              alt="The PARC Executive Council with faculty at the Department of Economics, COOU Igbariam."
              className="h-full w-full object-cover object-[center_30%]"
              width={1920}
              height={1440}
              loading="eager"
              decoding="async"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-white/80">The PARC Executive Council</div>
              <div className="font-serif text-2xl text-white">Student leaders. Serious ideas.</div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl border border-border bg-card p-4 shadow-lg sm:block">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">Our Mandate</div>
            <p className="mt-1 text-sm leading-snug text-foreground">
              To build a generation of researchers, thinkers and public leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Affiliation() {
  return (
    <section aria-labelledby="affiliation-heading" className="border-b border-border bg-white">
      <div className="container-parc flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-center sm:gap-8 sm:text-left md:py-12">
        <img
          src="/images/coou-logo.jpg"
          alt="Chukwuemeka Odumegwu Ojukwu University (COOU) official crest"
          width={96}
          height={96}
          className="h-20 w-20 shrink-0 object-contain sm:h-24 sm:w-24"
          loading="lazy"
          decoding="async"
        />
        <div className="max-w-xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Institutional Affiliation</div>
          <h2 id="affiliation-heading" className="mt-1 font-serif text-xl leading-snug text-foreground sm:text-2xl">
            Affiliated with Chukwuemeka Odumegwu Ojukwu University
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            PARC operates within the academic community of COOU, Igbariam Campus — under the university's motto, <em>Education for Development</em>.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="container-parc py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <SectionHeading
            eyebrow="About PARC"
            title="A serious space for serious minds."
            description="PARC exists to raise a generation of thinkers who take ideas seriously, engage evidence honestly, and treat public life as a matter of moral and intellectual weight. We are not a club — we are an institute in formation."
          />
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-border">
            <img src="/images/homepage/parc-meeting.jpg" alt="PARC members seated during a session" className="h-full w-full object-cover" width={1024} height={1024} loading="lazy" />
          </div>
          <div className="mt-8 aspect-[3/4] overflow-hidden rounded-2xl border border-border">
            <img src="/images/homepage/parc-presentation.jpg" alt="A PARC member giving a presentation" className="h-full w-full object-cover" width={1024} height={1024} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="border-y border-border bg-[color:var(--surface)]">
      <div className="container-parc py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {[
            {
              label: "Vision",
              body: "To be a foremost student-led policy institute in Africa — cultivating thinkers whose research, judgement and leadership shape the public conversation.",
            },
            {
              label: "Mission",
              body: "To equip members with the analytical, communicative and moral tools to produce rigorous policy work and lead with clarity in academic, civic and professional life.",
            },
          ].map((c) => (
            <div
              key={c.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-primary/5" aria-hidden />
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {c.label}
              </div>
              <p className="mt-4 font-serif text-2xl leading-[1.25] text-foreground sm:text-3xl">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="container-parc py-20 md:py-28">
      <SectionHeading
        eyebrow="What PARC Does"
        title="Eight disciplines. One standard."
        description="Our programs are the practical work of forming rigorous minds and principled leaders."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ACTIVITIES.map((a) => (
          <div
            key={a.slug}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_20px_50px_-30px_rgba(22,101,52,0.4)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <a.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.short}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LeadershipPreview() {
  const founder = {
    name: "Dr. Chukwunonso Ekesiobi",
    image: "/images/founder/dr-chukwunonso-ekesiobi.jpg",
    position: "Founder & Convener",
    bio: "Economist, policy analyst and lecturer in the Department of Economics at COOU, Igbariam. Founder and convener of PARC, providing vision and mentorship to the student Executive Council.",
  };
  const featured = [founder, ...EXECUTIVE_LEADERSHIP];
  return (
    <section className="border-t border-border bg-[color:var(--surface)]">
      <div className="container-parc py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Leadership"
            title="Guided by principled leaders."
            description="A small, dedicated team stewards PARC's research, culture and public voice."
          />
          <Link
            to="/leadership"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Meet Our Leadership <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((l) => (
            <LeaderCard key={l.name} leader={l as any} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsPreview() {
  return (
    <section className="container-parc py-20 md:py-28">
      <SectionHeading
        eyebrow="Latest Achievements"
        title="Milestones worth marking."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {ACHIEVEMENTS.slice(0, 3).map((a) => (
          <article key={a.title} className="flex flex-col rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--gold-foreground)]">
              <Trophy className="h-4 w-4 text-[color:var(--gold-foreground)]" /> {a.year}
            </div>
            <h3 className="mt-3 font-serif text-xl text-foreground">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResearchSpotlight() {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="container-parc grid gap-10 py-20 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-16 md:py-28">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
            <Sparkles className="h-4 w-4" /> Research Spotlight
          </div>
          <h2 className="mt-4 font-serif text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
            Featured research will live here — long-form work by PARC members.
          </h2>
          <p className="mt-5 max-w-xl text-white/75">
            A dedicated space to spotlight one significant piece of PARC research at a time — from policy briefs to economic analyses and long-form essays.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-5 py-2.5 text-sm font-semibold text-[color:var(--gold-foreground)] transition hover:brightness-95"
            >
              Read the Blog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur">
          <FileText className="h-8 w-8 text-[color:var(--gold)]" />
          <div className="mt-4 text-xs uppercase tracking-widest text-white/60">Coming soon</div>
          <h3 className="mt-2 font-serif text-2xl">Fiscal Federalism and Sub-national Capacity in Nigeria</h3>
          <p className="mt-3 text-sm text-white/70">
            A working paper from the PARC Research Desk. Placeholder — final publication forthcoming.
          </p>
        </div>
      </div>
    </section>
  );
}

function LatestArticles() {
  return (
    <section className="container-parc py-20 md:py-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Latest Articles"
          title="From the PARC blog."
          description="Analysis, recaps and commentary from members and directorates."
        />
        <Link to="/blog" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
          Read all articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {BLOG_POSTS.slice(0, 3).map((p) => (
          <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-30px_rgba(22,101,52,0.35)]">
            <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/10 via-primary/5 to-[color:var(--gold)]/10">
              <span className="absolute left-4 top-4 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                {p.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" /> {p.date} · {p.readingTime}
              </div>
              <h3 className="mt-3 font-serif text-xl leading-snug text-foreground group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <div className="mt-5 text-xs text-muted-foreground">By {p.author}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GalleryPreview() {
  const sessionImg = "/images/homepage/parc-meeting.jpg";
  const researchImg = "/images/homepage/parc-presentation.jpg";
  const fallback = [heroImg, sessionImg, researchImg, heroImg, sessionImg, researchImg].map((src) => ({
    src,
    alt: "PARC event photograph",
  }));
  const tiles = GALLERY_IMAGES.length > 0 ? GALLERY_IMAGES.slice(0, 6) : fallback;
  return (
    <section className="border-t border-border bg-[color:var(--surface)]">
      <div className="container-parc py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments from PARC."
          />
          <Link to="/gallery" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            <ImageIcon className="h-4 w-4" /> View full gallery
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {tiles.map((t, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-xl border border-border">
              <img src={t.src} alt={t.alt} className="h-full w-full object-cover transition group-hover:scale-105" width={512} height={512} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { quote: "PARC gave me the discipline of a researcher and the voice of a leader.", who: "Member testimonial (Success Ikechukwu)" },
    { quote: "The weekly sessions changed how I read, argue and think about policy.", who: "Member testimonial (Jude Henry)" },
    { quote: "A rare space where ideas are treated with the seriousness they deserve.", who: "Member testimonial (Okpala Mathias)" },
  ];
  return (
    <section className="container-parc py-20 md:py-28">
      <SectionHeading eyebrow="Voices" title="What members say." align="center" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <blockquote key={i} className="flex flex-col rounded-2xl border border-border bg-card p-8">
            <Quote className="h-6 w-6 text-[color:var(--gold)]" />
            <p className="mt-4 flex-1 font-serif text-xl leading-snug text-foreground">"{t.quote}"</p>
            <footer className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">{t.who}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function JoinCta() {
  return (
    <section className="container-parc py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-primary p-10 text-primary-foreground md:p-16">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[color:var(--gold)]/25 blur-3xl" aria-hidden />
        <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">Join PARC</div>
            <h2 className="mt-3 font-serif text-3xl leading-[1.05] sm:text-4xl md:text-5xl">
              Become a member of the congress.
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              If you take ideas seriously and want to think, write and lead with rigor — PARC is where you belong.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-[color:var(--gold-foreground)] transition hover:brightness-95"
            >
              Apply to Join <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact PARC
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
