import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[var(--sky)]/10 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-xs">
            A caring, joyful learning home for children from Nursery to Grade 1.
          </p>
          <div className="flex gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full bg-white text-[var(--sky)] hover:bg-[var(--sky)] hover:text-white transition-colors border border-border">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog & Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Visit Us</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[var(--coral)]" />24 Sunshine Lane, Lakeview District</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-[var(--coral)]" />(+1) 555-DARING</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-[var(--coral)]" />hello@daringkids.school</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">School Hours</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Mon – Fri: 8:00am – 3:30pm</li>
            <li>Saturday: 9:00am – 12:00pm</li>
            <li>Sunday: Closed</li>
            <li className="pt-2 text-[var(--leaf)] font-medium">After-school care available</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Daring Kids Junior School. All rights reserved.</span>
          <span>Made with <span className="text-[var(--coral)]">♥</span> for little learners.</span>
        </div>
      </div>
    </footer>
  );
}