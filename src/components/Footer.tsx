import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface FooterProps {
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const Footer = ({ social }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {social.email && (
              <a
                href={`mailto:${social.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
