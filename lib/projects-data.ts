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

export type SectorStat = { value: string; label: string };
export type SectorApproach = { title: string; copy: string };

export type Sector = {
  slug: string;
  label: string;
  bannerImage: string;
  /** Optional CSS object-position for the hero crop, e.g. "center 75%". */
  bannerPosition?: string;
  /** One-line hero introduction. */
  description: string;
  /** Short paragraph used on the Projects page sector banner. */
  longDescription: string;
  /** Editorial statement shown beside the red rule. */
  heading: string;
  /** Body paragraphs for the sector page. */
  body: string[];
  /** "How we help" capability rows. */
  approach: SectorApproach[];
  /** Optional headline results from sector projects. */
  stats?: SectorStat[];
};

const WP = "https://mcdberl.com/wp-content/uploads";

export const sectors: Sector[] = [
  {
    slug: "advanced-manufacturing",
    label: "Advanced Manufacturing",
    bannerImage: "/assets/projects/sectors/advanced-manufacturing-hero.webp",
    description:
      "McD BERL uses advanced manufacturing technology to design sustainable, net-zero facilities that integrate renewable energy and efficiency measures.",
    longDescription:
      "Advanced manufacturing is being transformed by IoT, AI, robotics, additive manufacturing and advanced materials. McD BERL uses these advancements to design facilities with a focus on value engineering, sustainability and net-zero goals.",
    heading: "Precision production, lighter footprint.",
    body: [
      "The Internet of Things, artificial intelligence, robotics, additive manufacturing and advanced materials are changing how things are made, pushing production toward greater precision, efficiency and sustainability.",
      "As a sustainability and MEP consultancy, we design manufacturing facilities around value engineering and net-zero goals: energy efficiency, water management, waste reduction, renewables, high-performance building envelopes, smart technologies and carbon offsets.",
    ],
    approach: [
      { title: "Value-engineered MEP", copy: "Right-sized mechanical, electrical and plumbing systems that cut capital cost without compromising process requirements." },
      { title: "Daylight and natural ventilation", copy: "Passive solar strategies, stack ventilation and daylighting that make large factory floors comfortable with less energy." },
      { title: "Water and waste loops", copy: "Rainwater harvesting, water recycling and on-site organic waste treatment that reduce dependence on external resources." },
      { title: "Clean and critical environments", copy: "Cleanrooms, energy-efficient HVAC and building management systems engineered for demanding production standards." },
    ],
    stats: [
      { value: "60%", label: "Energy reduction in the office area, Soundarya Furniture" },
      { value: "100%", label: "Natural lighting and ventilation across the factory floor" },
      { value: "1.5 lakh", label: "Sq ft aerospace plant made sustainable, Dynamatic" },
    ],
  },
  {
    slug: "arts-and-culture",
    label: "Arts and Culture",
    bannerImage: "/assets/projects/sectors/arts-culture.webp",
    description:
      "We design arts and culture centres around passive building design, low-energy cooling, ventilation and advanced lighting.",
    longDescription:
      "Arts and culture spaces preserve heritage, encourage creativity and build community. We apply our environmental design expertise to make them comfortable for artists and audiences while keeping them sustainable to operate.",
    heading: "Spaces that inspire, systems that endure.",
    body: [
      "Arts and culture centres preserve heritage, encourage creativity and build community. They must showcase diverse traditional and contemporary work while using resources efficiently.",
      "We bring environmental design expertise to galleries, museums and cultural venues, creating spaces that are comfortable for artists and audiences, protect the work on display, and run sustainably for decades.",
    ],
    approach: [
      { title: "Passive building design", copy: "Massing, shading and natural ventilation that keep cultural spaces comfortable before mechanical systems are switched on." },
      { title: "Low-energy cooling", copy: "Cooling and ventilation strategies tuned to visitor peaks and the conservation needs of collections." },
      { title: "Advanced lighting", copy: "Daylight and artificial lighting designed together for display quality, visual comfort and low energy use." },
      { title: "Sensitive retrofits", copy: "Upgrades to lighting and HVAC that improve performance while preserving architectural and cultural character." },
    ],
  },
  {
    slug: "cities",
    label: "Cities",
    bannerImage: "/assets/projects/sectors/cities.webp",
    description:
      "Strategies for urban heat islands, urban-scale cooling, and watershed and sewer management that make cities resilient, efficient and comfortable.",
    longDescription:
      "We bring integrated engineering and policy expertise to cities, from heat-island mitigation and watershed management to sustainable building codes that guide urban growth.",
    heading: "Whole-system thinking at city scale.",
    body: [
      "Sustainable cities are how we manage rapid urbanisation, climate change and resource use. The decisions made at city scale shape every building and street within them.",
      "Our consulting spans green roofs and urban green spaces to reduce heat islands, watershed management for clean water supply, energy management with renewables, and efficient sewer and stormwater systems that prevent pollution and flooding. We also write the codes and incentives that make better building the norm.",
    ],
    approach: [
      { title: "Urban heat island mitigation", copy: "Green roofs, urban green space and urban-scale cooling design that bring down city temperatures." },
      { title: "Watershed and stormwater", copy: "Watershed, sewer and stormwater planning that secures clean water and reduces flood risk." },
      { title: "City energy strategy", copy: "Renewable integration and efficient systems planned across districts, not one building at a time." },
      { title: "Codes and policy incentives", copy: "Green building regulation and incentive frameworks that move whole markets toward better performance." },
    ],
  },
  {
    slug: "commercial-property",
    label: "Commercial Property",
    bannerImage: "/assets/projects/sectors/commercial.webp",
    description:
      "Low-energy commercial buildings using passive strategies, urban-scale cooling and advanced facade engineering for glare-free, fully daylit spaces.",
    longDescription:
      "Commercial properties are being pushed toward net-zero energy, abundant daylight and occupant health. We design for very low Energy Performance Index values with efficient, right-sized building services.",
    heading: "Workplaces that use less and give more.",
    body: [
      "Commercial property is being pushed toward sustainability, efficiency and occupant health, with goals such as net-zero energy and abundant natural light.",
      "We lead in achieving very low Energy Performance Index (EPI) values. We reduce envelope heat gain through facade and material choices, right-size mechanical systems through simulation rather than rules of thumb, and use natural ventilation and passive or low-energy cooling wherever the climate allows.",
    ],
    approach: [
      { title: "Facade engineering", copy: "Shading and envelope design that cut heat gain and deliver glare-free daylight deep into floor plates." },
      { title: "Simulation-led sizing", copy: "Energy modelling that right-sizes HVAC and electrical systems instead of relying on rules of thumb." },
      { title: "Passive and low-energy cooling", copy: "Natural ventilation and low-energy cooling strategies that lower operating cost year after year." },
      { title: "Integrated building services", copy: "Public health engineering, fire safety, HVAC and building management designed as one coordinated system." },
    ],
    stats: [
      { value: "74", label: "kWh/m²/yr EPI achieved at Infosys Bhubaneswar" },
      { value: "80%", label: "Daylit floor area at Infosys Bhubaneswar" },
      { value: "1.5M", label: "Sq ft delivered at Bharatiya City SEZ3" },
    ],
  },
  {
    slug: "data-centres-and-technology",
    label: "Data Centres and Technology",
    bannerImage: "/assets/services/engineering-systems.jpg",
    description:
      "We help data centres achieve much lower Power Usage Effectiveness through low-energy cooling and sustainable MEP design.",
    longDescription:
      "Data centres power the digital economy but consume vast amounts of energy. We design facilities that lower PUE through passive cooling, optimised airflow, renewable integration and high-efficiency MEP systems.",
    heading: "Lower PUE, by design.",
    body: [
      "Data centres support the digital economy but use enormous amounts of energy. Power Usage Effectiveness (PUE), the ratio of total facility energy to IT equipment energy, is the key measure of how efficiently they run.",
      "Lowering PUE reduces both operating cost and carbon emissions. We design data centres with passive cooling, advanced ventilation and high-efficiency HVAC, optimise airflow, integrate renewable energy and apply energy-efficient MEP design so the whole facility runs lean.",
    ],
    approach: [
      { title: "Low-energy cooling", copy: "Passive and high-efficiency cooling strategies that cut the largest non-IT load in the building." },
      { title: "Airflow optimisation", copy: "Containment and ventilation design that delivers cooling exactly where the IT load needs it." },
      { title: "Renewable integration", copy: "On-site and procured renewable energy built into the electrical strategy from day one." },
      { title: "Efficient MEP design", copy: "Electrical and mechanical systems engineered for reliability, redundancy and minimum losses." },
    ],
  },
  {
    slug: "education",
    label: "Education",
    bannerImage: "/assets/projects/sectors/education.webp",
    description:
      "High-profile educational buildings that produce more water and energy than they use, creating net-positive campuses.",
    longDescription:
      "We design universities and schools that are net positive for water and energy, using water management, efficient MEP systems and renewables to create campuses that are living laboratories for sustainability.",
    heading: "Campuses that teach by example.",
    body: [
      "We design universities and educational buildings that are net positive for water and energy, producing more than they consume.",
      "Our campuses combine water management systems, efficient MEP and renewable energy to reduce resource use and raise environmental awareness among students. They work as living laboratories that also support student health and wellbeing.",
    ],
    approach: [
      { title: "Net-positive water", copy: "Rainwater ponds, harvesting and on-site wastewater treatment that make campuses water self-sustainable." },
      { title: "Net-zero energy", copy: "District cooling, centralised lighting control and renewables planned across the whole campus." },
      { title: "Daylit learning spaces", copy: "Classrooms designed for 100% daylight and healthy indoor air, improving focus and comfort." },
      { title: "Low-load building design", copy: "Strategic facades and underfloor air distribution that cut HVAC load before equipment is chosen." },
    ],
    stats: [
      { value: "42%", label: "Energy savings at the 75-acre IIM Trichy campus" },
      { value: "48%", label: "Reduction in HVAC load at MNLU Nagpur" },
      { value: "100%", label: "Daylit classrooms at Bharatiya City School" },
    ],
  },
  {
    slug: "energy",
    label: "Energy",
    bannerImage: "/assets/projects/sectors/energy-hero.webp",
    description:
      "Renewable energy solutions for buildings, campuses and cities, with district cooling and heating that reduce fossil fuel use.",
    longDescription:
      "Renewable energy is now a practical alternative to fossil fuels. We design systems at every scale, from single buildings to whole cities, combining renewables with centralised district cooling and heating.",
    heading: "From single buildings to energy-independent cities.",
    body: [
      "Renewable energy is becoming cheaper and more widely available, making it a practical alternative to fossil fuels that supports climate goals and energy security.",
      "We design systems at every scale, from single buildings to whole cities, that combine solar, wind and other renewables with centralised district cooling and heating. Every project aims for energy independence and sets a new sustainability benchmark.",
    ],
    approach: [
      { title: "Renewable integration", copy: "Solar, wind and other renewables designed into buildings, campuses and city systems." },
      { title: "District cooling and heating", copy: "Centralised thermal networks that serve many buildings more efficiently than individual plants." },
      { title: "Energy management", copy: "Advanced controls and monitoring that keep performance on target after handover." },
      { title: "Energy policy and strategy", copy: "State-level strategies that accelerate renewable adoption and cut carbon emissions." },
    ],
    stats: [
      { value: "42%", label: "Lower energy use than conventional design, IIM Trichy" },
      { value: "45%", label: "Reduction in overall electrical consumption, MNLU" },
      { value: "75 acres", label: "Served by district cooling at IIM Trichy" },
    ],
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    bannerImage: "/assets/projects/sectors/healthcare.webp",
    description:
      "Sustainable healthcare buildings that use advanced MEP systems and natural ventilation to combat Sick Building Syndrome.",
    longDescription:
      "Clean, healthy buildings matter for patients and staff. We combine low-energy solutions with natural ventilation to improve air quality, cut energy use and lower operating costs.",
    heading: "Clean air is part of the cure.",
    body: [
      "Sick Building Syndrome, driven by poor indoor air quality and inadequate ventilation, can cause headaches, respiratory problems and fatigue in patients and staff.",
      "Designing healthcare buildings well reduces operating expenses while improving health outcomes. We combine low-energy solutions with natural ventilation to improve air quality and cut energy use, creating facilities that support recovery and staff efficiency.",
    ],
    approach: [
      { title: "Indoor air quality", copy: "Ventilation design that tackles Sick Building Syndrome at its source and protects patients." },
      { title: "HVAC peer review", copy: "Independent review of mechanical designs that removes oversizing and unlocks major capital savings." },
      { title: "Passive cooling", copy: "Strategies such as passive downdraft evaporative cooling that slash air-conditioning demand." },
      { title: "Water recycling", copy: "Rainwater harvesting and greywater recycling that reduce water demand in 24/7 facilities." },
    ],
    stats: [
      { value: "65%", label: "Cut in air-conditioning power, LV Prasad Eye Hospital" },
      { value: "40%", label: "Cut in air-conditioning power, JSS Hospital Mysuru" },
      { value: "₹14 cr", label: "HVAC capital saved at JSS (₹20 cr to ₹6 cr)" },
    ],
  },
  {
    slug: "hotels-and-leisure",
    label: "Hotels and Leisure",
    bannerImage: "/assets/projects/sectors/hotels-hero.webp",
    description:
      "Lower capital and operating costs for hotels and leisure facilities through sustainable design, low-energy systems and efficient water management.",
    longDescription:
      "Guests increasingly expect sustainability alongside comfort. Through value engineering and sustainable design we reduce capital and operating expenditure while helping hospitality clients reach net zero.",
    heading: "Guest comfort without the carbon.",
    body: [
      "Hotels and leisure businesses face high operating costs, energy inefficiency and water management challenges, while guests increasingly expect sustainable practices alongside comfort.",
      "We address both through value engineering and sustainable design that reduce capital and operating expenditure. Our work helps clients meet net-zero targets, appeal to eco-conscious guests and maintain financial and environmental performance.",
    ],
    approach: [
      { title: "Value engineering", copy: "Leaner systems and smarter specifications that lower the cost to build and run." },
      { title: "Passive evaporative cooling", copy: "Low-energy cooling that keeps guests comfortable while halving HVAC energy use." },
      { title: "Water efficiency", copy: "Low-flow fixtures, rainwater harvesting and wastewater recycling across the property." },
      { title: "Certification support", copy: "Design and documentation for IGBC, GRIHA and other green building ratings." },
    ],
    stats: [
      { value: "50%", label: "Lower HVAC energy at Taj Kanha eco-resort" },
      { value: "60%", label: "Lower water demand at Govardhan Eco Village" },
      { value: "38%", label: "Lower HVAC energy, Commercial Complex Durgapur" },
    ],
  },
  {
    slug: "international-development",
    label: "International Development",
    bannerImage: "/assets/projects/sectors/international.webp",
    description:
      "Shaping international development through innovative MEP systems, combined heat and power solutions and comprehensive master planning.",
    longDescription:
      "We work on international projects spanning cities, campuses, buildings and agricultural initiatives, with MEP design, CHP solutions, master planning and urban design.",
    heading: "Engineering that travels well.",
    body: [
      "We work on international projects spanning cities, campuses, buildings and agricultural initiatives.",
      "Our services include MEP design, combined heat and power (CHP) solutions and master planning, with a focus on urban-scale cooling, massing strategies and outdoor space planning. We also deliver urban design, including streets and public space, with an approach that is sustainable, efficient and economically viable.",
    ],
    approach: [
      { title: "MEP design", copy: "Mechanical, electrical and plumbing systems adapted to local climates, codes and supply chains." },
      { title: "Combined heat and power", copy: "CHP solutions that turn one fuel source into both electricity and useful heat." },
      { title: "Master planning", copy: "Urban-scale cooling, massing and outdoor space strategies set at the earliest stage." },
      { title: "Energy simulation", copy: "Building energy models calibrated against real BMS data to find retrofit savings." },
    ],
    stats: [
      { value: "8,760", label: "Hours of BMS data calibrated against simulation, 3 Times Square" },
      { value: "2 lakh", label: "Sq ft retrofit analysed in New York" },
    ],
  },
  {
    slug: "residential-property",
    label: "Residential Property",
    bannerImage: "/assets/projects/sectors/residential.webp",
    description:
      "Smart design and advanced technology that make capital investment more efficient and support net-zero homes.",
    longDescription:
      "Developers face pressure to meet sustainability targets without overspending. Our design, modelling and smart management services optimise both upfront and operating costs.",
    heading: "Better homes, smarter investment.",
    body: [
      "Developers and builders face pressure to meet sustainability targets without overspending. Net-zero goals require upfront capital for green technologies and materials, and ongoing costs for energy and water management.",
      "Regulations and market demand add further complexity. Our design, advanced modelling and smart management services optimise both upfront and operating costs, delivering long-term savings and meeting regulatory requirements.",
    ],
    approach: [
      { title: "Advanced modelling", copy: "Energy and water models that test options before money is committed." },
      { title: "Water savings", copy: "Efficient fixtures, wastewater recycling and rainwater harvesting for every home." },
      { title: "Passive comfort", copy: "Shading and envelope design that keep homes comfortable with less mechanical cooling." },
      { title: "On-site renewables", copy: "Solar systems sized to the community's real demand profile." },
    ],
    stats: [
      { value: "60%", label: "Water savings at Kings House, Bangalore" },
      { value: "35%", label: "Energy savings at Kings House, Bangalore" },
      { value: "50,000", label: "Sq ft green residential building" },
    ],
  },
  {
    slug: "retail",
    label: "Retail",
    bannerImage: "/assets/projects/sectors/retail-hero.webp",
    description:
      "Advanced net-zero solutions for retail projects that control capital cost and build in sustainable practice from the start.",
    longDescription:
      "Retailers must be sustainable while staying profitable. We integrate sustainable technology early to limit capital spend, and use advanced management systems to cut energy, water and maintenance costs.",
    heading: "Sustainable stores that stay profitable.",
    body: [
      "Retailers face pressure to be sustainable while staying profitable and keeping customers satisfied. Net-zero energy, water and carbon goals can require significant upfront investment, and ongoing energy, water and maintenance costs are hard to manage.",
      "We integrate sustainable technology early to limit capital spending, then use advanced management systems and ongoing support to cut operating costs, helping clients meet regulations, strengthen their sustainability credentials and achieve long-term savings.",
    ],
    approach: [
      { title: "Early integration", copy: "Sustainable technology designed in from the start, so it costs less than adding it later." },
      { title: "High-traffic HVAC", copy: "Advanced HVAC that holds comfort through peak footfall without wasting energy." },
      { title: "Efficient lighting", copy: "Lighting that showcases products while cutting one of retail's biggest loads." },
      { title: "Operational support", copy: "Management systems and ongoing support that keep operating costs down." },
    ],
  },
  {
    slug: "scientific-research-facilities",
    label: "Scientific Research Facilities",
    bannerImage: `${WP}/2024/08/National-Center-for-Sustainable-Coastal-Management-Project-Featured-image.webp`,
    description:
      "Sustainable technologies for research facilities that optimise capital cost, support advanced operations and lower energy and water costs.",
    longDescription:
      "Research facilities must balance advanced technical infrastructure with sustainability goals. We design net-zero solutions that optimise capital cost and reduce operating cost without interrupting research.",
    heading: "Uninterrupted science, net-zero ambition.",
    body: [
      "Scientific research facilities must balance advanced technical infrastructure with sustainability goals. Net-zero targets often require high upfront capital for specialised equipment, efficient systems and sustainable materials.",
      "Research must continue uninterrupted while meeting strict regulations. We design net-zero solutions using sustainable technologies and materials to optimise capital cost, and energy and water management systems that reduce operating cost while maintaining high operational standards.",
    ],
    approach: [
      { title: "Precision environments", copy: "Energy-efficient HVAC and electrical design for high-precision research and nano-manufacturing." },
      { title: "Facility management systems", copy: "Monitoring and controls that keep critical operations stable and efficient." },
      { title: "Water stewardship", copy: "Rainwater harvesting and wastewater recycling across research campuses." },
      { title: "Natural light and ventilation", copy: "Passive strategies for offices, accommodation and support spaces." },
    ],
  },
  {
    slug: "water",
    label: "Water",
    bannerImage: "/assets/projects/sectors/water-hero.webp",
    bannerPosition: "center 78%",
    description:
      "Recycling, conservation and rainwater harvesting that create net-zero and net-positive campuses less reliant on outside water.",
    longDescription:
      "Freshwater scarcity, droughts and depleted aquifers are intensifying. We apply watershed management and scientific conservation to reduce dependence on external water sources.",
    heading: "Every drop, accounted for.",
    body: [
      "Population growth, climate change and over-extraction are intensifying freshwater scarcity, droughts, depleted aquifers and poor water quality. Conserving, recycling and harvesting water are essential responses.",
      "We apply watershed management and scientific conservation, integrating recycling, efficient water use and rainwater harvesting into every project. The aim is to reduce dependence on external sources and help communities and businesses meet their water sustainability goals.",
    ],
    approach: [
      { title: "Watershed management", copy: "Catchment-scale planning that secures supply and protects ecosystems." },
      { title: "Rainwater harvesting", copy: "Ponds, recharge and storage that turn monsoon rain into year-round supply." },
      { title: "Recycling and reuse", copy: "Wastewater treatment and greywater systems that close the loop on site." },
      { title: "Lake impact assessment", copy: "Hydrological analysis and impact assessment that protect urban water bodies." },
    ],
    stats: [
      { value: "48%", label: "Reduction in water consumption at IIM Trichy" },
      { value: "8 acres", label: "Rainwater harvesting pond on the IIM Trichy campus" },
    ],
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
    summary: "Advanced MEP systems for a biopharmaceutical facility including state-of-the-art cleanrooms and energy-efficient HVAC designed to meet the exacting standards of pharmaceutical-grade manufacturing.",
    sectors: ["advanced-manufacturing", "scientific-research-facilities"],
    category: "Advanced Manufacturing",
    focus: ["Cleanroom design", "HVAC systems", "MEP engineering", "Pharmaceutical compliance"],
  },
  {
    title: "Mandana Garments",
    location: "Tarapur / Boisar, Mumbai",
    image: "/assets/projects/mandana-garments.webp",
    slug: "mandana-garments",
    summary: "Industrial performance built around efficient processes, comfort and reduced operating costs.",
    sectors: ["advanced-manufacturing"],
    category: "Advanced Manufacturing",
    focus: ["Industrial systems", "Energy reduction", "Process efficiency"],
  },

  // Arts and Culture
  {
    title: "Kaladham",
    location: "Vijayanagara, India",
    image: `${WP}/2024/08/Kaladham-Project-Featured-image-1.webp`,
    slug: "kaladham",
    summary: "A cultural space for Indian art and heritage with solar power, optimised HVAC, rainwater harvesting, and natural ventilation and lighting.",
    sectors: ["arts-and-culture"],
    category: "Arts and Culture",
    focus: ["Solar power", "Optimised HVAC", "Rainwater harvesting", "Natural ventilation"],
  },
  {
    title: "Indian Pavilion, Expo 2010",
    location: "Shanghai, China",
    image: "/assets/projects/indian-pavilion-expo.webp",
    slug: "indian-pavilion-expo-2010",
    summary: "A pavilion showcasing India's cultural heritage and sustainability, blending traditional elements with modern, energy-efficient design.",
    sectors: ["arts-and-culture"],
    category: "Arts and Culture",
    focus: ["Passive design", "Temporary systems", "Material strategy"],
  },
  {
    title: "Venkatappa Art Gallery",
    location: "Bangalore, India",
    image: `${WP}/2024/08/Venkatappa-Art-Gallery%E2%80%8B-Project-Featured-image.webp`,
    slug: "venkatappa-art-gallery",
    summary: "A sustainability and energy-efficiency upgrade with new lighting and HVAC systems that preserves the gallery's cultural and architectural character.",
    sectors: ["arts-and-culture"],
    category: "Arts and Culture",
    focus: ["Lighting retrofit", "HVAC upgrade", "Heritage sensitivity"],
  },

  // Cities
  {
    title: "Green Building Regulation Jakarta",
    location: "Jakarta, Indonesia",
    image: "/assets/projects/green-building-regulation-jakarta.webp",
    slug: "green-building-regulation-jakarta",
    summary: "Sustainable building codes and regulations to guide Jakarta's urban growth, focusing on energy efficiency, water conservation and sustainable construction.",
    sectors: ["cities"],
    category: "Cities",
    focus: ["Building codes", "Energy efficiency", "Water conservation"],
  },
  {
    title: "Green Building Regulation Colombia",
    location: "Colombia",
    image: "/assets/projects/green-building-regulation-colombia.webp",
    slug: "green-building-regulation-colombia",
    summary: "Sustainable building codes and environmental regulations to guide Colombia's urban development, emphasising energy efficiency, water conservation and sustainable construction.",
    sectors: ["cities", "international-development"],
    category: "Cities",
    focus: ["Policy", "Codes", "Performance pathways"],
  },
  {
    title: "Policy Incentives for Chennai",
    location: "Chennai, India",
    image: `${WP}/2024/08/Policy-Incentives-for-Chennai%E2%80%8B-Project-Featured-image-final.webp`,
    slug: "policy-incentives-chennai",
    summary: "Policy incentives that encourage energy efficiency, water conservation and green technology adoption in Chennai's urban development.",
    sectors: ["cities"],
    category: "Cities",
    focus: ["Policy incentives", "Green technology", "Urban development"],
  },

  // Commercial Property
  {
    title: "Infosys Nagpur",
    location: "Nagpur, India",
    image: "/assets/projects/infosys-nagpur.webp",
    slug: "infosys-nagpur",
    summary: "A sustainable campus with optimised HVAC, efficient lighting, renewable energy integration, rainwater harvesting, wastewater recycling, and natural light and ventilation.",
    sectors: ["commercial-property"],
    category: "Commercial Property",
    focus: ["Campus systems", "Renewable integration", "Water recycling"],
  },
  {
    title: "Bharatiya City SEZ3",
    location: "Bangalore, India",
    image: "/assets/projects/bharatiya-city-sez3.webp",
    slug: "bharatiya-city-sez3",
    summary: "A 1.5 million sq ft project with sustainability, public health engineering, fire safety, HVAC and building management services, focused on cost-effective sustainable design.",
    sectors: ["commercial-property"],
    category: "Commercial Property",
    focus: ["Public health engineering", "Fire safety", "HVAC", "BMS"],
  },
  {
    title: "Infosys Bhubaneswar",
    location: "Bhubaneswar, India",
    image: `${WP}/2024/07/Infosys-Bhubaneswar-Project-Featured-image.png`,
    slug: "infosys-bhubaneswar",
    summary: "A 4.5 lakh sq ft IGBC Platinum facility with shading devices, 80% daylit areas, an EPI of 74 kWh/m²/yr and an envelope load of 0.79 W/sq ft.",
    sectors: ["commercial-property"],
    category: "Commercial Property",
    focus: ["IGBC Platinum", "Daylighting", "Low EPI", "Envelope design"],
  },
  {
    title: "Infosys Campus Jaipur",
    location: "Jaipur, India",
    image: "/assets/projects/cards/infosys-jaipur.webp",
    slug: "infosys-jaipur",
    summary: "A corporate campus integrating sustainable MEP design, energy modelling and smart building systems to create a high-performance work environment in Rajasthan.",
    sectors: ["commercial-property"],
    category: "Commercial Property",
    focus: ["Energy modelling", "Smart systems", "Campus engineering"],
  },
  {
    title: "Infosys Campus Pune",
    location: "Pune, India",
    image: "/assets/projects/cards/infosys-pune.webp",
    slug: "infosys-pune",
    summary: "Integrated MEP and sustainability consultancy for a major Infosys campus, delivering measurable reductions in energy and water use.",
    sectors: ["commercial-property"],
    category: "Commercial Property",
    focus: ["MEP design", "Energy reduction", "Water efficiency"],
  },
  {
    title: "Infosys Campus Hyderabad",
    location: "Hyderabad, India",
    image: "/assets/projects/cards/infosys-hyderabad.webp",
    slug: "infosys-hyderabad",
    summary: "A high-performance Infosys campus with integrated engineering systems that balance operational efficiency, occupant wellbeing and sustainability.",
    sectors: ["commercial-property"],
    category: "Commercial Property",
    focus: ["Integrated systems", "Occupant comfort", "Operational efficiency"],
  },
  {
    title: "Infosys Campus Indore",
    location: "Indore, India",
    image: "/assets/projects/cards/infosys-indore.webp",
    slug: "infosys-indore",
    summary: "Engineering for a modern Infosys campus in Madhya Pradesh, with a focus on energy efficiency, passive design and smart building management.",
    sectors: ["commercial-property"],
    category: "Commercial Property",
    focus: ["Passive design", "Energy efficiency", "Smart BMS"],
  },
  {
    title: "Wipro Campus Kolkata",
    location: "Kolkata, India",
    image: "/assets/projects/cards/wipro-kolkata.webp",
    slug: "wipro-kolkata",
    summary: "MEP and sustainability consultancy for Wipro's Kolkata campus, achieving strong energy and environmental performance in a high-quality workplace.",
    sectors: ["commercial-property"],
    category: "Commercial Property",
    focus: ["MEP consultancy", "Energy performance", "Green building"],
  },
  {
    title: "Umiya Velociti",
    location: "Bangalore, India",
    image: "/assets/projects/cards/umiya-velociti.webp",
    slug: "umiya-velociti",
    summary: "A mixed-use destination where mobility, comfort and efficiency work as one connected system, engineered for long-term operational value.",
    sectors: ["commercial-property"],
    category: "Commercial Property",
    focus: ["Mixed use", "Mobility integration", "Resource efficiency"],
  },

  // Education / Energy / Water
  {
    title: "IIM Trichy",
    location: "Tiruchirappalli, India",
    image: `${WP}/2024/08/IIM-Trichy-Project-Featured-image-final.webp`,
    slug: "iim-trichy",
    summary: "A 75-acre, water self-sustainable, net-zero energy campus with centralised lighting, an 8-acre rainwater pond and district cooling — 42% energy savings, 48% water savings and a 54% cut in HVAC energy.",
    sectors: ["education", "energy", "water"],
    category: "Education",
    focus: ["Net-zero energy", "District cooling", "Rainwater pond", "Water self-sufficiency"],
  },
  {
    title: "Maharashtra National Law University",
    location: "Nagpur, India",
    image: `${WP}/2024/06/Paradigm_MNLU_1445_H_Hostel_v05_18-7-2017-scaled.jpg`,
    slug: "mnlu-nagpur",
    summary: "A 2 million sq ft campus with a strategic facade and underfloor air distribution — a 48% reduction in HVAC load and 45% lower electrical consumption, plus rainwater harvesting and on-site wastewater treatment.",
    sectors: ["education", "energy"],
    category: "Education",
    focus: ["Facade design", "Underfloor air distribution", "Wastewater treatment"],
  },
  {
    title: "Bharatiya City School",
    location: "Bangalore, India",
    image: "/assets/projects/bharatiya-school.webp",
    slug: "bharatiya-school",
    summary: "A 100,000 sq ft school that is 100% daylit, uses an energy-efficient HVAC system and is fully water self-sustainable.",
    sectors: ["education"],
    category: "Education",
    focus: ["Daylight strategy", "Energy performance", "Water self-sufficiency"],
  },
  {
    title: "VBIS Mumbai",
    location: "Mumbai, India",
    image: "/assets/projects/cards/vbis.webp",
    slug: "vbis-mumbai",
    summary: "A high-performance international school designed around health, daylight and learning, with systems that reduce energy and water use across the lifecycle.",
    sectors: ["education"],
    category: "Education",
    focus: ["Daylighting", "Indoor air quality", "Energy efficiency"],
  },
  {
    title: "HAREDA",
    location: "Haryana, India",
    image: `${WP}/2024/09/Hareda-Project-picture-9-scaled.webp`,
    slug: "hareda",
    summary: "Policy and energy strategy for the Haryana Renewable Energy Development Agency to expand solar, wind and other renewables across the state and cut carbon emissions.",
    sectors: ["energy"],
    category: "Energy",
    focus: ["Energy policy", "Renewable adoption", "Carbon reduction"],
  },

  // Healthcare
  {
    title: "JSS Hospital Mysuru",
    location: "Mysuru, India",
    image: "/assets/projects/cards/jss-hospital.webp",
    slug: "jss-hospital-mysuru",
    summary: "A 5.5 lakh sq ft hospital where a peer review of the HVAC systems cut air-conditioning power by 40% and reduced HVAC capital expenditure from ₹20 crore to ₹6 crore.",
    sectors: ["healthcare"],
    category: "Healthcare",
    focus: ["HVAC peer review", "Capital savings", "Clinical MEP"],
  },
  {
    title: "LV Prasad Eye Hospital",
    location: "Hyderabad, India",
    image: `${WP}/2024/07/LV-Prasad-Hospital-Hyderabad-Project-Featured-image-final.webp`,
    slug: "lv-prasad-eye-hospital",
    summary: "A 1 lakh sq ft hospital with passive downdraft evaporative cooling that achieved a 65% reduction in air-conditioning power consumption.",
    sectors: ["healthcare"],
    category: "Healthcare",
    focus: ["Passive downdraft cooling", "Energy efficiency", "Patient comfort"],
  },
  {
    title: "SS Hospital",
    location: "Davanagere, India",
    image: "/assets/projects/cards/ss-hospital.png",
    slug: "ss-hospital-davanagere",
    summary: "A 1.2 lakh sq ft hospital with a 50% cut in HVAC energy use, plus rainwater harvesting and greywater recycling that reduced water demand by 40%.",
    sectors: ["healthcare"],
    category: "Healthcare",
    focus: ["HVAC efficiency", "Greywater recycling", "Rainwater harvesting"],
  },

  // Hotels and Leisure
  {
    title: "Commercial Complex Durgapur",
    location: "Durgapur, India",
    image: `${WP}/2024/07/Commercial-Complex-Durgapur-Project-Featured-image-final.webp`,
    slug: "commercial-complex-durgapur",
    summary: "A 200,000 sq ft IGBC Platinum building with a daylight-focused facade, low-flow fixtures, rainwater harvesting, rooftop solar PV and a 38% cut in HVAC energy.",
    sectors: ["hotels-and-leisure"],
    category: "Hotels and Leisure",
    focus: ["IGBC Platinum", "Rooftop solar", "Daylight facade"],
  },
  {
    title: "Govardhan Eco Village",
    location: "Near Mumbai, India",
    image: "/assets/projects/cards/govardhan-eco-village.webp",
    slug: "govardhan-eco-village",
    summary: "A farm community and retreat centre that cut water demand by 60% through efficient fixtures, rainwater harvesting and wastewater recycling, rated GRIHA 5-Star.",
    sectors: ["hotels-and-leisure"],
    category: "Hotels and Leisure",
    focus: ["GRIHA 5-Star", "Water recycling", "Eco retreat"],
  },
  {
    title: "Taj Kanha",
    location: "Kanha National Park, India",
    image: `${WP}/2024/08/Taj-Kanha-Project-Featured-image-final.webp`,
    slug: "taj-kanha",
    summary: "A 24-room eco-resort on 24 acres whose passive evaporative cooling halved HVAC energy and cut per-room cooling from 12 TR to 5 TR. Winner of the Emmerson Cup Award.",
    sectors: ["hotels-and-leisure"],
    category: "Hotels and Leisure",
    focus: ["Passive evaporative cooling", "Eco-resort", "Award-winning"],
  },

  // International Development
  {
    title: "Coachilin MDC",
    location: "California, USA",
    image: "/assets/projects/coachilin-mdc.webp",
    slug: "coachilin-mdc",
    summary: "MEP services for a large-scale campus with a focus on renewable energy, water conservation and advanced HVAC.",
    sectors: ["international-development"],
    category: "International Development",
    focus: ["MEP design", "Renewables", "Advanced HVAC"],
  },
  {
    title: "240 CPS School",
    location: "New York, USA",
    image: "/assets/projects/240-cps-apartment.webp",
    slug: "240-cps-school",
    summary: "A sustainable educational facility where MEP services optimised HVAC, lighting and water management for energy efficiency.",
    sectors: ["international-development"],
    category: "International Development",
    focus: ["HVAC optimisation", "Lighting", "Water management"],
  },
  {
    title: "3 Times Square",
    location: "New York, USA",
    image: "/assets/projects/3-times-square.webp",
    slug: "3-times-square",
    summary: "Building energy simulation for a 2 lakh sq ft retrofit, calibrated against 8,760 hours of BMS data to identify efficiency improvements.",
    sectors: ["international-development"],
    category: "International Development",
    focus: ["Energy simulation", "BMS calibration", "Retrofit strategy"],
  },
  {
    title: "Ciudad del Bicentenario",
    location: "Cartagena, Colombia",
    image: "/assets/projects/cards/ciudad-bicentenario.webp",
    slug: "ciudad-bicentenario",
    summary: "Engineering consultancy for a major urban development in Colombia, creating resilient, climate-responsive infrastructure for a new city district.",
    sectors: ["international-development"],
    category: "International Development",
    focus: ["Urban planning", "Climate resilience", "Infrastructure"],
  },

  // Residential Property
  {
    title: "Kings House",
    location: "Bangalore, India",
    image: `${WP}/2024/08/Kings-House-Project-Featured-image.webp`,
    slug: "kings-house",
    summary: "A 50,000 sq ft green building achieving 60% water savings and 35% energy savings through efficient fixtures, wastewater recycling, shading and solar systems.",
    sectors: ["residential-property"],
    category: "Residential Property",
    focus: ["Water savings", "Solar", "Shading"],
  },
  {
    title: "Organo Development",
    location: "Near Hyderabad, India",
    image: `${WP}/2024/07/Organo-Development-Project-Featured-image.webp`,
    slug: "organo-development",
    summary: "A sustainable residential community focused on ecological balance, with rainwater harvesting, solar power and organic farming.",
    sectors: ["residential-property"],
    category: "Residential Property",
    focus: ["Ecological design", "Solar power", "Organic farming"],
  },
  {
    title: "Lodha Icon",
    location: "Mumbai, India",
    image: `${WP}/2024/07/Lodha-Icon-Project-Featured-image.png`,
    slug: "lodha-icon",
    summary: "A luxury residential development with energy-efficient HVAC and lighting, rainwater harvesting and water-saving fixtures.",
    sectors: ["residential-property"],
    category: "Residential Property",
    focus: ["Efficient HVAC", "Lighting", "Water saving"],
  },

  // Retail
  {
    title: "Decathlon",
    location: "India",
    image: `${WP}/2024/08/Decathlon%E2%80%8B-Project-Featured-image.webp`,
    slug: "decathlon",
    summary: "MEP services for a large retail space, with advanced HVAC, efficient lighting and water conservation to reduce environmental impact in a high-traffic setting.",
    sectors: ["retail"],
    category: "Retail",
    focus: ["Advanced HVAC", "Efficient lighting", "Water conservation"],
  },
  {
    title: "Sahara Ganj Shopping Mall",
    location: "Lucknow, India",
    image: `${WP}/2024/08/Sahara-Ganj-Shopping-Mall%E2%80%8B-Project-Featured-image-final.webp`,
    slug: "sahara-ganj-mall",
    summary: "MEP services focused on energy efficiency, with advanced HVAC, optimised lighting and water-saving measures to lower the mall's environmental footprint.",
    sectors: ["retail"],
    category: "Retail",
    focus: ["Energy efficiency", "Optimised lighting", "Water saving"],
  },
  {
    title: "Fab India",
    location: "India",
    image: `${WP}/2024/08/Fab-India%E2%80%8B-Project-Featured-image.webp`,
    slug: "fab-india",
    summary: "MEP services for retail spaces, with advanced HVAC, efficient lighting and water conservation for a comfortable, environmentally friendly shopping environment.",
    sectors: ["retail"],
    category: "Retail",
    focus: ["Retail MEP", "Comfort", "Water conservation"],
  },

  // Scientific Research Facilities
  {
    title: "CMTI – Nano Manufacturing Technology Centre",
    location: "Bangalore, India",
    image: `${WP}/2024/08/CMTI-NMTC-featured-image-final.webp`,
    slug: "cmti-nmtc",
    summary: "MEP services with energy-efficient HVAC, optimised electrical design and facility management systems for high-precision nano-manufacturing.",
    sectors: ["scientific-research-facilities"],
    category: "Scientific Research",
    focus: ["Precision HVAC", "Electrical design", "Facility management"],
  },
  {
    title: "Transit Accommodation Block – Centre for Human Genetics",
    location: "Bangalore, India",
    image: "/assets/projects/transit-accommodation-block.webp",
    slug: "transit-accomodation-block-centre-for-human-genetics",
    summary: "Energy-efficient design with solar panels, optimised HVAC, rainwater harvesting, and natural lighting and ventilation.",
    sectors: ["scientific-research-facilities"],
    category: "Scientific Research",
    focus: ["Solar", "Optimised HVAC", "Natural ventilation"],
  },
  {
    title: "National Centre for Sustainable Coastal Management",
    location: "Chennai, India",
    image: `${WP}/2024/08/National-Center-for-Sustainable-Coastal-Management-Project-Featured-image.webp`,
    slug: "ncscm-chennai",
    summary: "A sustainable research facility with solar panels, optimised HVAC, rainwater harvesting, wastewater recycling, and natural ventilation and lighting.",
    sectors: ["scientific-research-facilities"],
    category: "Scientific Research",
    focus: ["Solar", "Wastewater recycling", "Natural ventilation"],
  },

  // Water
  {
    title: "Sira Lake Development",
    location: "Karnataka, India",
    image: `${WP}/2024/08/Sira-Lake-Development-Project-Featured-image-final-1.webp`,
    slug: "sira-lake",
    summary: "Restoring the ecological health of Sira Lake through hydrological analysis, environmental impact assessment and sustainable design that improve water quality and biodiversity.",
    sectors: ["water"],
    category: "Water",
    focus: ["Hydrology", "Impact assessment", "Biodiversity"],
  },
  {
    title: "Impact Assessment of Sarjapura Lake",
    location: "Bangalore, India",
    image: "/assets/projects/cards/sarjapura-lake.webp",
    slug: "sarjapura-lake",
    summary: "Evaluating the environmental and social impacts of development around Sarjapura Lake on ecosystems, water quality and community wellbeing.",
    sectors: ["water"],
    category: "Water",
    focus: ["Impact assessment", "Water quality", "Ecosystem protection"],
  },
  {
    title: "Impact Assessment of Doddathoguru Lake",
    location: "Bangalore, India",
    image: "/assets/projects/cards/doddathoguru-lake.webp",
    slug: "doddathoguru-lake",
    summary: "Hydrological assessment and sustainability strategy for the Doddathoguru Lake development, protecting a critical urban water body through evidence-led planning.",
    sectors: ["water"],
    category: "Water",
    focus: ["Hydrology", "Sustainability strategy", "Urban planning"],
  },
  {
    title: "Hathigaon Water Management",
    location: "Jaipur, India",
    image: "/assets/projects/cards/hathigaon.webp",
    slug: "hathigaon",
    summary: "Water management for the Hathigaon (Elephant Village) development, integrating traditional water harvesting with modern engineering systems.",
    sectors: ["water"],
    category: "Water",
    focus: ["Water harvesting", "Traditional systems", "Community water"],
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}

export function getSectorProjects(slug: string) {
  return sectorProjects.filter((p) => p.sectors.includes(slug));
}
