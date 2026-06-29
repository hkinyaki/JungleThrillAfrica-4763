import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  Scale,
  Shield,
  Eye,
  MessageCircle,
  ArrowRight,
  Loader2,
  AlertCircle,
  CheckCircle2,
  X,
  Check,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp-button";
import Seo from "../components/seo";
import { api } from "../lib/api";

const reasons = [
  {
    icon: Scale,
    title: "Independent advice",
    body: "I recommend what's genuinely right for your guest, even when the answer spans more than one operator. I'm not selling my own beds, so my only loyalty is to a trip that lands well — and to you.",
  },
  {
    icon: Shield,
    title: "Your client stays yours",
    body: "I actively route the relationship straight back to you, every single time. An operator's instinct is to capture your guest for a direct rebooking next year. Mine is the exact opposite.",
  },
  {
    icon: Eye,
    title: "Honest truth before you commit",
    body: "Which camp is on form this season, which isn't, which road just washed out. I'll tell you straight — before you book, not after — because no lodge will ever warn you off itself.",
  },
  {
    icon: MessageCircle,
    title: "A person, not a booking desk",
    body: "When something shifts at an odd hour, you reach a human who's in-country and a quick message away — one who treats your traveller as his own, and answers like it matters.",
  },
];

const directCons = [
  "An operator can only ever offer its own camps",
  "Its instinct is to keep your guest for a direct rebooking",
  "It won't tell you when it simply isn't the right fit",
  "No independent voice beside your traveller on the ground",
];

