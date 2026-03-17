import { featuredProducts } from "@/data/featuredProducts/featuredProducts";

export default function FeaturedProductsSection() {
  return (
    <section className="py-20 bg-section-alt">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-foreground font-bold text-4xl md:text-[2.5rem] mb-4 font-display">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-md mb-5 font-sans">
            Check out our best products
          </p>
          <a
            href="/product"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-primary-blue text-accent-foreground text-sm font-semibold rounded hover:bg-primary-blue/90 transition-colors font-display"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {featuredProducts.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden h-[360px] sm:h-[560px] ">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-foreground font-bold text-base mb-2 font-display">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                  {product.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
