import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SplitText } from "@/components/SplitText";
import type { PortfolioData } from "@/content/portfolio";

interface HomeProps {
  data: PortfolioData;
}

const skillTone = [
  { border: "border-signal/40", bg: "bg-signal-soft", text: "text-signal", label: "text-signal" },
  { border: "border-blueprint/35", bg: "bg-[hsl(205_72%_38%/0.08)] dark:bg-[hsl(205_80%_62%/0.12)]", text: "text-blueprint", label: "text-blueprint" },
  { border: "border-cyan/40", bg: "bg-[hsl(188_78%_36%/0.1)] dark:bg-[hsl(188_72%_52%/0.12)]", text: "text-cyan", label: "text-cyan" },
];

export const Home = ({ data }: HomeProps) => {
  const featured = data.projects.filter((p) => p.featured);
  const heroImage = featured[0]?.image || data.projects[0]?.image;
  const marqueeItems = data.skills.flatMap((g) => g.items);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt=""
            className="animate-kenburns h-full w-full object-cover object-top opacity-[0.22] saturate-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--paper))] via-[hsl(var(--paper)/0.9)] to-[hsl(var(--paper)/0.45)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--paper))] via-transparent to-[hsl(205_72%_38%/0.06)]" />
        </div>

        <div
          className="animate-float-orb animate-pulse-soft pointer-events-none absolute -right-16 top-24 h-56 w-56 rounded-full bg-[hsl(var(--signal)/0.18)] blur-2xl"
          aria-hidden
        />
        <div
          className="animate-float-orb-slow pointer-events-none absolute bottom-24 left-[8%] h-40 w-40 rounded-full bg-[hsl(var(--blueprint)/0.16)] blur-2xl"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[min(92vh,820px)] max-w-site flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
          <p className="animate-rise font-mono-ui text-xs uppercase tracking-[0.18em] text-blueprint">
            <span className="animate-blink mr-2 inline-block h-2 w-2 bg-signal align-middle" />
            {data.personal.location} · Available for full stack roles
          </p>

          <h1 className="font-display mt-5 max-w-4xl text-[clamp(2.75rem,9vw,6.5rem)] font-bold leading-[0.92] tracking-tight text-ink">
            <SplitText text={data.personal.name} accentWordIndex={1} />
          </h1>

          <div className="animate-draw mt-5 flex items-center gap-2">
            <span className="h-[3px] w-24 bg-signal" />
            <span className="h-[3px] w-10 bg-blueprint" />
            <span className="h-[3px] w-4 bg-cyan" />
          </div>

          <p className="animate-rise-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Full stack developer building web apps end-to-end — React, TypeScript, APIs, and
            thoughtful UI.
          </p>

          <div className="animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <Link to="/projects" className="btn-primary group">
              View selected work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a href={data.personal.resume} download className="btn-ghost">
              Download CV
            </a>
          </div>
        </div>
      </section>

      <div className="marquee-mask overflow-hidden border-b border-line bg-[hsl(var(--paper-deep)/0.4)] py-3">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-mono-ui text-xs uppercase tracking-[0.18em] text-muted"
            >
              <span className="mr-8 text-signal">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono-ui text-xs uppercase tracking-[0.16em] text-cyan">Selected work</p>
            <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Interfaces I&apos;ve shaped
            </h2>
          </div>
          <Link
            to="/projects"
            className="font-mono-ui text-xs uppercase tracking-[0.14em] text-blueprint underline-offset-4 transition-colors hover:text-signal hover:underline"
          >
            All projects →
          </Link>
        </Reveal>

        <div>
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) as 0 | 1 | 2}>
              <ProjectCard {...project} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-line bg-[hsl(var(--paper-deep)/0.55)]">
        <div
          className="pointer-events-none absolute -left-20 top-0 h-full w-40 bg-gradient-to-r from-[hsl(var(--signal)/0.08)] to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto max-w-site px-5 py-16 md:px-8 md:py-20">
          <Reveal>
            <p className="font-mono-ui text-xs uppercase tracking-[0.16em] text-amber">Toolkit</p>
            <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight text-ink">
              What I reach for
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {data.skills.map((group, gi) => {
              const tone = skillTone[gi % skillTone.length];
              return (
                <Reveal key={group.label} delay={(gi % 3) as 0 | 1 | 2}>
                  <h3 className={`font-mono-ui text-xs uppercase tracking-[0.16em] ${tone.label}`}>
                    {group.label}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item, ii) => (
                      <li
                        key={item}
                        className={`skill-chip ${tone.border} ${tone.bg} ${tone.text}`}
                        style={{ animation: `chip-in 0.45s ease ${0.04 * ii}s both` }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-site overflow-hidden px-5 py-20 md:px-8 md:py-28">
        <div
          className="animate-pulse-soft pointer-events-none absolute right-0 top-10 h-48 w-48 rounded-full bg-[hsl(var(--cyan)/0.12)] blur-3xl"
          aria-hidden
        />
        <Reveal>
          <div className="animate-drift relative max-w-2xl border-l-4 border-signal bg-[hsl(var(--signal)/0.06)] py-2 pl-6 md:pl-8">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl text-balance">
              Looking for a full stack teammate who cares about the details?
            </h2>
            <p className="mt-5 text-lg text-muted">
              I&apos;m open to full stack roles where product sense and solid engineering both matter.
            </p>
            <Link to="/contact" className="btn-primary group mt-8">
              Say hello
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
