export interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: "Conclaves & Summits" | "Academic & Workshops" | "Industry Forums" | "Press & Publications";
  tag: string;
  date?: string;
  image: string;
  link: string;
  linkText: string;
  isExternal: boolean;
}

export const NEWS_FEATURES_DATA: NewsItem[] = [
  {
    id: "ecobuild-conclave-2025",
    title: "McD BERL to Speak at EcoBuild Conclave 2025 on Lifecycle-Driven Sustainable Design.",
    description:
      "McD BERL highlighted how early-stage lifecycle assessments and integrated building systems can significantly improve performance across energy, water, and materials. The conclave offered a valuable platform for advancing conversations on Net Zero and circular development.",
    category: "Conclaves & Summits",
    tag: "EcoBuild Conclave 2025",
    image: "/assets/news-and-features/news-card-1.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7394269274657398784",
    linkText: "View Post on LinkedIn",
    isExternal: true,
  },
  {
    id: "wadiyar-centre-highrise-lecture",
    title: "McD BERL Delivered an Expert Lecture on Sustainable Highrise Buildings at Wadiyar Centre for Architecture.",
    description:
      "The session explored what it takes to design highrise buildings that are energy-efficient, climate-responsive, and future-ready. Covering sustainable design principles and modern construction approaches, the lecture equipped emerging architects with the insights needed to create taller, greener, and smarter buildings for tomorrow’s urban environments.",
    category: "Academic & Workshops",
    tag: "Wadiyar Centre for Architecture",
    image: "/assets/news-and-features/news-card-2.webp",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7360984561532456961",
    linkText: "View Post on LinkedIn",
    isExternal: true,
  },
  {
    id: "sjb-school-daylighting-workshop",
    title: "McD BERL conducts Hands-On Workshop on Daylighting & Lighting Design for SJB School of Architecture.",
    description:
      "The workshop introduced students to the fundamentals of daylight and artificial lighting, highlighting how thoughtful lighting design can improve energy efficiency, visual comfort, and overall well-being. Participants worked hands-on with tools like DesignBuilder to assess daylight performance and Dialux to simulate lighting layouts, fixture placement, and illuminance levels. The session equipped future architects with practical skills to design sustainable, well-lit, and human-centered spaces — a strong step toward shaping climate-responsive and energy-smart buildings.",
    category: "Academic & Workshops",
    tag: "SJB School of Architecture",
    image: "/assets/news-and-features/news-card-3.webp",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7373961175073693697",
    linkText: "View Post on LinkedIn",
    isExternal: true,
  },
  {
    id: "ishrae-bangalore-chiller-plants",
    title: 'McD BERL at ISHRAE Bangalore Chapter with a Vision for "Driving Efficiency, Designing Sustainability – Chiller Plants to Net Zero Buildings".',
    description:
      "At the ISHRAE Bangalore Chapter Technical Talk, Sneha Murthy of McD BERL delivered an in-depth exploration of how energy-efficient design, climate-responsive planning, and sustainable cooling systems can shape the next generation of Net Zero Buildings. This session detailed system-level interventions—from HVAC optimization and envelope performance to sustainable urban cooling—illustrating how robust engineering frameworks drive measurable Net Zero outcomes.",
    category: "Industry Forums",
    tag: "ISHRAE Bangalore Chapter",
    image: "/assets/news-and-features/news-card-4.webp",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7378361647272402944",
    linkText: "View Post on LinkedIn",
    isExternal: true,
  },
  {
    id: "aeee-energise-2025-one-watt-challenge",
    title: "McD BERL spotlighted “The One Watt Challenge” at AEEE Energise 2025 — redefining how far building efficiency can go.",
    description:
      "At AEEE Energise 2025, McD BERL presented its paper The One Watt Challenge, exploring new possibilities for ultra-low-energy, net-zero-ready buildings through innovation, passive design, and performance-led strategies. As India moves closer to its net-zero vision, we’re proud to help advance sustainable design and lead conversations that inspire the next generation of high-performance buildings.",
    category: "Conclaves & Summits",
    tag: "AEEE Energise 2025",
    image: "/assets/news-and-features/news-card-5.webp",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7392507697193132032",
    linkText: "View Post on LinkedIn",
    isExternal: true,
  },
  {
    id: "zak-world-of-facades",
    title: "McD BERL Takes the Stage at Zak World of Façades to Champion Climate-Responsive Design",
    description:
      "McD BERL recently participated as a speaker at the Zak World of Façades, Bengaluru — a leading conference focused on façade design, engineering, and sustainability.",
    category: "Conclaves & Summits",
    tag: "Zak World of Façades",
    image: "/assets/news-and-features/news-card-6.webp",
    link: "https://www.linkedin.com/company/mcd-built-environment-research-laboratory/",
    linkText: "View Company Updates",
    isExternal: true,
  },
  {
    id: "thermal-control-magazine-net-zero",
    title: "Net-zero strategies to achieve sustainability in energy, water, and carbon",
    description:
      "Explore how passive design, renewable systems, low-carbon materials and smart water management combine in practical frameworks to decarbonize buildings—featuring real-world case studies from India and beyond.",
    category: "Press & Publications",
    tag: "Thermal Control Magazine",
    image: "/assets/news-and-features/news-card-7.jpg",
    link: "https://www.thermalcontrolmagazine.com/net-zero/net-zero-strategies-to-achieve-sustainability-in-energy-water-and-carbon/",
    linkText: "Read Article on Thermal Control",
    isExternal: true,
  },
  {
    id: "iimb-sustainability-conference",
    title: "McD BERL at IIMB: Sharing Insights on Ultra-Low Energy Design and Sustainable Innovation",
    description:
      "Presented the One Watt Challenge at IIM Bangalore’s Sustainability & SCM Conference — engaging with leaders across ESG, academia, and policy on radical energy minimalism in the built environment. Grateful, inspired, and ready to keep pushing boundaries.",
    category: "Conclaves & Summits",
    tag: "IIM Bangalore Conference",
    image: "/assets/news-and-features/news-card-8.webp",
    link: "https://www.linkedin.com/company/mcd-built-environment-research-laboratory/",
    linkText: "View Company Updates",
    isExternal: true,
  },
  {
    id: "aicte-vaani-seminar-christ-university",
    title: "McD BERL Joins AICTE VAANI Seminar on Energy Efficiency and Climate Resilience at Christ University",
    description:
      "McD BERL was proud to be represented at the AICTE VAANI–sponsored National Seminar hosted by Christ University. The expert session focused on strategies for energy efficiency, sustainable practices, and climate resilience—bringing together changemakers dedicated to environmental sustainability.",
    category: "Academic & Workshops",
    tag: "AICTE VAANI / Christ University",
    image: "/assets/news-and-features/news-card-9.jpg",
    link: "https://www.linkedin.com/company/mcd-built-environment-research-laboratory/",
    linkText: "View Company Updates",
    isExternal: true,
  },
  {
    id: "glsn-panel-future-learning-spaces",
    title: "McD BERL Featured at GLSN Panel on the Future of Learning Spaces",
    description:
      "McD BERL participated in the Interactive Session: Co-creating the Future of Learning – A Dialogue Between Educators and Architects, hosted by the Global Learning Space Network (GLSN) at Novotel HICC, Hyderabad.\n\nRepresenting McD BERL, Ar. Sneha Murthy, Architect and Sustainability Associate, joined an esteemed panel of educators and architects to share insights on how sustainable, user-focused design can shape innovative and future-ready learning environments.\n\nThis collaborative platform brought together diverse perspectives, reinforcing our commitment to designing educational spaces that inspire and enable the next generation.",
    category: "Industry Forums",
    tag: "GLSN Panel Hyderabad",
    image: "/assets/news-and-features/news-card-10.jpg",
    link: "https://www.linkedin.com/company/mcd-built-environment-research-laboratory/",
    linkText: "View Company Updates",
    isExternal: true,
  },
  {
    id: "aeee-energise-2023-infosys-hubballi",
    title: "Case Study of Innovation in Sustainability and MEP Design at the AEEE Energise 2023 Conference",
    description:
      "At AEEE Energise 2023, McD BERL presented the Case Study on Innovation in Sustainability and MEP Design for the Infosys Hubballi Campus.\n\nThis project reflects our commitment to creating high-performance, energy-efficient, and environmentally responsible buildings. From advanced MEP strategies to sustainable design solutions, every detail was crafted to align with Infosys’ ambitious sustainability goals.",
    category: "Conclaves & Summits",
    tag: "AEEE Energise 2023",
    image: "/assets/news-and-features/news-card-11.webp",
    link: "https://www.linkedin.com/company/mcd-built-environment-research-laboratory/",
    linkText: "View Company Updates",
    isExternal: true,
  },
];
