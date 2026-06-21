import { Link } from "@tanstack/react-router";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
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
            {[
              { Icon: Facebook, href: "https://www.facebook.com/share/1DrYYjtRuL/", label: "Facebook" },
              { Icon: FaTiktok, href: "https://www.tiktok.com/@daring.kids.acade?_r=1&_d=el3ja4773m2cc8&sec_uid=MS4wLjABAAAA-RzYPy2KPg7jvu3jM5YvcLb_BUrtP4NwCLvf13QPdOfPXyHPWvDDXubRAjfTWNyw&share_author_id=7617160821122237441&sharer_language=en&source=h5_m&u_code=f2d9ejlel8d87d&timestamp=1781679716&user_id=7617160821122237441&sec_user_id=MS4wLjABAAAA-RzYPy2KPg7jvu3jM5YvcLb_BUrtP4NwCLvf13QPdOfPXyHPWvDDXubRAjfTWNyw&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7651721905669572372&share_link_id=0e39e727-b019-48fe-ab29-c5ee3c5aead1&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1", label: "TikTok" }
            ].map(({ Icon, href, label }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
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
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-[var(--coral)]" />Mkhwinda village,T/A chiwere dowa</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-[var(--coral)]" />+265 888 287 808</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-[var(--coral)]" />daringkidsacademy@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">School Hours</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Mon – Fri: 7:30am – 12:00pm</li>
            <li>Saturday: closed</li>
            <li>Sunday: Closed</li>
            <li className="pt-2 text-[var(--leaf)] font-medium">After-school care available</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Daring Kids Academy Junior School. All rights reserved.</span>
          <span>Made with <span className="text-[var(--coral)]">♥</span> by SureDefense Systems</span>
        </div>
      </div>
    </footer>
  );
}