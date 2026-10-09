export interface MediaVideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: "Overview & Mission" | "Water Sustainability" | "Passive Architecture & Cooling" | "Health & Ecology" | "Industrial & Case Studies";
  description: string;
  author: string;
  tag: string;
  duration?: string;
}

export const MEDIA_CATEGORIES = [
  "All",
  "Overview & Mission",
  "Water Sustainability",
  "Passive Architecture & Cooling",
  "Health & Ecology",
  "Industrial & Case Studies"
] as const;

export const MEDIA_VIDEOS: MediaVideoItem[] = [
  {
    id: "engineering-sustainable-future",
    youtubeId: "iOSWTxKYIT4",
    title: "McD BERL - Engineering a Sustainable Future",
    category: "Overview & Mission",
    tag: "Company Overview",
    author: "McD Built Environment Research Laboratory",
    description:
      "An introduction to McD BERL's vision of climate-responsive engineering, passive design, and whole-life building sustainability across India and global regions."
  },
  {
    id: "rainwater-harvesting-success",
    youtubeId: "lGXpmZzgBkI",
    title: "McD BERL Rain Water Harvesting - Success Story",
    category: "Water Sustainability",
    tag: "Water Management",
    author: "McDBERL",
    description:
      "A detailed look at decentralized rainwater harvesting, aquifer recharge, and zero runoff engineering implemented in landmark campus developments."
  },
  {
    id: "living-for-environment-children",
    youtubeId: "pAXcx4pEBQs",
    title: "Living for Environment for Children",
    category: "Health & Ecology",
    tag: "Indoor Quality & Well-being",
    author: "McDBERL",
    description:
      "Designing healthy indoor environments, abundant natural illumination, and non-toxic air loops to protect the health and development of future generations."
  },
  {
    id: "environment-is-our-parent",
    youtubeId: "GV51f4NMaVQ",
    title: "Environment is Our Parent, Take Care of It",
    category: "Health & Ecology",
    tag: "Regenerative Philosophy",
    author: "McDBERL",
    description:
      "Reflections on regenerative built environments that honor natural ecosystems, promoting circularity, soil conservation, and mindful resource usage."
  },
  {
    id: "daylight-cooled-air-rainwater",
    youtubeId: "92CADT_ajMU",
    title: "Use Daylight, Naturally Cooled Air and Rain Water",
    category: "Passive Architecture & Cooling",
    tag: "Passive Building Physics",
    author: "McDBERL",
    description:
      "Harnessing natural air currents, bioclimatic orientation, thermal mass, and smart daylighting strategies to drastically lower HVAC electricity consumption."
  },
  {
    id: "sustainable-furniture-facility",
    youtubeId: "jai-8556QwI",
    title: "Sustainable Design: Eco-friendly Furniture Manufacturing Facility",
    category: "Industrial & Case Studies",
    tag: "Green Manufacturing",
    author: "Turnstone Videos / McD BERL",
    description:
      "Walkthrough of the Soundarya Furniture facility in Bengaluru, highlighting energy-efficient factory envelopes, daylight harvesting, and sustainable operations."
  }
];
