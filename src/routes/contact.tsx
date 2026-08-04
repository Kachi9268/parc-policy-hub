import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import emailjs from "@emailjs/browser";
import { PageHeader } from "../components/page-header";
import { Facebook, Linkedin, Mail, MapPin, Send } from "lucide-react";

// EmailJS credentials — set these in your .env file (see .env.example).
// Service ID:  EmailJS dashboard → Email Services
// Template ID: EmailJS dashboard → Email Templates
// Public Key:  EmailJS dashboard → Account → General → Public Key
const EMAILJS_SERVICE_ID = import.meta.env["VITE_EMAILJS_SERVICE_ID"] ?? "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"] ?? "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"] ?? "YOUR_PUBLIC_KEY";

const SOCIALS = [
  { Icon: Linkedin, label: "PARC on LinkedIn", href: "https://www.linkedin.com/company/policy-analysis-and-research-congress-parc/" },
  { Icon: Facebook, label: "PARC on Facebook", href: "https://www.facebook.com/share/1E1Vabxps7/" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PARC" },
      { name: "description", content: "Contact the Policy Analysis and Research Congress at COOU Igbariam." },
      { property: "og:title", content: "Contact PARC" },
      { property: "og:description", content: "Reach the Policy Analysis and Research Congress." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      formRef.current.reset();
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS send failed", err);
      setStatus("error");
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to PARC."
        description="For membership, partnerships, press or general enquiries — send us a note. We respond promptly."
      />
      <section className="container-parc py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <form
            ref={formRef}
            className="rounded-2xl border border-border bg-card p-6 md:p-10"
            onSubmit={handleSubmit}
          >
            <h2 className="font-serif text-2xl text-foreground">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">Messages are delivered straight to parc@coou.edu.ng. We respond promptly.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field id="name" label="Full name" required />
              <Field id="email" label="Email address" type="email" required />
            </div>
            <div className="mt-4">
              <Field id="subject" label="Subject" required />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-foreground">Message</label>
              <textarea id="message" name="message" required rows={6} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="How can we help?" />
            </div>
            <button type="submit" disabled={status === "sending"} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60">
              <Send className="h-4 w-4" /> {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "sent" && (
              <p className="mt-4 text-sm text-primary" role="status">Thank you — your message has been sent. We&rsquo;ll be in touch shortly.</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-destructive" role="alert">
                Sorry, your message couldn&rsquo;t be sent. Please try again, or email us directly at parc@coou.edu.ng.
              </p>
            )}
          </form>

          <aside className="space-y-6">
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="Location" body="Chukwuemeka Odumegwu Ojukwu University, Igbariam Campus, Anambra State, Nigeria" />
            <InfoCard icon={<Mail className="h-5 w-5" />} title="Email" body="parc@coou.edu.ng" />

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Follow PARC</div>
              <div className="mt-4 flex gap-3">
                {SOCIALS.map(({ Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/80 transition hover:border-primary hover:text-primary">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-[color:var(--surface)]">
              <div className="flex aspect-video items-center justify-center text-sm text-muted-foreground">
                <div className="text-center">
                  <MapPin className="mx-auto h-6 w-6 text-primary/60" />
                  <div className="mt-2">Map placeholder — COOU Igbariam Campus</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-widest text-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input id={id} name={id} type={type} required={required} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}

function InfoCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{title}</div>
        <p className="mt-1 text-sm text-foreground">{body}</p>
      </div>
    </div>
  );
}