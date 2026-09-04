import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  index?: number;
}

const accents = [
  { num: "text-signal", bar: "bg-signal", wash: "from-[hsl(14_90%_52%/0.35)]" },
  { num: "text-blueprint", bar: "bg-blueprint", wash: "from-[hsl(205_72%_38%/0.35)]" },
  { num: "text-cyan", bar: "bg-cyan", wash: "from-[hsl(188_78%_36%/0.35)]" },
];

export const ProjectCard = ({
  title,
  description,
  role,
  tech,
  image,
  liveUrl,
  githubUrl,
  index = 0,
}: ProjectCardProps) => {
  const href = liveUrl || githubUrl;
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
  const accent = accents[index % accents.length];

  return (
    <article className="group relative border-t border-line py-10 first:border-t-0 first:pt-0 md:py-12">
      <span
        className={`absolute left-0 top-0 h-[2px] w-0 ${accent.bar} transition-all duration-500 group-hover:w-24`}
        aria-hidden
      />

      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <div>
          <p className={`font-mono-ui text-xs uppercase tracking-[0.16em] ${accent.num}`}>
            {String(index + 1).padStart(2, "0")} — {role}
          </p>
          <h3 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 transition-colors hover:text-signal"
              >
                {title}
                <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-signal/70 opacity-70 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
              </a>
            ) : (
              title
            )}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">{description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {tech.map((item) => (
              <li
                key={item}
                className="border border-line bg-paper/80 px-2.5 py-1 font-mono-ui text-[11px] uppercase tracking-[0.1em] text-ink/75 transition-colors group-hover:border-blueprint/40 group-hover:text-blueprint"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-ui text-xs uppercase tracking-[0.14em] text-blueprint underline-offset-4 transition-colors hover:text-signal hover:underline"
              >
                Source
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-ui text-xs uppercase tracking-[0.14em] text-blueprint underline-offset-4 transition-colors hover:text-signal hover:underline"
              >
                Live site
              </a>
            )}
          </div>
        </div>

        <Wrapper
          {...wrapperProps}
          className="project-media relative block overflow-hidden border border-line bg-paper-deep shadow-[6px_6px_0_0_hsl(var(--ink)/0.06)] perspective-[800px] group-hover:shadow-[8px_8px_0_0_hsl(var(--signal)/0.2)]"
        >
          <img
            src={image}
            alt={`${title} screenshot`}
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            loading="lazy"
          />
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${accent.wash} via-transparent to-transparent opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100 dark:mix-blend-soft-light`}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-signal via-blueprint to-cyan transition-transform duration-500 group-hover:scale-x-100"
            aria-hidden
          />
        </Wrapper>
      </div>
    </article>
  );
};
