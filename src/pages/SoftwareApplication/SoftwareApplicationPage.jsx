// src/pages/SoftwareApplication/SoftwareApplicationPage.jsx

import { Link } from "react-router-dom";
import {
  Activity,
  Bell,
  Lock,
  MapPin,
  Search,
  ShieldCheck,
  Layers,
} from "lucide-react";

import MainLayout from "@/layouts/MainLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { GetInTouchForm } from "@/components/ui/GetInTouchForm";
import { ROUTES } from "@/config/routes";
import { softwareApplicationData } from "@/data/softwareApplication/softwareApplication";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  activity: Activity,
  bell: Bell,
  lock: Lock,
  map: MapPin,
  search: Search,
  layers: Layers,
};

const ScreenPreview = ({ type, className = "" }) => {
  if (type === "login") {
    return (
      <div
        className={cn(
          "rounded-[24px] bg-white/90 border border-white/80 p-4 text-navy shadow-sm",
          className,
        )}
      >
        <div className="flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-sky-accent/70 flex items-center justify-center">
            <div className="h-7 w-7 rounded-lg bg-primary-blue/80" />
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div className="h-9 rounded-full bg-muted/70 border border-border/60 flex items-center px-3 text-[10px] text-muted-foreground">
            Select tenant
          </div>
          <div className="h-9 rounded-full bg-navy text-white text-[10px] font-semibold flex items-center justify-center tracking-wide">
            LOGIN
          </div>
          <div className="text-center text-[10px] text-muted-foreground">
            Version 1.x
          </div>
        </div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div
        className={cn(
          "rounded-[24px] bg-white/90 border border-white/80 p-4 text-navy shadow-sm",
          className,
        )}
      >
        <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
          Dashboard
        </div>
        <div className="mt-3 space-y-3">
          {[
            { title: "Active Devices", value: "10" },
            { title: "Active Gateways", value: "5" },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-section-alt p-3 border border-white"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold">{card.title}</span>
                <div className="w-10 h-10 rounded-full border-[6px] border-orange-400 flex items-center justify-center text-[10px] font-semibold">
                  {card.value}
                </div>
              </div>
              <div className="mt-2 flex items-center gap-3 text-[9px] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Active
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Inactive
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  Never seen
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "application") {
    return (
      <div
        className={cn(
          "rounded-[24px] bg-white/90 border border-white/80 p-4 text-navy shadow-sm",
          className,
        )}
      >
        <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
          Application
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-8 rounded-full bg-muted/70 border border-border/60 flex items-center px-3 text-[10px] text-muted-foreground">
            Search
          </div>
          <div className="space-y-2">
            {["A1", "A2", "APP003"].map((item) => (
              <div
                key={item}
                className="h-8 rounded-xl bg-sky-accent/40 border border-white flex items-center justify-between px-3 text-[10px]"
              >
                <span className="font-semibold">Name: {item}</span>
                <span className="text-muted-foreground">0 Device</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "gateway") {
    return (
      <div
        className={cn(
          "rounded-[24px] bg-white/90 border border-white/80 p-4 text-navy shadow-sm",
          className,
        )}
      >
        <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
          Gateway
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-8 rounded-full bg-muted/70 border border-border/60 flex items-center px-3 text-[10px] text-muted-foreground">
            Search
          </div>
          <div className="space-y-2">
            {["A1", "A2", "A3"].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-sky-accent/40 border border-white px-3 py-2 text-[10px]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{item}</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                    Never seen
                  </span>
                </div>
                <div className="mt-1 text-muted-foreground">
                  ID: •••• ••••
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-[24px] bg-white/90 border border-white/80 p-4 text-navy shadow-sm",
        className,
      )}
    >
      <div className="h-6 rounded-lg bg-sky-accent/70 flex items-center justify-center text-[10px] font-semibold">
        More
      </div>
      <div className="mt-3 space-y-2">
        <div className="rounded-2xl bg-section-alt border border-white p-3 flex items-center gap-2 text-[10px]">
          <div className="w-8 h-8 rounded-full bg-primary-blue/20" />
          <div className="flex-1">
            <div className="h-2.5 rounded bg-white/80 w-20" />
            <div className="h-2 rounded bg-white/60 w-28 mt-2" />
          </div>
        </div>
        <div className="rounded-2xl bg-section-alt border border-white px-3 py-2 flex items-center justify-between text-[10px]">
          <span>Dark mode</span>
          <span className="w-8 h-4 rounded-full bg-muted/80 border border-border/60" />
        </div>
        <div className="rounded-2xl bg-section-alt border border-white px-3 py-2 text-[10px] text-primary-blue">
          Help & support
        </div>
        <div className="rounded-2xl bg-white border border-border px-3 py-2 text-[10px] text-red-500">
          Log out
        </div>
      </div>
    </div>
  );
};

export default function SoftwareApplicationPage() {
  const { hero, screens, capabilities, privacy, cta } =
    softwareApplicationData;

  return (
    <MainLayout>
      <main className="flex-1 bg-background">
        <section className="relative overflow-hidden bg-gradient-to-br from-navy via-primary-blue to-sky-accent text-white">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sky-accent/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="container relative py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-12 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
                {hero.badge}
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                {hero.title}
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl">
                {hero.subtitle}
              </p>
              <div className="mt-6 grid gap-3 text-sm text-white/90">
                {hero.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <Link to={ROUTES.CONTACT}>Request a demo</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/50 text-white hover:bg-white hover:text-navy"
                >
                  <a href="#app-highlights">See UI highlights</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[36px] border border-white/30 bg-white/10 p-6 backdrop-blur">
                <ScreenPreview type="dashboard" />
              </div>
              <div className="absolute -bottom-10 -left-10 hidden md:block w-44">
                <ScreenPreview type="login" className="shadow-lg" />
              </div>
              <div className="absolute -top-8 right-2 hidden md:block w-44">
                <ScreenPreview type="gateway" className="shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="app-highlights"
          className="py-16 md:py-24 bg-background scroll-mt-24"
        >
          <div className="container">
            <SectionHeader
              label={screens.label}
              title={screens.title}
              subtitle={screens.subtitle}
              align="left"
              titleClassName="text-3xl md:text-4xl lg:text-5xl"
            />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {screens.items.map((screen) => (
                <div
                  key={screen.id}
                  className="bg-card border border-border rounded-3xl p-6 shadow-sm flex flex-col gap-4"
                >
                  <div className="rounded-2xl bg-section-alt/70 p-4 border border-white">
                    <ScreenPreview type={screen.id} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy font-display">
                      {screen.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {screen.description}
                    </p>
                  </div>
                  <div className="grid gap-2 text-sm text-muted-foreground">
                    {screen.points.map((point) => (
                      <div key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary-blue" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-section-alt border border-border px-6 py-4 text-sm text-muted-foreground">
              All identifiers shown are placeholders. Sensitive data is masked in
              production views by design.
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-section-alt">
          <div className="container">
            <SectionHeader
              label={capabilities.label}
              title={capabilities.title}
              subtitle={capabilities.subtitle}
              align="left"
              titleClassName="text-3xl md:text-4xl"
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.items.map((item) => {
                const Icon = ICON_MAP[item.icon] ?? Activity;
                return (
                  <div
                    key={item.id}
                    className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-blue" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-navy font-display">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 items-center">
            <div>
              <SectionHeader
                label={privacy.label}
                title={privacy.title}
                subtitle={privacy.subtitle}
                align="left"
                titleClassName="text-3xl md:text-4xl"
              />
              <div className="mt-6 grid gap-3 text-sm text-muted-foreground">
                {privacy.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-blue" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                <ShieldCheck className="w-5 h-5 text-primary-blue" />
                <span>Masking is enabled by default for every account.</span>
              </div>
            </div>
            <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">
                    Privacy-first workflow
                  </p>
                  <p className="text-xs text-muted-foreground">
                    See the right data, not all data.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-4">
                {privacy.steps.map((step) => (
                  <div
                    key={step.id}
                    className="rounded-2xl bg-section-alt border border-white px-4 py-3"
                  >
                    <p className="text-sm font-semibold text-navy">
                      {step.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-white border border-border px-4 py-3 text-xs text-muted-foreground">
                Sensitive fields such as tenant IDs, device IDs, and IP
                addresses remain hidden unless explicitly authorized.
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-section-alt">
          <div className="container grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy font-display">
                {cta.title}
              </h2>
              <p className="mt-4 text-muted-foreground text-base max-w-xl">
                {cta.subtitle}
              </p>
              <div className="mt-6">
                <Button asChild size="lg" className="rounded-full">
                  <Link to={ROUTES.CONTACT}>Talk to our team</Link>
                </Button>
              </div>
            </div>
            <div className="bg-card border border-border rounded-3xl shadow-sm p-8">
              <GetInTouchForm />
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
