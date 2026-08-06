import { useState } from "react";
import { ArrowRight, Link2, ShieldCheck, Sparkles } from "lucide-react";
import heroArt from "@/assets/hero-illustration.png";

const stats = [
  { value: "2.4M+", label: "Active users" },
  { value: "180M+", label: "Downloads" },
  { value: "18 MB/s", label: "Avg. speed" },
  { value: "99.99%", label: "Uptime" },
];

export function Hero() {
  const [url, setUrl] = useState("");

  return (
    <section id="home" className="relative overflow-hidden px-5 pt-16 pb-20 sm:px-8 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background:var(--gradient-soft)]"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -top-24 -left-24 -z-10 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute top-40 -right-20 -z-10 h-[26rem] w-[26rem] rounded-full bg-secondary/30 blur-3xl [animation-delay:2s]"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute bottom-0 left-1/3 -z-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl [animation-delay:4s]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            New · 4K downloads in one click
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-6xl">
            Download anything, <span className="text-gradient">beautifully fast.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            DownloadHub turns any link into a clean, high-quality file — video, audio, or document
            — processed in the cloud and delivered in seconds. No apps, no ads, no limits.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="glass mt-9 flex flex-col gap-3 rounded-3xl p-3 shadow-glow sm:flex-row sm:items-center"
          >
            <label htmlFor="hero-url" className="sr-only">
              Paste a link
            </label>
            <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <Link2 className="h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                id="hero-url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your link here…"
                className="w-full bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button
              type="submit"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Download now
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Encrypted transfers · files auto-deleted after 2 hours
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-4 py-5 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold sm:text-3xl">{s.value}</dd>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-8 -z-10 rounded-[3rem] bg-brand-gradient opacity-25 blur-3xl"
          />
          <img
            src={heroArt}
            alt="Illustration of a download button surrounded by media file cards"
            width={1024}
            height={1024}
            className="animate-float mx-auto w-full max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
