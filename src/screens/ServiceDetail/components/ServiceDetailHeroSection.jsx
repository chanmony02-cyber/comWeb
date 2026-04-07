import Image from "next/image";
import { BackButton } from "@/components/ui/BackButton";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ServiceDetailHeroSection({
  title,
  subtitle,
  heroImage,
  imageAlt,
  backLabel = "Back",
  titleClassName = "text-3xl md:text-4xl lg:text-5xl",
}) {
  return (
    <>
      <section className="pt-10 pb-6 bg-background">
        <div className="container">
          <BackButton label={backLabel} />
          <div className="mt-6">
            <SectionHeader
              title={title}
              subtitle={subtitle}
              align="center"
              titleClassName={titleClassName}
            />
          </div>
        </div>
      </section>

<<<<<<< Updated upstream:src/pages/ServiceDetail/components/ServiceDetailHeroSection.jsx
      <div className="container pb-10 flex justify-center">
        <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-sm">
          <img
            src={heroImage}
            alt={imageAlt || title}
            className="w-full h-60 md:h-[500px] lg:h-[700px] object-cover"
          />
=======
      <div className="container pb-16 flex justify-center">
        <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl shadow-sm h-64 md:h-[420px] lg:h-[560px]">
          {heroImage ? (
            <Image
              src={heroImage}
              alt={imageAlt || title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-60 md:h-[500px] lg:h-[700px] bg-gradient-to-br from-navy via-navy/90 to-primary-blue/30" />
          )}
>>>>>>> Stashed changes:src/screens/ServiceDetail/components/ServiceDetailHeroSection.jsx
        </div>
      </div>
    </>
  );
}
