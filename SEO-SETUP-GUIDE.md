# Jungle Thrill Africa — SEO Setup Guide

This covers everything that's now built into the site, plus the off-site steps **only you can do** (they need access to your domain, Google account, etc.). Work through Part 2 in order — it's roughly a weekend of admin that pays off for years.

> **Honest expectation-setting:** the site is now technically excellent for SEO. But ranking is earned over weeks and months through Google indexing your pages, real reviews, and other sites linking to you. Nobody can guarantee "#1 for every search." What we *can* do is make sure Google can find, understand, and trust every page — and that's done.

---

## Part 1 — What's already built (no action needed)

- **Crawlable HTML** — every page is pre-rendered to real HTML, so Google sees full content (titles, descriptions, itineraries, guides) without running JavaScript.
- **Unique titles & descriptions** on all 28 pages, written around what people actually search ("Tanzania safari cost", "best time to visit Serengeti", etc.).
- **Structured data (JSON-LD)** so Google can show rich results:
  - `TravelAgency` (whole site) · `TouristTrip` (each journey) · `TouristAttraction` (each destination) · `Article` + `Breadcrumb` (each guide) · `FAQPage` (home).
- **Sitemap** at `https://junglethrill.africa/sitemap.xml` (auto-updates on every build).
- **robots.txt** allowing all crawlers and pointing to the sitemap.
- **Open Graph / Twitter cards** — link previews look good when shared on WhatsApp, Facebook, X, etc.
- **4 cornerstone guides** targeting high-intent searches, internally linked to your journeys and destinations.
- **FAQ section** answering the questions travellers Google before booking.

---

## Part 2 — What you need to do (off-site)

### 1. Google Search Console (do this first — 15 min)
This is how you tell Google the site exists and watch how it performs.

1. Go to **search.google.com/search-console** → **Add property** → choose **Domain** → enter `junglethrill.africa`.
2. It'll ask you to add a **TXT record** to your domain's DNS (wherever you bought the domain). Copy the record, add it, click Verify. (If stuck, your domain registrar's support can add it in minutes.)
3. Once verified: **Sitemaps** → submit `sitemap.xml`.
4. Use **URL Inspection** → paste your homepage URL → **Request indexing**. Repeat for your 3–4 most important pages (home, journeys, a top guide).

> Indexing takes a few days to a couple of weeks. Check back weekly under **Performance** to see which searches bring people in.

### 2. Bing Webmaster Tools (10 min)
Don't ignore Bing — it also powers other search engines and some AI tools.
1. **bing.com/webmasters** → sign in → **Import from Google Search Console** (one click if GSC is set up), or add the site manually and submit the same sitemap.

### 3. Google Business Profile (highest-impact item — 30 min + verification)
For a personal safari host, this is huge — it puts you on Google Maps and in the local results travellers trust.
1. **google.com/business** → create a profile for "Jungle Thrill Africa".
2. Category: **Safari** or **Tour operator / Travel agency**.
3. Add your phone (+255 655 260 925), website, service area (Tanzania / Arusha region), photos, and a description.
4. Google verifies by postcard/phone/email — follow the prompt.
5. **Then actively collect reviews** (see #5). Reviews here move the needle more than almost anything.

### 4. Google Analytics 4 (optional — see traffic)
If you want to see visitor numbers and which pages perform:
1. **analytics.google.com** → create a property → get your **Measurement ID** (`G-XXXXXXX`).
2. **Send me that ID and I'll wire it into the site.** (Takes me 5 minutes; it's already set up to slot in.)

### 5. Reviews & reputation (ongoing — the real ranking fuel)
Google trusts businesses real people vouch for.
- After every trip, ask guests to leave a **Google review** (send them the direct link from your Business Profile).
- Encourage **TripAdvisor** and **SafariBookings.com** reviews too — both are authority sites for safari operators and feed your reputation.

### 6. Backlinks (ongoing — what actually drives rankings up)
Other reputable sites linking to yours is the strongest ranking signal. Easy wins:
- List on **SafariBookings.com** and **TripAdvisor** (free operator listings).
- Get listed in any lodge/camp partner pages, tourism boards, or travel directories.
- A guest blog or interview on a travel site, linking back to a relevant guide.
- Social profiles (Instagram, Facebook) with the website linked — add those URLs to the `sameAs` array in the site config and I'll publish them.

### 7. Social links (send me these)
If you have Instagram / Facebook / a WhatsApp Business link, send them over — I'll add them to the structured data and footer so Google connects your profiles to the brand.

---

## Maintenance — keeping it healthy

- **Add a new guide every month or two.** Fresh, useful content is the single best long-term SEO investment. Topics: "What to pack for a safari", "Serengeti vs Ngorongoro", "Family safari with kids", "Photographing the migration". Just send me the angle and I'll write & publish it.
- **Keep the journeys/destinations copy current** (prices, seasons).
- **Reply to every review**, good or bad — Google rewards active profiles.
- After any content change, the site rebuilds the sitemap automatically; just re-submit in Search Console if you add a whole new section.

---

## Realistic timeline

| When | What to expect |
|---|---|
| Week 1 | Pages indexed in Google Search Console; site searchable by brand name |
| Weeks 2–6 | Long-tail guide pages start appearing for specific searches |
| Months 2–4 | Rankings climb as reviews + a few backlinks accumulate |
| Months 4–12 | Competitive terms ("Tanzania safari") improve with sustained reviews, backlinks & fresh guides |

The foundation is done and done well. The growth from here comes from reviews, backlinks, and regular fresh content — and I'm here to keep adding the content whenever you want.

— Set up for junglethrill.africa
