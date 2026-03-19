// src/pages/ServiceDetail/components/CommonIssuesGrid.jsx

import { SectionHeader } from "@/components/ui/SectionHeader";

// Generic icon fallback — all common issues use the same style icon container
function IssueIcon() {
  return (
    <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
      <svg className="w-5 h-5 text-primary-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    </div>
  );
}

export function CommonIssuesGrid({ title, subtitle, items }) {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleClassName="text-3xl md:text-4xl"
          subtitleClassName="max-w-xl"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((issue) => (
            <div
              key={issue.id}
              className="bg-card rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <IssueIcon />
              <p className="text-base font-bold text-navy font-display">{issue.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {issue.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
