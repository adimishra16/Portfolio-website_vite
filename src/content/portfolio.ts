export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  photo: string;
  resume: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  social: SocialLinks;
  skills: {
    label: string;
    items: string[];
  }[];
  projects: Project[];
  experience: Experience[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Aditya Mishra",
    title: "Full Stack Developer",
    bio: "Full-stack developer who ships end-to-end — React and TypeScript on the client, APIs and data on the server. I care about clear interfaces and maintainable systems. Currently building at Sarjen Systems.",
    location: "Ahmedabad, India",
    email: "adityamishra16103@gmail.com",
    photo: "/avatar.svg",
    resume: "/Aditya-Mishra.pdf",
  },
  social: {
    github: "https://github.com/adimishra16",
    linkedin: "https://www.linkedin.com/in/adimishra16/",
    twitter: "https://x.com/Adi_mishra16",
    email: "adityamishra16103@gmail.com",
  },
  skills: [
    {
      label: "Interface",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      label: "Craft",
      items: ["Responsive layout", "Accessibility", "Design systems", "Performance", "Animation"],
    },
    {
      label: "Delivery",
      items: ["Git", "REST APIs", "Node.js", "PostgreSQL", "Supabase", "Appwrite"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "MedicPulse",
      description:
        "Patient-facing booking flows with clear states, form validation, and SMS-backed appointment updates — built for calm, clinical clarity on every screen.",
      role: "Full stack · Next.js",
      tech: ["Next.js", "TypeScript", "Tailwind", "Appwrite", "Twilio"],
      image: "/MedicPulse.png",
      githubUrl: "https://github.com/adimishra16/care-pulse",
      featured: true,
    },
    {
      id: 2,
      title: "Capstone Project Management",
      description:
        "A mentorship workspace where students and mentors track milestones in real time. Emphasis on readable tables, status cues, and low-friction updates.",
      role: "Full stack · Product",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      image: "/capstone.png",
      githubUrl: "https://github.com/adimishra16/CapstoneProjectManagementSystem",
      featured: true,
    },
    {
      id: 3,
      title: "PlayTracker",
      description:
        "Live cricket scoreboard UI for match operators — dense data made scannable with typography, color hierarchy, and quick team/player actions.",
      role: "Full stack · React",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind"],
      image: "/Playtracker.png",
      githubUrl: "https://github.com/adimishra16/PlayTracker",
      featured: false,
    },
  ],
  experience: [
    {
      company: "Sarjen Systems Pvt Ltd",
      position: "Software Developer",
      period: "Aug 2025 — Present",
      description:
        "Building and refining production web interfaces — component structure, UX polish, and performance-minded React features across client projects.",
    },
    {
      company: "Sarjen Systems Pvt Ltd",
      position: "Software Developer Intern",
      period: "Jan 2025 — Jul 2025",
      description:
        "Shipped UI features end-to-end, fixed visual and interaction bugs, and learned to balance design intent with practical engineering constraints.",
    },
  ],
};
