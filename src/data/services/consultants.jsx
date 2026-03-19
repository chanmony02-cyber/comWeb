// src/data/services/consultants.jsx

export const consultantsData = {
  hero: {
    title: "Expert in Consultants",
    subtitle: "Explore our range of services tailored to meet your needs.",
    heroImage: "/assets/images/services/consultants-hero.jpg",
  },
  overview: {
    title: "Comprehensive Consulting Service Overview",
    paragraphs: [
      "Our consulting services encompass every aspect of electrical infrastructure planning and execution. From initial feasibility studies and system design to project management and commissioning, we guide organizations through complex technical decisions with clarity and confidence.",
      "Our multidisciplinary team brings together decades of field experience, ensuring that every recommendation is grounded in practical, real-world application.",
    ],
    image: "/assets/images/services/consultants-overview.jpg",
    bgSection: true,
  },
  expertise: {
    title: "Core Expertise",
    items: [
      {
        id: 1,
        icon: (
          <svg className="w-8 h-8 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        ),
        title: "Cost Optimization",
        description: "We analyze your electrical infrastructure to identify cost-saving opportunities without compromising performance or safety standards.",
      },
      {
        id: 2,
        icon: (
          <svg className="w-8 h-8 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
        ),
        title: "Consulting",
        description: "Our seasoned consultants provide strategic guidance on system design, regulatory compliance, and technology adoption for your projects.",
      },
      {
        id: 3,
        icon: (
          <svg className="w-8 h-8 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" />
          </svg>
        ),
        title: "Design",
        description: "Our specialized consultants provide strategic guidance on system design, regulatory compliance, and technology adoption for your projects.",
      },
    ],
  },
  process: {
    title: "Our Process",
    subtitle: "A structured approach that delivers consistent, high-quality results for every engagement.",
    steps: [
      {
        id: 1,
        step: "STEP 01",
        icon: (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        ),
        title: "Discovery",
        description: "We assess your current infrastructure, identify pain points, and define project objectives through in-depth consultation.",
      },
      {
        id: 2,
        step: "STEP 02",
        icon: (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        ),
        title: "Analysis",
        description: "Our engineers conduct detailed technical analysis, feasibility studies, and risk assessments to build a solid foundation.",
      },
      {
        id: 3,
        step: "STEP 03",
        icon: (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" />
          </svg>
        ),
        title: "Design",
        description: "We create comprehensive system designs, specifications, and implementation blueprints tailored to your requirements.",
      },
      {
        id: 4,
        step: "STEP 04",
        icon: (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        ),
        title: "Delivery",
        description: "From project management through commissioning, we ensure seamless execution and handover of your electrical systems.",
      },
    ],
  },
  faqs: [
    { id: 1, question: "What services do you offer?", answer: "We provide comprehensive electrical consulting services including system design, feasibility studies, project management, and commissioning support for all scales of electrical infrastructure." },
    { id: 2, question: "Do you offer low-voltage system consulting?", answer: "Yes, our consulting team covers the full spectrum from low-voltage distribution to high-voltage transmission systems, tailored to your project requirements." },
    { id: 3, question: "Do you offer low-voltage system consulting?", answer: "Absolutely. We work with clients at every stage from initial concept through to final handover, providing continuity and expert oversight throughout." },
  ],
};
