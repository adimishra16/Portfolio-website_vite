import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";

interface HomeProps {
  data: any;
}

export const Home = ({ data }: HomeProps) => {
  const featuredProjects = data.projects.filter((p: any) => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in">
              {data.personal.name}
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
              {data.personal.title}
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {data.personal.bio}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="group">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={data.personal.resume} download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">Some of my recent work</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project: any) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground">Tools I work with</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {data.skills.map((skill: string) => (
              <div
                key={skill}
                className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium hover:border-primary hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
