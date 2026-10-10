export interface ResearchPaperItem {
  id: string;
  slug: string;
  title: string;
  category: "Water & Urban Hydrology" | "Embodied Carbon & Materials" | "Thermal Physics & Climate" | "Energy Density & Systems" | "Carbon Policy & Decarbonization";
  image: string;
  excerpt: string;
  fullAbstract: string;
  keyFindings: string[];
  readTime: string;
  publishedYear: string;
  href: string;
}

export const RESEARCH_CATEGORIES = [
  "All",
  "Water & Urban Hydrology",
  "Embodied Carbon & Materials",
  "Thermal Physics & Climate",
  "Energy Density & Systems",
  "Carbon Policy & Decarbonization"
] as const;

export const RESEARCH_PAPERS: ResearchPaperItem[] = [
  {
    id: "climate-resilience-urban-water",
    slug: "climate-resilience-urban-water",
    title: "Climate Resilience / Urban Water",
    category: "Water & Urban Hydrology",
    image: "/assets/research-paper/climate-resilience-urban-water.jpg",
    readTime: "8 min read",
    publishedYear: "2024",
    href: "/publications/climate-resilience-urban-water",
    excerpt:
      "Can buildings become part of the urban flood solution? Why monsoon resilience in Indian cities must begin at the parcel boundary with decentralized aquifer recharge.",
    fullAbstract:
      "Rapid urbanization across Indian metropolitan hubs has disrupted natural hydrological flows, converting permeable soils into impermeable concrete plains. This research demonstrates how building envelopes, permeable hardscaping, and decentralized bio-retention cells transform private developments into active flood-mitigation infrastructure, storing peak storm surges while replenishing drying groundwater tables.",
    keyFindings: [
      "Decentralized site percolation captures up to 85% of peak monsoon precipitation on-site",
      "Calculated retention swales reduce municipal storm drain runoff volumes by over 60%",
      "Groundwater recharge metrics benchmarked across Tier-1 urban soil topographies"
    ]
  },
  {
    id: "green-school-material-benchmarking",
    slug: "sustainable-architecture-benchmarking-green-school-design",
    title: "Sustainable Architecture: Benchmarking Green School Design Through Material Performance Analysis",
    category: "Embodied Carbon & Materials",
    image: "/assets/research-paper/green-school-benchmarking.webp",
    readTime: "12 min read",
    publishedYear: "2024",
    href: "/publications/sustainable-architecture-benchmarking-green-school-design-through-material-performance-analysis",
    excerpt:
      "As global construction contributes nearly 40% of total carbon emissions, this research establishes embodied carbon benchmarks and envelope performance metrics for modern educational campuses.",
    fullAbstract:
      "Educational institutions offer a critical testbed for sustainable architecture. Through rigorous material life-cycle assessments (LCA) conducted across contemporary school projects in India, this paper contrasts conventional RCC masonry with low-carbon alternatives such as stabilized earth blocks, fly-ash geopolymers, and timber hybridization to establish replicable performance baselines.",
    keyFindings: [
      "Up to 34% reduction in cradle-to-gate embodied carbon achieved via optimized material selection",
      "Comparative thermal mass simulations demonstrating reduced daytime cooling operational energy",
      "Benchmark metrics established for daylight autonomy (sDA) and occupant thermal satisfaction"
    ]
  },
  {
    id: "wet-bulb-temperature",
    slug: "wet-bulb-temperature",
    title: "Wet Bulb Temperature & Human Survivability Limits",
    category: "Thermal Physics & Climate",
    image: "/assets/research-paper/wet-bulb-temperature.webp",
    readTime: "10 min read",
    publishedYear: "2024",
    href: "/publications/wet-bulb-temperature",
    excerpt:
      "Dry-bulb temperature alone fails to capture the true danger of tropical heatwaves. Exploring wet-bulb thresholds, evaporative cooling limits, and building resilience.",
    fullAbstract:
      "In humid tropical climates, human thermo-regulation depends entirely on latent heat dissipation via sweat evaporation. When wet-bulb temperatures approach 35°C, natural metabolic cooling ceases. This paper models indoor microclimates during extreme heat episodes, demonstrating how non-refrigerant passive building design and dehumidification loops protect occupants during critical climate events.",
    keyFindings: [
      "Identification of critical wet-bulb vulnerability zones across coastal and northern Indian metros",
      "Evaluation of ceiling fans and air velocity thresholds in reducing effective heat index by 3-4°C",
      "Passive envelope guidelines that prevent fatal indoor thermal trapping during grid blackout events"
    ]
  },
  {
    id: "one-watt-building-challenge",
    slug: "one-watt-building-challenge",
    title: "One Watt Building Challenge: Capping Baseline Energy Density",
    category: "Energy Density & Systems",
    image: "/assets/research-paper/one-watt-building-challenge.webp",
    readTime: "14 min read",
    publishedYear: "2024",
    href: "/publications/one-watt-building-challenge",
    excerpt:
      "The modern commercial building stands as a symbol of over-electrification. Reimagining high-rise design to restrict baseline operational power density to 1 Watt per square foot.",
    fullAbstract:
      "Standard Grade-A commercial towers typically demand 5 to 8 Watts per square foot of connected electrical load, largely driven by oversized chillers and excessive artificial lighting behind glazed facades. The One Watt Building Challenge investigates the holistic integration of daylight harvesting, radiant slab cooling, and low-energy equipment to demonstrate the commercial viability of a 1 W/sq.ft threshold.",
    keyFindings: [
      "70% reduction in peak electrical connected load compared to standard commercial real estate",
      "Deep integration of radiant hydronic cooling reducing chiller compressor run-hours by half",
      "Demonstrated payback period of under 3.5 years via downsized electrical and backup generator infrastructure"
    ]
  },
  {
    id: "co2-emissions-building-sector",
    slug: "co2-emissions-from-the-building-sector",
    title: "CO₂ Emissions from the Building Sector: Paris Agreement Pathways",
    category: "Carbon Policy & Decarbonization",
    image: "/assets/research-paper/co2-emissions-building-sector.jpg",
    readTime: "11 min read",
    publishedYear: "2024",
    href: "/publications/co2-emissions-from-the-building-sector-cover-image",
    excerpt:
      "Aligning the rapid expansion of the built environment with the Paris Agreement 1.5°C target through aggressive operational and embodied carbon transition roadmaps.",
    fullAbstract:
      "With India projected to add billions of square meters of built floor area over the coming decades, current construction paradigms risk locking in high emissions for generations. This paper presents an empirical roadmap quantifying the policy, technological, and architectural shifts necessary to achieve whole-life decarbonization across commercial and residential developments.",
    keyFindings: [
      "Decarbonization trajectories comparing business-as-usual vs aggressive energy code compliance",
      "The critical role of circular building materials in capping upstream industrial emissions",
      "Policy recommendations for municipal green building bylaws and developer tax incentives"
    ]
  }
];
