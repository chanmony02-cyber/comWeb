// src/pages/Contact/ContactPage.jsx

import MainLayout from "@/layouts/MainLayout";
import { ContactHeroSection } from "./components/ContactHeroSection";
import { OurLocationSection } from "./components/OurLocationSection";
import { NetworkBackground } from "./components/NetworkBackground";

export default function ContactPage() {
  return (
<<<<<<< Updated upstream:src/pages/Contact/ContactPage.jsx
    <MainLayout>
      {/* Wrapper covers both sections with the live network behind everything */}
      <div className="relative overflow-hidden">
        <NetworkBackground />
        <div className="relative z-10">
          <ContactHeroSection />
          <OurLocationSection />
        </div>
=======
    <div className="relative overflow-hidden">
      <NetworkBackground />
      <div className="relative z-10">
        <ContactHeroSection />
        <OurLocationSection />
>>>>>>> Stashed changes:src/screens/Contact/ContactPage.jsx
      </div>
    </MainLayout>
  );
}
