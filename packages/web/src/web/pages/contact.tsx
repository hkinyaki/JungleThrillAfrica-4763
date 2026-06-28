import { useState } from "react";
import { useSearch } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { Mail, MapPin, ArrowRight, Send, Loader2, AlertCircle } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp-button";
import Seo from "../components/seo";
import { api } from "../lib/api";
import { getJourney } from "../data/journeys";

export default function ContactPage() {
  const search = useSearch();
  const journeySlug = new URLSearchParams(search).get("journey") ?? "";
  const journey = journeySlug ? getJourney(journeySlug) : undefined;
  const journeySummary = journey
    ? `${journey.subtitle} · ${journey.days} days · ${journey.priceRange}`
    : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    dates: "",
    groupSize: "",
    message: "",
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await api.enquiry.$post({
        json: {
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          travelDate: formData.dates,
          groupSize: formData.groupSize,
          message: formData.message,
          journeyTitle: journey?.title ?? "",
          journeySummary,
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
        title="Plan Your Tanzania Safari — Contact Hugo"
        description="Tell Hugo what you're dreaming of and he'll personally craft a tailor-made Tanzania safari for you. No obligation, no call-centre — just a real conversation with your safari insider."
        path="/contact"
      />
      <Navbar />
      <WhatsAppButton />

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0">
          <img
            src="/images/camp-interior.jpg"
            alt="Luxury camp"
            className="w-full h-full object-cover opacity-10"
              loading="lazy"
              decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/80 to-dark" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">
            Plan Your Safari
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight mb-6">
            Let's Start
            <br />
            <span className="italic text-gold/90">a Conversation</span>
          </h1>
          <p className="text-cream/60 text-lg max-w-xl mx-auto">
            No pressure, no commitments. Just tell me what excites you about
            Africa and I'll take it from there.
          </p>
        </div>
      </section>

      {/* ===== CONTACT GRID ===== */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Direct contact */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-cream mb-2">
                  Send Me an Enquiry
                </h2>
                <p className="text-cream/50 text-sm">
                  Fill in the form and it lands straight in my inbox. You'll get
                  a confirmation by email, and I'll reply personally.
                </p>
              </div>

              {/* Email Card */}
              <a
                href="mailto:enquiries@junglethrill.africa"
                className="block p-6 bg-gold/5 border border-gold/20 hover:border-gold/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                    <Mail size={20} className="text-dark" />
                  </div>
                  <div>
                    <p className="text-cream font-semibold">Email Me Directly</p>
                    <p className="text-gold text-sm">enquiries@junglethrill.africa</p>
                  </div>
                </div>
                <p className="text-cream/50 text-xs">
                  Prefer email? Reach me here anytime — I personally reply.
                </p>
              </a>

              {/* Other contacts */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-cream/50">
                  <div className="w-10 h-10 bg-surface-light flex items-center justify-center">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-cream/70">Based in Tanzania</p>
                    <p className="text-cream/40 text-xs">
                      On the ground, where your safari happens
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-cream/40 text-xs leading-relaxed">
                  Not sure what to say? Just tell me when you're thinking of
                  coming and how many people. I'll ask the right questions from
                  there.
                </p>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              {mutation.isSuccess ? (
                <div className="h-full flex items-center justify-center p-12 bg-surface border border-white/5">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                      <Send size={24} className="text-gold" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-cream mb-3">
                      Enquiry Sent!
                    </h3>
                    <p className="text-cream/60 mb-6">
                      Check your inbox for a confirmation. I'll read through your
                      details and reply personally — usually within a few hours.
                    </p>
                    <button
                      onClick={() => mutation.reset()}
                      className="text-gold text-sm underline"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {journey && (
                    <div className="p-5 bg-gold/5 border-l-2 border-gold">
                      <p className="text-gold/70 text-[11px] tracking-[0.15em] uppercase mb-1">
                        You're enquiring about
                      </p>
                      <p className="text-cream font-display text-lg font-bold">
                        {journey.title}
                      </p>
                      <p className="text-cream/50 text-sm mt-0.5">
                        {journeySummary}
                      </p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-cream/40 text-xs tracking-[0.15em] uppercase mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-surface border border-white/10 px-4 py-3 text-cream placeholder-cream/20 focus:border-gold focus:outline-none transition-colors text-sm"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block text-cream/40 text-xs tracking-[0.15em] uppercase mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-surface border border-white/10 px-4 py-3 text-cream placeholder-cream/20 focus:border-gold focus:outline-none transition-colors text-sm"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-cream/40 text-xs tracking-[0.15em] uppercase mb-2">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData({ ...formData, contact: e.target.value })
                        }
                        className="w-full bg-surface border border-white/10 px-4 py-3 text-cream placeholder-cream/20 focus:border-gold focus:outline-none transition-colors text-sm"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <label className="block text-cream/40 text-xs tracking-[0.15em] uppercase mb-2">
                        Preferred Travel Dates
                      </label>
                      <input
                        type="text"
                        value={formData.dates}
                        onChange={(e) =>
                          setFormData({ ...formData, dates: e.target.value })
                        }
                        className="w-full bg-surface border border-white/10 px-4 py-3 text-cream placeholder-cream/20 focus:border-gold focus:outline-none transition-colors text-sm"
                        placeholder="e.g. July 2026, flexible"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-cream/40 text-xs tracking-[0.15em] uppercase mb-2">
                      Group Size
                    </label>
                    <input
                      type="text"
                      value={formData.groupSize}
                      onChange={(e) =>
                        setFormData({ ...formData, groupSize: e.target.value })
                      }
                      className="w-full bg-surface border border-white/10 px-4 py-3 text-cream placeholder-cream/20 focus:border-gold focus:outline-none transition-colors text-sm"
                      placeholder="e.g. 2 adults, 1 child"
                    />
                  </div>

                  <div>
                    <label className="block text-cream/40 text-xs tracking-[0.15em] uppercase mb-2">
                      Tell Me About Your Dream Safari
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-surface border border-white/10 px-4 py-3 text-cream placeholder-cream/20 focus:border-gold focus:outline-none transition-colors text-sm resize-none"
                      placeholder="What excites you about Africa? Any specific parks, experiences, or interests? Whatever comes to mind..."
                    />
                  </div>

                  {mutation.isError && (
                    <div className="flex items-start gap-3 p-4 bg-red-900/20 border border-red-500/20 text-red-300 text-sm">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <span>{(mutation.error as Error)?.message}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="group w-full sm:w-auto px-10 py-4 bg-gold text-dark font-bold text-sm tracking-[0.15em] uppercase hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {mutation.isPending ? (
                      <>
                        Sending
                        <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>

                  <p className="text-cream/30 text-xs">
                    Your enquiry comes straight to me and you'll get an email
                    confirmation. Prefer to write directly? Email{" "}
                    <a
                      href="mailto:enquiries@junglethrill.africa"
                      className="text-gold/60 hover:text-gold"
                    >
                      enquiries@junglethrill.africa
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
