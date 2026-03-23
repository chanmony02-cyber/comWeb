// src/pages/About/AboutPage.jsx

import MainLayout from "@/layouts/MainLayout";
import { aboutData } from "@/data/about/about";
import { AboutHero } from "./components/AboutHero";
import { CompanyStorySection } from "./components/CompanyStorySection";
import { PowerSection } from "./components/PowerSection";
import { MissionVisionSection } from "./components/MissionVisionSection";
import { CoreValuesSection } from "./components/CoreValuesSection";
import { ServicesSection } from "./components/ServicesSection";
import { IndustriesWeServeSection } from "./components/IndustriesWeServeSection";
import { WhyPartnerSection } from "./components/WhyPartnerSection";
import { TeamSection } from "./components/TeamSection";
// import PartnershipSection from "../Home/components/PartnershipSection";
import { OurLocationSection } from "../Contact/components/OurLocationSection";

export default function AboutPage() {
  const { hero, story, powerSection, mission, coreValues, services } =
    aboutData;
  const { industries, whyPartner, team } = aboutData;

  return (
    <MainLayout>
      <AboutHero title={hero.title} subtitle={hero.subtitle} />
      <CompanyStorySection {...story} />
      <PowerSection {...powerSection} />
      <MissionVisionSection {...mission} />
      <CoreValuesSection {...coreValues} />
      <ServicesSection {...services} />
      <IndustriesWeServeSection {...industries} />
      <WhyPartnerSection {...whyPartner} />
      <TeamSection {...team} />
      {/* <PartnershipSection /> */}
      <OurLocationSection />
    </MainLayout>
  );
}
