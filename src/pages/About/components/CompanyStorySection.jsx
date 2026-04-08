import { Link } from "react-router-dom";

import companyHeroImage from "@/assets/images/about/company-story.webp";

const STORY_IMAGE_KEYFRAMES = `
  @keyframes storyCardFloat {
    0%,
    100% {
      transform: translate3d(0, 0, 0);
    }

    50% {
      transform: translate3d(0, -10px, 0);
    }
  }

  @keyframes storyGlowPulse {
    0%,
    100% {
      opacity: 0.45;
      transform: scale(1);
    }

    50% {
      opacity: 0.78;
      transform: scale(1.06);
    }
  }

  @keyframes storyImageDrift {
    0%,
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }

    50% {
      transform: translate3d(0, -8px, 0) scale(1.02);
    }
  }

  @keyframes storyImageSheen {
    0% {
      transform: translateX(-18%);
      opacity: 0;
    }

    35% {
      opacity: 0.42;
    }

    50% {
      transform: translateX(18%);
      opacity: 0.58;
    }

    100% {
      transform: translateX(18%);
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .story-card-float,
    .story-card-glow,
    .story-image-drift,
    .story-image-sheen {
      animation: none !important;
      transform: none !important;
    }
  }
`;

export function CompanyStorySection({
  label,
  title,
  stat,
  paragraphs,
  cta,
  image = companyHeroImage,
  imageAlt = "Head, heart, hand technology visual",
}) {
  const [titlePrefix, titleSuffix = ""] = title.split(
    "Electrical Infrastructure",
  );

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 xl:grid-cols-2 xl:gap-20">
          <div className="order-1">
            <span className="mb-4 inline-flex items-center rounded-full bg-sky-accent/30 px-4 py-1.5 font-sans text-md font-semibold text-primary-blue">
              {label}
            </span>

            <h2 className="mb-5 whitespace-pre-line font-display text-2xl font-bold leading-tight text-navy md:text-3xl lg:text-5xl">
              {titlePrefix}
              <span className="text-primary-blue">
                Electrical Infrastructure
              </span>
              {titleSuffix}
            </h2>

            <div className="mb-6 space-y-3">
              {paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-md leading-relaxed text-muted-foreground"
                >
                  {para}
                </p>
              ))}
            </div>

            <Link
              to={cta.href}
              className="inline-flex items-center gap-1 rounded-md bg-primary-blue px-6 py-2.5 font-display text-lg font-semibold text-white transition-colors hover:border hover:border-primary-blue hover:bg-white hover:text-primary-blue"
            >
              {cta.label}
            </Link>
          </div>

          <div className="relative order-2">
            <div
              className="story-card-glow pointer-events-none absolute -inset-6 rounded-[2rem] blur-3xl"
              style={{
                animation: "storyGlowPulse 7s ease-in-out infinite",
                background:
                  "radial-gradient(circle at 50% 40%, rgba(14, 165, 233, 0.22), transparent 62%)",
              }}
            />

            {/* 2 years experience */}
            {/* <div className="absolute -top-4 left-4 z-10 min-w-[120px] rounded-2xl bg-primary-blue px-5 py-4 text-center text-white shadow-lg xl:-left-6">
              <p className="font-display text-2xl leading-none font-bold xl:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 font-sans text-xs leading-tight opacity-90">
                {stat.label}
              </p>
            </div> */}

            <div
              className="story-card-float relative mx-auto max-w-[720px] overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950/5 shadow-[0_30px_80px_rgba(15,23,42,0.16)]"
              style={{
                animation: "storyCardFloat 8s ease-in-out infinite",
                aspectRatio: "1600 / 1006",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 via-transparent to-primary-blue/10" />
              <div
                className="story-image-drift absolute inset-0"
                style={{
                  animation: "storyImageDrift 11s ease-in-out infinite",
                }}
              >
                <img
                  src={image}
                  alt={imageAlt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                  width={1600}
                  height={1006}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div
                className="story-image-sheen pointer-events-none absolute inset-y-0 left-[-24%] w-1/2 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.0)_42%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0.0)_58%,transparent_100%)] mix-blend-screen"
                style={{
                  animation: "storyImageSheen 8.5s ease-in-out infinite",
                }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>

      <style>{STORY_IMAGE_KEYFRAMES}</style>
    </section>
  );
}
