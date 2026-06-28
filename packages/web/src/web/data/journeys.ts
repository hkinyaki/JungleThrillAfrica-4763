export interface ItineraryStop {
  days: string; // e.g. "Days 1–3"
  title: string;
  description: string;
}

import { computeRange, type JourneyCostInputs } from "./pricing";

// --- Computed price ranges (margin baked in via ./pricing engine) ---
// Park nights are taken from each itinerary; coast = Zanzibar nights.
// Update these allocations or the constants in pricing.ts when real
// net rates land, and every range below re-prices automatically.
const COST_INPUTS: Record<string, JourneyCostInputs> = {
  "two-of-us-finally-alone": {
    parkNightsByPark: { Ngorongoro: 3, Serengeti: 4 },
    coastNights: 6,
    logisticsTier: "mixed",
  },
  "still-wild-about-you": {
    parkNightsByPark: { Tarangire: 3, Serengeti: 4 },
    coastNights: 4,
    logisticsTier: "mixed",
  },
  "wild-hearts-little-feet": {
    parkNightsByPark: { Tarangire: 3, Ngorongoro: 4, Serengeti: 4 },
    coastNights: 0,
    logisticsTier: "road",
  },
  "just-me-and-the-horizon": {
    parkNightsByPark: { Nyerere: 3, Ruaha: 4 },
    coastNights: 4,
    logisticsTier: "fly",
  },
  "through-your-lens": {
    parkNightsByPark: { Serengeti: 5, Ngorongoro: 4, Tarangire: 4 },
    coastNights: 0,
    logisticsTier: "mixed",
  },
  "the-whole-crew": {
    parkNightsByPark: { Tarangire: 3, Serengeti: 4 },
    coastNights: 4,
    logisticsTier: "mixed",
  },
  "see-it-all": {
    parkNightsByPark: { Tarangire: 3, Ngorongoro: 3, Serengeti: 5, Ruaha: 3 },
    coastNights: 3,
    logisticsTier: "fly",
  },
  "your-first-time": {
    parkNightsByPark: { Tarangire: 3, Ngorongoro: 4, Serengeti: 4 },
    coastNights: 0,
    logisticsTier: "mixed",
  },
  "find-your-quiet": {
    parkNightsByPark: { Ruaha: 3, Nyerere: 4 },
    coastNights: 4,
    logisticsTier: "fly",
  },
  "room-to-breathe": {
    parkNightsByPark: { Ngorongoro: 3, Serengeti: 5 },
    coastNights: 4,
    logisticsTier: "fly",
  },
  "for-the-seasoned": {
    parkNightsByPark: { Ruaha: 5, Nyerere: 4, Serengeti: 4 },
    coastNights: 0,
    logisticsTier: "fly",
  },
  "more-than-the-wild": {
    parkNightsByPark: { Tarangire: 3, Ngorongoro: 3, Serengeti: 3 },
    coastNights: 3,
    logisticsTier: "mixed",
  },
};

function priceFor(slug: string): string {
  return computeRange(COST_INPUTS[slug]).text;
}

export interface Journey {
  slug: string;
  title: string; // emotional title
  subtitle: string; // clear descriptor
  tagline: string; // short line for card
  days: number;
  parks: string[]; // revealed on detail page only
  priceRange: string;
  heroImage: string;
  intro: string;
  itinerary: ItineraryStop[];
  included: string[];
  notIncluded: string[];
  hugoNote: string;
}

const STANDARD_INCLUDED = [
  "All park and conservation fees",
  "Hand-picked camps and lodges, chosen for character and comfort",
  "Private 4x4 safari vehicle and expert guide",
  "All game drives and listed activities",
  "Internal flights and road transfers as per itinerary",
  "Full board on safari; meals as specified on the coast",
  "Drinking water throughout your safari",
  "My personal planning and support before and during your trip",
];

const STANDARD_NOT_INCLUDED = [
  "International flights to and from Tanzania",
  "Tanzania visa and travel insurance",
  "Personal spending, premium drinks, and tips",
  "Optional extras such as balloon flights and private guides",
];

