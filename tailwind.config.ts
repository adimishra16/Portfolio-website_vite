import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "hsl(var(--ink))",
        paper: "hsl(var(--paper))",
        "paper-deep": "hsl(var(--paper-deep))",
        line: "hsl(var(--line))",
        muted: "hsl(var(--muted))",
        signal: "hsl(var(--signal))",
        "signal-soft": "hsl(var(--signal-soft))",
        blueprint: "hsl(var(--blueprint))",
        cyan: "hsl(var(--cyan))",
        lime: "hsl(var(--lime))",
        amber: "hsl(var(--amber))",
      },
      fontFamily: {
        display: ['"Archivo"', "sans-serif"],
        sans: ['"Source Sans 3"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      maxWidth: {
        site: "1120px",
      },
    },
  },
  plugins: [],
} satisfies Config;
