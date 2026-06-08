import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { posts, type BlogPost } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Daring Kids` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:image", content: loaderData.post.image },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Post — Daring Kids" }],
  }),
  component: PostPage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-[var(--coral)] mt-4 inline-block">← Back to blog</Link>
      </div>
    </div>
  ),
});

function PostPage() {
  const { post } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <article className="pt-32 md:pt-40 pb-20">
        <div className="mx-auto max-w-3xl px-5">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <span className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-[var(--coral)]">{post.category}</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
          <div className="mt-4 text-sm text-muted-foreground">{post.date} · by {post.author}</div>

          <div className="mt-8 rounded-3xl overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-auto" />
          </div>

          <div className="prose prose-lg mt-8 max-w-none space-y-5 text-foreground/90 leading-relaxed">
            {(post as BlogPost).content.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-[var(--sky)]/10 border border-border p-8 text-center">
            <h3 className="text-2xl font-bold">Want to see it in person?</h3>
            <p className="mt-2 text-muted-foreground">Come visit Daring Kids and meet our team.</p>
            <Button asChild className="mt-5 rounded-full bg-[var(--coral)] hover:bg-[var(--coral)]/90 text-white">
              <Link to="/contact">Book a Tour</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}