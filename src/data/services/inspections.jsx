// src/data/services/inspections.jsx

export const inspectionsData = {
  hero: {
    title: "Comprehensive Inspection Service",
    subtitle: "Expert electrical inspection services ensuring safety, compliance, and reliability across your entire infrastructure.",
  },
  overview: {
    title: "Overview",
    paragraphs: [
      "Our inspection division delivers thorough assessments of electrical infrastructure — from switchgear and transformers to overhead lines and underground cables. We use advanced diagnostic tools including thermal imaging and insulation testing to identify issues before they escalate.",
      "Every inspection follows strict regulatory protocols and industry standards, providing detailed reports with actionable recommendations to maintain safety, compliance, and operational reliability.",
    ],
    image: "/assets/images/services/inspections-overview.jpg",
    bgSection: false,
  },
  commonIssues: {
    title: "Common Issues We Detect",
    subtitle: "Our certified inspectors identify critical issues across all types of electrical infrastructure before they become costly failures.",
    items: [
      {
        id: 1,
        icon: (
          <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        ),
        title: "Visual & Physical Inspection",
        description: "Thorough visual and physical examination of electrical components, connections, and enclosures to detect wear, corrosion, or damage.",
      },
      {
        id: 2,
        icon: (
          <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
          </svg>
        ),
        title: "Compliance Auditing",
        description: "Detailed audits against IEC, IEEE, and local regulatory standards to ensure full compliance and certification readiness.",
      },
      {
        id: 3,
        icon: (
          <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
        ),
        title: "Safety System Verification",
        description: "Testing of earthing systems, lightning protection, safety interlocks, and emergency shutdown mechanisms for proper operation.",
      },
      {
        id: 4,
        icon: (
          <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
          </svg>
        ),
        title: "Thermal Imaging Analysis",
        description: "Infrared thermography inspections to identify hotspots, overloaded circuits, and failing connections before they cause outages.",
      },
      {
        id: 5,
        icon: (
          <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 10.5 6.75 6.75 10.5h10.5L13.5 17.25" />
          </svg>
        ),
        title: "Insulation Resistance Testing",
        description: "Comprehensive insulation testing of cables, switchgear, and transformers to detect deterioration and prevent failures.",
      },
      {
        id: 6,
        icon: (
          <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
          </svg>
        ),
        title: "Protection Relay Testing",
        description: "Functional testing and calibration of protection relays to ensure correct fault detection and tripping coordination.",
      },
    ],
  },
  equipment: {
    title: "Electrical Equipment Inspection",
    subtitle: "Specialised inspection services across all major equipment categories used in power distribution and grid infrastructure.",
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
    { id: 1, question: "What services do you offer?", answer: "We provide comprehensive electrical inspection services covering visual assessments, thermal imaging, compliance auditing, insulation testing, and protection relay testing for all types of electrical infrastructure." },
    { id: 2, question: "How often should electrical inspections be performed?", answer: "We recommend annual inspections for most electrical systems, with more frequent checks for high-load or critical infrastructure. Our team will advise on the optimal inspection schedule for your specific setup." },
    { id: 3, question: "What standards do your inspections follow?", answer: "All inspections are conducted in accordance with IEC, IEEE, and applicable local regulatory standards, ensuring full compliance and certification readiness." },
  ],
};
