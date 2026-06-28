import { Link } from "wouter";
import { ArrowRight, Compass, Users, Camera, ChevronDown, Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp-button";
import Seo from "../components/seo";
import { SITE_ORIGIN, SITE_NAME } from "../lib/seo-config";
import { journeys } from "../data/journeys";

const travelAgencyJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE_NAME,
  url: SITE_ORIGIN,
  image: `${SITE_ORIGIN}/og-image.jpg`,
  logo: `${SITE_ORIGIN}/favicon-512.png`,
  description:
    "Tailor-made Tanzania safaris planned personally by Hugo, a camp manager with 10+ years in the bush. Honeymoon, family, photographic and luxury safaris across the Serengeti, Ngorongoro, Ruaha and Zanzibar.",
  areaServed: "Tanzania",
  knowsAbout: [
    "Tanzania safari",
    "Serengeti",
    "Ngorongoro Crater",
    "Great Migration",
    "Zanzibar",
    "Photographic safari",
    "Honeymoon safari",
  ],
  sameAs: [
    "https://www.instagram.com/junglethrillafrica",
    "https://www.facebook.com/junglethrillafrica",
  ],
};

const faqs = [
  {
    q: "When is the best time to go on a Tanzania safari?",
    a: "Tanzania is a year-round destination. The dry season (June to October) offers the easiest game viewing and is ideal for the Serengeti and Ngorongoro. For the dramatic Mara River crossings of the Great Migration, aim for July to September. The green season (November to March) brings lush landscapes, newborn animals, fewer crowds and lower prices — and it's the time of the calving in the southern Serengeti.",
  },
  {
    q: "How much does a Tanzania safari cost?",
    a: "Our tailor-made safaris typically range from around $11,000 to $26,000 per person, with longer grand journeys reaching higher — it depends on the length of your trip, the season, and the style of camps and lodges you choose. Because every journey is built around you, I'll give you a clear, honest quote with no hidden costs once I understand what you're dreaming of.",
  },
  {
    q: "Is a Tanzania safari safe?",
    a: "Yes. Tanzania is one of Africa's most stable and welcoming safari destinations. You'll always be with experienced, licensed guides in a private 4x4 vehicle, staying in carefully vetted camps and lodges. I plan every detail personally and stay in contact throughout your trip.",
  },
  {
    q: "How many days do I need for a safari?",
    a: "I'd suggest a minimum of five to seven days to truly experience Tanzania's northern circuit. Ten to fourteen days lets you combine multiple parks at a relaxed pace, or add a beach finish on Zanzibar. I'll help you choose the right length for your time and budget.",
  },
  {
    q: "Can you arrange a honeymoon, family or photographic safari?",
    a: "Absolutely — that's exactly what I do. Every journey is built from scratch around who you are and what you love, whether that's a romantic honeymoon, a family adventure with children, a dedicated photographic trip, or a quiet luxury escape.",
  },
  {
    q: "Do I need a visa and vaccinations for Tanzania?",
    a: "Most visitors need a tourist visa, which can be arranged online before you travel or on arrival. A yellow fever certificate is required if you're arriving from a country with risk of transmission. I'll send you a clear pre-departure guide covering visas, health and packing once we start planning together.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark">
      <Seo
        title="Jungle Thrill Africa — Your Personal Safari Insider"
        description="Tailor-made Tanzania safaris planned personally by Hugo — a camp manager with 10+ years in the bush. Honeymoon, family, photographic and luxury safaris across the Serengeti, Ngorongoro, Ruaha and Zanzibar."
        path="/"
        jsonLd={[travelAgencyJsonLd, faqJsonLd]}
      />
      <Navbar />
      <WhatsAppButton />

      {/* ===== HERO ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-sunset.webp"
            alt="Serengeti sunset over the Tanzania plains"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p
            className="text-gold-light text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
          >
            Your Personal Safari Insider
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-4 animate-fade-in-up-delay-1">
            I Live Here.
            <br />
            <span
              className="italic text-gold/90"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
            >
              Let Me Show You
            </span>
            <br />
            My Africa.
          </h1>
          <p className="text-cream/70 text-base sm:text-lg max-w-2xl mx-auto mt-6 mb-10 leading-relaxed animate-fade-in-up-delay-2">
            I'm Hugo — a safari camp manager with over a decade of experience in
            Tanzania's wilderness. When you plan with me, you're planning with
            someone who's here, who cares, and who'll make every day of your trip
            extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gold text-dark font-bold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Planning
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border border-cream/30 text-cream text-sm tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300 text-center"
            >
              My Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-cream/40 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <ChevronDown size={16} className="text-cream/40" />
        </div>
      </section>

      {/* ===== THREE PILLARS ===== */}
      <section className="py-24 md:py-32 bg-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <PillarCard
              icon={<Compass size={28} />}
              title="Tailor-Made"
              description="No templates, no crowds. Every itinerary is designed from scratch around your interests, pace, and dreams."
            />
            <PillarCard
              icon={<Users size={28} />}
              title="Personal"
              description="Deep local knowledge from years spent managing safari camps in Tanzania's finest wilderness areas. I know it from the inside."
            />
            <PillarCard
              icon={<Camera size={28} />}
              title="Photography-Ready"
              description="Professional camera gear rental so you capture Africa in stunning detail — without the baggage."
            />
          </div>
        </div>
      </section>

      {/* ===== HUGO INTRO ===== */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/hugo-portrait.webp"
                  alt="Hugo, your safari planner, at sunset on the Tanzanian plains"
                  className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gold text-dark px-6 py-3">
                <p className="text-xs tracking-[0.2em] uppercase font-bold">
                  10+ Years
                </p>
                <p className="text-xs opacity-80">In the Bush</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
                The Person Behind Your Safari
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream leading-tight mb-6">
                I'm Hugo.
                <br />
                <span className="italic text-cream/70">Nice to Meet You.</span>
              </h2>
              <div className="space-y-4 text-cream/70 leading-relaxed">
                <p>
                  I've spent over 10 years in the heart of Tanzania's safari
                  industry, working as a camp manager in some of East Africa's
                  most beautiful wilderness areas. I've trained hospitality
                  teams, hosted guests from every corner of the world, and woken
                  up to the sound of lions more times than I can count.
                </p>
                <p>
                  I started Jungle Thrill Africa because I wanted to offer
                  something personal. When you message me, you're talking to
                  someone who actually lives on the same ground as the wildlife
                  you're coming to see.
                </p>
                <p>
                  For me, this work is personal. Coming to Africa is about more
                  than a holiday — it's about feeling alive, connecting to
                  nature, and being welcomed by people who are genuinely happy
                  you're here.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-gold text-sm tracking-[0.1em] uppercase hover:gap-3 transition-all duration-300"
              >
                Read My Full Story
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 md:py-32 bg-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              How It Works
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
              Simple. Personal. <span className="italic text-cream/70">Yours.</span>
            </h2>
          </div>

          <div className="space-y-12">
            <StepCard
              number="01"
              title="Tell Me About Your Dream Trip"
              description="Send me an enquiry or an email — whatever feels natural. Tell me when you're thinking of coming, who's traveling with you, and what excites you most about Africa. I'll take it from there."
            />
            <StepCard
              number="02"
              title="I'll Design Something Personal For You"
              description="Based on our conversation, I'll put together an itinerary that's built around what you want to feel and experience — not a template. I'll walk you through every choice and make sure it makes sense for your dates, your pace, and your style."
            />
            <StepCard
              number="03"
              title="We Refine It Together"
              description="You'll receive a detailed plan. Ask me anything — I'm happy to explain why I've suggested each camp, each route, each experience. We adjust until it feels perfect. Then a deposit confirms everything."
            />
            <StepCard
              number="04"
              title="You Arrive. I'm Here For You."
              description="Once you're in Tanzania, I'm only a message away. If you need anything adjusted, I'll handle it. You focus on soaking in every moment."
            />
          </div>
        </div>
      </section>

      {/* ===== WHY PLAN WITH ME ===== */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Why Plan With Me
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
              What You <span className="italic text-cream/70">Get</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ReasonCard
              icon={<Phone size={20} />}
              title="I'm personally involved in every trip"
              description="When you message Jungle Thrill Africa, you're talking to me — Hugo. Not a sales team, not a chatbot. I design your itinerary, I answer your questions, and I'm available throughout your trip."
            />
            <ReasonCard
              icon={<MapPin size={20} />}
              title="I know this land from the inside"
              description="I've spent over a decade working in Tanzania's wilderness — managing camps, training teams, and hosting guests. When I suggest a camp or a route, it comes from real experience on the ground."
            />
            <ReasonCard
              icon={<Shield size={20} />}
              title="Your trip is designed around you"
              description="I don't work from templates. I listen to what you want to feel and experience, then I build something that fits you — your pace, your interests, your travel style."
            />
            <ReasonCard
              icon={<Clock size={20} />}
              title="I'm here when you arrive"
              description="Tanzania is my home. While you're here, I'm a message away. If anything needs adjusting or you just want a recommendation, I'm on it."
            />
          </div>
        </div>
      </section>

      {/* ===== PROMISE SECTION (replaces fake testimonials) ===== */}
      <section className="py-24 md:py-32 bg-dark relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/serengeti.webp"
            alt="Serengeti landscape"
            className="w-full h-full object-cover opacity-20"
              loading="lazy"
              decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-8">
            A Promise, Not a Pitch
          </p>
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl italic text-cream/90 leading-relaxed mb-8">
            "What matters is coming to meet a new friend for an adventure who
            will treat you as if you've known each other for years — forgetting
            that you are both strangers to each other."
          </blockquote>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-gold font-display text-lg">— Hugo</p>
          <p className="text-cream/40 text-sm mt-1">Your safari host in Tanzania</p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-12 px-8 py-4 bg-gold text-dark font-bold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300"
          >
            Let's Start a Conversation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ===== DESTINATIONS PREVIEW ===== */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Where I'll Take You
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
              Tanzania's <span className="italic text-cream/70">Finest</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DestinationCard
              slug="serengeti"
              image="/images/serengeti.webp"
              name="Serengeti"
              tagline="Endless plains, endless wonder"
            />
            <DestinationCard
              slug="ngorongoro"
              image="/images/ngorongoro.webp"
              name="Ngorongoro"
              tagline="The world's largest caldera"
            />
            <DestinationCard
              slug="tarangire"
              image="/images/tarangire.webp"
              name="Tarangire"
              tagline="Baobabs, elephants, solitude"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-gold text-sm tracking-[0.1em] uppercase hover:gap-3 transition-all duration-300"
            >
              Explore all destinations
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== JOURNEYS TEASER ===== */}
      <section className="py-24 md:py-32 bg-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Journeys, Not Packages
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
              Find the One That's{" "}
              <span className="italic text-cream/70">Yours</span>
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto mt-6 leading-relaxed">
              Honeymoons, family adventures, solo escapes, quiet resets — every
              journey is a starting point I'll shape entirely around you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeys.slice(0, 4).map((journey) => (
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

          <div className="text-center mt-12">
            <Link
              to="/journeys"
              className="inline-flex items-center gap-2 text-gold text-sm tracking-[0.1em] uppercase hover:gap-3 transition-all duration-300"
            >
              See all twelve journeys
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      {/* ===== FAQ ===== */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Good to Know
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
              Tanzania Safari <span className="italic text-cream/70">Questions</span>
            </h2>
          </div>

          <div className="divide-y divide-cream/10 border-t border-b border-cream/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-display text-lg sm:text-xl text-cream pr-6">
                    {f.q}
                  </h3>
                  <span className="text-gold text-2xl leading-none transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-cream/60 leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6">
            Ready to <span className="italic text-gold">Start?</span>
          </h2>
          <p className="text-cream/60 text-lg mb-10 max-w-xl mx-auto">
            Just tell me a little about your dream safari and let's talk. I
            reply personally — usually within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gold text-dark font-bold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2"
            >
              Plan Your Safari
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:enquiries@junglethrill.africa"
              className="px-8 py-4 border border-cream/30 text-cream text-sm tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              Email Me
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ===== Sub-components ===== */

function PillarCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center group">
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-cream mb-3">
        {title}
      </h3>
      <p className="text-cream/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-6 md:gap-10 group">
      <div className="flex-shrink-0">
        <span className="font-display text-4xl md:text-5xl font-bold text-gold/30 group-hover:text-gold/60 transition-colors duration-300">
          {number}
        </span>
      </div>
      <div className="pt-2">
        <h3 className="font-display text-xl md:text-2xl font-semibold text-cream mb-3">
          {title}
        </h3>
        <p className="text-cream/60 leading-relaxed max-w-xl">{description}</p>
      </div>
    </div>
  );
}

function ReasonCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 bg-surface-light/50 border border-white/5 hover:border-gold/20 transition-all duration-300 group">
      <div className="text-gold mb-4">{icon}</div>
      <h3 className="font-display text-lg font-semibold text-cream mb-3">
        {title}
      </h3>
      <p className="text-cream/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function DestinationCard({
  slug,
  image,
  name,
  tagline,
}: {
  slug: string;
  image: string;
  name: string;
  tagline: string;
}) {
  return (
    <Link
      to={`/destinations/${slug}`}
      className="group relative aspect-[3/4] overflow-hidden cursor-pointer block"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-display text-2xl font-bold text-white mb-1">
          {name}
        </h3>
        <p className="text-cream/60 text-sm">{tagline}</p>
      </div>
    </Link>
  );
}
