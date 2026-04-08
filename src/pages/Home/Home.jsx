import HeroSection from "./components/HeroSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import FeaturedProductsSection from "./components/FeaturedProductsSection";
import IndustriesSolutionSection from "./components/IndustriesSolutionSection";
import RecentProjectsSection from "./components/RecentProjectsSection";
import NewsEventsSection from "./components/NewsEventsSection";
import PartnershipSection from "./components/PartnershipSection";

export default function Home() {
  const showRecentProjects = false;

  return (
    <main className="flex-1">
      <HeroSection />
      <IndustriesSolutionSection />
      <FeaturedProductsSection />
      <WhatWeDoSection />
      {/* <RecentProjectsSection /> */}
      <NewsEventsSection />
      <PartnershipSection />
    </main>
  );
}
