import { Link } from "@tanstack/react-router";
import logo from "../assets/logo.png"; // adjust path if needed

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <img
        src={logo}
        alt="Daring Kids Academy Logo"
        className="h-12 w-auto transition-transform group-hover:-rotate-6"
      />

      <div className="leading-tight text-sm md:text-base">
        <div className="font-display text-xl font-bold tracking-tight text-foreground">
          Daring Kids Academy
        </div>

        <div className="font-hand text-xs text-[var(--coral)] -mt-1">
          little minds, big dreams
        </div>
      </div>
    </Link>
  );
}