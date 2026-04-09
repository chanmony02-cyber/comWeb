import HeroSection from "./components/HeroSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import FeaturedProductsSection from "./components/FeaturedProductsSection";
import IndustriesSolutionSection from "./components/IndustriesSolutionSection";
import NewsEventsSection from "./components/NewsEventsSection";
import PartnershipSection from "./components/PartnershipSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <IndustriesSolutionSection />
      <FeaturedProductsSection />
      <WhatWeDoSection />
      <NewsEventsSection />
      <PartnershipSection />
    </main>
  );
}
