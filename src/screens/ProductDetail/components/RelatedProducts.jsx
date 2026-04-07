<<<<<<< Updated upstream:src/pages/ProductDetail/components/RelatedProducts.jsx
<<<<<<<< Updated upstream:src/pages/ProductDetail/components/RelatedProducts.jsx
import { Link } from "react-router-dom";
========
 "use client";

import Link from "next/link";
>>>>>>>> Stashed changes:src/legacy-pages/ProductDetail/components/RelatedProducts.jsx
=======
"use client";

import Link from "next/link";
>>>>>>> Stashed changes:src/screens/ProductDetail/components/RelatedProducts.jsx

import { ProductCard } from "@/components/ui/ProductCard";

export function RelatedProducts({ relatedProducts = [] }) {
  if (relatedProducts.length === 0) return null;

  return (
    <section className="container py-14">
      <h2 className="text-3xl font-bold text-navy text-center mb-10 font-display">
        Related Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
<<<<<<< Updated upstream:src/pages/ProductDetail/components/RelatedProducts.jsx
<<<<<<<< Updated upstream:src/pages/ProductDetail/components/RelatedProducts.jsx
            to={ROUTES.PRODUCT_DETAIL.replace(":id", product.id)}
========
            href={ROUTES.PRODUCT_DETAIL.replace(":id", product.id)}
>>>>>>>> Stashed changes:src/legacy-pages/ProductDetail/components/RelatedProducts.jsx
=======
            href={`/products/${product.id}`}
>>>>>>> Stashed changes:src/screens/ProductDetail/components/RelatedProducts.jsx
            className="block"
            onClick={() => {
              window.scrollTo({ top: 200, behavior: "smooth" });
            }}
          >
            <ProductCard
              id={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
