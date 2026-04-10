// src/data/heroSlides/heroSlides.js
import { ROUTES } from "@/config/routes";
import hero1 from "@/assets/images/heroSections/Test1.png";
import hero2 from "@/assets/images/heroSections/Herosction2.png";

export const heroSlides = [
  {
    id: 1,
    eyebrow: "VHT | INNOVATION FOR A BETTER TOMORROW",
    title: "", //"VISION & MISSION"
    emphasizeLabels: true,
    content: [
      {
        label: "VISION:",
        text: "To grow from a local tech firm into a globally recognized company.",
      },
      {
        label: "MISSION:",
        text: "Our mission is to create lasting value for society by delivering reliable hardware, software, and robust communication technology that addresses real-world challenges.",
      },
    ],
    buttons: [
      {
        label: "Learn More",
        href: ROUTES.CITY_INFRASTRUCTURE,
        variant: "primary",
      },
      { label: "Contact Us", href: ROUTES.CONTACT, variant: "outline" },
    ],
    image: hero1,
    // overlay: "from-primary/5 via-primary/20 to-accent/5",
  },
  {
    id: 2,
    eyebrow: "",
    title:
      "We design and deliver intergrate digital transformation solution though:",
    description:
      "Hardware Development | Software Development | Communication Technology",
    buttons: [
      { label: "About Us", href: ROUTES.HOME, variant: "primary" },
      { label: "Contact Us", href: ROUTES.CONTACT, variant: "outline" },
    ],
    image: hero2,
    // overlay: "from-primary/85 via-primary/60 to-accent/25",
  },
  {
    id: 3,
    variant: "bubble-network",
    eyebrow: "VHT Company",
    title: "CORE VALUES",
    description:
      "Our products are the building blocks of digital infrastructure, engineered to provide:",
    bubbles: [
      "Enhancing system reliability",
      "Improving operational efficiency",
      "Strengthening resiliency",
      "Ensuring safety",
      "Elevating customer engagement and service quality",
    ],
    buttons: [
      {
        label: "Explore Solutions",
        href: ROUTES.DISTRIBUTION_GRID,
        variant: "primary",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&fit=crop",
    overlay: "from-primary/80 via-primary/58 to-accent/35",
  },
];
