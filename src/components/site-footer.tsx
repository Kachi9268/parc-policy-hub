import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Linkedin, Facebook } from "lucide-react";
import { ParcMark } from "./parc-mark";

const SOCIALS = [
  { Icon: Linkedin, label: "PARC on LinkedIn", href: "https://www.linkedin.com/company/policy-analysis-and-research-congress-parc/" },
  { Icon: Facebook, label: "PARC on Facebook", href: "https://www.facebook.com/share/1E1Vabxps7/" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.22_0.03_150)] text-white/85">
      <div className="container-parc grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <ParcMark tone="light" className="h-10 w-10" />
            <div className="leading-tight">
              <div className="font-bold tracking-tight">PARC</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-white/60">
                COOU · Igbariam
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            The Policy Analysis and Research Congress is a student-led policy
            institute advancing rigorous research, critical thinking and
            principled leadership at Chukwuemeka Odumegwu Ojukwu University.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["/about", "About"],
              ["/leadership", "Leadership"],
              ["/activities", "Activities"],
              ["/achievements", "Achievements"],
              ["/blog", "Blog"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/70 hover:text-[color:var(--gold)]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Engage
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/join" className="text-white/70 hover:text-[color:var(--gold)]">Join PARC</Link></li>
            <li><Link to="/gallery" className="text-white/70 hover:text-[color:var(--gold)]">Gallery</Link></li>
            <li><Link to="/contact" className="text-white/70 hover:text-[color:var(--gold)]">Contact</Link></li>
          </ul>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <span>Chukwuemeka Odumegwu Ojukwu University, Igbariam Campus, Anambra State, Nigeria</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" />
              <a href="mailto:parc@coou.edu.ng" className="hover:text-[color:var(--gold)]">
                parc@coou.edu.ng
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-parc flex flex-col items-start justify-between gap-2 py-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>© {year} Policy Analysis and Research Congress, COOU. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <img
              src="/images/coou-logo.jpg"
              alt="COOU crest"
              width={32}
              height={32}
              className="h-8 w-8 rounded-sm bg-white/95 object-contain p-0.5"
              loading="lazy"
              decoding="async"
            />
            <p>Affiliated with Chukwuemeka Odumegwu Ojukwu University · Igbariam, Nigeria</p>
          </div>
        </div>
      </div>
    </footer>
  );
}