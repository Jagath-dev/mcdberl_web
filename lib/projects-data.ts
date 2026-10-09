export type SectorProject = {
  title: string;
  location: string;
  image: string;
  slug: string;
  summary: string;
  sectors: string[];
  category: string;
  focus: string[];
};

export type Sector = {
  slug: string;
  label: string;
  bannerImage: string;
  description: string;
  longDescription: string;
};

export const sectors: Sector[] = [
  {
    slug: "advanced-manufacturing",
    label: "Advanced Manufacturing",
    bannerImage: "/assets/projects/sectors/advanced-manufacturing.webp",
    description: "McD BERL leverages advanced manufacturing technologies to design sustainable, net-zero facilities.",
    longDescription: "Advanced manufacturing is being transformed by technologies such as IoT, AI, robotics, additive manufacturing, and advanced materials. McD BERL uses these advancements to design facilities with a focus on value engineering, sustainability, and net zero goals.",
  },
  {
    slug: "arts-and-culture",
    label: "Arts and Culture",
    bannerImage: "/assets/projects/sectors/arts-culture.webp",
    description: "Engineering spaces where creativity, performance and sustainability intersect.",
    longDescription: "Our work in arts and culture spans theatres, museums, galleries and performance spaces — buildings that must serve technical demands while delivering memorable, people-centred experiences.",
  },
  {
    slug: "cities",
    label: "Cities",
    bannerImage: "/assets/projects/sectors/cities.webp",
    description: "Whole-systems thinking for resilient, low-carbon urban environments.",
    longDescription: "We bring integrated engineering to master plans, district strategies and infrastructure projects, helping cities grow in ways that are efficient, equitable and climate-adaptive.",
  },
  {
    slug: "commercial-property",
    label: "Commercial Property",
    bannerImage: "/assets/projects/sectors/commercial.webp",
    description: "High-performance workplaces and commercial developments engineered for people and planet.",
    longDescription: "From campus-scale corporate developments to premium office towers, we design building systems that reduce energy and carbon while delivering comfort, productivity and investment value.",
  },
  {
    slug: "education",
    label: "Education",
    bannerImage: "/assets/projects/sectors/education.webp",
    description: "Learning environments designed around health, daylight and long-term resource efficiency.",
    longDescription: "Schools and universities are among the most people-intensive buildings on a campus. We deliver systems that maximise comfort for occupants while minimising energy and water consumption across the lifecycle.",
  },
  {
    slug: "energy",
    label: "Energy",
    bannerImage: "/assets/projects/sectors/energy.webp",
    description: "Engineering the transition to clean, resilient energy infrastructure.",
    longDescription: "From renewable integration to building-scale energy strategies, we bring modelling rigour and systems thinking to every brief — helping clients reduce dependence on fossil fuels and meet ambitious decarbonisation targets.",
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    bannerImage: "/assets/projects/sectors/healthcare.webp",
    description: "Clinical environments where engineering precision protects patients and enables care.",
    longDescription: "Healthcare buildings operate around the clock, demanding reliability, infection control and energy efficiency in equal measure. Our MEP and sustainability expertise delivers robust systems that support outstanding clinical outcomes.",
  },
  {
    slug: "hotels-and-leisure",
    label: "Hotels and Leisure",
    bannerImage: "/assets/projects/sectors/hotels.webp",
    description: "Hospitality spaces engineered for comfort, experience and environmental responsibility.",
    longDescription: "Hotels and leisure facilities must balance exceptional guest experiences with tight operational budgets. Our integrated approach reduces energy and water use without compromising the quality or ambience guests expect.",
  },
  {
    slug: "international-development",
    label: "International Development",
    bannerImage: "/assets/projects/sectors/international.webp",
    description: "Evidence-led engineering for development projects across emerging markets.",
    longDescription: "We work with governments, multilaterals and NGOs to deliver infrastructure and building projects that raise standards, improve resilience and support economic development in communities across the world.",
  },
  {
    slug: "residential-property",
    label: "Residential Property",
    bannerImage: "/assets/projects/sectors/residential.webp",
    description: "Homes and communities engineered for comfort, efficiency and wellbeing.",
    longDescription: "From high-density urban apartments to large residential developments, we design building services that create healthy, comfortable indoor environments while meeting the tightest energy and carbon standards.",
  },
  {
    slug: "water",
    label: "Water",
    bannerImage: "/assets/projects/sectors/water.webp",
    description: "Water systems and watershed management that protect communities and ecosystems.",
    longDescription: "Water scarcity, flooding and pollution are defining challenges of our era. We bring hydrological expertise and engineering rigour to help cities, industries and communities manage water sustainably.",
  },
];

