// src/pages/Contact/components/OurLocationSection.jsx

import { siteConfig } from "@/config/siteConfig";
import { contactData } from "@/data/contact/contact";

export function OurLocationSection() {
  const { location, info } = contactData;

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-center font-display mb-10 md:mb-16">
          {location.sectionTitle}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-40">
          {/* Left — address block + contact + business hours */}
          {/* Mobile: normal flow. Desktop: flex column with business hours pinned to bottom */}
          <div className="flex flex-col gap-6 lg:gap-0 lg:justify-between">
            {/* TOP GROUP — address + contact details */}
            <div className="space-y-6">
              {/* Address */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-5 h-5 text-primary-blue flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-navy font-display">
                    {location.addressTitle}
                  </h3>
                </div>
                <p className="text-muted-foreground text-md leading-relaxed pl-7">
                  {siteConfig.address}
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-3 pl-1">
                {/* Phone */}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-muted-foreground text-md hover:text-primary-blue transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-primary-blue flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.338c0-.966.784-1.75 1.75-1.75h1.4c.398 0 .743.27.842.656l.96 3.605a.875.875 0 0 1-.406 1.002l-1.076.644a11.25 11.25 0 0 0 5.25 5.25l.644-1.076a.875.875 0 0 1 1.002-.406l3.605.96c.386.1.656.444.656.842v1.4c0 .967-.784 1.75-1.75 1.75h-.438C7.474 19.5 2.25 14.276 2.25 7.838v-.438a1.5 1.5 0 0 1 0-.062Z"
                    />
                  </svg>
                  <span>{siteConfig.phone}</span>
                </a>

                {/* Website */}
                <a
                  href={info.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground text-md hover:text-primary-blue transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-primary-blue flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253"
                    />
                  </svg>
                  <span>{info.websiteLabel}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-muted-foreground text-md hover:text-primary-blue transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-primary-blue flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>

            {/* BOTTOM — Business Hours */}
            {/* Mobile: flows naturally after contact. Desktop: pinned to bottom by justify-between */}
            <div className="bg-sky-accent/20 rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="w-5 h-5 text-primary-blue flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h4 className="text-xl font-bold text-navy font-display">
                  {location.businessHoursTitle}
                </h4>
              </div>
              <ul className="space-y-1.5">
                {location.businessHours.map((item) => (
                  <li
                    key={item.day}
                    className="flex flex-wrap items-center gap-x-2 text-md text-muted-foreground"
                  >
                    <span className="font-medium text-foreground">
                      {item.day}
                    </span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Google Map */}
          {/* Mobile: fixed height 280px. Desktop: driven by iframe height="500" */}
          <div className="w-full rounded-xl overflow-hidden border border-border shadow-sm">
            <iframe
              title="Our Location"
              src={location.mapEmbedUrl}
              width="100%"
              height="500"
              style={{ border: 0, display: "block", minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
