// src/pages/About/components/AboutHero.jsx

export function AboutHero({ title, subtitle }) {
  return (
    <section className="relative h-56 md:h-72 lg:h-80 flex items-center justify-center overflow-hidden">
      {/* Dark navy gradient background — matches the mockup's electrical tower backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-primary-blue/40" />

      {/* Subtle grid overlay for depth */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(159,204,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(159,204,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl font-display mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-white/80 text-md md:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