const partnerPros = [
  "I weigh every option, even across different operators",
  "I send the guest — and the relationship — straight back to you",
  "I tell you the honest truth before you ever commit",
  "An independent person beside your traveller the whole way",
];

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    agency: "",
    name: "",
    email: "",
    contact: "",
    country: "",
    message: "",
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await api.enquiry.$post({
        json: {
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          agency: formData.agency,
          country: formData.country,
          message: formData.message,
          source: "partner-enquiry",
        },
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      return data;
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="min-h-screen bg-dark">
      <Seo
        title="Partner With Hugo — Your Independent Eyes on the Ground in Tanzania"
        description="For travel agents and designers: an independent, agent-loyal partner on the ground in Tanzania who advises honestly, watches over your traveller, and always routes the relationship back to you."
        path="/partners"
        image="/images/partners-hero.jpg"
        noindex
      />
      <Navbar />
      <WhatsAppButton />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[80svh] md:min-h-[88vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/partners-hero.jpg"
            alt="A safari host looking out over the Tanzanian wilderness at golden hour"
            fetchPriority="high"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/75 to-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/85 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 md:pb-24">
          <p className="mt-24 text-gold/80 text-sm tracking-[0.3em] uppercase mb-5">
            For Travel Agents &amp; Designers
          </p>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-cream leading-[1.12] sm:leading-[1.08] max-w-4xl">
            You can book a camp.
            <br className="hidden sm:block" />{" "}
            You can&rsquo;t book someone
            <br className="hidden sm:block" />{" "}
            <span className="text-gold">to be there when it matters.</span>
          </h1>
          <p className="mt-8 text-cream/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            I&rsquo;m your independent eyes on the ground in Tanzania — loyal to
            you, not to any one lodge. I help you choose right, watch over your
            traveller, and always hand the relationship back to you. Your client
            stays yours.
          </p>
          <a
            href="#partner-form"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gold text-dark font-bold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-colors group"
          >
            Start the Conversation
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </section>

      {/* ===== DIRECT VS PARTNER ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-gold/70 text-xs tracking-[0.3em] uppercase mb-3">
              The honest comparison
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream leading-tight">
              A great operator sells its own camps. I&rsquo;m free to put your
              guest first.
            </h2>
            <p className="mt-5 text-cream/55 text-base leading-relaxed">
              A good operator runs a beautiful trip — and quietly hopes your
              guest comes back to it directly next time. I&rsquo;m the one voice
              on the ground with no beds to fill, no guest to capture. My only
              job is an honest trip that lands well, and a relationship that
              stays yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Direct */}
            <div className="border border-white/10 bg-white/[0.02] p-8">
              <h3 className="font-display text-xl font-bold text-cream/80 mb-6">
                Even a great operator
              </h3>
              <ul className="space-y-4">
                {directCons.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <X
                      size={18}
                      className="text-cream/30 shrink-0 mt-0.5"
                    />
                    <span className="text-cream/50 text-sm leading-relaxed">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner */}
            <div className="border border-gold/30 bg-gold/[0.04] p-8">
              <h3 className="font-display text-xl font-bold text-gold mb-6">
                With me on the ground
              </h3>
              <ul className="space-y-4">
                {partnerPros.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <Check size={18} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-cream/75 text-sm leading-relaxed">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY AGENTS TRUST ME (4 reasons) ===== */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-gold/70 text-xs tracking-[0.3em] uppercase mb-3">
              What you&rsquo;re really getting
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream leading-tight">
              An independent voice, in-country, on your side.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-5">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-gold/30 bg-gold/5">
                  <r.icon size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-cream mb-2">
                    {r.title}
                  </h3>
                  <p className="text-cream/55 text-sm leading-relaxed">
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK (flexible) ===== */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold/70 text-xs tracking-[0.3em] uppercase mb-3">
            How we can work together
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream leading-tight mb-6">
            Built around how you already work.
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed mb-5">
            Some agents want me hands-on across the whole trip. Others book
            exactly how they like and simply want trusted, independent eyes on
            their guest while they&rsquo;re on the ground. Both work beautifully.
            We agree what fits you, openly, before anything begins.
          </p>
          <p className="text-cream/60 text-lg leading-relaxed">
            Whatever the shape, two things never change:{" "}
            <strong className="text-cream">your client stays yours</strong>,
            and the arrangement is a simple, transparent share we settle up
            front. No surprises, no poaching, no stepping between you and your
            traveller.
          </p>
        </div>
      </section>

      {/* ===== HUGO'S WORD ===== */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full overflow-hidden border border-gold/30">
            <img
              src="/images/hugo-portrait.webp"
              alt="Hugo, your independent ground partner in Tanzania"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="font-display text-2xl md:text-3xl text-cream leading-relaxed italic">
            &ldquo;I&rsquo;ve spent years on this side of the safari — inside the
            camps, on the tracks, with the people who make it all happen. Trust
            me with your traveller and I&rsquo;ll treat them as my own, tell you
            the honest truth, and hand the relationship right back to you —
            never the lodge&rsquo;s, always yours. That&rsquo;s how good
            partnerships last.&rdquo;
          </p>
          <p className="mt-8 text-gold text-sm tracking-[0.2em] uppercase">
            Hugo
          </p>
          <p className="mt-1 text-cream/40 text-xs">
            Independent ground partner — Tanzania. Loyal to you, not the lodge.
          </p>
        </div>
      </section>

      {/* ===== PARTNER FORM ===== */}
      <section
        id="partner-form"
        className="py-20 md:py-28 border-t border-white/5"
      >
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
              Let&rsquo;s build something together.
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed">
              Tell me a little about you and how you work. I&rsquo;ll reply
              personally — agent to agent.
            </p>
          </div>

          {mutation.isSuccess ? (
            <div className="p-10 border border-gold/30 bg-gold/5 text-center">
              <CheckCircle2 size={32} className="text-gold mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-cream mb-2">
                Thank you — I&rsquo;ll be in touch.
              </h3>
              <p className="text-cream/55">
                I&rsquo;ve sent you a note with my direct WhatsApp and email.
                Looking forward to working together.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={formData.agency}
                  onChange={(e) =>
                    setFormData({ ...formData, agency: e.target.value })
                  }
                  className="bg-dark border border-white/10 px-5 py-4 text-cream placeholder-cream/25 focus:border-gold focus:outline-none transition-colors text-sm"
                  aria-label="Agency or company name"
                  placeholder="Agency / company name"
                />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-dark border border-white/10 px-5 py-4 text-cream placeholder-cream/25 focus:border-gold focus:outline-none transition-colors text-sm"
                  aria-label="Your name"
                  placeholder="Your name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-dark border border-white/10 px-5 py-4 text-cream placeholder-cream/25 focus:border-gold focus:outline-none transition-colors text-sm"
                  aria-label="Email address"
                  placeholder="Email"
                />
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  className="bg-dark border border-white/10 px-5 py-4 text-cream placeholder-cream/25 focus:border-gold focus:outline-none transition-colors text-sm"
                  aria-label="WhatsApp or phone (optional)"
                  placeholder="WhatsApp / phone (optional)"
                />
              </div>
              <input
                type="text"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="w-full bg-dark border border-white/10 px-5 py-4 text-cream placeholder-cream/25 focus:border-gold focus:outline-none transition-colors text-sm"
                aria-label="Where you are based or which market (optional)"
                placeholder="Where are you based / which market? (optional)"
              />
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-dark border border-white/10 px-5 py-4 text-cream placeholder-cream/25 focus:border-gold focus:outline-none transition-colors text-sm resize-none"
                aria-label="Tell me how you work and what you're looking for"
                placeholder="Tell me how you work and what you're looking for in a Tanzania partner (optional)"
              />
              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full px-7 py-4 bg-gold text-dark font-bold text-sm tracking-[0.1em] uppercase hover:bg-gold-light transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {mutation.isPending ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  "Send to Hugo"
                )}
              </button>

              {mutation.isError && (
                <div className="flex items-center justify-center gap-2 text-red-300 text-sm pt-2">
                  <AlertCircle size={16} />
                  <span>{(mutation.error as Error)?.message}</span>
                </div>
              )}
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