export const sectorProjects: SectorProject[] = [
  // Advanced Manufacturing
  {
    title: "Soundarya Furniture Manufacturing Facility",
    location: "Tamil Nadu, India",
    image: "/assets/projects/cards/soundarya-furniture.webp",
    slug: "soundarya-furniture",
    summary: "A 15-acre manufacturing project achieving 60% energy reduction for the office area and 100% natural lighting and ventilation throughout the factory, with comprehensive water sustainability and on-site organic waste recycling.",
    sectors: ["advanced-manufacturing"],
    category: "Advanced Manufacturing",
    focus: ["Energy efficiency", "Natural ventilation", "Water sustainability", "Waste recycling"],
  },
  {
    title: "Dynamatic Aerospace Manufacturing Plant",
    location: "Bangalore, India",
    image: "/assets/projects/cards/dynamatic-aerospace.webp",
    slug: "dynamatic-aerospace",
    summary: "Transforming a 1.5 lakh sq ft aerospace plant into a sustainable facility through natural daylighting, stack ventilation, improved lighting efficiency and rainwater harvesting — a model for sustainable industrial design.",
    sectors: ["advanced-manufacturing"],
    category: "Advanced Manufacturing",
    focus: ["Daylighting", "Stack ventilation", "Rainwater harvesting", "Sustainable industrial design"],
  },
  {
    title: "Sartorius Biopharmaceutical Manufacturing Plant",
    location: "India",
    image: "/assets/projects/cards/sartorius-biopharma.webp",
    slug: "sartorius-biopharma",
    summary: "Advanced MEP systems for a biopharmaceutical facility including state-of-the-art cleanrooms, energy-efficient HVAC systems designed to meet the exacting standards of pharmaceutical-grade manufacturing.",
    sectors: ["advanced-manufacturing"],
    category: "Advanced Manufacturing",
    focus: ["Cleanroom design", "HVAC systems", "MEP engineering", "Pharmaceutical compliance"],
  },
  // Commercial Property
  {
    title: "Infosys Campus Jaipur",
    location: "Jaipur, India",
    image: "/assets/projects/cards/infosys-jaipur.webp",
    slug: "infosys-jaipur",
    summary: "A landmark corporate campus integrating sustainable MEP design, energy modelling and smart building systems to create a high-performance work environment in Rajasthan.",
    sectors: ["commercial-property"],
    category: "Commercial Project",
    focus: ["Energy modelling", "Smart systems", "Campus engineering", "Sustainability"],
  },
  {
    title: "Infosys Campus Pune",
    location: "Pune, India",
    image: "/assets/projects/cards/infosys-pune.webp",
    slug: "infosys-pune",
    summary: "Integrated MEP and sustainability consultancy for a major Infosys campus, delivering measurable reductions in energy and water use while supporting a world-class working environment.",
    sectors: ["commercial-property"],
    category: "Commercial Project",
    focus: ["MEP design", "Energy reduction", "Water efficiency", "Workplace comfort"],
  },
  {
    title: "Infosys Campus Hyderabad",
    location: "Hyderabad, India",
    image: "/assets/projects/cards/infosys-hyderabad.webp",
    slug: "infosys-hyderabad",
    summary: "A high-performance Infosys campus with integrated engineering systems that balance operational efficiency, occupant wellbeing and sustainability performance.",
    sectors: ["commercial-property"],
    category: "Commercial Project",
    focus: ["Integrated systems", "Occupant comfort", "Operational efficiency", "Sustainability"],
  },
  {
    title: "Infosys Campus Indore",
    location: "Indore, India",
    image: "/assets/projects/cards/infosys-indore.webp",
    slug: "infosys-indore",
    summary: "Engineering for a modern Infosys campus in Madhya Pradesh, with a focus on energy efficiency, passive design strategies and smart building management.",
    sectors: ["commercial-property"],
    category: "Commercial Project",
    focus: ["Passive design", "Energy efficiency", "Smart BMS", "Campus planning"],
  },
  {
    title: "Wipro Campus Kolkata",
    location: "Kolkata, India",
    image: "/assets/projects/cards/wipro-kolkata.webp",
    slug: "wipro-kolkata",
    summary: "Comprehensive MEP and sustainability consultancy for Wipro's Kolkata campus, achieving best-in-class energy and environmental performance while creating an exceptional workplace.",
    sectors: ["commercial-property"],
    category: "Commercial Project",
    focus: ["MEP consultancy", "Energy performance", "Workplace excellence", "Green building"],
  },
  {
    title: "Umiya Velociti",
    location: "Bangalore, India",
    image: "/assets/projects/cards/umiya-velociti.webp",
    slug: "umiya-velociti",
    summary: "A mixed-use destination where mobility, comfort and efficiency work as one connected system, engineered for long-term operational value.",
    sectors: ["commercial-property"],
    category: "Commercial Project",
    focus: ["Mixed use", "Mobility integration", "Resource efficiency", "Building systems"],
  },
  // Education
  {
    title: "VBIS Mumbai",
    location: "Mumbai, India",
    image: "/assets/projects/cards/vbis.webp",
    slug: "vbis-mumbai",
    summary: "A high-performance international school designed around health, daylight and learning, with engineering systems that reduce energy and water use across the full lifecycle.",
    sectors: ["education"],
    category: "Education",
    focus: ["Daylighting", "Indoor air quality", "Energy efficiency", "Water management"],
  },
  {
    title: "Bharatiya City School",
    location: "Bangalore, India",
    image: "/assets/projects/bharatiya-school.webp",
    slug: "bharatiya-school",
    summary: "A high-performance learning environment designed around daylight, comfort and resource efficiency for a new-generation campus in Bangalore.",
    sectors: ["education"],
    category: "Education",
    focus: ["Daylight strategy", "Energy performance", "Water efficiency", "Thermal comfort"],
  },
  // Healthcare
  {
    title: "JSS Hospital Mysuru",
    location: "Mysuru, India",
    image: "/assets/projects/cards/jss-hospital.webp",
    slug: "jss-hospital-mysuru",
    summary: "Precision MEP engineering for a major teaching hospital, balancing 24/7 operational reliability with infection control, patient comfort and energy efficiency.",
    sectors: ["healthcare"],
    category: "Healthcare",
    focus: ["Clinical MEP", "Infection control", "Energy efficiency", "Reliability"],
  },
  {
    title: "SS Hospital Davanagere",
    location: "Davanagere, India",
    image: "/assets/projects/cards/ss-hospital.png",
    slug: "ss-hospital-davanagere",
    summary: "Integrated building services engineering for a regional hospital, designed to deliver reliable clinical environments while minimising lifecycle operational costs.",
    sectors: ["healthcare"],
    category: "Healthcare",
    focus: ["Building services", "Clinical environments", "Lifecycle cost", "MEP systems"],
  },
  // Hotels and Leisure
  {
    title: "Govardhan Eco Village",
    location: "Mumbai, India",
    image: "/assets/projects/cards/govardhan-eco-village.webp",
    slug: "govardhan-eco-village",
    summary: "An eco-resort designed around passive climate strategies, renewable energy, and zero-waste principles — demonstrating that hospitality and deep sustainability can coexist beautifully.",
    sectors: ["hotels-and-leisure"],
    category: "Hotels and Leisure",
    focus: ["Passive design", "Renewable energy", "Zero waste", "Eco resort"],
  },
  // International Development
  {
    title: "Ciudad del Bicentenario",
    location: "Cartagena, Colombia",
    image: "/assets/projects/cards/ciudad-bicentenario.webp",
    slug: "ciudad-bicentenario",
    summary: "Engineering consultancy for a major urban development project in Colombia, creating resilient, climate-responsive infrastructure for a new city district.",
    sectors: ["international-development"],
    category: "International Development",
    focus: ["Urban planning", "Climate resilience", "Infrastructure", "Sustainability policy"],
  },
  // Water
  {
    title: "Impact Assessment of Sarjapura Lake",
    location: "Bangalore, India",
    image: "/assets/projects/cards/sarjapura-lake.webp",
    slug: "sarjapura-lake",
    summary: "Environmental impact assessment and water management strategy for the Sarjapura Lake development, balancing urban growth with ecosystem protection.",
    sectors: ["water"],
    category: "Water",
    focus: ["Impact assessment", "Water management", "Ecosystem protection", "Urban water"],
  },
  {
    title: "Impact Assessment of Doddathoguru Lake",
    location: "Bangalore, India",
    image: "/assets/projects/cards/doddathoguru-lake.webp",
    slug: "doddathoguru-lake",
    summary: "Comprehensive hydrological assessment and sustainability strategy for the Doddathoguru Lake development, protecting a critical urban water body through evidence-led planning.",
    sectors: ["water"],
    category: "Water",
    focus: ["Hydrology", "Sustainability strategy", "Water body protection", "Urban planning"],
  },
  {
    title: "Hathigaon Water Management",
    location: "Jaipur, India",
    image: "/assets/projects/cards/hathigaon.webp",
    slug: "hathigaon",
    summary: "Water management and sustainability planning for the Hathigaon (Elephant Village) development, integrating traditional water harvesting with modern engineering systems.",
    sectors: ["water"],
    category: "Water",
    focus: ["Water harvesting", "Traditional systems", "Sustainability", "Community water"],
  },
];
