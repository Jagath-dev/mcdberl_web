export interface CaseStudyItem {
  id: string;
  title: string;
  category: "Net Zero Design" | "High Performance Buildings" | "Cooling Cities";
  sectionId: "sec-netzero" | "sec-hpbuildings" | "sec-coolcities";
  description: string;
  mediaType: "video" | "image";
  mediaSrc: string;
  youtubeId?: string;
  tag: string;
  keyHighlights: string[];
}

export const CASE_STUDIES_CATEGORIES = [
  { label: "Net Zero Design", sectionId: "sec-netzero" },
  { label: "High Performance Buildings", sectionId: "sec-hpbuildings" },
  { label: "Cooling Cities", sectionId: "sec-coolcities" }
] as const;

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: "iim-trichy",
    title: "Indian Institute of Management, Trichy",
    category: "Net Zero Design",
    sectionId: "sec-netzero",
    description:
      "A 2 MW solar power plant commissioned at IIM Trichy, enhancing sustainability and promoting renewable energy initiatives.",
    mediaType: "video",
    mediaSrc: "https://www.youtube.com/embed/fux09tVREfw",
    youtubeId: "fux09tVREfw",
    tag: "Higher Education & Clean Energy",
    keyHighlights: [
      "2 MW rooftop & ground-mount solar PV installation",
      "Substantial grid offset & low operational carbon footprint",
      "Integrated microgrid management for academic campus"
    ]
  },
  {
    id: "mnlu-nagpur",
    title: "Maharashtra National Law University, Nagpur",
    category: "Net Zero Design",
    sectionId: "sec-netzero",
    description:
      "Maharashtra National Law University(MNLU), Nagpur plans a 5 MW solar plant to achieve a Net Zero Energy Campus.",
    mediaType: "video",
    mediaSrc: "https://www.youtube.com/embed/WOCKQTKuw6o",
    youtubeId: "WOCKQTKuw6o",
    tag: "Net Zero Energy Campus",
    keyHighlights: [
      "5 MW planned solar infrastructure",
      "Pioneering Net Zero Energy academic master plan",
      "Zero net energy footprint across academic & residential halls"
    ]
  },
  {
    id: "infosys-nagpur",
    title: "Infosys Nagpur",
    category: "High Performance Buildings",
    sectionId: "sec-hpbuildings",
    description:
      "A state-of-the-art Infosys campus in Nagpur showcases sustainable architecture with net-zero energy and eco-friendly facilities.",
    mediaType: "video",
    mediaSrc: "https://www.youtube.com/embed/I2sC7q4iiUM",
    youtubeId: "I2sC7q4iiUM",
    tag: "Enterprise IT Campus",
    keyHighlights: [
      "Net-zero energy engineering & high-efficiency building envelope",
      "Advanced radiant cooling & smart automation",
      "LEED Platinum benchmarked corporate workspace"
    ]
  },
  {
    id: "cooling-cities",
    title: "Cooling Cities, Building Futures",
    category: "Cooling Cities",
    sectionId: "sec-coolcities",
    description:
      "Reducing urban heat through vegetation, water management, reflective materials, and smart city planning for sustainable and livable environments.",
    mediaType: "image",
    mediaSrc: "/assets/case-studies/cooling-cities-building-futures.jpg",
    tag: "Urban Microclimate & Policy",
    keyHighlights: [
      "Mitigation of urban heat island (UHI) effects",
      "Blue-green infrastructure & high-albedo material guidelines",
      "Actionable urban design principles for climate-resilient cities"
    ]
  }
];
