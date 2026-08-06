import { useState } from "react";
import { ArrowRight, Link2, Loader2, ShieldCheck, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import heroArt from "@/assets/hero-illustration.png";
import { Counter, Reveal } from "./motion-kit";

const stats = [
  { value: "2.4M+", label: "Active users" },
  { value: "180M+", label: "Downloads" },
  { value: "18 MB/s", label: "Avg. speed" },
  { value: "99.99%", label: "Uptime" },
];

const formats = ["MP4 · 4K", "MP3 · 320kbps", "WAV", "PNG", "PDF"];

export function Hero() {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState(formats[0]);
  const [busy, setBusy] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setTimeout(() => setBusy(false), 1800);
  };

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

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1fr]">
        <div className="animate-rise">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            New · 4K downloads in one click
          </span>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-6xl">
            Download anything, <span className="text-gradient">beautifully fast.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            DownloadHub turns any link into a clean, high-quality file — video, audio, or document —
            processed in the cloud and delivered in seconds. No apps, no ads, no limits.
          </p>

          {/* Premium download box */}
          <form
            onSubmit={submit}
            className="glass gradient-border mt-9 rounded-[1.75rem] p-3 shadow-glow"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {busy ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Processing
                  </>
                ) : (
                  <>
                    Download now
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 px-1 pb-1">
              {formats.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFormat(f)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    format === f
                      ? "bg-brand-gradient text-primary-foreground shadow-lift"
                      : "border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {busy && (
              <div aria-hidden className="mx-1 mt-1 h-1 overflow-hidden rounded-full bg-muted">
                <motion.span
                  className="block h-full rounded-full bg-brand-gradient"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </div>
            )}
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Encrypted · auto-deleted after 2 hours
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-warning text-warning" />
              4.9/5 from 12,400 reviews
            </span>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="glass rounded-2xl px-4 py-5 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-semibold sm:text-3xl">
                    <Counter value={s.value} />
                  </dd>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-4 -z-10 rounded-[3rem] bg-brand-gradient opacity-30 blur-3xl"
          />
          <motion.img
            src={heroArt}
            alt="Illustration of a download button surrounded by media file cards"
            width={1024}
            height={1024}
            fetchPriority="high"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="animate-float mx-auto w-full max-w-2xl drop-shadow-2xl"
          />
          <div className="glass absolute bottom-6 left-0 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-soft sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/15 text-accent">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span className="text-xs">
              <span className="block font-semibold">Virus-free guarantee</span>
              <span className="text-muted-foreground">Scanned on every transfer</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
