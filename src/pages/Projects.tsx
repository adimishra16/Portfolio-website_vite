import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectsProps {
  data: any;
}

export const Projects = ({ data }: ProjectsProps) => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing various technologies and solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {data.projects.map((project: any) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* CTA Section for GitHub */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-secondary/30 border border-border/50 p-8 md:p-12 text-center animate-fade-in">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-background p-4 rounded-full mb-6 inline-flex shadow-sm border border-border/50">
              <Github className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to see more?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              Check out my GitHub profile to explore more open-source projects, experiments, and contributions.
            </p>
            <Button size="lg" className="group rounded-full px-8" asChild>
              <a href={data.social?.github || "https://github.com"} target="_blank" rel="noopener noreferrer">
                Visit My GitHub
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
