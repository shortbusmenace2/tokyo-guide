export type Neighborhood = {
  slug: string;
  name: string;
  nameJp: string;
  tagline: string;
  mood: string;
  timeOfDay: string;
  persona: string;
  teaser: string;
  color: string;
  mapX: number; // percentage position on SVG map
  mapY: number;
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "shinjuku",
    name: "Shinjuku",
    nameJp: "新宿",
    tagline: "The city at full volume",
    mood: "Shinjuku does not ease you in. It drops you into the deep end and expects you to swim. There is something clarifying about a place this overwhelming — you stop trying to understand it and simply exist inside it.",
    timeOfDay: "After midnight",
    persona: "The insomniac, the salaryman who missed the last train, anyone who needs the city to witness them",
    teaser: "Golden Gai holds two hundred bars in a space the size of a parking lot. Each one seats eight, maybe ten. Nobody explains the rules.",
    color: "#C8432A",
    mapX: 28,
    mapY: 48,
  },
  {
    slug: "shimokitazawa",
    name: "Shimokitazawa",
    nameJp: "下北沢",
    tagline: "Where the city exhales",
    mood: "Sunday afternoon in Shimokitazawa feels like a record playing in another room — close enough to follow, far enough to let your thoughts go wherever they want. The neighborhood has successfully resisted being optimized.",
    timeOfDay: "Sunday afternoon",
    persona: "The musician between rehearsals, the reader who brought the wrong book, anyone allergic to efficiency",
    teaser: "The vintage shops are arranged as if someone spilled them from a bag. Half the best ones have no signs.",
    color: "#4A7C59",
    mapX: 22,
    mapY: 58,
  },
  {
    slug: "yanaka",
    name: "Yanaka",
    nameJp: "谷中",
    tagline: "The neighborhood that survived",
    mood: "Yanaka escaped the bombings, the developers, the curators of modern Tokyo. It exists now as a quiet argument that the city could have looked like this everywhere. Walking here feels like finding a note someone left for you in a language you are still learning.",
    timeOfDay: "Early morning, before the cats have moved",
    persona: "The architecture student, the grandmother with nowhere to be, anyone trying to understand what was lost",
    teaser: "The cemetery is the most peaceful park in Tokyo. Locals walk their dogs there at dusk without irony.",
    color: "#8B7355",
    mapX: 52,
    mapY: 30,
  },
  {
    slug: "akihabara",
    name: "Akihabara",
    nameJp: "秋葉原",
    tagline: "Devotion made visible",
    mood: "Akihabara is what obsession looks like when a city decides to take it seriously. Every subculture here is treated with the same commercial reverence. Nothing is niche enough to be unwelcome. This is either the most democratic or the most consuming place in Tokyo — probably both.",
    timeOfDay: "Saturday afternoon, peak human density",
    persona: "The collector, the hobbyist who travels for a single shop, anyone who has ever loved something too much",
    teaser: "There is a floor of a building dedicated entirely to train miniatures. The men inside are not buying — they are communing.",
    color: "#1E3A5F",
    mapX: 56,
    mapY: 38,
  },
  {
    slug: "shibuya",
    name: "Shibuya",
    nameJp: "渋谷",
    tagline: "Where everyone is in motion",
    mood: "The crossing is not a tourist attraction. It is a twice-per-minute demonstration of how a city can move three thousand people through an intersection and give each of them the sensation of going exactly where they intended.",
    timeOfDay: "Rush hour, or the hour after",
    persona: "Everyone, briefly, passing through",
    teaser: "Hachiko has been waiting outside the station since 1934. The statue is newer than the faithfulness it commemorates.",
    color: "#2A2A4A",
    mapX: 24,
    mapY: 55,
  },
  {
    slug: "harajuku",
    name: "Harajuku",
    nameJp: "原宿",
    tagline: "Self-invention as practice",
    mood: "The fashion here is not fashion in the Western sense — something seasonal, aspirational, commercial. It is closer to costume, which is closer to identity. The teenagers on Takeshita-dori are not trying to impress anyone. They are trying on versions of themselves, and they are doing it in public, without embarrassment.",
    timeOfDay: "Weekend, midday",
    persona: "The teenager who took the train two hours to be here, the photographer who can't stop, anyone who dressed for themselves today",
    teaser: "Omotesando and Takeshita-dori are three minutes apart and completely different cities.",
    color: "#7B3F6E",
    mapX: 22,
    mapY: 52,
  },
  {
    slug: "nakameguro",
    name: "Nakameguro",
    nameJp: "中目黒",
    tagline: "The canal in all seasons",
    mood: "In cherry blossom season, Nakameguro becomes briefly famous — the canal lined with paper lanterns, the petals on the water, the restaurants spilling onto the banks. What the photographs don't show is that it's nearly as good in winter, when the branches are bare and the coffee shops are full.",
    timeOfDay: "Late afternoon, when the light hits the canal sideways",
    persona: "The couple that lives nearby, the design professional on a lunch walk, anyone who chooses aesthetics over convenience",
    teaser: "The best bookshop has a cafe inside it. You are expected to stay.",
    color: "#2F6B7C",
    mapX: 26,
    mapY: 60,
  },
  {
    slug: "asakusa",
    name: "Asakusa",
    nameJp: "浅草",
    tagline: "Tokyo remembering itself",
    mood: "Asakusa is where Tokyo keeps its oldest self — not preserved under glass but lived in, worn, genuinely inhabited. Senso-ji at six in the morning, before the tour groups arrive, before the incense smoke has fully lifted, is one of the few places in this city where you can feel time doing something other than accelerating.",
    timeOfDay: "Dawn, or the hour before it",
    persona: "The traveler who came to understand something, the local who still makes offerings, anyone willing to wake up early for a reason",
    teaser: "The rickshaw drivers know everything and will tell you nothing unless you ask the right question.",
    color: "#A0522D",
    mapX: 60,
    mapY: 35,
  },
];
