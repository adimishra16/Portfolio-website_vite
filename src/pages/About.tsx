import type { PortfolioData } from "@/content/portfolio";

interface AboutProps {
  data: PortfolioData;
}

export const About = ({ data }: AboutProps) => {
  return (
    <div className="mx-auto max-w-site px-5 pb-24 pt-16 md:px-8 md:pt-24">
      <header className="max-w-2xl animate-rise">
        <p className="font-mono-ui text-xs uppercase tracking-[0.16em] text-blueprint">About</p>
        <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-6xl">
          Building interfaces with intent
        </h1>
        <div className="animate-draw mt-5 flex items-center gap-2">
          <span className="h-[3px] w-20 bg-signal" />
          <span className="h-[3px] w-8 bg-blueprint" />
          <span className="h-[3px] w-3 bg-cyan" />
        </div>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
        <img
          src={data.personal.photo}
          alt={data.personal.name}
          className="aspect-square w-40 border border-line object-cover shadow-[6px_6px_0_0_hsl(var(--signal)/0.25)] transition-transform duration-500 hover:-translate-y-1 lg:w-full"
        />

        <div className="max-w-2xl">
          <p className="text-xl leading-relaxed text-ink md:text-2xl">{data.personal.bio}</p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            I care about how a page feels under a thumb, how a form recovers from an error, and how
            a codebase stays kind to the next person who opens it. Full stack is where product,
            design, and engineering meet — that&apos;s the seat I want.
          </p>
          <p className="mt-4 font-mono-ui text-xs uppercase tracking-[0.14em] text-blueprint">
            Based in {data.personal.location}
          </p>
        </div>
      </div>

      <section className="mt-20 border-t border-line pt-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          Experience
        </h2>
        <ul className="mt-10 space-y-0">
          {data.experience.map((exp) => (
            <li
              key={`${exp.company}-${exp.period}`}
              className="grid gap-2 border-t border-line py-8 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <p className="font-mono-ui text-xs uppercase tracking-[0.14em] text-muted">{exp.period}</p>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">{exp.position}</h3>
                <p className="mt-1 text-sm text-signal">{exp.company}</p>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{exp.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 border-t border-line pt-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          Skills
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {data.skills.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono-ui text-xs uppercase tracking-[0.16em] text-signal">{group.label}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-ink/85">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16">
        <a
          href={data.personal.resume}
          download
          className="inline-flex border border-ink/25 px-6 py-3 font-mono-ui text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:border-signal hover:text-signal"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};
