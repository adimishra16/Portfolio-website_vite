import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface FooterProps {
  name: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const Footer = ({ name, social }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-[hsl(var(--paper-deep)/0.65)]">
      <div className="h-[3px] w-full bg-gradient-to-r from-cyan via-signal to-blueprint" />
      <div className="mx-auto flex max-w-site flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-base font-semibold text-ink">
            {name.split(" ")[0]}
            <span className="text-signal">.</span>
            {name.split(" ").slice(1).join(" ")}
          </p>
          <p className="mt-1 font-mono-ui text-xs uppercase tracking-[0.14em] text-muted">
            Full stack developer · {year}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="border border-line bg-paper/70 p-2.5 text-muted transition-all hover:-translate-y-0.5 hover:border-signal hover:text-signal"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="border border-line bg-paper/70 p-2.5 text-muted transition-all hover:-translate-y-0.5 hover:border-blueprint hover:text-blueprint"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="border border-line bg-paper/70 p-2.5 text-muted transition-all hover:-translate-y-0.5 hover:border-cyan hover:text-cyan"
            >
              <Twitter className="h-4 w-4" />
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              aria-label="Email"
              className="border border-line bg-paper/70 p-2.5 text-muted transition-all hover:-translate-y-0.5 hover:border-amber hover:text-amber"
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
