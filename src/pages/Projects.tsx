import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import type { PortfolioData } from "@/content/portfolio";

interface ProjectsProps {
  data: PortfolioData;
}

export const Projects = ({ data }: ProjectsProps) => {
  return (
    <div className="mx-auto max-w-site px-5 pb-24 pt-16 md:px-8 md:pt-24">
      <header className="max-w-2xl animate-rise">
        <p className="font-mono-ui text-xs uppercase tracking-[0.16em] text-cyan">Work</p>
        <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink md:text-6xl">
          Projects
        </h1>
        <div className="animate-draw mt-5 flex items-center gap-2">
          <span className="h-[3px] w-20 bg-signal" />
          <span className="h-[3px] w-8 bg-blueprint" />
          <span className="h-[3px] w-3 bg-cyan" />
        </div>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Product interfaces with an eye for hierarchy, state, and the small interactions that make
          software feel finished.
        </p>
      </header>

      <div className="mt-16 border-t border-line">
        {data.projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) as 0 | 1 | 2}>
            <ProjectCard {...project} index={index} />
          </Reveal>
        ))}
      </div>

      {data.social.github && (
        <p className="mt-16 font-mono-ui text-sm text-muted">
          More experiments on{" "}
          <a
            href={data.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blueprint underline-offset-4 transition-colors hover:text-signal hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      )}
    </div>
  );
};
