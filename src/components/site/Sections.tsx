import {
  Cloud,
  FileText,
  Film,
  Gauge,
  Image as ImageIcon,
  Instagram,
  Lock,
  MonitorSmartphone,
  Music4,
  Podcast,
  ShieldCheck,
  Sparkles,
  Star,
  Youtube,
  Zap,
} from "lucide-react";
import { useState } from "react";
import devices from "@/assets/devices-mockup.png";

function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}

const services = [
  { icon: Youtube, name: "Video platforms", desc: "Up to 4K with audio merged automatically." },
  { icon: Instagram, name: "Social media", desc: "Reels, stories and carousels, watermark-free." },
  { icon: Music4, name: "Music & audio", desc: "320kbps MP3, FLAC and WAV conversions." },
  { icon: Podcast, name: "Podcasts", desc: "Full episodes with chapters and metadata." },
  { icon: ImageIcon, name: "Images", desc: "Original resolution galleries in one archive." },
  { icon: FileText, name: "Documents", desc: "PDFs, slides and sheets, perfectly preserved." },
];

const features = [
  { icon: Zap, title: "Fast processing", desc: "Distributed workers finish most jobs in under 6 seconds." },
  { icon: Lock, title: "Secure by default", desc: "TLS 1.3 end to end and files purged automatically." },
  { icon: Film, title: "HD & 4K quality", desc: "Original bitrate preserved — never re-compressed." },
  { icon: Cloud, title: "Cloud based", desc: "Queue in the browser, pick it up on any device." },
  { icon: MonitorSmartphone, title: "Mobile friendly", desc: "A full-power interface that fits your thumb." },
  { icon: Gauge, title: "No installation", desc: "Nothing to download to download. Just a link." },
];

const steps = [
  { n: "01", title: "Paste link", desc: "Drop any URL into the field. We detect the source instantly." },
  { n: "02", title: "Process", desc: "Our cloud fetches, converts and optimises in real time." },
  { n: "03", title: "Download", desc: "Grab your file in the format and quality you picked." },
];

const testimonials = [
  {
    name: "Amara Chen",
    role: "Content producer",
    initials: "AC",
    review:
      "We archive 200+ clips a week. DownloadHub replaced three tools and cut our turnaround in half.",
  },
  {
    name: "Marcus Reid",
    role: "Podcast editor",
    initials: "MR",
    review:
      "Audio comes out untouched — no weird re-encoding artefacts. That alone made it worth switching.",
  },
  {
    name: "Sofia Almeida",
    role: "Design lead",
    initials: "SA",
    review:
      "It just feels premium. Paste, wait two seconds, done. The mobile experience is genuinely great.",
  },
];

const faqs = [
  {
    q: "Is DownloadHub free to use?",
    a: "Yes. The free plan covers unlimited standard downloads. Pro unlocks 4K, batch queues and priority workers.",
  },
  {
    q: "Do you store my files?",
    a: "Processed files live in temporary storage for two hours, then they are permanently deleted. We never keep source links.",
  },
  {
    q: "Which formats can I convert to?",
    a: "MP4, MOV, WEBM, MP3, WAV, FLAC, PNG, JPG and PDF, with quality presets from 360p up to 4K.",
  },
  {
    q: "Do I need to install anything?",
    a: "No. Everything runs in your browser and on our cloud, on desktop and mobile alike.",
  },
  {
    q: "Is there an API?",
    a: "Pro and Team plans include a REST API with webhooks so you can automate downloads inside your own workflow.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Supported services"
          title="One hub for every source"
          desc="Over 1,000 platforms supported and growing weekly — all through the same clean interface."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.name}
              className="card-hover rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section id="features" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Features"
          title="Built for people who download a lot"
          desc="Every detail tuned for speed, quality and privacy — without a settings maze."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li
              key={f.title}
              className="card-hover group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <span
                aria-hidden
                className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
              />
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-lift">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="How it works"
          title="Three steps, six seconds"
          desc="No accounts, no plugins, no waiting rooms. Just the shortest path from link to file."
        />
        <ol className="relative mt-16 grid gap-8 md:grid-cols-3">
          <span
            aria-hidden
            className="flow-line absolute top-9 right-[16%] left-[16%] hidden h-0.5 md:block"
          />
          {steps.map((s) => (
            <li key={s.n} className="relative text-center">
              <span className="font-display mx-auto grid h-18 w-18 place-items-center rounded-3xl border border-border bg-card text-xl font-semibold text-primary shadow-soft">
                {s.n}
              </span>
              <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Benefits() {
  const points = [
    "Queue on desktop, finish on mobile — sessions sync instantly.",
    "Batch up to 50 links at once with a single click.",
    "Automatic format detection picks the best quality available.",
    "Zero ads, zero redirects, zero bundled installers.",
  ];
  return (
    <section id="benefits" className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-10 -z-10 rounded-[3rem] bg-brand-gradient opacity-20 blur-3xl"
          />
          <img
            src={devices}
            alt="DownloadHub running on a laptop and a smartphone"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full drop-shadow-2xl"
          />
        </div>
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Benefits
          </span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Same experience on every screen
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A single responsive workspace that adapts to your device instead of asking you to adapt
            to it.
          </p>
          <ul className="mt-8 grid gap-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <a
            href="#signup"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
          >
            <Sparkles className="h-4 w-4" />
            Try it free
          </a>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="blog" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          eyebrow="Testimonials"
          title="Loved by creators and teams"
          desc="Over two million people trust DownloadHub with their daily workflow."
        />
        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="card-hover rounded-3xl border border-border bg-card p-8 shadow-soft"
            >
              <div className="flex items-center gap-1 text-warning">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">“{t.review}”</p>
              <div className="mt-7 flex min-w-0 items-center gap-3">
                <span className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-gradient text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHead
          eyebrow="FAQ"
          title="Questions, answered"
          desc="Everything you might want to know before your first download."
        />
        <ul className="mt-12 grid gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="rounded-2xl border border-border bg-card shadow-soft">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold"
                  >
                    <span className="min-w-0">{f.q}</span>
                    <span
                      aria-hidden
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-muted text-lg leading-none text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand-gradient px-8 py-20 text-center shadow-glow sm:px-16">
        <span
          aria-hidden
          className="animate-float absolute -top-24 -left-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
        />
        <span
          aria-hidden
          className="animate-float absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-secondary/40 blur-3xl [animation-delay:3s]"
        />
        <h2 className="relative text-3xl font-semibold text-primary-foreground sm:text-5xl">
          Start downloading in seconds
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-base text-primary-foreground/85">
          Join 2.4 million people who stopped fighting with sketchy download sites.
        </p>
        <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#signup"
            className="rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Get started free
          </a>
          <a
            href="#features"
            className="rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
