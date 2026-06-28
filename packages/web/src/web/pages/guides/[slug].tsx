import { Link, useParams } from "wouter";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import WhatsAppButton from "../../components/whatsapp-button";
import Seo from "../../components/seo";
import { canonicalFor, SITE_NAME, absoluteUrl } from "../../lib/seo-config";
import { getGuide } from "../../data/guides";
import { getJourney } from "../../data/journeys";
import { getDestination } from "../../data/destinations";

export default function GuideDetailPage() {
  const params = useParams();
  const guide = getGuide(params.slug || "");

  if (!guide) {
    return (
      <div className="min-h-screen bg-dark">
        <Navbar />
        <div className="pt-40 pb-32 text-center px-6">
          <h1 className="font-display text-3xl text-cream mb-4">
            Guide not found
          </h1>
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 text-gold text-sm tracking-[0.1em] uppercase"
          >
            <ArrowLeft size={14} /> Back to all guides
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const url = canonicalFor(`/guides/${guide.slug}`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    image: absoluteUrl(guide.heroImage),
    url,
    datePublished: guide.updated,
    dateModified: guide.updated,
    author: { "@type": "Person", name: "Hugo" },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: absoluteUrl("/favicon-512.png") },
    },
    mainEntityOfPage: url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonicalFor("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: canonicalFor("/guides"),
      },
      { "@type": "ListItem", position: 3, name: guide.title, item: url },
    ],
  };

  const relatedJourneys = guide.relatedJourneys
    .map((s) => getJourney(s))
    .filter(Boolean);
  const relatedDestinations = guide.relatedDestinations
    .map((s) => getDestination(s))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-dark">
      <Seo
        title={guide.metaTitle}
        description={guide.metaDescription}
        path={`/guides/${guide.slug}`}
        image={guide.heroImage}
        type="article"
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={guide.heroImage}
            alt={guide.title}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/85 to-dark" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 text-gold/80 text-xs tracking-[0.15em] uppercase mb-8 hover:text-gold transition-colors"
          >
            <ArrowLeft size={14} /> All Guides
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            {guide.title}
          </h1>
          <div className="flex items-center gap-2 text-cream/50 text-xs tracking-[0.1em] uppercase">
            <Clock size={13} />
            {guide.readTime}
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="pb-20 bg-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-cream/80 text-lg sm:text-xl leading-relaxed mb-12 font-display italic">
            {guide.intro}
          </p>

          {guide.sections.map((section) => (
            <div key={section.heading} className="mb-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-cream mb-4">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-cream/70 leading-relaxed mb-4 text-base sm:text-lg"
                >
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-cream/70 leading-relaxed"
                    >
                      <span className="text-gold mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </article>

      {/* RELATED */}
      {(relatedJourneys.length > 0 || relatedDestinations.length > 0) && (
        <section className="py-16 md:py-20 bg-surface">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            {relatedJourneys.length > 0 && (
              <div className="mb-14">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-6">
                  Journeys You Might Love
                </p>
                <div className="grid sm:grid-cols-3 gap-5">
                  {relatedJourneys.map(
                    (j) =>
                      j && (
                        <Link
                          key={j.slug}
                          to={`/journeys/${j.slug}`}
                          className="group relative aspect-[3/4] overflow-hidden"
                        >
                          <img
                            src={j.heroImage}
                            alt={j.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <p className="text-gold/90 text-xs tracking-[0.15em] uppercase mb-1">
                              {j.subtitle}
                            </p>
                            <h3 className="font-display text-lg font-bold text-white leading-tight">
                              {j.title}
                            </h3>
                          </div>
                        </Link>
                      )
                  )}
                </div>
              </div>
            )}

            {relatedDestinations.length > 0 && (
              <div>
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-6">
                  Where You'll Go
                </p>
                <div className="flex flex-wrap gap-3">
                  {relatedDestinations.map(
                    (d) =>
                      d && (
                        <Link
                          key={d.slug}
                          to={`/destinations/${d.slug}`}
                          className="px-5 py-3 border border-cream/20 text-cream/80 text-sm tracking-[0.05em] hover:border-gold hover:text-gold transition-colors"
                        >
                          {d.name}
                        </Link>
                      )
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-5">
            Ready to plan <span className="italic text-gold">yours?</span>
          </h2>
          <p className="text-cream/60 text-lg mb-9 max-w-xl mx-auto">
            Tell me what you're dreaming of and I'll shape a Tanzania safari
            around you — personally, and with no pressure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-bold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300"
          >
            Start a Conversation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
