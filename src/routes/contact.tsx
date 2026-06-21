import { useState } from "react";
import emailjs from "@emailjs/browser";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Squiggle } from "@/components/Doodles";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Daring Kids Academy Junior School" },
      {
        name: "description",
        content:
          "Get in touch with Daring Kids. Visit our campus, book a tour or enroll your child.",
      },
      { property: "og:title", content: "Contact Daring Kids" },
      { property: "og:description", content: "Reach out, book a tour, or enroll today." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(120),
  phone: z.string().trim().min(5, "Please enter a valid phone").max(30),
  subject: z.string().trim().min(1, "Please add a subject").max(120),
  message: z.string().trim().min(5, "Tell us a little more").max(1000),
});

const cards = [
  { icon: Phone, color: "var(--sky)", title: "Call us", lines: ["+265 888 287 808", "Mon–Fri, 8am–4pm"] },
  { icon: Mail, color: "var(--coral)", title: "Email us", lines: ["hello@daringkids.school", "We reply within 24h"] },
  { icon: MapPin, color: "var(--leaf)", title: "Visit us", lines: ["24 Sunshine Lane", "Lakeview District"] },
  { icon: Clock, color: "var(--grape)", title: "School hours", lines: ["Mon–Fri 8:00am–3:30pm", "Sat 9:00am–12:00pm"] },
];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach(
        (i) => (errs[i.path[0] as string] = i.message)
      );
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      await emailjs.send(
        "service_r2rx1a8",
        "template_wzsughv",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent!", {
        description: "We'll get back to you within 24 hours.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Toaster />

      <section className="pt-32 md:pt-40 pb-10">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="font-hand text-2xl text-[var(--sky)]">Say hello</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-tight">
            We'd love to{" "}
            <span className="relative text-[var(--coral)]">
              hear from you
              <Squiggle className="absolute -bottom-2 left-0 w-full text-[var(--sunny)]" />
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Questions about enrollment, tours or just curious? Reach out — we'll reply in less than 24 hours.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => (
            <div key={i} className="bg-card rounded-3xl p-6 border border-border">
              <div
                className="h-12 w-12 rounded-2xl grid place-items-center text-white"
                style={{ background: c.color }}
              >
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold">{c.title}</h3>
              {c.lines.map((l, j) => (
                <p key={j} className="text-sm text-muted-foreground">
                  {l}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-10">
          <form
            onSubmit={submit}
            className="bg-card rounded-3xl border border-border p-8 space-y-5"
          >
            <h2 className="text-2xl font-bold">Send a message</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Parent Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={update("name")}
                  className="mt-1 h-11 rounded-xl"
                />
                {errors.name && (
                  <p className="text-xs text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  className="mt-1 h-11 rounded-xl"
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={update("phone")}
                  className="mt-1 h-11 rounded-xl"
                />
                {errors.phone && (
                  <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={form.subject}
                  onChange={update("subject")}
                  className="mt-1 h-11 rounded-xl"
                />
                {errors.subject && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.subject}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={update("message")}
                rows={5}
                className="mt-1 rounded-xl"
              />
              {errors.message && (
                <p className="text-xs text-destructive mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full h-12 bg-[var(--coral)] hover:bg-[var(--coral)]/90 text-white font-semibold"
            >
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden border border-border h-72 lg:h-96">
              <iframe
                title="Daring Kids Academy location"
                src="https://maps.google.com/maps?q=-13.707159,34.253358&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>

            <div className="rounded-3xl bg-[var(--sunny)]/15 border border-border p-6">
              <h3 className="font-bold text-lg">Ready to enroll?</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Book a 30-minute campus tour to see our classrooms, meet teachers and ask anything.
              </p>
              <a
                href="tel:+265888287808"
                className="mt-4 inline-block text-[var(--coral)] font-semibold"
              >
                Call +265 888 287 808 →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}