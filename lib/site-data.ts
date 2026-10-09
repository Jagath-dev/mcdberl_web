export type Project = { title: string; location: string; image: string; slug: string; summary: string; focus: string[] };

export const projects: Project[] = [
  { title: "Bharatiya City School", location: "Bangalore, India", image: "projects/bharatiya-school.webp", slug: "bharatiya-school", summary: "A high-performance learning environment designed around daylight, comfort and resource efficiency.", focus: ["Energy performance", "Daylight strategy", "Water efficiency"] },
  { title: "Infosys Nagpur", location: "Nagpur, India", image: "projects/infosys-nagpur.webp", slug: "infosys-nagpur", summary: "Integrated engineering for a resilient campus that makes sustainability measurable at every scale.", focus: ["Campus systems", "Energy modelling", "Renewable integration"] },
  { title: "3 Times Square", location: "New York", image: "projects/3-times-square.webp", slug: "3-times-square", summary: "A global workplace project shaped by performance, density and long-term operational value.", focus: ["Building systems", "Retrofit strategy", "Operational efficiency"] },
  { title: "Bharatiya City SEZ3", location: "Bangalore, India", image: "projects/bharatiya-city-sez3.webp", slug: "bharatiya-city-sez3", summary: "A mixed-use district planned as a connected, efficient and future-facing urban system.", focus: ["District planning", "Energy savings", "Water systems"] },
  { title: "Indian Pavilion Expo", location: "Shanghai, China", image: "projects/indian-pavilion-expo.webp", slug: "indian-pavilion-expo-2010", summary: "A temporary landmark where environmental thinking became part of the visitor experience.", focus: ["Passive design", "Temporary systems", "Material strategy"] },
  { title: "Coachilin MDC", location: "California", image: "projects/coachilin-mdc.webp", slug: "coachilin-mdc", summary: "Engineering that balances demanding program requirements with a lighter environmental footprint.", focus: ["MEP design", "Comfort", "Low-energy systems"] },
  { title: "Mandana Garments", location: "Tarapur / Boisar, Mumbai", image: "projects/mandana-garments.webp", slug: "mandana-garments", summary: "Industrial performance built around efficient processes, comfort and reduced operating costs.", focus: ["Industrial systems", "Energy reduction", "Process efficiency"] },
  { title: "Green Building Regulation Colombia", location: "Colombia", image: "projects/green-building-regulation-colombia.webp", slug: "green-building-regulation-colombia", summary: "Evidence-led policy work that helps whole markets move toward better building performance.", focus: ["Policy", "Codes", "Performance pathways"] },
  { title: "240 CPS Apartment", location: "New York", image: "projects/240-cps-apartment.webp", slug: "240-cps-school", summary: "Residential engineering tuned for comfort, efficiency and the realities of a dense urban site.", focus: ["Residential systems", "Indoor comfort", "Energy use"] },
  { title: "Transit Accommodation Block", location: "Bangalore, India", image: "projects/transit-accommodation-block.webp", slug: "transit-accomodation-block-centre-for-human-genetics", summary: "A practical, durable building system that puts people and operational clarity first.", focus: ["Accommodation", "HVAC", "Water systems"] },
  { title: "Green Building Regulation Jakarta", location: "Jakarta", image: "projects/green-building-regulation-jakarta.webp", slug: "green-building-regulation-jakarta", summary: "A regional lens on how policy, climate and design can align for better outcomes.", focus: ["Climate response", "Regulation", "Urban performance"] },
  { title: "Umiya Velociti", location: "Bangalore, India", image: "projects/umiya-velociti.webp", slug: "umiya-velociti", summary: "A mixed-use destination where mobility, comfort and efficiency work as one connected system.", focus: ["Mixed use", "Mobility", "Resource efficiency"] }
];

export const services = [
  { title: "Sustainable MEP engineering", copy: "Integrated mechanical, electrical and plumbing systems that reduce demand while improving comfort and reliability." },
  { title: "Energy and performance modelling", copy: "Clear simulations and measurable baselines that make performance decisions easier to compare and defend." },
  { title: "Net-zero strategy", copy: "A practical pathway from early ambition to net-positive energy, water and carbon outcomes." },
  { title: "Green building consulting", copy: "From standards and regulation to documentation, we make sustainability legible across the full project team." },
  { title: "Re-engineering and value engineering", copy: "Sharper systems and smarter investments that reduce CAPEX, OPEX and maintenance without compromising the brief." }
];

export const testimonials = [
  ["Dr. B. Ramakrishna Rao", "Bharatiya City Developers", "McD BERL has been a trusted partner from the start, dedicating time, talent, and resources to our projects."],
  ["Guruprakash Shastry", "Regional Head-Infrastructure, Infosys", "Their skills in data analysis and energy simulations are impressive. It has been a rewarding experience collaborating with them."],
  ["Sanjay Prakash", "Shift Design", "McD BERL is a highly innovative MEP firm based in Bangalore, leading the way in integrating new technologies in building projects."]
] as const;
