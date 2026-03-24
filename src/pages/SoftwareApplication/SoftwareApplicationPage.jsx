// src/pages/SoftwareApplication/SoftwareApplicationPage.jsx

import MainLayout from "@/layouts/MainLayout";
import { softwareApplicationData } from "@/data/softwareApplication/softwareApplication";
import { SoftwareApplicationHero } from "./components/SoftwareApplicationHero";
import { AppHighlightsSection } from "./components/AppHighlightsSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { PrivacySection } from "./components/PrivacySection";
import { CallToActionSection } from "./components/CallToActionSection";

export default function SoftwareApplicationPage() {
  const { hero, screens, capabilities, privacy, cta } = softwareApplicationData;

  return (
    <MainLayout>
      <main className="flex-1 bg-background">
        <SoftwareApplicationHero hero={hero} />
        <AppHighlightsSection screens={screens} />
        <CapabilitiesSection capabilities={capabilities} />
        <PrivacySection privacy={privacy} />
        <CallToActionSection cta={cta} />
      </main>
    </MainLayout>
  );
}
