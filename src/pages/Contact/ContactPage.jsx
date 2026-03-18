// src/pages/Contact/ContactPage.jsx

import MainLayout from "@/layouts/MainLayout";
import { ContactHeroSection } from "./components/ContactHeroSection";
import { OurLocationSection } from "./components/OurLocationSection";

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactHeroSection />
      <OurLocationSection />
    </MainLayout>
  );
}
