export interface PartnerDetail {
  id: string;
  name: string;
  slug: string;
  logo: string;
  alt: string;
  category: "Tech & Enterprise" | "Real Estate & Communities" | "Architecture & Design" | "Institutions & Hospitality";
  sector: string;
  description: string;
}

export const PARTNERS_DATA: PartnerDetail[] = [
  {
    id: "infosys",
    name: "Infosys",
    slug: "infosys",
    logo: "/assets/partners/infosys.png",
    alt: "Infosys Partners Logos",
    category: "Tech & Enterprise",
    sector: "Enterprise IT & High-Performance Campuses",
    description:
      "Infosys is a global leader in sustainability, with energy-efficient buildings spanning millions of square feet. They achieved net-zero carbon status and set industry benchmarks through energy efficiency, renewable energy adoption, and carbon offset initiatives."
  },
  {
    id: "wipro",
    name: "Wipro",
    slug: "wipro",
    logo: "/assets/partners/wipro.png",
    alt: "Wipro Partners Logos",
    category: "Tech & Enterprise",
    sector: "Enterprise Tech & Clean Engineering",
    description:
      "Wipro focuses on sustainability with innovative building technologies like the Underfloor Air Distribution (UFAD) system. Their designs maximize energy efficiency and occupant comfort, pushing industry boundaries for a greener future."
  },
  {
    id: "lodha",
    name: "Lodha",
    slug: "lodha",
    logo: "/assets/partners/lodha.png",
    alt: "Lodha Partners Logos",
    category: "Real Estate & Communities",
    sector: "Premium Real Estate & Urban Habitats",
    description:
      "Lodha Developers, based in Mumbai, is a leading real estate developer known for luxury and sustainability. Their portfolio includes prestigious residential towers and commercial spaces, with a focus on quality, timely delivery, and customer satisfaction."
  },
  {
    id: "myhome-construction",
    name: "MyHome Construction",
    slug: "myhome-construction",
    logo: "/assets/partners/myhome-construction.png",
    alt: "MyHome Construction Partners Logos",
    category: "Real Estate & Communities",
    sector: "Integrated Townships & Infrastructure",
    description:
      "MyHome Group in Hyderabad is a leading real estate developer known for quality construction and timely delivery. They focus on sustainable and innovative living spaces, blending functionality with aesthetics in residential and commercial projects."
  },
  {
    id: "snk-architects",
    name: "SNK Architects",
    slug: "snk-architects",
    logo: "/assets/partners/snk-architects.png",
    alt: "SNK Architects Partners Logos",
    category: "Architecture & Design",
    sector: "Conservation & Heritage Architecture",
    description:
      "Somaya & Kalappa Consultants, established in 1975, integrates architecture with conservation and sustainability. They are known for projects like the Rajabai Clock Tower restoration and the Goa Institute of Management campus design, emphasizing cultural and environmental contexts."
  },
  {
    id: "mindspace-architects",
    name: "Mindspace Architects",
    slug: "mindspace-architects",
    logo: "/assets/partners/mindspace-architects.png",
    alt: "Mindspace Architects Partners Logos",
    category: "Architecture & Design",
    sector: "Ecological & Contextual Design",
    description:
      "Mindspace Architects, based in Bangalore, are known for sustainable architecture that blends traditional wisdom with modern techniques. Their projects across various sectors prioritize ecological sensitivity and environmental responsiveness."
  },
  {
    id: "aga-khan-group",
    name: "Aga Khan Group",
    slug: "aga-khan-group",
    logo: "/assets/partners/aga-khan-group.png",
    alt: "Aga Khan Group Partners Logos",
    category: "Institutions & Hospitality",
    sector: "Civic Development & Cultural Heritage",
    description:
      "The Aga Khan Development Network (AKDN) focuses on improving the quality of life in the developing world through various initiatives, including architecture. Their architectural projects emphasize cultural preservation, sustainability, and community development."
  },
  {
    id: "k-raheja",
    name: "K Raheja",
    slug: "k-raheja",
    logo: "/assets/partners/k-raheja.png",
    alt: "K Raheja Partners Logos",
    category: "Real Estate & Communities",
    sector: "Commercial Parks & Green Real Estate",
    description:
      "K Raheja Corp is a leading real estate developer known for pioneering contributions to commercial and residential sectors. They emphasize sustainability, with several LEED-certified projects and a focus on innovation and quality."
  },
  {
    id: "aparna-construction",
    name: "Aparna Construction",
    slug: "aparna-construction",
    logo: "/assets/partners/aparna-construction.png",
    alt: "Aparna Construction Partners Logos",
    category: "Real Estate & Communities",
    sector: "Gated Communities & Mixed-Use Projects",
    description:
      "Aparna Constructions in Hyderabad is recognized for sustainable development, delivering a range of residential and commercial projects. Established in 1996, the company emphasizes eco-friendly practices and modern amenities in its designs."
  },
  {
    id: "puravankara",
    name: "Puravankara",
    slug: "puravankara",
    logo: "/assets/partners/puravankara.png",
    alt: "Puravankara Partners Logos",
    category: "Real Estate & Communities",
    sector: "Residential Towns & Urban Developments",
    description:
      "Puravankara Limited, founded in 1975, delivers high-quality residential and commercial projects across major Indian cities. They offer affordable to luxury housing, focusing on innovative design, superior construction quality, and timely delivery."
  },
  {
    id: "mahindra-lifespaces",
    name: "Mahindra Lifespaces",
    slug: "mahindra-lifespaces",
    logo: "/assets/partners/mahindra-lifespaces.png",
    alt: "Mahindra Lifespaces Partners Logos",
    category: "Real Estate & Communities",
    sector: "Sustainable Urbanization & Green Homes",
    description:
      "Mahindra Lifespaces, the real estate arm of Mahindra Group, is a pioneer in sustainable urban development. They focus on energy efficiency, innovative design, and green-certified buildings, offering residential and commercial spaces across India."
  },
  {
    id: "ajmera",
    name: "Ajmera",
    slug: "ajmera",
    logo: "/assets/partners/ajmera.png",
    alt: "Ajmera Partners Logos",
    category: "Real Estate & Communities",
    sector: "High-Rise Residential & Communities",
    description:
      "Ajmera Group is a prominent real estate developer with a legacy of over five decades. They focus on quality construction and sustainable communities, delivering landmark projects across major Indian cities."
  },
  {
    id: "the-purple-ink-studio",
    name: "The Purple Ink Studio",
    slug: "the-purple-ink-studio",
    logo: "/assets/partners/the-purple-ink-studio.png",
    alt: "The Purple Ink Studio Partners Logos",
    category: "Architecture & Design",
    sector: "Contemporary Architectural Practice",
    description:
      "The Purple Ink Studio is a Bangalore-based architectural firm known for its innovative and sustainable designs. They focus on creating contextually responsive spaces that blend functionality with aesthetics, emphasizing environmental sustainability in all their projects."
  },
  {
    id: "biome-environmental",
    name: "Biome Environmental",
    slug: "biome-environmental",
    logo: "/assets/partners/biome-environmental.png",
    alt: "Biome Environmental Partners Logos",
    category: "Architecture & Design",
    sector: "Ecological Architecture & Water Neutrality",
    description:
      "Biome Environmental is an architecture and design firm specializing in sustainable building practices. They are known for integrating ecological principles into their work, using natural materials and energy-efficient systems to create environmentally responsible buildings."
  },
  {
    id: "education-design-international",
    name: "Education Design International",
    slug: "education-design-international",
    logo: "/assets/partners/education-design-international.png",
    alt: "Education Design International Partners Logos",
    category: "Institutions & Hospitality",
    sector: "Campus Architecture & Learning Environments",
    description:
      "Education Design International specializes in designing educational environments that inspire learning and creativity. Their projects focus on creating flexible, student-centered spaces that support modern educational practices and foster collaborative learning."
  },
  {
    id: "cnt-architects",
    name: "CnT Architects",
    slug: "cnt-architects",
    logo: "/assets/partners/cnt-architects.png",
    alt: "CnT Architects Partners Logos",
    category: "Architecture & Design",
    sector: "Institutional & Residential Architecture",
    description:
      "CnT Architects in Bangalore focuses on creating functional, aesthetically pleasing, and sustainable spaces. Their diverse portfolio includes residential, commercial, and institutional projects, blending modern design with local cultural considerations."
  },
  {
    id: "godrej-properties",
    name: "Godrej Properties",
    slug: "godrej-properties",
    logo: "/assets/partners/godrej-properties.png",
    alt: "Godrej Properties Partners Logos",
    category: "Real Estate & Communities",
    sector: "Certified Green Developments & Townships",
    description:
      "Godrej Properties, established in 1990, is known for innovative and sustainable developments across major Indian cities. They were the first Indian real estate company to receive ISO certification, with a strong presence in residential, commercial, and township projects."
  },
  {
    id: "lt-realty",
    name: "L&T Realty",
    slug: "lt-realty",
    logo: "/assets/partners/lt-realty.png",
    alt: "L&T Realty Partners Logos",
    category: "Real Estate & Communities",
    sector: "Megaprojects & Transit-Oriented Real Estate",
    description:
      "L&T Realty is a significant player in Indian real estate, with a portfolio spanning residential, commercial, and retail developments in major metropolitan regions. They emphasize quality construction and sustainable practices."
  },
  {
    id: "edifice",
    name: "Edifice",
    slug: "edifice",
    logo: "/assets/partners/edifice.png",
    alt: "Edifice Partners Logos",
    category: "Architecture & Design",
    sector: "Master Planning & Corporate Architecture",
    description:
      "Edifice Consultants is a leading architectural firm in India known for its innovative approach to design. Their portfolio spans commercial, residential, and institutional projects, with a strong focus on functionality, aesthetics, and sustainability."
  },
  {
    id: "jss-hospital",
    name: "JSS Hospital",
    slug: "jss-hospital",
    logo: "/assets/partners/jss-hospital.png",
    alt: "JSS Hospital Partners Logos",
    category: "Institutions & Hospitality",
    sector: "Healthcare Infrastructure & SDGs",
    description:
      "JSS Hospital is nationally and globally recognized for its sustainable practices and high rankings in various SDGs. They focus on health empowerment through knowledge and care, addressing social inequalities and contributing to regional development."
  },
  {
    id: "iihs",
    name: "IIHS",
    slug: "iihs",
    logo: "/assets/partners/iihs.png",
    alt: "IIHS Partners Logos",
    category: "Institutions & Hospitality",
    sector: "Urban Settlements & Climate Research",
    description:
      "The Indian Institute for Human Settlements (IIHS) is an interdisciplinary national institution focused on urbanization and sustainable development. IIHS works on research, education, and practice to address the challenges of urban growth in India."
  },
  {
    id: "maya-praxis",
    name: "Maya Praxis",
    slug: "maya-praxis",
    logo: "/assets/partners/maya-praxis.png",
    alt: "Maya Praxis Partners Logos",
    category: "Architecture & Design",
    sector: "Experimental & Research-Driven Architecture",
    description:
      "Mayapraxis is an architectural firm known for its experimental and research-driven approach to design. They focus on creating innovative spaces that challenge conventional design norms while emphasizing sustainability and cultural relevance."
  },
  {
    id: "rma-architects",
    name: "RMA Architects",
    slug: "rma-architects",
    logo: "/assets/partners/rma-architects.png",
    alt: "RMA Architects",
    category: "Architecture & Design",
    sector: "Contextual Architecture & Urbanism",
    description:
      "RMA Architects, founded by Rahul Mehrotra, is renowned for contextually responsive designs addressing urbanization challenges in India. Their work spans residential, institutional, and commercial sectors, integrating traditional and modern design principles."
  },
  {
    id: "ashok-b-lall-architects",
    name: "Ashok B Lall Architects",
    slug: "ashok-b-lall-architects",
    logo: "/assets/partners/ashok-b-lall-architects.png",
    alt: "Ashok B Lall Architects Partners Logos",
    category: "Architecture & Design",
    sector: "Low-Energy & Climate-Responsive Architecture",
    description:
      "Ashok B. Lall Architects in New Delhi is a leader in sustainable architecture, focusing on low-energy designs using local materials. Their work spans educational, residential, and public projects, advocating for sustainable, culturally relevant architecture."
  },
  {
    id: "taj-hotels",
    name: "Taj Hotels",
    slug: "taj-hotels",
    logo: "/assets/partners/taj-hotels.png",
    alt: "Taj Hotels Partners Logos",
    category: "Institutions & Hospitality",
    sector: "Luxury Hospitality & Decarbonization",
    description:
      "Taj, an iconic hospitality brand from Indian Hotels Company Limited, has a legacy of over 116 years. They are known for their impeccable service and unique experiences across palaces, hotels, resorts, and lodges."
  },
  {
    id: "himatsingka",
    name: "Himatsingka",
    slug: "himatsingka",
    logo: "/assets/partners/himatsingka.png",
    alt: "Himatsingka Partners Logos",
    category: "Tech & Enterprise",
    sector: "Industrial Manufacturing & Resource Conservation",
    description:
      "Himatsingka is a global textile major committed to sustainability, reducing energy and water consumption across processes. They focus on responsible practices and enhancing the lives of their workforce and surrounding communities."
  },
  {
    id: "srinivasa-group-of-colleges",
    name: "Srinivasa Group of Colleges",
    slug: "srinivasa-group-of-colleges",
    logo: "/assets/partners/srinivasa-group-of-colleges.png",
    alt: "Srinivasa Group of Colleges",
    category: "Institutions & Hospitality",
    sector: "Higher Education & Campus Engineering",
    description:
      "Srinivasa Group of Colleges is dedicated to excellence in education, aiming to generate skilled professionals. They provide quality faculty and state-of-the-art facilities, contributing to scientific, technological, and socio-economic development."
  },
  {
    id: "dynamix-group",
    name: "Dynamix Group",
    slug: "dynamix-group",
    logo: "/assets/partners/dynamix-group.png",
    alt: "Dynamix Group",
    category: "Real Estate & Communities",
    sector: "Urban Real Estate & Living Spaces",
    description:
      "Dynamix Group is a prominent real estate developer with a legacy spanning over five decades. They specialize in high-quality residential and commercial projects, incorporating sustainable construction techniques, energy-efficient designs, and environmentally conscious planning across their developments."
  }
];
