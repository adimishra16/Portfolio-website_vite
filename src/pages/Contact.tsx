import { useState } from "react";
import type { PortfolioData } from "@/content/portfolio";

interface ContactProps {
  data: PortfolioData;
}

export const Contact = ({ data }: ContactProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sentHint, setSentHint] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${data.personal.email}?subject=Hello from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSentHint(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="mx-auto max-w-site px-5 pb-24 pt-16 md:px-8 md:pt-24">
      <header className="max-w-2xl animate-rise">
        <p className="font-mono-ui text-xs uppercase tracking-[0.16em] text-signal">Contact</p>
        <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-6xl">
          Let&apos;s talk
        </h1>
        <div className="animate-draw mt-5 flex items-center gap-2">
          <span className="h-[3px] w-20 bg-signal" />
          <span className="h-[3px] w-8 bg-blueprint" />
          <span className="h-[3px] w-3 bg-cyan" />
        </div>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Roles, collaborations, or a quick question about how I work — write anytime.
        </p>
      </header>

      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_0.85fr]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block">
            <span className="font-mono-ui text-xs uppercase tracking-[0.14em] text-muted">Name</span>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full border border-line bg-paper/80 px-4 py-3 text-ink outline-none transition-all focus:border-signal focus:shadow-[3px_3px_0_0_hsl(var(--signal)/0.25)]"
            />
          </label>
          <label className="block">
            <span className="font-mono-ui text-xs uppercase tracking-[0.14em] text-muted">Email</span>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full border border-line bg-paper/80 px-4 py-3 text-ink outline-none transition-all focus:border-signal focus:shadow-[3px_3px_0_0_hsl(var(--signal)/0.25)]"
            />
          </label>
          <label className="block">
            <span className="font-mono-ui text-xs uppercase tracking-[0.14em] text-muted">Message</span>
            <textarea
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 w-full resize-y border border-line bg-paper/80 px-4 py-3 text-ink outline-none transition-all focus:border-signal focus:shadow-[3px_3px_0_0_hsl(var(--signal)/0.25)]"
            />
          </label>
          <button type="submit" className="btn-primary">
            Send message
          </button>
          {sentHint && (
            <p className="font-mono-ui text-xs text-muted">Opening your email client…</p>
          )}
        </form>

        <aside className="border border-line bg-gradient-to-br from-[hsl(14_90%_52%/0.08)] via-[hsl(var(--paper-deep)/0.6)] to-[hsl(205_72%_38%/0.1)] p-6 shadow-[6px_6px_0_0_hsl(var(--blueprint)/0.15)] md:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">Direct</h2>
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="font-mono-ui text-xs uppercase tracking-[0.14em] text-muted">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${data.personal.email}`} className="text-ink hover:text-signal">
                  {data.personal.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono-ui text-xs uppercase tracking-[0.14em] text-muted">Location</dt>
              <dd className="mt-1 text-ink">{data.personal.location}</dd>
            </div>
          </dl>
          <a
            href={data.personal.resume}
            download
            className="mt-8 inline-flex font-mono-ui text-xs uppercase tracking-[0.14em] text-blueprint underline-offset-4 hover:text-signal hover:underline"
          >
            Download CV
          </a>
        </aside>
      </div>
    </div>
  );
};
