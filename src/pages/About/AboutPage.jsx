// src/pages/About/AboutPage.jsx

import { aboutData } from "@/data/about/about";
import { AboutHero } from "./components/AboutHero";
import { CompanyStorySection } from "./components/CompanyStorySection";
import { PowerSection } from "./components/PowerSection";
import { MissionVisionSection } from "./components/MissionVisionSection";
import { CoreValuesSection } from "./components/CoreValuesSection";
import { IndustriesWeServeSection } from "./components/IndustriesWeServeSection";
import { WhyPartnerSection } from "./components/WhyPartnerSection";
import { OurLocationSection } from "@/pages/Contact/components/OurLocationSection";

export default function AboutPage() {
  const { hero, story, powerSection, mission, coreValues, industries, whyPartner } =
    aboutData;

  return (
    <>
      <AboutHero title={hero.title} subtitle={hero.subtitle} />
      <CompanyStorySection {...story} />
      <PowerSection {...powerSection} />
      <MissionVisionSection {...mission} />
      <CoreValuesSection {...coreValues} />
      <IndustriesWeServeSection {...industries} />
      <WhyPartnerSection {...whyPartner} />
      <OurLocationSection />
    </>
  );
}
