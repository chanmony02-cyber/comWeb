// src/data/about/about.js
import { ROUTES } from "@/config/routes";

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
    paragraphs: [
      "Founded in 2010, we have grown from a small electrical contracting firm into one of the region's most trusted providers of comprehensive electrical solutions. Our journey is marked by a relentless pursuit of excellence and innovation.",
      "We specialize in designing, installing, and maintaining electrical systems for diverse industries including city infrastructure, power distribution networks, and agricultural facilities. Our team of committed professionals brings together decades of combined experience to deliver solutions that exceed expectations.",
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
    title: "Powering\nTomorrow's",
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
      "To be the leading provider of reliable electrical solutions that power progress across industries. We are committed to excellence in every project, ensuring safety, quality, and sustainability in all our operations.",
    missionBullets: [
      "Provide cutting-edge electrical infrastructure",
      "Ensure highest safety standards",
      "Foster sustainable development",
    ],
    visionTitle: "Our Vision",
    visionText:
      "To be the leading electrical solutions provider in Southeast Asia, recognized for our innovation, reliability, and contribution to building sustainable infrastructure for future generations.",
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
          "Professional consulting services to help you plan, design, and optimize your electrical infrastructure projects.",
        href: ROUTES.CONSULTANTS,
      },
      {
        id: 2,
        icon: "maintenance",
        title: "Maintenance",
        description:
          "Expert maintenance services for electrical systems, ensuring optimal performance and maximum efficiency for your operations.",
        href: ROUTES.MAINTENANCE,
      },
      {
        id: 3,
        icon: "inspection",
        title: "Inspection",
        description:
          "Complete inspection services from planning to execution, delivering turnkey solutions for all electrical systems.",
        href: ROUTES.INSPECTIONS,
      },
    ],
  },
};
