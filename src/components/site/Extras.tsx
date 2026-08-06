import {
  ArrowUpRight,
  Check,
  Clock,
  Download,
  FileAudio,
  FileVideo,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal, useGlowTracking } from "./motion-kit";
import { SectionHead } from "./Sections";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Everything you need for everyday downloads.",
    features: [
      "Unlimited standard downloads",
      "Up to 1080p video quality",
      "MP3 audio extraction",
      "Files kept for 2 hours",
      "No ads, no redirects",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$7",
    period: "per month",
    desc: "For creators and teams who download at scale.",
    features: [
      "Everything in Free",
      "4K, FLAC and lossless exports",
      "Batch queue up to 50 links",
      "Priority workers — 3× faster",
      "REST API access + webhooks",
      "7-day cloud history",
    ],
    cta: "Go Pro",
    highlight: true,
  },
];

const posts = [
  {
    tag: "Guide",
    title: "How to download 4K video without losing quality",
    excerpt:
      "Bitrate, containers and codecs explained in plain language — plus the settings we use.",
    read: "6 min read",
  },
  {
    tag: "Product",
    title: "Batch downloads are now 3× faster",
    excerpt: "We rebuilt the worker queue around streaming transcodes. Here's what changed.",
    read: "4 min read",
  },
  {
    tag: "Privacy",
    title: "What we do (and never do) with your links",
    excerpt: "A transparent look at our two-hour retention window and zero-log policy.",
    read: "5 min read",
  },
];

const history = [
  { icon: FileVideo, name: "keynote-highlights.mp4", meta: "4K · 248 MB", time: "2 min ago" },
  { icon: FileAudio, name: "episode-142-master.mp3", meta: "320 kbps · 54 MB", time: "18 min ago" },
  { icon: ImageIcon, name: "campaign-gallery.zip", meta: "42 images · 96 MB", time: "1 hour ago" },
  { icon: FileVideo, name: "product-teaser.webm", meta: "1080p · 32 MB", time: "3 hours ago" },
];

export function Pricing() {
  const glow = useGlowTracking();
  return (
    <section id="pricing" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHead
            eyebrow="Pricing"
            title="Simple pricing, no surprises"
            desc="Start free and stay free. Upgrade only when you need serious throughput."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                onMouseMove={glow}
                className={`glow-card h-full rounded-3xl p-8 shadow-soft ${
                  p.highlight ? "gradient-border shadow-glow" : "border border-border bg-card"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  {p.highlight && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-primary-foreground">
                      <Sparkles className="h-3 w-3" />
                      Most popular
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <p className="mt-6 flex items-end gap-2">
                  <span className="font-display text-5xl font-semibold">{p.price}</span>
                  <span className="pb-1.5 text-sm text-muted-foreground">{p.period}</span>
                </p>
                <ul className="mt-8 grid gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#signup"
                  className={`mt-9 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    p.highlight
                      ? "bg-brand-gradient text-primary-foreground shadow-lift"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DownloadHistory() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="history" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHead
            eyebrow="Your library"
            title="Every download, right where you left it"
            desc="Pick up on any device — your recent files stay synced and one tap away."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass mt-12 rounded-3xl p-3 shadow-soft sm:p-4">
            <div className="flex items-center justify-between px-3 py-2">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Clock className="h-4 w-4 text-primary" />
                Recent downloads
              </p>
              <span className="text-xs text-muted-foreground">Synced just now</span>
            </div>
            <ul className="mt-2 grid gap-2">
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4"
                    >
                      <span className="skeleton h-11 w-11 shrink-0 rounded-2xl" />
                      <span className="min-w-0 flex-1">
                        <span className="skeleton block h-3.5 w-1/2" />
                        <span className="skeleton mt-2 block h-3 w-1/4" />
                      </span>
                      <span className="skeleton h-8 w-8 shrink-0 rounded-full" />
                    </li>
                  ))
                : history.map((h, i) => (
                    <li
                      key={h.name}
                      style={{ animationDelay: `${i * 70}ms` }}
                      className="animate-rise flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                        <h.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold">{h.name}</span>
                        <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                          {h.meta} · {h.time}
                        </span>
                      </span>
                      <button
                        type="button"
                        aria-label={`Download ${h.name} again`}
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-brand-gradient hover:text-primary-foreground"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function BlogPreview() {
  const glow = useGlowTracking();
  return (
    <section id="blog" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHead
            eyebrow="Blog"
            title="Notes from the download lab"
            desc="Product updates, deep dives and honest guides — no SEO filler."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.08} className="h-full">
              <article
                onMouseMove={glow}
                className="glow-card flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft"
              >
                <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {p.tag}
                </span>
                <h3 className="mt-5 text-lg leading-snug font-semibold">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <p className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  {p.read}
                  <span className="inline-flex items-center gap-1 font-semibold text-primary">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
