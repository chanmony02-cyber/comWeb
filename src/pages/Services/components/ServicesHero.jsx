// src/pages/Services/components/ServicesHero.jsx

export function ServicesHero({ title, subtitle, backgroundImage }) {
  return (
    <section className="relative h-64 md:h-80 flex items-end overflow-hidden">
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/60" />
      <div className="relative z-10 container pb-10 md:pb-14">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white font-display max-w-2xl leading-tight mb-3">
          {title}
        </h1>
        <p className="text-sky-accent text-sm md:text-base font-sans max-w-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
