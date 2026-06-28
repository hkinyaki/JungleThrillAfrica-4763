import { Link, useParams } from "wouter";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  MapPin,
  Check,
  X,
  Heart,
} from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import WhatsAppButton from "../../components/whatsapp-button";
import Seo from "../../components/seo";
import { canonicalFor, SITE_NAME } from "../../lib/seo-config";
import { getJourney } from "../../data/journeys";

export default function JourneyDetailPage() {
  const params = useParams();
  const journey = getJourney(params.slug || "");

  if (!journey) {
    return (
      <div className="min-h-screen bg-dark">
        <Navbar />
        <div className="pt-40 pb-32 text-center px-6">
          <h1 className="font-display text-3xl text-cream mb-4">
            Journey not found
          </h1>
          <Link
            to="/journeys"
            className="inline-flex items-center gap-2 text-gold text-sm tracking-[0.1em] uppercase"
          >
            <ArrowLeft size={14} /> Back to all journeys
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const contactLink = `/contact?journey=${journey.slug}`;

  const metaDescription = `${journey.subtitle} — ${journey.days}-day tailor-made Tanzania safari (${journey.parks.join(", ")}). ${journey.tagline} From ${journey.priceRange}.`;

  const journeyJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${journey.title} — ${journey.subtitle}`,
    description: journey.intro,
    url: canonicalFor(`/journeys/${journey.slug}`),
    image: `https://junglethrill.africa${journey.heroImage}`,
    touristType: journey.subtitle,
    itinerary: {
      "@type": "ItemList",
      itemListElement: journey.itinerary.map((stop, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "TouristAttraction", name: stop.title },
      })),
    },
    provider: { "@type": "TravelAgency", name: SITE_NAME, url: "https://junglethrill.africa" },
  };

  return (
    <div className="min-h-screen bg-dark">
      <Seo
        title={`${journey.title} — ${journey.days}-Day Tanzania Safari`}
        description={metaDescription}
        path={`/journeys/${journey.slug}`}
        image={journey.heroImage}
        type="article"
        jsonLd={journeyJsonLd}
      />
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={journey.heroImage}
            alt={journey.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/30" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <Link
            to="/journeys"
            className="inline-flex items-center gap-2 text-cream/70 hover:text-gold text-xs tracking-[0.15em] uppercase mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> All Journeys
          </Link>
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-3">
            {journey.subtitle}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-5">
            {journey.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-cream/70 text-sm">
            <span className="inline-flex items-center gap-2">
              <Clock size={15} className="text-gold" />
              {journey.days} Days
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-gold" />
              {journey.parks.join(" · ")}
            </span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="gold-line mb-8" />
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed font-light">
            {journey.intro}
          </p>
        </div>
      </section>

      {/* ITINERARY TIMELINE */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 text-center">
            Day by Day
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-14 text-center">
            The Journey
          </h2>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gold/25" />
            <div className="space-y-12">
              {journey.itinerary.map((stop, i) => (
                <div key={i} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-gold ring-4 ring-surface" />
                  <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
                    {stop.days}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-cream mb-3">
                    {stop.title}
                  </h3>
                  <p className="text-cream/65 leading-relaxed">
                    {stop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 md:py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Investment
          </p>
          <p className="font-display text-3xl md:text-4xl font-bold text-cream mb-5">
            {journey.priceRange}
          </p>
          <p className="text-cream/60 max-w-xl mx-auto leading-relaxed">
            Every journey is custom. These ranges are starting guides — tell me
            your budget and style, and I'll build something that fits you
            perfectly.
          </p>
        </div>
      </section>

      {/* INCLUDED / NOT INCLUDED */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-cream mb-6">
              What's Included
            </h3>
            <ul className="space-y-3">
              {journey.included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="text-gold mt-0.5 flex-shrink-0"
                  />
                  <span className="text-cream/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-cream mb-6">
              Not Included
            </h3>
            <ul className="space-y-3">
              {journey.notIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X
                    size={18}
                    className="text-cream/30 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-cream/50 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HUGO'S NOTE */}
      <section className="py-16 md:py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-surface border border-gold/15 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-5">
              <Heart size={18} className="text-gold" />
              <p className="text-gold text-xs tracking-[0.2em] uppercase">
                A Note From Hugo
              </p>
            </div>
            <p className="text-cream/80 text-lg leading-relaxed font-light italic">
              "{journey.hugoNote}"
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6">
            Let's Make It <span className="italic text-gold">Yours</span>
          </h2>
          <p className="text-cream/60 text-lg mb-10 max-w-xl mx-auto">
            Message me directly and we'll shape this journey around exactly what
            you're dreaming of.
          </p>
          <Link
            href={contactLink}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-bold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300"
          >
            Plan This Journey
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
