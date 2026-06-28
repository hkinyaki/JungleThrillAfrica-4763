import { Link } from "wouter";
import { ArrowRight, Clock, Heart } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import WhatsAppButton from "../../components/whatsapp-button";
import Seo from "../../components/seo";
import { canonicalFor } from "../../lib/seo-config";
import { journeys } from "../../data/journeys";

const journeysJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tanzania Safari Journeys",
  itemListElement: journeys.map((j, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: canonicalFor(`/journeys/${j.slug}`),
    name: `${j.title} — ${j.subtitle}`,
  })),
};

export default function JourneysPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Seo
        title="Tanzania Safari Journeys — Tailor-Made for You"
        description="Browse hand-crafted Tanzania safari journeys — honeymoons, family adventures, photographic trips and slow luxury escapes. Every itinerary is a starting point Hugo tailors entirely around you."
        path="/journeys"
        jsonLd={journeysJsonLd}
      />
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/serengeti.webp"
            alt="Tanzania safari"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/80 to-dark" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
            Journeys, Not Packages
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up-delay-1">
            Find the One That's
            <br />
            <span className="italic text-gold/90">Yours</span>
          </h1>
          <p className="text-cream/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            Every journey below is a starting point — a feeling, a reason, a
            shape for your trip. Tell me which one speaks to you and I'll make it
            entirely your own.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24 md:pb-32 bg-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeys.map((journey) => (
              <Link
                key={journey.slug}
                to={`/journeys/${journey.slug}`}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              >
                <img
                  src={journey.heroImage}
                  alt={journey.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                <div className="absolute top-5 right-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-dark/70 backdrop-blur-sm border border-gold/30 text-gold text-xs tracking-[0.1em] uppercase">
                    <Clock size={12} />
                    {journey.days} Days
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold/90 text-xs tracking-[0.2em] uppercase mb-2">
                    {journey.subtitle}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-white mb-2 leading-tight">
                    {journey.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed mb-4">
                    {journey.tagline}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-300">
                    Explore
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* SLOW SAFARI NOTE */}
          <div className="mt-20 max-w-3xl mx-auto bg-surface border border-white/5 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-5">
              <Heart size={18} className="text-gold" />
              <p className="text-gold text-xs tracking-[0.2em] uppercase">
                How I Plan — The Slow Safari
              </p>
            </div>
            <p className="text-cream/70 leading-relaxed mb-4">
              You'll notice every journey lingers — at least three nights in each
              place. That's deliberate. You came all this way to actually arrive,
              not just pass through. Staying longer means you settle in, learn the
              rhythm of a place, and stop watching the clock.
            </p>
            <p className="text-cream/70 leading-relaxed">
              I only work with camps that meet my own high bar — refined but never
              showy, warm, and quietly excellent. And every journey here is just a
              starting point. Tell me your pace, your budget, and what you're
              dreaming of, and I'll build something that's truly yours.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-cream/60 mb-6">
              Not sure which fits? Just tell me what you're imagining.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-bold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              Talk It Through With Me
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
