import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Heart, Squiggle } from "@/components/Doodles";
import { Sparkles, Target, Eye, Heart as HeartIcon, Trees, BookOpen, Palette, Bike } from "lucide-react";
import teachersImg from "@/assets/about-teachers.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Daring Kids Academy— Junior School" },
      { name: "description", content: "Meet the teachers, mission and values behind Daring Kids Academy— a caring junior school for Nursery through Grade 1." },
      { property: "og:title", content: "About Daring Kids" },
      { property: "og:description", content: "Our story, mission, values, teachers and facilities." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: HeartIcon, color: "var(--coral)", title: "Kindness", text: "We model warmth in every interaction — staff to child, child to child." },
  { icon: Sparkles, color: "var(--sunny)", title: "Curiosity", text: "Every question matters. We chase wonder wherever it leads." },
  { icon: Star, color: "var(--sky)", title: "Courage", text: "We celebrate trying, falling and trying again — the daring in Daring Kids." },
  { icon: HeartIcon, color: "var(--leaf)", title: "Belonging", text: "Every family, every culture, every child fits here." },
];

const teachers = [
  { name: "Amara Okonkwo", role: "Head Teacher", initial: "A", color: "var(--sky)" },
  { name: "Kofi Mensah", role: "Sports & Movement", initial: "K", color: "var(--leaf)" },
  { name: "Priya Shah", role: "Reception Lead", initial: "P", color: "var(--coral)" },
  { name: "Ethan Reyes", role: "Grade 1 Lead", initial: "E", color: "var(--grape)" },
  { name: "Lola Bennett", role: "Music & Drama", initial: "L", color: "var(--sunny)" },
  { name: "Sofia Marin", role: "Nursery Lead", initial: "S", color: "var(--sky)" },
];

const facilities = [
  { icon: BookOpen, title: "Library Nook", text: "200+ inclusive picture books in a cosy reading corner." },
  { icon: Palette, title: "Art Studio", text: "Easels, clay, recycled materials — mess is welcomed here." },
  { icon: Trees, title: "Garden Playground", text: "A safe outdoor space with shade, sand and growing beds." },
  { icon: Bike, title: "Movement Hall", text: "Ride, climb, balance and dance — rainy-day approved." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="font-hand text-2xl text-[var(--coral)]">Our story</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-tight">
            A school built on <span className="relative text-[var(--sky)]">love
              <Squiggle className="absolute -bottom-2 left-0 w-full text-[var(--sunny)]" />
            </span> and a little daring.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Daring Kids Academy opened its doors in 2014 with one classroom, twelve children and a wild idea: early childhood deserves the very best of us.
          </p>
        </div>
      </section>

      {/* HISTORY + IMAGE */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="blob overflow-hidden ring-4 ring-white shadow-2xl">
              <img src={teachersImg} alt="Teacher reading to children" loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
            </div>
            <Heart className="absolute -top-4 -right-2 h-10 w-10 text-[var(--coral)] animate-float" />
          </div>
          <div>
            <p className="font-hand text-xl text-[var(--leaf)]">Where we started</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-1">A decade of joyful learning</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From a single rented room in 2014 to a thriving campus today, Daring Kids Academyhas grown one happy family at a time. We've stayed small on purpose — small classes, big attention.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ten years on, our first graduates are now in high school, and many still come back to read to our nursery class. That's the kind of community we are.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-[var(--sky)]/10 p-8 border border-border">
            <div className="h-12 w-12 rounded-2xl bg-[var(--sky)] grid place-items-center text-white mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground">To nurture confident, curious and kind young learners by giving them the safest, most joyful first-school experience possible.</p>
          </div>
          <div className="rounded-3xl bg-[var(--coral)]/10 p-8 border border-border">
            <div className="h-12 w-12 rounded-2xl bg-[var(--coral)] grid place-items-center text-white mb-4">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 text-muted-foreground">A generation of children who love learning for life — because their very first classroom made them feel brave, seen and loved.</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 bg-[var(--leaf)]/5">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-hand text-2xl text-[var(--leaf)]">Our core values</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-1">The four things we live by</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="bg-card rounded-3xl p-6 border border-border text-center hover:-translate-y-1 transition-transform">
                <div className="mx-auto h-14 w-14 rounded-2xl grid place-items-center text-white" style={{ background: v.color }}>
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-bold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-hand text-2xl text-[var(--sky)]">Meet our team</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-1">Teachers who truly care</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teachers.map((t, i) => (
              <div key={i} className="bg-card rounded-3xl p-6 border border-border flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl grid place-items-center text-2xl font-bold text-white shadow-md" style={{ background: t.color }}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-lg">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-16 bg-[var(--sunny)]/10">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-hand text-2xl text-[var(--coral)]">Our campus</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-1">Spaces designed for little explorers</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-border">
                <f.icon className="h-8 w-8 text-[var(--coral)]" />
                <h3 className="mt-4 font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH + CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="font-hand text-2xl text-[var(--grape)]">Our learning approach</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-1">Play-based. Child-led. Brain-loving.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We blend Montessori-inspired exploration, Reggio Emilia creativity and modern early-years research. The result is a curriculum that respects how children actually learn — through play, story and hands-on discovery.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full bg-[var(--coral)] hover:bg-[var(--coral)]/90 text-white font-semibold px-7 h-12">
            <Link to="/contact">Book a Campus Tour</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}