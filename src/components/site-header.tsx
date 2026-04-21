import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Start" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--gradient-warm)] font-display text-lg font-semibold text-primary-foreground shadow-[var(--shadow-soft)]">
            MZ
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-medium tracking-tight">Meister Fliesen Zeneli</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Fliesenleger · Hannover</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground bg-secondary" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+4915563570648"
          className="hidden items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 md:inline-flex"
        >
          <Phone className="h-4 w-4" /> 0155 63570648
        </a>

        <button
          aria-label="Menü"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="i-block">
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-5 bg-foreground" />
            <span className="mt-1.5 block h-0.5 w-5 bg-foreground" />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="py-2.5 text-sm font-medium"
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:+4915563570648" className="mt-2 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background">
              <Phone className="h-4 w-4" /> 0155 63570648
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
