import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Squiggle, Star, Heart, Scribble, Rays } from "@/components/Doodles";
import {
  ShieldCheck, GraduationCap, Sparkles, Users, Heart as HeartIcon, Gamepad2,
  ArrowRight, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-kids.jpg";
import nurseryImg from "@/assets/program-nursery.jpg";
import receptionImg from "@/assets/program-reception.jpg";
import grade1Img from "@/assets/program-grade1.jpg";
import { posts } from "@/lib/blog-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daring Kids Academy— Where Little Minds Grow Big Dreams" },
      { name: "description", content: "Daring Kids Academy is a caring, safe junior school for Nursery through Grade 1. Qualified teachers, small classes and joyful learning." },
      { property: "og:title", content: "Daring Kids Academy— Junior School" },
      { property: "og:description", content: "A joyful, nurturing first-school experience for Nursery, Reception and Grade 1." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const reasons = [
  { icon: GraduationCap, color: "var(--sky)", title: "Qualified Teachers", text: "Early-years specialists with years of classroom experience and ongoing training." },
  { icon: ShieldCheck, color: "var(--leaf)", title: "Safe Environment", text: "Secure campus, CCTV, allergy-aware kitchen and trained first-aid staff every day." },
  { icon: Sparkles, color: "var(--sunny)", title: "Creative Activities", text: "Art, music, drama and outdoor play woven into every single week." },
  { icon: Users, color: "var(--coral)", title: "Small Class Sizes", text: "Max 12 children per teacher so every little one is truly seen." },
  { icon: HeartIcon, color: "var(--grape)", title: "Child-Centred Learning", text: "We follow each child's curiosity and pace — no two days look the same." },
  { icon: Gamepad2, color: "var(--sky)", title: "Fun & Interactive", text: "Games, stories and hands-on discovery are how our learners thrive." },
];

const programs = [
  { tag: "Ages 2–3", color: "var(--sunny)", title: "Nursery", text: "A gentle first step into school life — songs, sensory play, and lots of cuddles.", img: nurseryImg },
  { tag: "Ages 4–5", color: "var(--leaf)", title: "Reception", text: "Early literacy, numbers and friendships blossom through play-based learning.", img: receptionImg },
  { tag: "Ages 5–6", color: "var(--coral)", title: "Grade 1", text: "Confident readers and curious thinkers — Grade 1 builds skills for life.", img: grade1Img },
];

const stats = [
  { number: "320+", label: "Happy Students" },
  { number: "28", label: "Caring Teachers" },
  { number: "40+", label: "Weekly Activities" },
  { number: "98%", label: "Parent Satisfaction" },
];

const testimonials = [
  { name: "Erin Dokidis", role: "Parent of a preschooler", quote: "My daughter actually asks to go to school on weekends. The teachers genuinely love what they do — it shows in everything." },
  { name: "Marcus Lee", role: "Father of Ella, Reception", quote: "We were so nervous about starting school. Daring Kids Academy made the transition magical for our whole family." },
  { name: "Priya Shah", role: "Mum of twins, Nursery", quote: "Small classes, big heart. My twins are thriving and have already made best friends." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[var(--sky)]/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[var(--sunny)]/25 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--leaf)]/15 text-[var(--leaf)] px-4 py-1.5 text-sm font-semibold">
              <Star className="h-4 w-4" /> Enrolling for the new term
            </span>
            <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Where <span className="relative text-[var(--coral)]">
                little minds
                <Squiggle className="absolute -bottom-2 left-0 w-full text-[var(--sunny)]" />
              </span> grow <span className="text-[var(--sky)]">big dreams</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Daring Kids Academy is a warm, joyful junior school for Nursery through Grade 1. We blend play and purpose to give every child a brilliant start.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-[var(--coral)] hover:bg-[var(--coral)]/90 text-white font-semibold px-7 h-12 shadow-[0_5px_0_oklch(0.55_0.2_25)]">
                <Link to="/contact">Enroll Now <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-2 border-foreground/20 hover:bg-secondary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {["var(--sunny)", "var(--leaf)", "var(--coral)", "var(--grape)"].map((c, i) => (
                  <span key={i} className="h-8 w-8 rounded-full border-2 border-background" style={{ background: c }} />
                ))}
              </div>
              <span><strong className="text-foreground">320+ families</strong> trust us with their little ones</span>
            </div>
          </div>

          <div className="relative">
            <Rays className="absolute -top-6 -left-6 h-16 w-16 text-[var(--grape)] animate-wiggle" />
            <Heart className="absolute top-10 -right-2 h-8 w-8 text-[var(--coral)] animate-float" />
            <Star className="absolute bottom-4 -left-4 h-10 w-10 text-[var(--sunny)] animate-wiggle" />
            <div className="relative blob overflow-hidden bg-white shadow-2xl ring-4 ring-white">
              <img src={heroImg} alt="Happy children learning at Daring Kids" width={1024} height={1024} className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-2 md:-right-6 rounded-2xl bg-white shadow-xl border border-border px-4 py-3 flex items-center gap-3 animate-float">
              <div className="h-10 w-10 rounded-xl bg-[var(--leaf)]/15 grid place-items-center">
                <Sparkles className="h-5 w-5 text-[var(--leaf)]" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Today's activity</div>
                <div className="font-semibold text-sm">Rainbow Painting!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="font-hand text-2xl text-[var(--coral)]">Welcome to our school</p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold leading-tight">
            A caring home for your child's first big adventures
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            At Daring Kids Academywe believe early childhood is sacred. Our mission is simple: give every little learner a place where they feel safe, loved, challenged and free to be exactly who they are.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 md:py-20 bg-[var(--sky)]/5">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-hand text-2xl text-[var(--sky)]">Why parents choose us</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">Six reasons to love Daring Kids</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <div key={i} className="group relative bg-card rounded-3xl border border-border p-7 hover:-translate-y-1 transition-transform shadow-sm">
                <div className="h-14 w-14 rounded-2xl grid place-items-center text-white mb-5 shadow-lg" style={{ background: r.color }}>
                  <r.icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-xl">{r.title}</h3>
                <p className="mt-2 text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-hand text-2xl text-[var(--leaf)]">Our programs</p>
              <h2 className="text-3xl md:text-5xl font-bold mt-1">Built for every age & stage</h2>
            </div>
            <p className="text-muted-foreground max-w-md">From first steps in Nursery to confident Grade 1 readers — we meet your child exactly where they are.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <article key={i} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white shadow" style={{ background: p.color }}>{p.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.text}</p>
                  <Link to="/about" className="mt-4 inline-flex items-center gap-1 font-semibold text-[var(--sky)]">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[var(--sky)] to-[var(--grape)] text-white p-10 md:p-16 relative overflow-hidden">
            <Star className="absolute top-8 right-10 h-10 w-10 text-white/30 animate-wiggle" />
            <Heart className="absolute bottom-10 left-12 h-8 w-8 text-white/30 animate-float" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-4xl md:text-6xl font-bold">{s.number}</div>
                  <div className="mt-2 text-white/85">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-20 bg-[var(--sunny)]/10">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-hand text-2xl text-[var(--coral)]">Happy parents</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-1">Loved by families across the city</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-white rounded-3xl p-7 border border-border shadow-sm relative">
                <Quote className="absolute -top-3 -left-3 h-10 w-10 text-[var(--sunny)] fill-[var(--sunny)]" />
                <blockquote className="text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full grid place-items-center font-bold text-white" style={{ background: ["var(--sky)", "var(--leaf)", "var(--grape)"][i] }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-hand text-2xl text-[var(--grape)]">Latest news</p>
              <h2 className="text-3xl md:text-5xl font-bold mt-1">From our classrooms</h2>
            </div>
            <Button asChild variant="outline" className="rounded-full border-2 self-start md:self-end">
              <Link to="/blog">View all posts <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group rounded-3xl overflow-hidden bg-card border border-border hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" width={1000} height={750} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[var(--sky)]">{p.category} · {p.date}</span>
                  <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-[var(--coral)] transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ENROLL CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="relative rounded-[2.5rem] bg-[var(--coral)] text-white p-10 md:p-14 overflow-hidden">
            <Scribble className="absolute top-6 right-10 h-14 w-20 text-white/40 animate-wiggle" />
            <Star className="absolute bottom-8 left-8 h-10 w-10 text-white/40 animate-float" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">Ready to give your child a brilliant start?</h2>
              <p className="mt-4 text-white/90">Book a campus tour and meet the teachers who will help your little one fall in love with learning.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-white text-[var(--coral)] hover:bg-white/90 font-bold h-12 px-7">
                  <Link to="/contact">Book a Tour</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 bg-transparent border-2 border-white text-white hover:bg-white/10">
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
