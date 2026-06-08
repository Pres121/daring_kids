import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-[var(--sky)] text-white shadow-[0_6px_0_oklch(0.55_0.18_235)] transition-transform group-hover:-rotate-6">
        <span className="font-display text-xl font-bold">D</span>
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[var(--sunny)] border-2 border-white" />
      </span>
      <div className="leading-tight">
        <div className="font-display text-xl font-bold tracking-tight text-foreground">Daring Kids</div>
        <div className="font-hand text-xs text-[var(--coral)] -mt-1">little minds, big dreams</div>
      </div>
    </Link>
  );
}