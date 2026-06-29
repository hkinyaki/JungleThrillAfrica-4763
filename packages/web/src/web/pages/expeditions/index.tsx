import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  ArrowRight,
  Loader2,
  AlertCircle,
  Compass,
  Tent,
  MapPin,
  Mountain,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import WhatsAppButton from "../../components/whatsapp-button";
import Seo from "../../components/seo";
import { api } from "../../lib/api";

export default function ExpeditionsPage() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await api.enquiry.$post({
        json: {
          name: formData.name,
          email: formData.email,
          message:
            "Wants to be notified when JTA Overland launches (waitlist signup).",
          source: "overland-waitlist",
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
    <div className="min-h-screen bg-[#14110d]">
      <Seo
        title="JTA Overland — Unzipping Tanzania | Coming Soon"
        description="Rugged convoy road-trips that blend the great parks with Tanzania's hidden corners. Off-grid, unscripted, journey-is-the-point. Be first to know when the first convoy rolls out."
        path="/expeditions"
        image="/images/overland-hero.jpg"
        noindex
      />
      <Navbar />
      <WhatsAppButton />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/overland-hero.jpg"
            alt="A convoy of branded white 4x4s kicking up dust along a wild trail at sunset in Tanzania"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14110d] via-[#14110d]/55 to-[#14110d]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#14110d]/70 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 md:pb-24">
          <p className="text-amber-200/70 text-sm tracking-[0.3em] uppercase mb-4">
            JTA Overland
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black text-cream leading-[0.95] uppercase tracking-tight max-w-4xl">
            Unzipping
            <br />
            <span className="inline-flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="text-amber-400">Tanzania</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-amber-500/50 bg-amber-950/40 backdrop-blur-sm align-middle">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-300 text-xs md:text-sm tracking-[0.25em] uppercase font-bold">
                  Coming Soon
                </span>
              </span>
            </span>
          </h1>
          <p className="mt-8 text-cream/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            The opposite of a polished safari. Rugged convoy road-trips that
            cut through the great parks and out into the country's hidden,
            unmapped corners. Half-camping, off-grid, unscripted — where the
            journey is the whole point.
          </p>

          <a
            href="#waitlist"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-[#14110d] font-black text-sm tracking-[0.15em] uppercase hover:bg-amber-400 transition-colors group"
          >
            Join the Waitlist
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </section>

      {/* ===== THE IDEA ===== */}
      <section className="py-20 md:py-28 border-t border-amber-900/20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Compass,
                title: "Convoy, not chauffeur",
                body: "You drive. We lead. A small pack of 4x4s moving together through wild country, sharing the road, the fires and the stories.",
              },
              {
                icon: Tent,
                title: "Half-camping, off-grid",
                body: "Rooftop tents under the stars, the occasional proper bed when it counts. Built for people who want the raw version, not the resort.",
              },
              {
                icon: MapPin,
                title: "Parks plus hidden gems",
                body: "We pass through the famous places — then keep going, to the lesser-known corners most visitors never reach.",
              },
            ].map((f) => (
              <div key={f.title}>
                <div className="w-12 h-12 flex items-center justify-center border border-amber-500/30 bg-amber-950/20 mb-5">
                  <f.icon size={20} className="text-amber-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-cream mb-3 uppercase tracking-wide">
                  {f.title}
                </h3>
                <p className="text-cream/55 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMAGE BREAK ===== */}
      <section className="grid md:grid-cols-3">
        <div className="relative h-72 md:h-[26rem]">
          <img
            src="/images/overland-convoy.jpg"
            alt="A convoy of rooftop-tent 4x4s rolling through golden savannah at dusk"
            className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
          />
        </div>
        <div className="relative h-72 md:h-[26rem]">
          <img
            src="/images/overland-rig.jpg"
            alt="A 4x4 with a rooftop tent parked beside a campfire as the sun sets over the plains"
            className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
          />
        </div>
        <div className="relative h-72 md:h-[26rem]">
          <img
            src="/images/overland-camp.jpg"
            alt="An overland camp at golden hour with rooftop tents pitched under acacia trees"
            className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
          />
        </div>
      </section>

      {/* ===== AFTER DARK ===== */}
      <section className="py-20 md:py-28 border-t border-amber-900/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-amber-200/60 text-xs tracking-[0.3em] uppercase mb-3">
              When the sun goes down
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-black text-cream uppercase tracking-tight leading-tight">
              The day's drive ends.
              <br />
              <span className="text-amber-400">The night's just starting.</span>
            </h2>
            <p className="mt-6 text-cream/60 text-lg leading-relaxed">
              Fires lit, tents up, lanterns glowing under a sky thick with
              stars. And when the trail bites back — a bogged wheel, a long
              recovery in the dark — that's part of the story too. Nobody gets
              left behind.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative h-72 md:h-[28rem] overflow-hidden">
              <img
                src="/images/overland-night-camp.jpg"
                alt="A convoy of rooftop-tent 4x4s circled around a campfire under the Milky Way"
                className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              />
            </div>
            <div className="relative h-72 md:h-[28rem] overflow-hidden">
              <img
                src="/images/overland-recovery.jpg"
                alt="A team recovering a bogged 4x4 from thick mud at night under a starry sky"
                className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAITLIST ===== */}
      <section id="waitlist" className="py-20 md:py-28 border-t border-amber-900/20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-amber-500/30 bg-amber-950/20">
            <Mountain size={24} className="text-amber-400" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-cream uppercase tracking-tight mb-4">
            We're building something rugged.
          </h2>
          <p className="text-cream/60 text-lg mb-10 leading-relaxed">
            The routes aren't public yet — we're still scouting, testing and
            putting the convoys together. Leave your details and you'll be the
            first to know when the first one rolls out.
          </p>

          {mutation.isSuccess ? (
            <div className="p-10 border border-amber-500/30 bg-amber-950/20">
              <CheckCircle2 size={32} className="text-amber-400 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-cream mb-2">
                You're on the list.
              </h3>
              <p className="text-cream/55">
                When the first convoy is ready, you'll hear from us before
                anyone else.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            >
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="flex-1 bg-[#1c1812] border border-amber-900/40 px-5 py-4 text-cream placeholder-cream/25 focus:border-amber-500 focus:outline-none transition-colors text-sm"
                aria-label="Your name"
                placeholder="Your name"
              />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="flex-1 bg-[#1c1812] border border-amber-900/40 px-5 py-4 text-cream placeholder-cream/25 focus:border-amber-500 focus:outline-none transition-colors text-sm"
                aria-label="Email address"
                placeholder="you@email.com"
              />
              <button
                type="submit"
                disabled={mutation.isPending}
                className="px-7 py-4 bg-amber-500 text-[#14110d] font-black text-sm tracking-[0.1em] uppercase hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {mutation.isPending ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  "Notify Me"
                )}
              </button>
            </form>
          )}

          {mutation.isError && (
            <div className="mt-5 flex items-center justify-center gap-2 text-red-300 text-sm">
              <AlertCircle size={16} />
              <span>{(mutation.error as Error)?.message}</span>
            </div>
          )}

          <p className="mt-8 text-cream/30 text-xs">
            Planning a luxury safari instead?{" "}
            <a href="/journeys" className="text-amber-400/70 hover:text-amber-400">
              Explore our journeys
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
