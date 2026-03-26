// src/pages/ServiceDetail/components/OurProcessSteps.jsx

import { SectionHeader } from "@/components/ui/SectionHeader";
import searchIcon from "@/assets/icons/search-white.svg";
import clockIcon from "@/assets/icons/clock-white.svg";
import pencilIcon from "@/assets/icons/pencil-white.svg";
import sendIcon from "@/assets/icons/send-white.svg";
import { resolveMediaSrc } from "@/lib/media";

const ICONS = {
  search: searchIcon,
  clock: clockIcon,
  pencil: pencilIcon,
  send: sendIcon,
};

export function OurProcessSteps({ title, subtitle, steps }) {
  return (
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleClassName="lg:text-4xl text-3xl"
          subtitleClassName="lg:text-lg text-md"
        />

        {/* â”€â”€ Desktop layout (lg+): icons row with connecting line, text row below â”€â”€ */}
        <div className="hidden lg:block mt-12">
          {/* Icons with connecting line */}
          <div className="relative flex items-center justify-between px-[10%]">
            {/* Horizontal connecting line */}
            <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-[1.5px] bg-primary-blue/30" />
            {steps.map((step) => (
              <div key={step.id} className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-primary-blue flex items-center justify-center shadow-md">
                    <img
                      src={resolveMediaSrc(ICONS[step.icon])}
                      alt=""
                      className="w-7 h-7"
                    />
                </div>
              </div>
            ))}
          </div>

          {/* Text below icons */}
          <div className="mt-8 grid grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center gap-2"
              >
                <p className="text-md font-semibold text-primary-blue uppercase tracking-widest font-sans">
                  {step.step}
                </p>
                <h3 className="text-xl font-bold text-navy font-display">
                  {step.title}
                </h3>
                <p className="text-md text-muted-foreground leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* â”€â”€ Mobile / Tablet layout (below lg): icon + text stacked per step, no line â”€â”€ */}
        <div className="lg:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-primary-blue flex items-center justify-center shadow-md">
                <img
                  src={resolveMediaSrc(ICONS[step.icon])}
                  alt=""
                  className="w-7 h-7"
                />
              </div>
              <p className="text-xs font-semibold text-primary-blue uppercase tracking-widest font-sans">
                {step.step}
              </p>
              <h3 className="text-base font-bold text-navy font-display">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
