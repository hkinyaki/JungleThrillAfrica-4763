# Plan — Rewrite Partners Page Around the "Why Not Book Direct?" Argument

## What this solves
The current `/partners` page (Option A) is built and live, but it doesn't yet answer the one question every travel agent silently asks: **"Why would I use Hugo when I can just email the camp myself?"** This rewrite makes that the spine of the page.

### The core argument (the spine)
> **You can book a camp. You can't book someone to be there when it matters.**

An agent 8,000 km away can email a lodge — but they can't run the trip on the ground, coordinate the in-between, know the live truth, or fix things when they break. Hugo owns the **whole guest experience in-country** so the agent can sell Tanzania confidently without flying out. He isn't a middleman on the booking — he's their **operations + reputation insurance**.

### Locked decisions
- **Role title:** "Your in-country operations partner."
- **Lead reasons (all four, told as one story — Hugo owns the on-ground experience):**
  1. Honest, current ground intel that protects them from bad guest reviews
  2. One accountable human instead of juggling 5 operators
  3. Coordinates the whole multi-camp trip, not just one booking
  4. Physically there for live problem-solving when something goes wrong
- **Booking/money model: FLEXIBLE per agent** — he can be pure on-ground support (they book direct) OR handle booking + coordination. Page must keep this open and NOT over-promise "I handle everything" (foundation stage, no suppliers yet).
- Keep existing guardrails: client stays theirs / never poached; no brand/camp/competitor names; never say travellers want to bypass agents.

---

## Steps

**File:** `packages/web/src/web/pages/partners.tsx` (rewrite copy + restructure sections; keep the working form + email wiring untouched).

1. **Hero** — keep image. New headline built on the spine:
   - Eyebrow: "For Travel Agents & Designers"
   - H1: "You can book a camp. You can't book someone to be there when it matters."
   - Sub: positions Hugo as "your in-country operations partner" — owns the guest experience on the ground so the agent doesn't have to, and always hands the relationship back.
   - CTA unchanged ("Start the Conversation" → #partner-form).

2. **NEW section — "Booking direct vs. having a partner on the ground"** (the heart of the rewrite). A clean two-column contrast (NOT naming anyone), e.g.:
   - *Left — "A camp handles its own four walls."* one airstrip, one lodge, one piece of the trip; replies on their clock; nobody owns the whole journey.
   - *Right — "I handle everything between them."* multi-camp coordination, transfers, the city night, the coast leg; one accountable human; live fixes on the ground.
   - Framed positively about Hugo, never disparaging camps/agents.

3. **"Why agents trust me" — 4 cards** (replace current 3): each of the four locked reasons, with icons (lucide: `Eye`/`ShieldCheck` for intel, `User`/`UserCheck` for one accountable human, `Route`/`Map` for whole-trip coordination, `LifeBuoy`/`Zap` for live problem-solving). Short, concrete, first-person where natural.

4. **"How we can work together" — flexible model** (replaces rigid 4-step "arrangement"). Make the flexibility explicit and trust-building:
   - "Some agents have me run the whole thing. Others book direct and just want me on the ground for their guests. Either works — we agree what fits, openly, up front."
   - Reinforce: your client stays yours; transparent, simple share; no surprises.

5. **Hugo's word** — keep the personal quote block (tighten to echo "I treat your traveller as my own and hand the relationship back").

6. **Partner form** — unchanged (agency/name/email/contact/country/message → `source:"partner-enquiry"`). Section intro can nod to "agent to agent."

7. **Footer line + reassurance** — keep "client stays yours" reassurance near the form.

**No changes needed to:** the API (`partner-enquiry` branch + Hugo auto-reply already built & tested), routing, footer link, sitemap exclusion, or the nav dropdown.

---

## Verify
1. `cd packages/web && bun run build` — passes tsc + vite + sitemap + prerender, `/partners` prerenders, stays OUT of sitemap.xml.
2. Dev (tmux `jta`, port 4200): `/partners` loads, new hero + contrast section + 4 reason cards + flexible-model section render on-brand (dark/gold).
3. Copy re-scan: (a) no brand/camp/competitor names, (b) no "travellers want to bypass agents" language, (c) no over-promising "I handle everything" without the flexibility caveat, (d) "client stays yours" present.
4. Form still submits (already tested end-to-end: business mail → `partners@`, auto-reply from `hugo@`).

## Note
This is a copy/structure rewrite of one file. If after preview you'd rather go lean (Option B), this same spine compresses cleanly into a single screen.
