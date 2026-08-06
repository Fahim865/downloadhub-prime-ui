import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  Benefits,
  Cta,
  Faq,
  Features,
  HowItWorks,
  Services,
  Testimonials,
} from "@/components/site/Sections";
import { Footer } from "@/components/site/Footer";
import { BlogPreview, DownloadHistory, Pricing } from "@/components/site/Extras";
import { AuroraBackground, CursorGlow } from "@/components/site/motion-kit";

const title = "DownloadHub — Fast, secure downloads from any link";
const description =
  "Paste any link and get a clean HD file in seconds. Cloud-based, ad-free downloading for video, audio, images and documents on any device.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:site_name", content: "DownloadHub" },
      { property: "og:url", content: "https://downloadhub-prime-ui.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://downloadhub-prime-ui.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "DownloadHub",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "12400" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <AuroraBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <HowItWorks />
        <Benefits />
        <DownloadHistory />
        <Pricing />
        <Testimonials />
        <BlogPreview />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
