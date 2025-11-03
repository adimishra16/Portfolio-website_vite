import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AboutProps {
  data: any;
}

export const About = ({ data }: AboutProps) => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground">
            Learn more about my background and experience
          </p>
        </div>

        {/* Bio Section */}
        <Card className="mb-8 animate-scale-in">
          <CardHeader>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={data.personal.photo}
                alt={data.personal.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
              />
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">{data.personal.name}</h2>
                <p className="text-xl text-primary mb-2">{data.personal.title}</p>
                <p className="text-muted-foreground">{data.personal.location}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">{data.personal.bio}</p>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp: any, index: number) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <Badge variant="secondary">{exp.period}</Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3">
                {data.skills.map((skill: string) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
