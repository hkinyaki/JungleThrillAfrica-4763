import { Link, useParams } from "wouter";
import { ArrowRight, ArrowLeft, Star, Calendar, Heart } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import WhatsAppButton from "../../components/whatsapp-button";
import Seo from "../../components/seo";
import { canonicalFor } from "../../lib/seo-config";
import { getDestination } from "../../data/destinations";
import { getJourney } from "../../data/journeys";

export default function DestinationDetailPage() {
  const params = useParams();
  const dest = getDestination(params.slug || "");

  if (!dest) {
    return (
      <div className="min-h-screen bg-dark">
        <Navbar />
        <div className="pt-40 pb-32 text-center px-6">
          <h1 className="font-display text-3xl text-cream mb-4">
            Destination not found
          </h1>
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-gold text-sm tracking-[0.1em] uppercase"
          >
            <ArrowLeft size={14} /> Back to all destinations
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = dest.relatedJourneys
    .map((slug) => getJourney(slug))
    .filter((j): j is NonNullable<typeof j> => Boolean(j));

  const destJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: dest.name,
    description: dest.intro,
    url: canonicalFor(`/destinations/${dest.slug}`),
    image: `https://junglethrill.africa${dest.heroImage}`,
    touristType: "Safari travellers",
    isAccessibleForFree: false,
    address: { "@type": "PostalAddress", addressCountry: "TZ" },
  };

  const faqJsonLd =
    dest.faqs && dest.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: dest.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const jsonLd = faqJsonLd ? [destJsonLd, faqJsonLd] : destJsonLd;

  return (
    <div className="min-h-screen bg-dark">
      <Seo
        title={`${dest.shortName} Safari — ${dest.tagline}`}
        description={`${dest.intro.slice(0, 155)}`}
        path={`/destinations/${dest.slug}`}
        image={dest.heroImage}
        type="article"
        jsonLd={jsonLd}
      />
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={dest.heroImage}
            alt={dest.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/30" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-cream/70 hover:text-gold text-xs tracking-[0.15em] uppercase mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> All Destinations
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-3">
            {dest.name}
          </h1>
          <p className="text-gold text-lg tracking-wide italic">
            {dest.tagline}
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="gold-line mb-8" />
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed font-light">
            {dest.intro}
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Why You'll Love It
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-10">
            Highlights
          </h2>
          <ul className="space-y-4">
            {dest.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-4">
                <Star
                  size={18}
                  className="text-gold mt-1 flex-shrink-0"
                  fill="currentColor"
                />
                <span className="text-cream/75 text-lg leading-relaxed">
                  {h}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BEST TIME */}
      <section className="py-16 md:py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <Calendar size={18} className="text-gold" />
            <p className="text-gold text-xs tracking-[0.2em] uppercase">
              When to Go
            </p>
          </div>
          <p className="text-cream/75 text-lg leading-relaxed">
            {dest.bestTime}
          </p>
        </div>
      </section>

      {/* DEEP DIVE */}
      {dest.deepDive && dest.deepDive.length > 0 && (
        <section className="py-16 md:py-20 bg-dark border-t border-gold/10">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-14">
            {dest.deepDive.map((section, i) => (
              <div key={i}>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-cream mb-6 leading-tight">
                  {section.heading}
                </h2>
                <div className="space-y-5">
                  {section.body.map((para, j) => (
                    <p
                      key={j}
                      className="text-cream/75 text-lg leading-relaxed font-light"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {dest.faqs && dest.faqs.length > 0 && (
        <section className="py-16 md:py-20 bg-surface">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
              Good to Know
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-10">
              {dest.shortName} Safari FAQs
            </h2>
            <div className="space-y-8">
              {dest.faqs.map((f, i) => (
                <div
                  key={i}
                  className="border-b border-gold/10 pb-8 last:border-0"
                >
                  <h3 className="font-display text-xl text-cream mb-3 leading-snug">
                    {f.q}
                  </h3>
                  <p className="text-cream/70 text-lg leading-relaxed font-light">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* HUGO'S TAKE */}
      <section className="py-16 md:py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-surface border border-gold/15 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-5">
              <Heart size={18} className="text-gold" />
              <p className="text-gold text-xs tracking-[0.2em] uppercase">
                Hugo's Take
              </p>
            </div>
            <p className="text-cream/80 text-lg leading-relaxed font-light italic">
              "{dest.hugoTake}"
            </p>
          </div>
        </div>
      </section>

      {/* RELATED JOURNEYS */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-dark">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 text-center">
              Where It Fits
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-12 text-center">
              Journeys That Visit Here
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((journey) => (
                <Link
                  key={journey.slug}
                  to={`/journeys/${journey.slug}`}
                  className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
                >
                  <img
                    src={journey.heroImage}
                    alt={journey.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-gold/90 text-[10px] tracking-[0.2em] uppercase mb-1.5">
                      {journey.subtitle}
                    </p>
                    <h3 className="font-display text-lg font-bold text-white leading-tight">
                      {journey.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6">
            Want to Go? <span className="italic text-gold">Let's Talk.</span>
          </h2>
          <p className="text-cream/60 text-lg mb-10 max-w-xl mx-auto">
            Message me about {dest.shortName} and I'll tell you everything you
            need to know — and how to weave it into your perfect trip.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-bold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300"
          >
            Ask Me About {dest.shortName}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
