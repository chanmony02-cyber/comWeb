// src/pages/Home/components/FeaturedProductsSection.jsx

import { Link } from "react-router-dom";
import { featuredProducts } from "@/data/featuredProducts/featuredProducts";
import { ROUTES } from "@/config/routes";

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
          <Link
            to={ROUTES.OUR_PRODUCTS}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-primary-blue text-accent-foreground text-sm font-semibold rounded hover:bg-primary-blue/90 transition-colors font-display"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={product.href || ROUTES.PRODUCT_DETAIL.replace(":id", product.id)}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden h-[360px] sm:h-[560px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-foreground font-bold text-xl mb-2 font-display">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-md leading-relaxed font-sans">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
