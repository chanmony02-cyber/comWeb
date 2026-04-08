// src/data/about/about.js
import { ROUTES } from "@/config/routes";
import serviceConsultants from "@/assets/images/servicesImg/service-consultants.jpg";
import serviceInspections from "@/assets/images/servicesImg/service-inspections.jpg";
import serviceMaintenance from "@/assets/images/servicesImg/service-maintenance.jpg";
import distributionGridHero from "@/assets/images/industries/distribution-grid/distribution-grid-hero.jpg";
import cityInfrastructureHero from "@/assets/images/industries/city-infrastructure/city-infrastructure-hero.jpg";
import agricultureHero from "@/assets/images/industries/agriculture/agri-banner.jpg";
import repairing from "@/assets/images/servicesImg/repairing.jpg";
import companyStoryImage from "@/assets/images/about/company-story.webp";

export const aboutData = {
  hero: {
    title: "About Us",
    subtitle:
      "Discover our story, values, and the passion that drives us to deliver excellence in every project.",
  },

  story: {
    label: "About Our Company",
    title: "Building the Future of\nElectrical Infrastructure",
    stat: { value: "2+", label: "Years of Excellence" },
    image: companyStoryImage,
    imageAlt: "Head, heart, hand technology visual",
    paragraphs: [
      "We exist to accelerate and enable digital transformation across sectors, including Distribution Grid, City Infrastructure, and Agriculture. We bridge the gap between existing systems and the future ready-digital systems enhancing system reliability, strengthening resiliency, improving operational efficiency, ensuring safety, elevating customer engagement and service quality.",
    ],
    checkItems: [
      { id: 1, text: "Over 15 years of industry experience" },
      { id: 2, text: "500+ successful projects completed" },
      { id: 3, text: "24/7 emergency support services" },
      { id: 4, text: "ISO 9001:2015 certified operations" },
      { id: 5, text: "Expert team of licensed engineers" },
      { id: 6, text: "Sustainable and eco-friendly practices" },
    ],
    cta: { label: "Contact Us →", href: ROUTES.CONTACT },
  },

  powerSection: {
    eyebrow: "Engineering Excellence Since 2015",
    title: "Powering Tomorrow's",
    highlight: "Infrastructure",
    description:
      "Leading provider of electrical solutions for distribution grids, city infrastructure, and agricultural systems. Building reliable futures.",
    cta: { label: "Explore Our Services →", href: ROUTES.SERVICES },
    pillars: [
      { id: 1, icon: "quality", label: "Quality" },
      { id: 2, icon: "safety", label: "Safety" },
      { id: 3, icon: "accuracy", label: "Accuracy" },
      { id: 4, icon: "reliance", label: "Reliance" },
    ],
  },

  mission: {
    eyebrow: "Our Purpose",
    title: "Mission & Vision",
    subtitle: "Guiding principles that drive our commitment to excellence",
    missionTitle: "Our Mission",
    missionText:
      "To grow from a local tech firm into a globally recognized company.",
    missionBullets: [
      "Provide cutting-edge electrical infrastructure",
      "Ensure highest safety standards",
      "Foster sustainable development",
    ],
    visionTitle: "Our Vision",
    visionText:
      "Our mission is to generate a lasting value for society by delivering reliable hardware, software and robust communication technology to address real-world challenges. ",
    visionBullets: [
      "Lead industry transformation through innovation",
      "Expand regional presence and impact",
      "Champion environmental responsibility",
    ],
  },

  coreValues: {
    eyebrow: "What We Stand For",
    title: "Our Core Values",
    subtitle: "The principles that define who we are and how we operate",
    items: [
      {
        id: 1,
        icon: "quality",
        title: "Quality",
        description:
          "We deliver excellence in every project, maintaining the highest standards in materials, workmanship, and service delivery.",
      },
      {
        id: 2,
        icon: "safety",
        title: "Safety",
        description:
          "Safety is our top priority. We implement rigorous protocols to protect our team, clients, and communities.",
      },
      {
        id: 3,
        icon: "accuracy",
        title: "Accuracy",
        description:
          "Precision engineering and meticulous attention to detail ensure reliable and efficient electrical systems.",
      },
      {
        id: 4,
        icon: "reliance",
        title: "Reliance",
        description:
          "Our clients trust us to deliver on our promises. We build lasting relationships through dependable service.",
      },
      {
        id: 5,
        icon: "innovation",
        title: "Innovation",
        description:
          "We embrace cutting-edge technologies and creative solutions to address complex electrical challenges.",
      },
      {
        id: 6,
        icon: "integrity",
        title: "Integrity",
        description:
          "Honesty and transparency guide all our interactions with clients, partners, and team members.",
      },
    ],
  },

  services: {
    eyebrow: "What We Do",
    title: "Our Services",
    subtitle:
      "Comprehensive electrical solutions tailored to meet your unique requirements",
    items: [
      {
        id: 1,
        icon: "consultants",
        title: "Consultants",
        description:
          "Quick and reliable repairing services for all your electrical infrastructure needs.",
        image: serviceConsultants,
        href: ROUTES.CONSULTANTS,
      },
      {
        id: 2,
        icon: "maintenance",
        title: "Maintenance",
        description:
          "Expert advice tailored for your electrical and electronic system requirements.",
        image: serviceInspections,
        href: ROUTES.MAINTENANCE,
      },
      {
        id: 3,
        icon: "inspection",
        title: "Inspection",
        description:
          "Professional installation of electronic and electrical systems with precision.",
        image: serviceMaintenance,
        href: ROUTES.INSPECTIONS,
      },
    ],
  },
  industries: {
    eyebrow: "Industries We Serve",
    title: "Diverse Expertise",
    subtitle:
      "Specialized solutions for various sectors, each with unique electrical challenges",
    items: [
      {
        id: 1,
        icon: "distribution",
        title: "Distribution Grid",
        description:
          "Building and maintaining efficient power distribution networks that deliver electricity safely to communities.",
        image: distributionGridHero,
        href: ROUTES.DISTRIBUTION_GRID,
      },
      {
        id: 2,
        icon: "city",
        title: "City Infrastructure",
        description:
          "Powering urban development with reliable electrical systems for buildings, street lighting, and public facilities.",
        image: cityInfrastructureHero,
        href: ROUTES.CITY_INFRASTRUCTURE,
      },
      {
        id: 3,
        icon: "agriculture",
        title: "Agriculture",
        description:
          "Modernizing agricultural operations with smart electrical solutions for irrigation, automation, and processing.",
        image: agricultureHero,
        href: ROUTES.AGRICULTURE,
      },
    ],
  },
  whyPartner: {
    eyebrow: "Why Partner With Us",
    title: "What Makes Us",
    highlight: "Different",
    subtitle:
      "We combine technical expertise with a customer-first approach to deliver electrical solutions that truly make a difference. Here's why clients choose us as their trusted partner.",
    image: repairing,
    helpCard: {
      title: "Need Help?",
      subtitle: "24/7 Available",
      description:
        "Our support team is always ready to assist you with any questions or emergencies.",
    },
    items: [
      {
        id: 1,
        icon: "certified",
        title: "Certified Professionals",
        description:
          "All our engineers and technicians hold internationally recognized certifications.",
      },
      {
        id: 2,
        icon: "onTime",
        title: "On-Time Delivery",
        description:
          "We respect deadlines and ensure projects are completed within agreed timelines.",
      },
      {
        id: 3,
        icon: "support",
        title: "24/7 Support",
        description:
          "Round-the-clock emergency support for all our clients and projects.",
      },
      {
        id: 4,
        icon: "technology",
        title: "Modern Technology",
        description:
          "We utilize the latest tools and technologies for optimal results.",
      },
      {
        id: 5,
        icon: "quality",
        title: "Quality Guaranteed",
        description: "Comprehensive warranties and guarantees on all our work.",
      },
    ],
  },
  team: {
    eyebrow: "Our Team",
    title: "Meet Our Leaders",
    subtitle: "Experienced professionals driving innovation and excellence",
    members: [
      {
        id: 1,
        name: "David Chen",
        role: "Chief Executive Officer",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop",
        linkedin: "https://www.linkedin.com",
        email: "mailto:hello@vht.com",
      },
      {
        id: 2,
        name: "Sarah Williams",
        role: "Chief Executive Officer",
        image:
          "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&q=80&fit=crop",
        linkedin: "https://www.linkedin.com",
        email: "mailto:hello@vht.com",
      },
      {
        id: 3,
        name: "Michael Park",
        role: "Chief Technology Officer",
        image:
          "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=400&q=80&fit=crop",
        linkedin: "https://www.linkedin.com",
        email: "mailto:hello@vht.com",
      },
    ],
  },
};
