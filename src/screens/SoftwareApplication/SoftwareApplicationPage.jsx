<<<<<<< Updated upstream:src/pages/SoftwareApplication/SoftwareApplicationPage.jsx
﻿// src/pages/SoftwareApplication/SoftwareApplicationPage.jsx

import MainLayout from "@/layouts/MainLayout";
import { softwareApplicationData } from "@/data/softwareApplication/softwareApplication";
=======
>>>>>>> Stashed changes:src/screens/SoftwareApplication/SoftwareApplicationPage.jsx
import { SoftwareApplicationHero } from "./components/SoftwareApplicationHero";
import { AppHighlightsSection } from "./components/AppHighlightsSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { PrivacySection } from "./components/PrivacySection";
import { CallToActionSection } from "./components/CallToActionSection";
import { getSoftwareApplicationData } from "@/services/softwareApplication";
import { MobileExperienceSection } from "./components/MobileExperienceSection";

export default function SoftwareApplicationPage() {
  const softwareApplicationData = getSoftwareApplicationData();
  const { hero, screens, mobileExperience, capabilities, privacy, cta } =
    softwareApplicationData;

  return (
    <MainLayout>
      <main className="flex-1 bg-background">
        <SoftwareApplicationHero hero={hero} />
        <AppHighlightsSection screens={screens} />
        <MobileExperienceSection mobileExperience={mobileExperience} />
        <CapabilitiesSection capabilities={capabilities} />
        <PrivacySection privacy={privacy} />
        <CallToActionSection cta={cta} />
      </main>
    </MainLayout>
  );
}

