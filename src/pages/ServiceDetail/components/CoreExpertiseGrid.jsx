// src/pages/ServiceDetail/components/CoreExpertiseGrid.jsx

import { SectionHeader } from "@/components/ui/SectionHeader";

// Icon map — inline SVGs keyed by string so data stays in .js files
function ExpertiseIcon({ type }) {
  const icons = {
    cost: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
    consulting: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
    ),
    design: (
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" />
    ),
  };
  return (
    <svg className="w-8 h-8 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      {icons[type] || icons.design}
    </svg>
  );
}

export function CoreExpertiseGrid({ title, items }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <SectionHeader title={title} align="center" titleClassName="text-3xl md:text-4xl" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <ExpertiseIcon type={item.icon} />
              <p className="text-base font-bold text-navy font-display">{item.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
