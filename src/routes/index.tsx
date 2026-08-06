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
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
