// src/data/industries/agriculture.js
import { assetSrc } from "@/lib/assetSrc";
const ai1 = "/images/industries/agriculture/solution1.webp";
const ai2 = "/images/industries/agriculture/solution2.webp";
const ai3 = "/images/industries/agriculture/solution3.webp";
const as1 = "/images/industries/agriculture/solution1.webp";
const as2 = "/images/industries/agriculture/solution2.webp";
const as3 = "/images/industries/agriculture/solution3.webp";
const aHero = "/images/industries/agriculture/agri-banner.webp";
const aProblem = "/images/industries/agriculture/water.webp";
import { ROUTES } from "@/config/routes";

export const agricultureData = {
  hero: {
    title: "Agriculture",
    subtitle:
      "Empowering farming communities with smart energy and automation solutions that boost productivity and sustainability.",
<<<<<<< Updated upstream
    backgroundImage: aHero.src,
=======
    backgroundImage: assetSrc(aHero),
>>>>>>> Stashed changes
  },
  problem: {
    title: "We Understand Your Problem.",
    paragraphs: [
      "Modern agriculture faces mounting pressure to produce more with less. Unreliable power supply, inefficient irrigation, and the lack of real-time monitoring create significant productivity losses for farmers and agribusinesses.",
      "From remote field electrification to automated greenhouse control, agricultural operations require specialized electrical and automation expertise that understands both the technical and environmental demands of farming.",
      "We work alongside agricultural stakeholders to deliver energy-efficient, weather-resilient solutions — helping farms operate smarter, reduce costs, and increase yields across every season.",
    ],
<<<<<<< Updated upstream
    image: aProblem.src,
=======
    image: assetSrc(aProblem),
>>>>>>> Stashed changes
  },
  solutions: {
    label: "INDUSTRY SOLUTIONS",
    title: "Our Solutions",
    subtitle:
      "Comprehensive services to design, build, and maintain agricultural power and automation infrastructure.",
    items: [
      {
        id: 1,
        title: "Solar-Powered Irrigation Systems",
<<<<<<< Updated upstream
        image: ai1.src,
=======
        image: assetSrc(ai1),
>>>>>>> Stashed changes
      },
      {
        id: 2,
        title: "Rural Electrification Networks",
<<<<<<< Updated upstream
        image: ai2.src,
=======
        image: assetSrc(ai2),
>>>>>>> Stashed changes
      },
      {
        id: 3,
        title: "Precision Agriculture Monitoring",
<<<<<<< Updated upstream
        image: ai3.src,
=======
        image: assetSrc(ai3),
>>>>>>> Stashed changes
      },
    ],
  },
  projects: {
    label: "PORTFOLIO",
    title: "Recent Projects in the Industry",
    items: [
      {
        id: 7,
        title: "Rice Farm Electrification",
        description:
          "Deployed a complete rural power distribution network across 500 hectares of rice farmland, providing stable electricity to irrigation pumps and processing facilities year-round.",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        image: as1,
=======
        image: as1.src,
>>>>>>> Stashed changes
=======
        image: assetSrc(as1),
>>>>>>> Stashed changes
        href: ROUTES.PROJECT_DETAIL.replace(":id", 7),
      },
      {
        id: 8,
        title: "Irrigation Control System",
        description:
          "Installed a solar-powered smart irrigation system with automated scheduling and remote monitoring, reducing water consumption by 40% while maintaining optimal crop yields.",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        image: as2,
=======
        image: as2.src,
>>>>>>> Stashed changes
=======
        image: assetSrc(as2),
>>>>>>> Stashed changes
        href: ROUTES.PROJECT_DETAIL.replace(":id", 8),
      },
      {
        id: 9,
        title: "Greenhouse Automation Project",
        description:
          "Engineered the full electrical and control infrastructure for a large-scale greenhouse complex, including climate control, grow lighting, and integrated SCADA monitoring systems.",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        image: as3,
=======
        image: as3.src,
>>>>>>> Stashed changes
=======
        image: assetSrc(as3),
>>>>>>> Stashed changes
        href: ROUTES.PROJECT_DETAIL.replace(":id", 9),
      },
    ],
  },
  cta: {
    title: "Let's Build Collaborative Projects",
    subtitle:
      "Discover the advantages of partnering with us to modernize your infrastructure.",
  },
};


