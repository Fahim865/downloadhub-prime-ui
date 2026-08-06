import { Download, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const columns = [
  {
    title: "Product",
    items: ["Home", "Features", "How it works", "Pricing", "Download history", "Blog"],
  },
  {
    title: "Resources",
    items: ["Documentation", "API reference", "Changelog", "Status page", "Guides", "Integrations"],
  },
  { title: "Company", items: ["About us", "Careers", "Press kit", "Partners", "Contact"] },
  {
    title: "Support",
    items: ["Help center", "Report a bug", "Community", "Feedback", "Service status"],
  },
  {
    title: "Legal",
    items: ["Terms of service", "Privacy policy", "Cookie policy", "DMCA", "Licenses", "GDPR"],
  },
];

const socials = [Twitter, Instagram, Facebook, Linkedin, Github];

export function Footer() {
  return (
    <footer className="bg-footer px-5 pt-20 pb-10 text-footer-foreground sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.8fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-gradient">
                <Download className="h-5 w-5 text-primary-foreground" strokeWidth={2.4} />
              </span>
              <span className="font-display text-lg font-semibold">DownloadHub</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-footer-muted">
              The fastest, cleanest way to save anything from the web. Built for creators, teams and
              everyone in between.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 max-w-sm">
              <label htmlFor="newsletter" className="text-sm font-semibold">
                Get product updates
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-footer-foreground outline-none placeholder:text-footer-muted focus:border-secondary"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-sm font-semibold text-footer-foreground">{col.title}</h3>
                <ul className="mt-4 grid gap-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-footer-muted transition-colors hover:text-footer-foreground"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
          {[
            { k: "Uptime", v: "99.99%" },
            { k: "Files processed", v: "180M+" },
            { k: "Avg. delivery", v: "6 seconds" },
          ].map((x) => (
            <div key={x.k}>
              <p className="font-display text-2xl font-semibold">{x.v}</p>
              <p className="mt-1 text-xs text-footer-muted">{x.k}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-footer-muted">
            © {new Date().getFullYear()} DownloadHub. All rights reserved. · Made for people who
            download a lot.
          </p>
          <ul className="flex items-center gap-3">
            {socials.map((Icon, i) => (
              <li key={i}>
                <a
                  href="#"
                  aria-label="Social profile"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-footer-muted transition-colors hover:border-secondary hover:text-footer-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
