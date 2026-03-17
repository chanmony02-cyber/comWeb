import { partners } from "@/data/partners/partners";

export default function PartnershipSection() {
  return (
    <section className="py-20 bg-section-alt">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left */}
          <div className="w-full md:w-3/5">
            <h2 className="text-foreground font-bold text-4xl md:text-[2.5rem] mb-5 font-display">
              Our Partnership
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[500px] font-sans">
              We foster long-lasting partnerships with industry leaders. All of
              our relationships reflect an alliance, collaboration, and trust
              that builds success.
            </p>
          </div>
          {/* Right â€” partner cards */}
          <div className="w-full md:w-[830px] flex flex-col gap-5">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center gap-5 bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Badge */}
                <div
                  className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center"
                  // style={{ backgroundColor: partner.color }}
                >
                  {/* {partner.initials} */}
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-foreground font-bold text-base mb-1 font-display">
                    {partner.name}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
