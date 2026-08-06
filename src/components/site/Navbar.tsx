import { useEffect, useState } from "react";
import { Download, Globe, Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 glass">
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-7xl items-center gap-4 px-5 py-3 sm:px-8"
      >
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-brand-gradient shadow-lift">
            <Download className="h-5 w-5 text-primary-foreground" strokeWidth={2.4} />
          </span>
          <span className="font-display truncate text-lg font-semibold">DownloadHub</span>
        </a>

        <ul className="ml-6 hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full border border-border px-2.5 py-1.5 sm:flex">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <label className="sr-only" htmlFor="lang">
              Language
            </label>
            <select
              id="lang"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-sm font-medium outline-none"
            >
              <option>EN</option>
              <option>BN</option>
              <option>ES</option>
              <option>FR</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-colors hover:bg-muted"
          >
            {dark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          <a
            href="#login"
            className="hidden rounded-full px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted sm:inline-flex"
          >
            Login
          </a>
          <a
            href="#signup"
            className="hidden rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Sign Up
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-card/95 px-5 py-4 lg:hidden">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href="#login"
              className="rounded-full border border-border px-4 py-2.5 text-center text-sm font-semibold"
            >
              Login
            </a>
            <a
              href="#signup"
              className="rounded-full bg-brand-gradient px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
