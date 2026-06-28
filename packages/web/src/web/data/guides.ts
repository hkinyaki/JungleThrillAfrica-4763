// Cornerstone SEO content. Long-form guides that target high-intent search
// queries and link internally to journeys and destinations.

export interface GuideSection {
  heading: string;
  // Each paragraph is a string. Render as <p>.
  paragraphs: string[];
  // Optional bullet list rendered after the paragraphs.
  bullets?: string[];
}

export interface Guide {
  slug: string;
  title: string; // SEO title / H1
  metaTitle: string; // <title>
  metaDescription: string;
  excerpt: string; // card + intro
  heroImage: string;
  readTime: string; // e.g. "8 min read"
  updated: string; // ISO date
  intro: string;
  sections: GuideSection[];
  // Internal links shown at the foot of the article.
  relatedJourneys: string[]; // journey slugs
  relatedDestinations: string[]; // destination slugs
}

export const guides: Guide[] = [
  {
    slug: "best-time-to-visit-serengeti",
    title: "Best Time to Visit the Serengeti & See the Great Migration",
    metaTitle:
      "Best Time to Visit the Serengeti — Great Migration Month-by-Month",
    metaDescription:
      "When is the best time to visit the Serengeti? A month-by-month guide to the Great Migration, river crossings, calving season and the dry-season game viewing — from a guide who lives in Tanzania.",
    excerpt:
      "A month-by-month guide to the Serengeti and the Great Migration — when to catch the river crossings, the calving, and the quiet beautiful corners in between.",
    heroImage: "/images/serengeti.webp",
    readTime: "9 min read",
    updated: "2026-01-15",
    intro:
      "The honest answer is that there is no single best time to visit the Serengeti — only the best time for what you most want to see. The Great Migration moves through the ecosystem all year round, so the question is really where the herds are and what kind of experience you're after. Here's how I think about it after years of watching the seasons turn from camp.",
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "If you want the easiest game viewing and the dramatic Mara River crossings, come between late June and October. This is the dry season — animals gather around shrinking water sources, the grass is short, and the famous crossings of the northern Serengeti happen from roughly July to September.",
          "If you'd rather see thousands of newborn animals and have the plains largely to yourself, come between late January and March, when the wildebeest calve on the short-grass plains of the southern Serengeti.",
        ],
      },
      {
        heading: "January to March — calving season",
        paragraphs: [
          "The herds are concentrated on the southern short-grass plains around Ndutu. In a roughly three-week window — usually February — around half a million calves are born. It is one of the great wildlife spectacles on earth, and with so many vulnerable young animals, predator action is intense.",
          "This is green season: lush landscapes, dramatic skies, fewer vehicles and lower prices. A wonderful time for photographers and anyone who wants the Serengeti without the crowds.",
        ],
      },
      {
        heading: "April to May — the green low season",
        paragraphs: [
          "These are the long rains. Some camps close, the roads can be tricky, and game viewing takes more patience as the grass grows tall. But the bush is at its most beautiful and you'll often have sightings entirely to yourself, at the lowest prices of the year. For a certain kind of traveller, this is a secret season.",
        ],
      },
      {
        heading: "June to October — dry season and the crossings",
        paragraphs: [
          "This is the classic safari window. As the land dries out, wildlife concentrates and is far easier to find. The migration pushes north, and from July the herds begin their nerve-wracking crossings of the Mara River in the northern Serengeti — crocodiles waiting below, predators on the banks.",
          "It's the most popular time to visit, so the best camps book out a year or more ahead. If river crossings are your dream, plan early.",
        ],
      },
      {
        heading: "November to December — the short rains",
        paragraphs: [
          "Brief afternoon showers green the plains again and the herds begin moving back south. It's a lovely shoulder season — fresh landscapes, good value, and the build-up to calving. December's festive period is busier, but the rest of these months are quietly excellent.",
        ],
      },
      {
        heading: "My advice",
        paragraphs: [
          "Don't choose your dates by the calendar alone. Tell me what matters most to you — crossings, calving, solitude, photography, budget — and I'll match it to the right region and the right camps, because where you stay matters as much as when you come. The migration is a moving target, and the whole point of planning with someone on the ground is that we follow it rather than guess.",
        ],
      },
    ],
    relatedJourneys: ["see-it-all", "through-your-lens", "your-first-time"],
    relatedDestinations: ["serengeti", "ngorongoro"],
  },
  {
    slug: "tanzania-safari-cost",
    title: "How Much Does a Tanzania Safari Cost? A Real Breakdown",
    metaTitle: "How Much Does a Tanzania Safari Cost? Honest 2026 Price Guide",
    metaDescription:
      "A clear, honest breakdown of Tanzania safari costs — what drives the price, what's included, and how to get the best value. Written by a Tanzania-based safari planner.",
    excerpt:
      "What a Tanzania safari really costs, what drives the price up and down, and how to get genuine value — explained without the sales pitch.",
    heroImage: "/images/tarangire.webp",
    readTime: "8 min read",
    updated: "2026-01-20",
    intro:
      "It's the first question almost everyone asks, and the honest answer is: it depends — but let me make that useful rather than annoying. A tailor-made Tanzania safari with me typically runs from around $11,000 to $26,000 per person, with longer grand journeys reaching higher. Here's exactly what moves the number, so you can decide where your money is best spent.",
    sections: [
      {
        heading: "What you're actually paying for",
        paragraphs: [
          "A safari price is built from a few big blocks: park and conservation fees, accommodation, your private vehicle and guide, internal flights and transfers, and meals. Tanzania's park fees alone are significant — the government charges per person per day to enter the Serengeti and Ngorongoro — and these are non-negotiable, identical whether you stay in a simple camp or a five-star lodge.",
        ],
      },
      {
        heading: "The biggest lever: where you sleep",
        paragraphs: [
          "Accommodation is where the range really opens up. A comfortable, characterful camp might be $800–$1,200 per person per night. A renowned luxury camp in a prime migration location can be $1,500–$3,500 or more. The wildlife outside your tent is often identical — what you're paying for is design, service, exclusivity and location.",
        ],
        bullets: [
          "Mid-range, great value: characterful tented camps and lodges",
          "Premium: design-led camps in prime positions",
          "Ultra-luxury: private, exclusive-use and fly-camping experiences",
        ],
      },
      {
        heading: "Season matters",
        paragraphs: [
          "The same trip can cost noticeably less in the green season (November to March, excluding the festive peak) than in the dry-season high of July to October. If your dates are flexible, shifting by a few weeks can buy you a much better camp for the same money.",
        ],
      },
      {
        heading: "Length and pace",
        paragraphs: [
          "Internal flights between parks save time but add cost; long road transfers save money but spend your days. A focused 5–7 day trip concentrates your budget; a 10–14 day journey across multiple parks and a Zanzibar finish naturally costs more but delivers a far richer experience.",
        ],
      },
      {
        heading: "What's usually included — and what isn't",
        paragraphs: [
          "My journeys include all park fees, accommodation, a private 4x4 and guide, listed activities, internal flights and transfers as per the itinerary, and full board on safari. International flights, your visa, travel insurance, premium drinks and tips are typically extra.",
        ],
      },
      {
        heading: "Getting real value",
        paragraphs: [
          "Value isn't the lowest price — it's spending on the things that change your trip and saving on the things that don't. Because I plan personally and book direct with camps I know, I can steer your budget toward the moments that matter. Tell me your number and I'll tell you, honestly, what it can buy.",
        ],
      },
    ],
    relatedJourneys: ["your-first-time", "room-to-breathe", "see-it-all"],
    relatedDestinations: ["serengeti", "tarangire", "ruaha"],
  },
  {
    slug: "tanzania-honeymoon-safari",
    title: "The Perfect Tanzania Honeymoon Safari",
    metaTitle: "Tanzania Honeymoon Safari — How to Plan the Perfect Trip",
    metaDescription:
      "How to plan a Tanzania honeymoon safari — the best parks, when to go, and how to combine the Serengeti with the beaches of Zanzibar for a romantic safari-and-beach honeymoon.",
    excerpt:
      "How to combine wide-open wilderness with the turquoise coast of Zanzibar for a honeymoon you'll be telling each other about for years.",
    heroImage: "/images/honeymoon.webp",
    readTime: "7 min read",
    updated: "2026-01-25",
    intro:
      "A honeymoon safari is, to my mind, one of the most romantic trips two people can take — wild mornings, golden sunsets, and the kind of shared wonder that bonds you long after you're home. Here's how I help couples shape theirs.",
    sections: [
      {
        heading: "Safari first, beach second",
        paragraphs: [
          "The classic honeymoon shape is a few days on safari followed by a few days on the coast — the adventure and the unwinding. I usually suggest beginning in the parks, when you're full of energy and excitement, and finishing on Zanzibar's white sand when you're ready to slow right down.",
        ],
      },
      {
        heading: "Where to go",
        paragraphs: [
          "For a first honeymoon safari, the northern circuit is hard to beat: the Ngorongoro Crater for a guaranteed wildlife morning, and the Serengeti for those endless, cinematic plains. Both offer intimate, beautifully designed camps perfect for two. Then it's a short flight to Zanzibar for the beach.",
        ],
      },
      {
        heading: "The romantic touches",
        paragraphs: [
          "This is where planning with someone on the ground pays off. Private sundowners on a quiet kopje, a candlelit dinner under the stars, a bush breakfast just for the two of you, a room with a view over the plains — these are the moments I build in. Tell me you're celebrating and I'll make sure the camps know it too.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "The dry season (June to October) gives you reliable sunshine and superb game viewing, ideal if your beach days matter. The green season is lush, quieter and better value, with the bonus of the calving on the southern plains. Zanzibar is lovely most of the year, with the long rains of April–May being the main exception.",
        ],
      },
      {
        heading: "How long",
        paragraphs: [
          "Ten to fourteen days is the sweet spot — enough for three to four nights on safari and three to five on the coast without rushing. If you're short on time, even a five-night safari with a couple of beach nights makes a wonderful escape.",
        ],
      },
    ],
    relatedJourneys: ["two-of-us-finally-alone", "still-wild-about-you", "find-your-quiet"],
    relatedDestinations: ["serengeti", "ngorongoro", "zanzibar"],
  },
  {
    slug: "first-time-safari-guide",
    title: "A First-Time Safari Guide to Tanzania",
    metaTitle: "First-Time Tanzania Safari Guide — Everything You Need to Know",
    metaDescription:
      "Planning your first Tanzania safari? A friendly first-timer's guide covering when to go, what to pack, how it works, costs, health and what a day on safari is really like.",
    excerpt:
      "Everything a first-timer needs to know — how a safari actually works, what to pack, when to go, and what a day in the bush really feels like.",
    heroImage: "/images/hero-sunset.webp",
    readTime: "10 min read",
    updated: "2026-01-30",
    intro:
      "If you've never been on safari before, the whole thing can feel a little mysterious. It needn't. Here's the plain-English guide I wish every first-timer had before their trip — what to expect, what to bring, and how to make the most of it.",
    sections: [
      {
        heading: "What a day on safari is actually like",
        paragraphs: [
          "Days start early — often before sunrise, because that's when the animals are most active and the light is loveliest. You'll head out in an open 4x4 with your guide, return to camp for a leisurely brunch and rest through the heat of the day, then head out again in the afternoon for a sundowner as the sky turns gold. Evenings are slow: dinner under the stars, the sounds of the bush, early to bed.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "For a first trip, the dry season (June to October) is the safest bet: easy game viewing, comfortable weather, and the Great Migration in full flow. The green season (November to March) is greener, quieter and better value, with the calving as its highlight. Either is wonderful — it depends on what you want to see.",
        ],
      },
      {
        heading: "What to pack",
        paragraphs: [
          "Less than you think. Soft, neutral-coloured clothing in layers (mornings are cold, middays hot), a good hat, sunglasses, sunscreen, insect repellent, and a decent pair of binoculars. Internal flights have strict luggage limits, so a soft duffel bag is essential. I send every traveller a detailed packing list once we start planning.",
        ],
        bullets: [
          "Neutral, layerable clothing (avoid bright white and dark blue)",
          "Hat, sunglasses, high-factor sunscreen and repellent",
          "Binoculars and a camera with a zoom lens",
          "A soft duffel bag — not a hard suitcase",
        ],
      },
      {
        heading: "Health and safety",
        paragraphs: [
          "Speak to a travel clinic about malaria prophylaxis and routine vaccinations; a yellow fever certificate is required if you're arriving from a risk country. Tanzania is a stable, welcoming destination, and you'll always be in expert hands with licensed guides and vetted camps. Travel insurance is essential — never skip it.",
        ],
      },
      {
        heading: "Getting there and around",
        paragraphs: [
          "Most northern-circuit safaris begin at Kilimanjaro International Airport. From there you'll travel by road or light aircraft between parks. I handle every transfer and flight so you never have to worry about logistics — you just turn up and enjoy it.",
        ],
      },
      {
        heading: "The single best piece of advice",
        paragraphs: [
          "Don't over-pack your itinerary. The temptation is to cram in as many parks as possible, but the magic of safari is in slowing down — sitting with a pride of lions for an hour, watching elephants at a waterhole, doing nothing but looking. Fewer parks, more time, better camps. That's the trip people come home raving about.",
        ],
      },
    ],
    relatedJourneys: ["your-first-time", "the-whole-crew", "room-to-breathe"],
    relatedDestinations: ["serengeti", "ngorongoro", "tarangire"],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
