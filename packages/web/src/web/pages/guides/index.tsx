import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import WhatsAppButton from "../../components/whatsapp-button";
import Seo from "../../components/seo";
import { canonicalFor } from "../../lib/seo-config";
import { guides } from "../../data/guides";

const guidesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tanzania Safari Guides",
  itemListElement: guides.map((g, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: canonicalFor(`/guides/${g.slug}`),
    name: g.title,
  })),
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Seo
        title="Tanzania Safari Guides & Travel Advice"
        description="Honest, practical guides to planning a Tanzania safari — the best time to visit the Serengeti, safari costs, honeymoon ideas and a first-timer's guide. Written by Hugo, a Tanzania-based safari host."
        path="/guides"
        jsonLd={guidesJsonLd}
      />
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-sunset.webp"
            alt="Tanzania safari landscape at sunset"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/80 to-dark" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-6">
            Plan With Confidence
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6">
            Safari <span className="italic text-gold/90">Guides</span>
          </h1>
          <p className="text-cream/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything I'd tell a friend planning their first — or fifth —
            Tanzania safari. Honest advice, no sales pitch.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24 md:pb-32 bg-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                to={`/guides/${guide.slug}`}
                className="group flex flex-col bg-surface border border-white/5 overflow-hidden hover:border-gold/30 transition-colors duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={guide.heroImage}
                    alt={guide.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
                </div>
                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-center gap-2 text-cream/40 text-xs tracking-[0.1em] uppercase mb-3">
                    <Clock size={12} />
                    {guide.readTime}
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-cream mb-3 leading-tight">
                    {guide.title}
                  </h2>
                  <p className="text-cream/60 text-sm leading-relaxed mb-5 flex-1">
                    {guide.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-300">
                    Read Guide
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-cream/60 mb-6">
              Got a question these don't answer? Just ask me directly.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-bold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              Ask Hugo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
