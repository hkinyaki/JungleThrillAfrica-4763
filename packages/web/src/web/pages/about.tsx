import { Link } from "wouter";
import { ArrowRight, Award, MapPin, Users, Clock, CheckCircle } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp-button";
import Seo from "../components/seo";
import { SITE_ORIGIN, SITE_NAME } from "../lib/seo-config";

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hugo",
  jobTitle: "Safari Planner & Camp Manager",
  worksFor: { "@type": "TravelAgency", name: SITE_NAME, url: SITE_ORIGIN },
  description:
    "Hugo is a Tanzania-based camp manager with over 10 years in the bush who personally plans every Jungle Thrill Africa safari.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark">
      <Seo
        title="About Hugo — Your Safari Insider in Tanzania"
        description="Meet Hugo: a Tanzania camp manager with 10+ years in the bush who personally plans every Jungle Thrill Africa safari. Real local knowledge, no call-centre, no middlemen."
        path="/about"
        jsonLd={aboutJsonLd}
      />
      <Navbar />
      <WhatsAppButton />

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <img
            src="/images/safari-jeep.jpg"
            alt="Safari landscape"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/80 to-dark" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">
            About Me
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight mb-6">
            I Live and Breathe
            <br />
            <span className="italic text-gold/90">This Wilderness</span>
          </h1>
          <div className="gold-line mx-auto" />
        </div>
      </section>

      {/* ===== MY STORY ===== */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-6 text-cream/75 text-lg leading-relaxed">
            <p>
              My name is Hugo. I'm a safari camp manager based in Tanzania, and
              I've been working in East African hospitality for over a decade.
            </p>
            <p>
              I've spent years managing luxury safari camps — training staff,
              hosting guests, and learning every detail of what makes a safari
              experience truly special. I know the rhythm of the bush. I know
              what the Serengeti looks like in January versus July. I know which
              corners of Ruaha most people never hear about. I know what it
              feels like to sit around a campfire at night and realize the whole
              world is quiet except for the sounds of Africa.
            </p>
            <p>
              That knowledge and love for this place is why I created Jungle
              Thrill Africa.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY I DO THIS ===== */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
                Why I Do This
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream leading-tight mb-8">
                Because the Best Trips
                <br />
                <span className="italic text-cream/70">
                  Come From Connection
                </span>
              </h2>
              <div className="space-y-5 text-cream/70 leading-relaxed">
                <p>
                  I've met travellers from everywhere — families, couples, solo
                  adventurers, photographers, honeymoon dreamers. And what I've
                  learned is that the ones who leave with the biggest smiles
                  aren't necessarily the ones who stayed at the most expensive
                  camp. They're the ones who felt <strong className="text-cream">connected</strong>. Connected to the
                  land, to the people, to something bigger than their daily life.
                </p>
                <p>
                  That's what I want for you.
                </p>
                <p>
                  When you plan with me, you're not filling out a form on a
                  website and waiting for a generic response. You're talking to
                  one person — me — who will personally design your trip, answer
                  your questions honestly, and make sure you feel taken care of
                  from the first message to the last day of your safari.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/about-sundowner.jpeg"
                  alt="Sundowner over the plains at golden hour"
                  className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
                />
              </div>
              <p className="mt-3 text-cream/40 text-xs tracking-[0.15em] uppercase">
                Sundowners on the plains — this is why I do this
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT MAKES THIS DIFFERENT ===== */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              What Makes This Different
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream">
              On the Ground. <span className="italic text-cream/70">In the Know.</span>
            </h2>
          </div>

          <div className="space-y-5 text-cream/70 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              I'm here. In Tanzania. On the ground. When I recommend a camp,
              it's because I know it — not from a website, but from experience.
              When I design a route, it's based on years of understanding how
              these parks connect, what the roads are like, and where the magic
              happens.
            </p>
            <p>
              And I care. Genuinely. Because every time a guest messages me
              after their trip to say <em className="text-gold">"Hugo, that was the
              best experience of my life"</em> — that's why I do this.
            </p>
            <p>
              I'm not trying to be the biggest company. I'm building something
              based on trust, personal attention, and a deep love for this place
              I call home.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CREDENTIALS ===== */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <CredentialBadge
              icon={<Clock size={24} />}
              label="10+ Years"
              sublabel="Safari & Hospitality"
            />
            <CredentialBadge
              icon={<Award size={24} />}
              label="Camp Manager"
              sublabel="Currently Active"
            />
            <CredentialBadge
              icon={<MapPin size={24} />}
              label="Based in"
              sublabel="Tanzania"
            />
            <CredentialBadge
              icon={<Users size={24} />}
              label="Trained Teams"
              sublabel="Multiple Properties"
            />
            <CredentialBadge
              icon={<CheckCircle size={24} />}
              label="TATO"
              sublabel="In Process"
            />
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="py-24 md:py-32 bg-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/serengeti.webp"
            alt="Serengeti"
            className="w-full h-full object-cover opacity-15"
              loading="lazy"
              decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/60" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-8">
            What I Believe
          </p>
          <div className="space-y-5 text-cream/80 text-lg leading-relaxed italic font-display">
            <p>
              Ask yourself: what do you really want to feel when you come to
              Africa?
            </p>
            <p>
              For me, the answer has always been simple. It's the silence before
              sunrise when the bush is just waking up. A lion calling somewhere
              in the darkness while you sit by a fire. Laughing with people you
              met that morning as if you've known each other for years.
            </p>
            <p>
              Coming to this side of the world is about feeling alive —
              reconnecting to nature, to culture, to something your everyday
              life might not offer. It's about being welcomed with open hearts
              by people who are proud to share their home with you.
            </p>
            <p className="text-gold">
              That's the experience I design for. Not a checklist. A feeling.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream mb-6">
            Let's Plan <span className="italic text-gold">Together</span>
          </h2>
          <p className="text-cream/60 text-lg mb-10 max-w-xl mx-auto">
            I'd love to hear about your dream trip. Send me a message — I
            personally reply to every one.
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
              className="px-8 py-4 border border-cream/30 text-cream text-sm tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300 text-center"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CredentialBadge({
  icon,
  label,
  sublabel,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
}) {
  return (
    <div className="text-center p-6 border border-white/5 hover:border-gold/20 transition-colors duration-300">
      <div className="text-gold mb-3 flex justify-center">{icon}</div>
      <p className="text-cream font-display text-sm font-semibold">{label}</p>
      <p className="text-cream/40 text-xs mt-1">{sublabel}</p>
    </div>
  );
}