export const journeys: Journey[] = [
  {
    slug: "two-of-us-finally-alone",
    title: "Two of Us, Finally Alone",
    subtitle: "The Honeymoon",
    tagline: "Wild mornings, golden sunsets, and just the two of you.",
    days: 14,
    parks: ["Ngorongoro", "Serengeti", "Zanzibar"],
    priceRange: priceFor("two-of-us-finally-alone"),
    heroImage: "/images/honeymoon.webp",
    intro:
      "A safari built for two — the kind of trip you'll be telling each other about for the rest of your lives. Wide-open wilderness, private sundowners, and a slow, romantic finish on the turquoise coast of Zanzibar.",
    itinerary: [
      {
        days: "Days 1–4",
        title: "Ngorongoro Highlands",
        description:
          "Arrive and ease into the rhythm of safari. We settle you into an intimate, beautifully designed camp on the crater highlands, with time to descend into the caldera for one of the great wildlife mornings on earth — and quiet evenings just for the two of you.",
      },
      {
        days: "Days 4–8",
        title: "Serengeti Plains",
        description:
          "Onward to the endless plains. Four nights at a refined tented camp lets you settle in completely — unhurried game drives, private bush breakfasts, and sundowners with nobody else in sight.",
      },
      {
        days: "Days 8–14",
        title: "Zanzibar Coast",
        description:
          "The exhale. Six slow days on the Indian Ocean — barefoot mornings, dhow cruises at sunset, and absolutely nowhere you need to be.",
      },
    ],
    included: STANDARD_INCLUDED,
    notIncluded: STANDARD_NOT_INCLUDED,
    hugoNote:
      "Honeymoons are my favorite to plan, because every couple wants something a little different. Tell me what romance looks like for you — adventure, total seclusion, a bit of both — and I'll quietly arrange the moments that matter. The champagne in the bush, the private dinner under the stars. You just have to show up and be together.",
  },
  {
    slug: "still-wild-about-you",
    title: "Still Wild About You",
    subtitle: "The Anniversary",
    tagline: "Celebrate the years with a journey you'll never forget.",
    days: 12,
    parks: ["Tarangire", "Serengeti", "Zanzibar"],
    priceRange: priceFor("still-wild-about-you"),
    heroImage: "/images/anniversary.webp",
    intro:
      "Some milestones deserve more than a dinner reservation. This is a journey to mark the years together — wild elephant country, the great plains, and slow days by the sea to toast everything you've built.",
    itinerary: [
      {
        days: "Days 1–4",
        title: "Tarangire",
        description:
          "Begin somewhere wild and uncrowded, among ancient baobabs and big elephant herds. Three unhurried nights to arrive properly and shake off the world you came from.",
      },
      {
        days: "Days 4–8",
        title: "Serengeti",
        description:
          "The iconic plains, on your own terms. Long days out among the big cats, lazy lunches back at camp, and sunsets that look painted.",
      },
      {
        days: "Days 8–12",
        title: "Zanzibar",
        description:
          "Four days to celebrate — good food, warm water, and the kind of slow time you never seem to get at home.",
      },
    ],
    included: STANDARD_INCLUDED,
    notIncluded: STANDARD_NOT_INCLUDED,
    hugoNote:
      "When you tell me what you're celebrating, I'll make sure the trip knows it too. A surprise on the right evening, a table set somewhere unforgettable. After all these years together, you've earned a journey that feels as special as you two are.",
  },
  {
    slug: "wild-hearts-little-feet",
    title: "Wild Hearts, Little Feet",
    subtitle: "The Family Safari",
    tagline: "Wonder in their eyes, memories for all of you.",
    days: 12,
    parks: ["Tarangire", "Ngorongoro", "Serengeti"],
    priceRange: priceFor("wild-hearts-little-feet"),
    heroImage: "/images/family.webp",
    intro:
      "There's nothing quite like watching your kids see their first wild elephant. This journey is built for families — paced so nobody's overwhelmed, with camps that welcome children and a guide who knows how to keep young explorers wide-eyed.",
    itinerary: [
      {
        days: "Days 1–4",
        title: "Tarangire",
        description:
          "An easy, exciting start. Elephants are guaranteed crowd-pleasers, and the relaxed pace lets everyone find their feet. Three nights so the kids settle in and the adventure begins gently.",
      },
      {
        days: "Days 4–8",
        title: "Ngorongoro",
        description:
          "Into the crater for a day of Big Five spotting — a real-life animal storybook. Family-friendly lodging on the rim and plenty of downtime built in.",
      },
      {
        days: "Days 8–12",
        title: "Serengeti",
        description:
          "The grand finale on the great plains. Lions, cheetahs, and space to breathe — with a camp that knows how to look after younger guests.",
      },
    ],
    included: STANDARD_INCLUDED,
    notIncluded: STANDARD_NOT_INCLUDED,
    hugoNote:
      "I'll be honest — a family safari lives or dies on the pacing. Push too hard and everyone's exhausted by day three. I build in proper rest, pick camps that genuinely welcome kids, and choose a guide who can read a five-year-old's attention span as well as a leopard's tracks. Tell me your children's ages and I'll tailor every day around them.",
  },
  {
    slug: "just-me-and-the-horizon",
    title: "Just Me and the Horizon",
    subtitle: "The Solo Journey",
    tagline: "Space, freedom, and the wild all to yourself.",
    days: 12,
    parks: ["Nyerere", "Ruaha", "Zanzibar"],
    priceRange: priceFor("just-me-and-the-horizon"),
    heroImage: "/images/nyerere.jpg",
    intro:
      "Travelling solo is its own kind of freedom. This journey heads to the wild, uncrowded south — boat and walking safaris, raw landscapes, and the rare luxury of moving entirely at your own pace, before a soft landing on the coast.",
    itinerary: [
      {
        days: "Days 1–4",
        title: "Nyerere",
        description:
          "A different kind of safari to start — explore by boat along the river and on foot with an expert guide. Three nights in a remote, friendly camp where solo travellers feel right at home.",
      },
      {
        days: "Days 4–8",
        title: "Ruaha",
        description:
          "Deep into Tanzania's wildest park. Big prides, dramatic landscapes, and barely another vehicle in sight. This is solitude in the best possible sense.",
      },
      {
        days: "Days 8–12",
        title: "Zanzibar",
        description:
          "Round it off on the coast — your own pace, your own company, and a stretch of warm water to think it all over.",
      },
    ],
    included: STANDARD_INCLUDED,
    notIncluded: STANDARD_NOT_INCLUDED,
    hugoNote:
      "Solo travellers are some of my favorite people to plan for, because the trip can be exactly what you want it to be. I'll pick camps with a warm, social feel if you want company at dinner, or somewhere completely private if you'd rather just be with the wild. And I'm only ever a message away the whole time you're here.",
  },
  {
    slug: "through-your-lens",
    title: "Through Your Lens",
    subtitle: "The Photographer's Safari",
    tagline: "The light, the action, the once-in-a-lifetime frame.",
    days: 14,
    parks: ["Serengeti", "Ngorongoro", "Tarangire"],
    priceRange: priceFor("through-your-lens"),
    heroImage: "/images/photographer.webp",
    intro:
      "Built for people who chase light. We structure the days around golden hours, position for the action, and give you the time and patience a great image demands — from migration drama to intimate big-cat portraits.",
    itinerary: [
      {
        days: "Days 1–5",
        title: "Serengeti (Migration)",
        description:
          "Five nights in the heart of the action. We time and place you for the migration and the predators that follow it, with early starts and late finishes to own the best light. Long enough to wait for the moment, not just chase it.",
      },
      {
        days: "Days 5–9",
        title: "Ngorongoro",
        description:
          "The crater's dense wildlife and dramatic backdrops make for unforgettable frames. We're on the floor at first light, before the day-trippers, for clean shots and soft light.",
      },
      {
        days: "Days 9–14",
        title: "Tarangire",
        description:
          "Baobabs, elephant herds, and golden grass — a photographer's dream and gloriously uncrowded. Time and space to compose without a single other vehicle in your frame.",
      },
    ],
    included: STANDARD_INCLUDED,
    notIncluded: STANDARD_NOT_INCLUDED,
    hugoNote:
      "I plan photographers' trips differently. The guide knows to anticipate behaviour, to position the vehicle for the light, and — crucially — to be patient when you want to sit with a subject for an hour. We can arrange beanbags, low sundowner angles, even a private vehicle so you're never compromising your shot for someone else's schedule. Tell me what you shoot and I'll build the days around it.",
  },
  {
    slug: "the-whole-crew",
    title: "The Whole Crew",
    subtitle: "The Friends' Reunion",
    tagline: "Big adventure, big laughs, all of you together.",
    days: 12,
    parks: ["Tarangire", "Serengeti", "Zanzibar"],
    priceRange: priceFor("the-whole-crew"),
    heroImage: "/images/safari-jeep.jpg",
    intro:
      "Get the group back together somewhere unforgettable. Shared vehicles, shared sundowners, and shared stories you'll be retelling for years — capped with a few celebratory days on the beach.",
    itinerary: [
      {
        days: "Days 1–4",
        title: "Tarangire",
        description:
          "A relaxed, wild start with room for the whole group to spread out. Three nights to settle in, with big skies and bigger elephant herds.",
      },
      {
        days: "Days 4–8",
        title: "Serengeti",
        description:
          "The plains in full swing — game drives by day, fireside drinks by night, and the kind of shared moments that bond a group for life.",
      },
      {
        days: "Days 8–12",
        title: "Zanzibar",
        description:
          "End it on the coast, together. Long lunches, sunset cruises, and zero alarm clocks.",
      },
    ],
    included: STANDARD_INCLUDED,
    notIncluded: STANDARD_NOT_INCLUDED,
    hugoNote:
      "Group trips have their own rhythm, and I love getting them right. I'll sort the logistics so nobody's stuck organising — the vehicles, the shared spaces, the celebrations. You just bring the crew and the stories. Tell me the group's vibe and I'll match the camps to it.",
  },
  {
    slug: "see-it-all",
    title: "See It All",
    subtitle: "The Grand Adventure",
    tagline: "The full sweep of Tanzania, north to south to sea.",
    days: 18,
    parks: ["Tarangire", "Ngorongoro", "Serengeti", "Ruaha", "Zanzibar"],
    priceRange: priceFor("see-it-all"),
    heroImage: "/images/grand-adventure.webp",
    intro:
      "If you're going to come all this way, do it properly. This is the grand sweep — the icons of the north, the wild remoteness of the south, and a coastal finish. The trip of a lifetime, paced so you actually savour it.",
    itinerary: [
      {
        days: "Days 1–4",
        title: "Tarangire",
        description:
          "Begin among baobabs and elephants. Three nights to arrive and acclimatise in beautiful, uncrowded wilderness.",
      },
      {
        days: "Days 4–7",
        title: "Ngorongoro",
        description:
          "Into the great caldera for Big Five viewing and sweeping rim-top evenings.",
      },
      {
        days: "Days 7–12",
        title: "Serengeti",
        description:
          "Five nights on the famous plains — the heart of any grand safari, unhurried and immersive.",
      },
      {
        days: "Days 12–15",
        title: "Ruaha",
        description:
          "South to Tanzania's wildest park, where the crowds vanish entirely and the wilderness feels endless.",
      },
      {
        days: "Days 15–18",
        title: "Zanzibar",
        description:
          "The coast, to rest and let it all settle before the journey home.",
      },
    ],
    included: STANDARD_INCLUDED,
    notIncluded: STANDARD_NOT_INCLUDED,
    hugoNote:
      "This is the big one, and the secret to making it work is pacing. I never rush the grand tour — three or four nights a stop, internal flights to skip the long drives, and proper rest built in. You came all this way to arrive, not just pass through. Trust me on the rhythm and you'll thank me by the end.",
  },
  {
    slug: "your-first-time",
    title: "Your First Time",
    subtitle: "The First Safari",
    tagline: "Everything you dreamed Africa would be.",
    days: 12,
    parks: ["Tarangire", "Ngorongoro", "Serengeti"],
    priceRange: priceFor("your-first-time"),
    heroImage: "/images/wildlife.webp",
    intro:
      "Never been on safari? This is the perfect introduction — the classic northern circuit, the Big Five, and the iconic plains, all guided with the care and patience a first-timer deserves. You'll leave forever changed.",
    itinerary: [
      {
        days: "Days 1–4",
        title: "Tarangire",
        description:
          "A gentle, exciting opening among elephants and baobabs. Three nights to find your feet and fall for the rhythm of the bush.",
      },
      {
        days: "Days 4–8",
        title: "Ngorongoro",
        description:
          "The crater delivers the Big Five and the wow factor — exactly what you pictured when you dreamed of Africa.",
      },
      {
        days: "Days 8–12",
        title: "Serengeti",
        description:
          "The legendary plains to finish. Lions, cheetahs, endless horizons — the safari you'll be talking about for years.",
      },
    ],
    included: STANDARD_INCLUDED,
    notIncluded: STANDARD_NOT_INCLUDED,
    hugoNote:
      "First safaris are special, and I plan them with extra care. I'll talk you through everything beforehand — what to pack, what to expect, how it all works — so you arrive relaxed and ready. There are no silly questions. My job is to make your first time so good you'll already be planning your second before you fly home.",
  },
  {
    slug: "find-your-quiet",
    title: "Find Your Quiet",
    subtitle: "The Reconnection",
    tagline: "Step away from the noise. Find the wild, and yourself.",
    days: 12,
    parks: ["Ruaha", "Nyerere", "Zanzibar"],
    priceRange: priceFor("find-your-quiet"),
    heroImage: "/images/ruaha.webp",
    intro:
      "For when life has been too loud. This journey heads to the remote, quiet south — wild places where the only schedule is the sun's, and the noise of home falls away. A trip to slow down, breathe, and reconnect.",
    itinerary: [
      {
        days: "Days 1–4",
        title: "Ruaha",
        description:
          "Deep into Tanzania's wildest, least-visited park. Three slow nights with barely another soul around — just you, the bush, and the quiet.",
      },
      {
        days: "Days 4–8",
        title: "Nyerere",
        description:
          "Drift the river by boat, walk the banks on foot, and let the pace drop right down. Remote, peaceful, and restorative.",
      },
      {
        days: "Days 8–12",
        title: "Zanzibar",
        description:
          "End by the ocean, with nothing on the agenda but rest. Slow mornings, warm water, and space to feel like yourself again.",
      },
    ],
    included: STANDARD_INCLUDED,
    notIncluded: STANDARD_NOT_INCLUDED,
    hugoNote:
      "Sometimes the best thing a safari can do is help you switch off. For this kind of trip I choose the quietest corners I know, with camps that understand the value of stillness. No rushing, no big crowds, no pressure to fill every minute. Just space to breathe. Tell me what you're stepping away from and I'll build the calm around it.",
  },
  {
    slug: "room-to-breathe",
    title: "Room to Breathe",
    subtitle: "A Journey to Reset",
    tagline: "Slow days, wide skies, and space for whatever you're carrying.",
    days: 13,
    parks: ["Ngorongoro", "Serengeti", "Zanzibar"],
    priceRange: priceFor("room-to-breathe"),
    heroImage: "/images/journey-to-reset.webp",
    intro:
      "A gentle, private, deliberately unhurried journey — for whatever you're carrying. No tight schedules, no pressure to keep moving. Just wide skies, slow mornings, and the quiet healing that wild places offer when you give yourself the time.",
    itinerary: [
      {
        days: "Days 1–4",
        title: "Ngorongoro",
        description:
          "A soft, slow start in the highlands. Descend into the crater only when you feel like it; otherwise, rest, walk, and let the pace settle. Three unhurried nights with nowhere to be.",
      },
      {
        days: "Days 4–9",
        title: "Serengeti",
        description:
          "Five nights on the plains — long enough to truly arrive. Game drives only when you want them, and plenty of slow time at camp simply watching the world move. Private and unrushed throughout.",
      },
      {
        days: "Days 9–13",
        title: "Zanzibar",
        description:
          "A peaceful finish by the sea. No agenda, no alarm clocks — just warm water, gentle days, and room to breathe.",
      },
    ],
    included: STANDARD_INCLUDED,
    notIncluded: STANDARD_NOT_INCLUDED,
    hugoNote:
      "Some journeys aren't really about ticking off animals. They're about being somewhere quiet and being welcomed, unhurried, and looked after. I plan these with extra gentleness — private where it helps, slow always, and entirely shaped around how you're feeling on the day. There's no right way to do this trip. You set the pace, and I'll make sure everything around you is calm and kind.",
  },
  {
    slug: "for-the-seasoned",
    title: "For the Seasoned",
    subtitle: "The Connoisseur's Safari",
    tagline: "For those who've been, and want to go deeper.",
    days: 14,
    parks: ["Ruaha", "Nyerere", "Serengeti"],
    priceRange: priceFor("for-the-seasoned"),
    heroImage: "/images/connoisseur.webp",
    intro:
      "You've done a safari or two. Now you want the remote, the rare, and the wild — the parks the first-timers skip, with the birding, the walking, and the time to go truly deep. This is the connoisseur's circuit.",
    itinerary: [
      {
        days: "Days 1–5",
        title: "Ruaha",
        description:
          "Five nights in Tanzania's wildest park. Huge prides, superb birding, and a real sense of remoteness. Long enough to explore the corners most visitors never reach.",
      },
      {
        days: "Days 5–9",
        title: "Nyerere",
        description:
          "Boat safaris, walking safaris, and exceptional birdlife along the river. A different, deeper safari experience entirely.",
      },
      {
        days: "Days 9–14",
        title: "Serengeti",
        description:
          "Finish on the great plains, but in its quieter, remoter reaches — away from the circuit, where the wild still feels untouched.",
      },
    ],
    included: STANDARD_INCLUDED,
    notIncluded: STANDARD_NOT_INCLUDED,
    hugoNote:
      "When someone tells me they've been on safari before, my whole plan changes. We go remoter, slower, deeper. I'll pair you with a specialist guide — a birder, a walking expert, whatever your passion — and choose camps in the wildest corners I trust. This is the trip I'd design for myself. Tell me what's still on your list and we'll go and find it.",
  },
  {
    slug: "more-than-the-wild",
    title: "More Than the Wild",
    subtitle: "The Culture & Wildlife Journey",
    tagline: "The animals, the people, the living heart of Tanzania.",
    days: 13,
    parks: ["Tarangire", "Ngorongoro", "Serengeti", "Zanzibar"],
    priceRange: priceFor("more-than-the-wild"),
    heroImage: "/images/culture.webp",
    intro:
      "Tanzania is more than its wildlife. This journey weaves the great parks together with the people and places that give the country its soul — local communities, Maasai traditions, and the spiced history of Stone Town.",
    itinerary: [
      {
        days: "Days 1–4",
        title: "Tarangire & Local Communities",
        description:
          "Begin in elephant country, with time to meet local communities and learn how life and wildlife share this land. Three nights to settle in and connect.",
      },
      {
        days: "Days 4–7",
        title: "Ngorongoro & Maasai Culture",
        description:
          "The crater's wildlife paired with a genuine, respectful visit to a Maasai community on the highlands — a window into a way of life centuries deep.",
      },
      {
        days: "Days 7–10",
        title: "Serengeti",
        description:
          "The iconic plains and their wildlife, unhurried and immersive.",
      },
      {
        days: "Days 10–13",
        title: "Zanzibar & Stone Town",
        description:
          "Finish in Stone Town — spice tours, winding history-soaked streets, and the warm Indian Ocean to round it all off.",
      },
    ],
    included: STANDARD_INCLUDED,
    notIncluded: STANDARD_NOT_INCLUDED,
    hugoNote:
      "The wildlife is unforgettable, but it's the people who'll stay with you. I arrange cultural visits that are genuine and respectful — never staged, never rushed — because the communities here have stories worth your time. If you want to understand Tanzania, not just photograph it, this is the journey I'd choose for you.",
  },
];

export function getJourney(slug: string): Journey | undefined {
  return journeys.find((j) => j.slug === slug);
}
