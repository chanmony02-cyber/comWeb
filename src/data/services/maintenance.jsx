// src/data/services/maintenance.jsx

export const maintenanceData = {
  hero: {
    title: "Expert in Maintenance",
    subtitle: "Keeping your electrical infrastructure running at peak performance with preventive and corrective maintenance solutions.",
  },
  overview: {
    title: "Overview",
    paragraphs: [
      "Our maintenance division provides end-to-end care for electrical power systems, from routine inspections to complex overhauls. We combine predictive analytics with hands-on expertise to minimize downtime and extend equipment lifespan across distribution grids, substations, and industrial facilities.",
      "Every maintenance program is tailored to your operational demands, regulatory requirements, and budget constraints — ensuring maximum reliability at optimal cost.",
    ],
    image: "/assets/images/services/maintenance-overview.jpg",
    bgSection: false,
  },
  commonIssues: {
    title: "Common Issues We Resolve",
    subtitle: "Our experienced technicians diagnose and fix the most frequent electrical infrastructure problems quickly and safely.",
    items: [
      {
        id: 1,
        icon: (
          <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
          </svg>
        ),
        title: "Power Surges",
        description: "Sudden voltage spikes that damage sensitive equipment and disrupt operations.",
      },
      {
        id: 2,
        icon: (
          <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a3.75 3.75 0 0 0-.1.831V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0 -.279-.035-.557-.1-.832l-2.41-8.436A2.25 2.25 0 0 0 17.088 3.75H15M9 3.75h6M9 3.75a2.25 2.25 0 0 0 2.25 2.25h1.5A2.25 2.25 0 0 0 15 3.75" />
          </svg>
        ),
        title: "Circuit Overloads",
        description: "Excessive current draw causing breaker trips and potential fire hazards.",
      },
      {
        id: 3,
        icon: (
          <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
          </svg>
        ),
        title: "Overheating Components",
        description: "Thermal failures in switchgear, transformers, and connection points.",
      },
      {
        id: 4,
        icon: (
          <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
        ),
        title: "Insulation Breakdown",
        description: "Deteriorated insulation leading to short circuits and ground faults.",
      },
      {
        id: 5,
        icon: (
          <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
          </svg>
        ),
        title: "Voltage Fluctuations",
        description: "Unstable voltage levels affecting equipment performance and longevity.",
      },
      {
        id: 6,
        icon: (
          <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        ),
        title: "Cable Degradation",
        description: "Worn or damaged cables compromising system safety and reliability.",
      },
    ],
  },
  equipment: {
    title: "Electrical Equipment Maintenance",
    subtitle: "Specialised in repair and servicing across all major equipment categories used in power distribution.",
    items: [
      {
        id: 1,
        title: "Switch Gear",
        description: "Complete switchgear maintenance including testing, calibration, and component replacement.",
        image: "/assets/images/services/equipment-switchgear.jpg",
        bullets: ["NREN", "BR/OAA", "WNAL", "BR/O"],
      },
      {
        id: 2,
        title: "Auto Closer",
        description: "Auto-recloser servicing for distribution network reliability and fault protection.",
        image: "/assets/images/services/equipment-autocloser.jpg",
        bullets: ["NREN", "BR/OAA", "WNAL", "BR/O"],
      },
      {
        id: 3,
        title: "Transformer",
        description: "Transformer maintenance including oil testing, winding analysis, and thermal imaging.",
        image: "/assets/images/services/equipment-transformer.jpg",
        bullets: ["NREN", "BR/OAA", "WNAL", "BR/O"],
      },
    ],
  },
  faqs: [
    { id: 1, question: "What services do you offer?", answer: "We provide comprehensive electrical maintenance services covering preventive, predictive, and corrective maintenance for all types of electrical infrastructure including substations, distribution grids, and industrial facilities." },
    { id: 2, question: "Do you offer low-voltage system consulting?", answer: "Yes, our maintenance teams are equipped to service both low-voltage and high-voltage systems, ensuring all work is carried out to the highest safety standards." },
    { id: 3, question: "Do you offer low-voltage system consulting?", answer: "We offer flexible maintenance contracts including scheduled preventive maintenance, emergency call-out services, and on-demand corrective maintenance." },
  ],
};
