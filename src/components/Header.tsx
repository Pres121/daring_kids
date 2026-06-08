import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:py-4">
        <Logo />

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors"
              activeProps={{ className: "bg-secondary text-primary font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-full bg-[var(--coral)] hover:bg-[var(--coral)]/90 text-white font-semibold px-5 shadow-[0_4px_0_oklch(0.55_0.2_25)]">
            <Link to="/contact">Enroll Now</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden grid place-items-center h-10 w-10 rounded-full bg-secondary"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-5 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium hover:bg-secondary"
              activeProps={{ className: "bg-secondary text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild className="rounded-full bg-[var(--coral)] hover:bg-[var(--coral)]/90 text-white mt-2">
            <Link to="/contact" onClick={() => setOpen(false)}>Enroll Now</Link>
          </Button>
        </div>
      )}
    </header>
  );
}