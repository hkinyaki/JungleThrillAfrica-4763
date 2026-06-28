import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import WhatsAppButton from "../../components/whatsapp-button";
import Seo from "../../components/seo";
import { canonicalFor } from "../../lib/seo-config";
import { destinations } from "../../data/destinations";

const destinationsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tanzania Safari Destinations",
  itemListElement: destinations.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: canonicalFor(`/destinations/${d.slug}`),
    name: d.name,
  })),
};

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Seo
        title="Tanzania Safari Destinations — Serengeti, Ngorongoro & More"
        description="Explore Tanzania's greatest safari destinations — the Serengeti, Ngorongoro Crater, Tarangire, Ruaha, Nyerere and the beaches of Zanzibar — with insider notes from Hugo."
        path="/destinations"
        jsonLd={destinationsJsonLd}
      />
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/serengeti.webp"
            alt="Tanzania"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/80 to-dark" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
            Where I'll Take You
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up-delay-1">
            Tanzania's <span className="italic text-gold/90">Finest</span>
          </h1>
          <p className="text-cream/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            From the endless Serengeti to the wild, remote south and the
            turquoise coast — these are the places I know best, and love most.
            Here's what makes each one worth the journey.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24 md:pb-32 bg-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <Link
                key={dest.slug}
                to={`/destinations/${dest.slug}`}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              >
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {dest.shortName}
                  </h3>
                  <p className="text-cream/60 text-sm mb-4">{dest.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-300">
                    Discover
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-cream/60 mb-6">
              Want to combine a few of these into one trip? That's exactly what I
              do.
            </p>
            <Link
              to="/journeys"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-bold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              Explore the Journeys
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
