// src/pages/ServiceDetail/components/EquipmentGrid.jsx

import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { products } from "@/data/products/products";
import { ROUTES } from "@/config/routes";

function CheckItem({ label }) {
  return (
    <li className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
      <svg
        className="w-4 h-4 text-primary-blue flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.5 12l2.5 2.5 5-5"
        />
      </svg>
      {label}
    </li>
  );
}

// Match equipment item title to a product id for navigation
function findProductId(title) {
  const match = products.find((p) =>
    p.name.toLowerCase().includes(title.toLowerCase().split(" ")[0]),
  );
  return match ? match.id : null;
}

export function EquipmentGrid({ title, subtitle, items }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleClassName="text-3xl md:text-4xl"
          subtitleClassName="max-w-xl"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item) => {
            const productId = findProductId(item.title);
            const linkTo = productId
              ? ROUTES.PRODUCT_DETAIL.replace(":id", productId)
              : "#";

            return (
              <Link
                key={item.id}
                to={linkTo}
                className="group bg-card border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col
                  hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                {/* Image with padding */}
                <div className="xl:p-10 p-6">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-52 xl:h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Text content */}
                <div className="px-5 pb-6 flex flex-col gap-3">
                  <p className="text-md lg:text-xl font-bold text-navy font-display">
                    {item.title}
                  </p>
                  <p className="text-md lg:text-lg text-muted-foreground leading-relaxed font-sans">
                    {item.description}
                  </p>
                  <ul className="flex flex-col gap-2 mt-1">
                    {item.bullets.map((bullet) => (
                      <CheckItem
                        key={bullet}
                        label={bullet}
                        labelClassName="text-md"
                      />
                    ))}
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
