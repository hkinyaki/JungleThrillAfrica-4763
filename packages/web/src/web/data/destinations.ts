export interface Destination {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  intro: string;
  highlights: string[];
  bestTime: string;
  hugoTake: string;
  relatedJourneys: string[]; // journey slugs
  heroImage: string;
}

export const destinations: Destination[] = [
  {
    slug: "serengeti",
    name: "Serengeti National Park",
    shortName: "Serengeti",
    tagline: "Endless plains, endless wonder",
    intro:
      "The Serengeti is the one everyone dreams of, and somehow it still exceeds the dream. Plains that run further than your eye can follow, skies that turn gold at dusk, and the constant low drama of predators and prey. This is where the Great Migration moves, where lions sprawl in the open, and where the silence feels enormous.",
    highlights: [
      "The Great Migration — over a million wildebeest on the move",
      "The best big-cat viewing in Africa: lion, cheetah, leopard",
      "Open plains that stretch beyond the horizon",
      "Hot-air balloon rides at sunrise over the savanna",
      "Year-round game thanks to resident wildlife",
    ],
    bestTime:
      "June to October for the dry season and classic plains game. For the migration river crossings, aim for July to September. Calving season in the southern Serengeti runs January to March — dramatic, and quieter on crowds.",
    hugoTake:
      "People ask me if the Serengeti is overhyped. It isn't. I've watched it for years and it still stops me. My trick is timing and positioning — I'll put you where the wildlife is and the crowds aren't. We'll be parked at a kill while everyone else is still driving in. That's the difference a local makes.",
    relatedJourneys: [
      "two-of-us-finally-alone",
      "through-your-lens",
      "see-it-all",
      "your-first-time",
    ],
    heroImage: "/images/serengeti.webp",
  },
  {
    slug: "ngorongoro",
    name: "Ngorongoro Crater",
    shortName: "Ngorongoro",
    tagline: "The world's largest caldera",
    intro:
      "Imagine a collapsed volcano so vast it holds its own ecosystem inside — grasslands, a soda lake, forest, and tens of thousands of animals living within the crater walls. Ngorongoro is one of the few places on earth you can realistically see the Big Five in a single morning. Standing on the rim looking down is a moment you don't forget.",
    highlights: [
      "Big Five sightings often possible in one day",
      "One of the last strongholds of the black rhino",
      "A self-contained ecosystem inside a 600m-deep caldera",
      "Flamingos on the crater's soda lake",
      "Sweeping rim views at sunrise",
    ],
    bestTime:
      "Good year-round, but June to October offers the clearest skies and easiest game viewing. The short rains in November bring lush green and fewer vehicles on the crater floor.",
    hugoTake:
      "The crater is a wildlife concentration unlike anywhere else — but it's busy, and timing is everything. I get my guests down onto the floor early, before the day-trippers arrive, so you get those first golden hours almost to yourself. Then we climb back up for a long, lazy lunch on the rim.",
    relatedJourneys: [
      "two-of-us-finally-alone",
      "wild-hearts-little-feet",
      "your-first-time",
      "room-to-breathe",
    ],
    heroImage: "/images/ngorongoro.webp",
  },
  {
    slug: "tarangire",
    name: "Tarangire National Park",
    shortName: "Tarangire",
    tagline: "Baobabs, elephants, solitude",
    intro:
      "Tarangire is the one I quietly love. Ancient baobab trees stand like sentinels over the landscape, and in the dry season the elephant herds gather here in numbers that take your breath away. It's far less crowded than the famous parks, which means more space, more peace, and a wilder feeling under your boots.",
    highlights: [
      "Some of the largest elephant herds in Tanzania",
      "Iconic, thousand-year-old baobab trees",
      "Excellent birdlife — over 500 species recorded",
      "Far fewer crowds than the northern icons",
      "The Tarangire River, a year-round magnet for wildlife",
    ],
    bestTime:
      "June to October is prime — as water dries up elsewhere, animals pour into the park. The elephant gatherings in this window are extraordinary.",
    hugoTake:
      "If you want to feel like you've actually stepped off the map, this is where I'll take you. I've sat under a baobab here watching a hundred elephants drift past and not seen another vehicle for hours. It's the park I recommend to people who want the wild without the queue.",
    relatedJourneys: [
      "still-wild-about-you",
      "wild-hearts-little-feet",
      "the-whole-crew",
      "your-first-time",
    ],
    heroImage: "/images/tarangire.webp",
  },
  {
    slug: "ruaha",
    name: "Ruaha National Park",
    shortName: "Ruaha",
    tagline: "Wild, remote, untouched",
    intro:
      "Ruaha is my hidden favorite — Tanzania's largest national park and one of its least visited. Down in the rugged south, the landscape is raw and beautiful: the Great Ruaha River carving through baobab-studded hills, big prides of lion, and a genuine sense of being somewhere few people ever reach. This is safari for those who want the real thing.",
    highlights: [
      "Tanzania's largest national park, gloriously uncrowded",
      "Enormous lion prides and excellent predator action",
      "A meeting point of eastern and southern African species",
      "Dramatic river and baobab landscapes",
      "Wild dog sightings for the lucky",
    ],
    bestTime:
      "May to December for the dry season, when wildlife concentrates along the Great Ruaha River. The further into the dry season, the more dramatic the viewing.",
    hugoTake:
      "Ruaha is where I send the people who've done a safari or two and want something deeper and wilder. You won't see crowds here — most days you won't see another vehicle at all. It's remote, it's rugged, and it's where I'd choose to go on my own time off.",
    relatedJourneys: [
      "just-me-and-the-horizon",
      "see-it-all",
      "find-your-quiet",
      "for-the-seasoned",
    ],
    heroImage: "/images/ruaha.webp",
  },
  {
    slug: "nyerere",
    name: "Nyerere National Park",
    shortName: "Nyerere",
    tagline: "Rivers, boats, and a different kind of wild",
    intro:
      "Formerly part of the Selous, Nyerere is enormous, watery, and wonderfully different. Here safari isn't only about the game drive — you explore by boat along the Rufiji River, and on foot with an armed guide. Hippos, crocs, fish eagles, and elephants on the banks. It's off the beaten path and all the better for it.",
    highlights: [
      "Boat safaris along the Rufiji River and its lakes",
      "Walking safaris with expert armed guides",
      "One of Africa's largest protected areas",
      "Big populations of hippo, croc, and elephant",
      "A remote, exclusive feel far from the crowds",
    ],
    bestTime:
      "June to October is the classic dry-season window, with great river and land viewing. The green season earlier in the year is beautiful and birdy, though some camps close.",
    hugoTake:
      "Nyerere changes how people think about safari. The first time you drift past a pod of hippos at eye level from a boat, or walk a sandbank tracking lion prints on foot, something clicks. I love sending adventurous travellers here — it's safari with a pulse.",
    relatedJourneys: [
      "just-me-and-the-horizon",
      "find-your-quiet",
      "for-the-seasoned",
    ],
    heroImage: "/images/nyerere.jpg",
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    shortName: "Zanzibar",
    tagline: "Turquoise water, spice, and slow days",
    intro:
      "After the dust and adrenaline of safari, Zanzibar is the exhale. Warm turquoise water, powder-white sand, dhows leaning into the breeze, and the spiced, salt-air history of Stone Town. It's the perfect way to end a journey — a few slow days to let everything you've seen settle in.",
    highlights: [
      "Some of the most beautiful beaches in the Indian Ocean",
      "Historic Stone Town — a UNESCO World Heritage site",
      "Spice farm tours and fragrant local markets",
      "Snorkelling, diving, and sunset dhow cruises",
      "The ideal slow finish to a safari",
    ],
    bestTime:
      "June to October and December to February for sunny, dry beach weather. The island is warm year-round; the long rains in April and May are best avoided.",
    hugoTake:
      "I always tell people not to fly home straight from the bush. Give yourself Zanzibar. After days of early starts and big emotions, those slow mornings by the water are where the trip really sinks in. I'll match you to the right stretch of coast for the vibe you want — lively or completely hidden away.",
    relatedJourneys: [
      "two-of-us-finally-alone",
      "still-wild-about-you",
      "the-whole-crew",
      "find-your-quiet",
    ],
    heroImage: "/images/zanzibar.jpg",
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
