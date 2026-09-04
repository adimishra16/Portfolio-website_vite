import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-[hsl(var(--paper)/0.9)] backdrop-blur-md">
      <div className="h-[3px] w-full bg-gradient-to-r from-signal via-blueprint to-cyan" />
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-5 md:px-8">
        <NavLink
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-ink transition-colors hover:text-signal"
        >
          Aditya<span className="text-signal">.</span>Mishra
        </NavLink>

        <div className="flex items-center gap-3 md:gap-6">
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `group relative pb-1 font-mono-ui text-[13px] uppercase tracking-[0.14em] transition-colors ${
                    isActive ? "text-signal" : "text-muted hover:text-ink"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-signal transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            className="border border-line bg-paper-deep/60 p-2 text-ink transition-all hover:-translate-y-0.5 hover:border-signal hover:text-signal"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            className="font-mono-ui text-[13px] uppercase tracking-[0.14em] text-ink transition-colors hover:text-signal md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="animate-rise border-t border-line bg-[hsl(var(--paper)/0.95)] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-mono-ui text-sm uppercase tracking-[0.14em] transition-colors ${
                    isActive ? "text-signal" : "text-ink hover:text-blueprint"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
