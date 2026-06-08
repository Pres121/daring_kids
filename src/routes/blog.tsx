import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { posts, categories, type BlogCategory } from "@/lib/blog-data";
import { Squiggle } from "@/components/Doodles";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Gallery — Daring Kids" },
      { name: "description", content: "School events, classroom activities, sports days and trips at Daring Kids Junior School." },
      { property: "og:title", content: "Blog & Gallery — Daring Kids" },
      { property: "og:description", content: "Latest news and moments from our classrooms." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<BlogCategory | "All">("All");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesQ = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase());
      const matchesC = active === "All" || p.category === active;
      return matchesQ && matchesC;
    });
  }, [query, active]);

  const recent = posts.slice(0, 4);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <section className="pt-32 md:pt-40 pb-10">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="font-hand text-2xl text-[var(--grape)]">Blog & Gallery</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-tight">
            Moments from <span className="relative text-[var(--coral)]">our classrooms
              <Squiggle className="absolute -bottom-2 left-0 w-full text-[var(--sunny)]" />
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">Stories, photos and updates from the Daring Kids family.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-[1fr_280px] gap-10">
          <div>
            {/* Search & filters */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search posts..."
                  className="pl-11 rounded-full h-12 bg-card border-2"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {(["All", ...categories] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={
                      "rounded-full px-4 py-1.5 text-sm font-medium border-2 transition-colors " +
                      (active === c
                        ? "bg-[var(--coral)] text-white border-[var(--coral)]"
                        : "bg-card border-border hover:border-[var(--coral)]")
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {filtered.map((p) => (
                <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-3xl overflow-hidden bg-card border border-border hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" width={1000} height={750} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-[var(--sky)]">{p.category} · {p.date}</span>
                    <h2 className="mt-2 text-lg font-bold leading-snug group-hover:text-[var(--coral)] transition-colors">{p.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
              {filtered.length === 0 && (
                <p className="col-span-2 text-center text-muted-foreground py-12">No posts match your search.</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl bg-card border border-border p-6">
              <h3 className="font-bold mb-3">Categories</h3>
              <ul className="space-y-1.5 text-sm">
                {categories.map((c) => (
                  <li key={c}>
                    <button onClick={() => setActive(c)} className="text-muted-foreground hover:text-[var(--coral)]">
                      › {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[var(--sunny)]/15 border border-border p-6">
              <h3 className="font-bold mb-3">Recent posts</h3>
              <ul className="space-y-3">
                {recent.map((p) => (
                  <li key={p.slug}>
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className="flex gap-3 group">
                      <img src={p.image} alt="" loading="lazy" className="h-14 w-14 rounded-xl object-cover" />
                      <div>
                        <div className="text-sm font-semibold group-hover:text-[var(--coral)] line-clamp-2">{p.title}</div>
                        <div className="text-xs text-muted-foreground">{p.date}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}