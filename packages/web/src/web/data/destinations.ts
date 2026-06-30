export interface DeepDiveSection {
  heading: string;
  body: string[]; // paragraphs
}

export interface Faq {
  q: string;
  a: string;
}

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
  /** Optional long-form sections rendered below the intro for depth + SEO. */
  deepDive?: DeepDiveSection[];
  /** Optional FAQ block — also emitted as FAQPage JSON-LD. */
  faqs?: Faq[];
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
    deepDive: [
      {
        heading: "What a Serengeti safari is really like",
        body: [
          "Everyone arrives in the Serengeti carrying a picture in their head — the golden grass, the lone acacia, the lion on a kopje. The remarkable thing is that the real place doesn't shrink that picture. It enlarges it. The plains genuinely run further than your eye can follow, and the scale of the wildlife on them is something photographs never quite prepare you for.",
          "This is the heart of a classic Tanzania safari, and the wildlife is the reason. The Serengeti holds the best big-cat viewing in Africa — lion sprawled in the open, cheetah scanning from termite mounds, leopard draped in the sausage trees along the rivers. Add resident elephant, giraffe, and plains game in their thousands, and you have a park that delivers in every season, not only during the migration.",
        ],
      },
      {
        heading: "The Great Migration — timing it right",
        body: [
          "The Great Migration is the headline, and it's worth understanding before you book, because where the herds are depends entirely on the month. This isn't a single event you turn up for — it's a year-round circular movement of over a million wildebeest and zebra following the rains.",
          "Calving season in the southern Serengeti runs roughly January to March — dramatic, full of newborns and the predators that follow them, and pleasantly quiet on crowds. The famous river crossings, where the herds brave the crocodile-lined waters, generally happen in the north from around July to September. If a crossing is on your list, the month matters enormously, and getting it right is exactly the kind of detail I plan for you.",
        ],
      },
      {
        heading: "Beating the crowds — the local advantage",
        body: [
          "People ask me if the Serengeti is overhyped. It isn't. But it can be busy in the wrong place at the wrong time, and that's where a local on the ground earns their keep. My trick is timing and positioning — I put you where the wildlife is and the vehicles aren't.",
          "Often that means being parked at a sighting at first light while everyone else is still on the road in, or choosing a quieter sector of this vast park entirely. I won't rush you between camps either; an unhurried, three-nights-minimum pace lets you actually inhabit the Serengeti rather than tick it off. Pricing varies with season and camp, so I quote ranges and build every journey custom to you.",
        ],
      },
    ],
    faqs: [
      {
        q: "When is the best time to visit the Serengeti?",
        a: "June to October is the classic dry season with excellent plains-game viewing. For migration river crossings aim for July to September in the north; for calving season and fewer crowds, January to March in the south.",
      },
      {
        q: "Can you see the Great Migration year-round?",
        a: "Yes — the migration is a continuous circular movement, not a single event. The herds are simply in different parts of the Serengeti at different times, which is why the month you travel matters so much. I help you match your dates to where the herds will be.",
      },
      {
        q: "Is the Serengeti good for first-time safari travellers?",
        a: "It's one of the best first safaris in the world — iconic landscapes, the migration, and the finest big-cat viewing in Africa, all well set up for a first encounter. I pace it gently and position you away from the crowds.",
      },
    ],
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
    deepDive: [
      {
        heading: "A whole world inside a crater",
        body: [
          "Some places you have to stand on to understand, and Ngorongoro is one of them. Picture a volcano that collapsed in on itself two to three million years ago, leaving a caldera so vast it now holds an entire self-contained ecosystem — grassland, soda lake, forest and swamp, all ringed by 600-metre walls. Tens of thousands of animals live their whole lives down on that floor.",
          "The first time you stand on the rim and look down, the scale rearranges something in you. The crater floor stretches out below, hazy and green, and you can just make out the dark shapes of game moving across it. A Ngorongoro Crater safari is short on driving and enormous on impact — within a single morning down on the floor, the Big Five are genuinely possible.",
        ],
      },
      {
        heading: "Wildlife you'll see on the crater floor",
        body: [
          "The density here is unlike anywhere else in Tanzania. Lion live permanently on the floor, elephant move through the forest, and the crater is one of the last strongholds of the critically endangered black rhino — for many travellers, this is where they finally see one. Flamingos turn the soda lake pink, and buffalo, zebra, hyena and wildebeest fill out the plains.",
          "Because everything is concentrated inside the caldera, this is the rare park where you don't chase wildlife across great distances — it's all there, around you, in a contained and almost theatrical landscape.",
        ],
      },
      {
        heading: "Getting the timing right",
        body: [
          "The crater is a wildlife concentration like nowhere else — but it's popular, and timing is everything. I get my guests down onto the floor early, before the day-trippers descend, so you have those first golden hours close to yourself. Then we climb back up for a long, unhurried lunch on the rim with the whole caldera laid out below.",
          "Ngorongoro pairs naturally with the Serengeti and Tarangire on a northern-circuit journey, and it's good year-round — though June to October offers the clearest skies. As always, I build the trip custom and quote pricing as a range to suit your dates and pace.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you see the Big Five in Ngorongoro Crater in one day?",
        a: "Often, yes. Because the crater floor is a contained ecosystem with very high wildlife density, seeing lion, elephant, buffalo, rhino and (with luck) leopard in a single morning is genuinely possible — one of the few places on earth where that's realistic.",
      },
      {
        q: "Is Ngorongoro good for spotting black rhino?",
        a: "It's one of the best places in Tanzania to see the critically endangered black rhino. The crater is a key stronghold, and getting onto the floor early in the day gives you the best chance.",
      },
      {
        q: "How does Ngorongoro fit into a Tanzania safari?",
        a: "It pairs beautifully with the Serengeti and Tarangire on a northern-circuit journey. I get guests onto the crater floor before the day-trippers arrive, then build the rest of the trip around an unhurried pace.",
      },
    ],
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
    deepDive: [
      {
        heading: "The park of giants — elephants and baobabs",
        body: [
          "Tarangire is the one I quietly love, and a Tarangire safari is the easiest way I know to fall for the lesser-known side of Tanzania. Ancient baobab trees stand across the landscape like sentinels — some of them a thousand years old, their swollen trunks giving the whole park a primeval, almost otherworldly feel.",
          "But it's the elephants that people remember. In the dry season the herds gather here in numbers that take your breath away. I've sat under a baobab watching a hundred of them drift past in a slow river of grey, and not seen another vehicle for hours. That combination — the giant trees and the giant herds — is what makes Tarangire unlike anywhere else on the northern circuit.",
        ],
      },
      {
        heading: "Why the dry season transforms it",
        body: [
          "Tarangire has a secret weapon: the Tarangire River. As the dry season deepens and water vanishes from the wider landscape, animals pour in from all directions toward this year-round source. June to October is prime, and in that window the concentrations of game — elephant especially — become genuinely extraordinary.",
          "It's also a birder's park, with over 500 recorded species, so even between big sightings there's constant life in the trees and along the river. And because Tarangire sits a little off the main rush, you get all of this with far fewer crowds than the famous parks.",
        ],
      },
      {
        heading: "Where it fits in your journey",
        body: [
          "Tarangire is the perfect opening to a northern-circuit safari — it eases you into the wild before the Serengeti and Ngorongoro, and it sets the tone with space and solitude rather than crowds. If you want to feel like you've stepped off the map, this is where I'll start you.",
          "As with every trip I plan, I keep the pace unhurried and quote pricing as a range, building the journey custom around your dates and the feeling you're after.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is Tarangire National Park famous for?",
        a: "Two things above all: enormous elephant herds and ancient baobab trees. In the dry season the elephant gatherings here are among the largest in Tanzania, set against a landscape of thousand-year-old baobabs.",
      },
      {
        q: "When is the best time for a Tarangire safari?",
        a: "June to October. As water dries up across the wider landscape, wildlife concentrates along the Tarangire River, and the dry-season elephant gatherings become extraordinary.",
      },
      {
        q: "Is Tarangire less crowded than the Serengeti?",
        a: "Yes, considerably. It sits a little off the main rush, so you get exceptional wildlife — especially elephants — with far more space and solitude. It makes a wonderful, gentle opening to a northern-circuit journey.",
      },
    ],
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
    deepDive: [
      {
        heading: "Why a Ruaha safari is different",
        body: [
          "If you've read anything about safaris in Tanzania, you've read about the north — the Serengeti, the Crater, the migration. All of it deserves the hype. But Ruaha is the place I send people when they want the wild without the crowd, and it surprises every single one of them.",
          "Ruaha National Park sits deep in Tanzania's southern circuit, far from the day-tripper routes. It is the country's largest national park, and on most days you can drive for hours and not pass another vehicle. That solitude isn't a marketing line — it's simply how empty this corner of the country still is. When you find a pride of lion on a kill here, you have it to yourself. No queue of jeeps, no jostling for the photograph. Just you, the dust, and the sound of it.",
          "What makes Ruaha special to a naturalist is the meeting of worlds. This is where eastern and southern Africa overlap — you'll find species from both, sometimes in the same morning. Greater and lesser kudu, sable and roan antelope, huge buffalo herds, and lion prides that are among the largest anywhere on the continent. It's raw, it's rugged, and it feels like the Africa people imagine before they ever arrive.",
        ],
      },
      {
        heading: "Ruaha vs the Serengeti — which is right for you?",
        body: [
          "I get asked this constantly, so let me be honest with you. If it's your very first safari and you have your heart set on the Great Migration and endless plains, the northern parks are the easier yes. They're spectacular, well connected, and built for a first encounter with Africa.",
          "But if you've safaried before — or you simply can't stand the idea of sharing a sighting with twenty other vehicles — Ruaha is the one. It's wilder, quieter, and more remote. The predator action is exceptional, the landscapes of baobab and river are unlike the open savanna up north, and the feeling of genuine remoteness is something the famous parks can no longer offer in peak season.",
          "Many of my favourite trips pair the two: a few unhurried nights in the south for the solitude, then north for the iconic scenes. You don't have to choose — and I'll help you decide what fits your time, your pace, and the feeling you're chasing.",
        ],
      },
      {
        heading: "Getting there, and how long to stay",
        body: [
          "Ruaha is reached by a short light-aircraft flight from the main arrival points, which is part of what keeps it quiet — it takes a little more intention to get here. Once you land, you're straight into the wild; there's no long transfer through busy gates.",
          "My rule for Ruaha, as with everywhere I send people, is to slow down. I won't build you a trip that hops camps every night. A minimum of three nights in one place lets the park reveal itself — the same waterhole at dawn and dusk, the pride you watched yesterday turning up on a kill today. That unhurried rhythm is the whole point, and it's how a safari stops being a checklist and starts becoming a memory.",
          "Pricing for a Ruaha safari depends entirely on the camps, the season, and how long you stay, so I quote everything as a range and tailor it to you — every journey I plan is custom. Tell me what you want to feel, and I'll show you what it costs to feel it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Ruaha worth visiting over the Serengeti?",
        a: "If you want solitude, wild landscapes and exceptional predator viewing without the crowds, Ruaha is absolutely worth it — especially for a second safari. The Serengeti is the easier first-timer's choice for the migration and open plains. Many travellers I plan for do both: the quiet south, then the iconic north.",
      },
      {
        q: "When is the best time for a Ruaha safari?",
        a: "May to December, the dry season, is best. As the land dries, wildlife concentrates along the Great Ruaha River and viewing becomes dramatic — the deeper into the dry season, the better the sightings tend to be.",
      },
      {
        q: "How do you get to Ruaha National Park?",
        a: "By a short light-aircraft flight from Tanzania's main arrival points. That extra step is part of why Ruaha stays so uncrowded — and it drops you straight into the wild with no long road transfer.",
      },
      {
        q: "How many nights should I spend in Ruaha?",
        a: "I recommend a minimum of three nights in one camp. Ruaha rewards an unhurried pace — staying put lets you read the rhythm of a single area, return to the same pride, and truly settle into the remoteness rather than rushing through it.",
      },
    ],
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
