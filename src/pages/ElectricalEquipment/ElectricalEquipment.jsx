import { useState } from "react";

import MainLayout from "@/layouts/MainLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GetInTouchForm } from "@/components/ui/GetInTouchForm";
import { ProductCard } from "@/components/ui/ProductCard";
import {
  electricalEquipmentCategories,
  electricalEquipmentContent,
} from "@/data/electricalEquipment/electricalEquipment";
import { products } from "@/data/products/products";

export default function ElectricalEquipment() {
  const allCategoryValue = electricalEquipmentCategories[0]?.value ?? "all";
  const [activeCategory, setActiveCategory] = useState(allCategoryValue);
  const [currentPage, setCurrentPage] = useState(1);
  // max products to display
  const pageSize = 12;

  const filteredProducts =
    activeCategory === allCategoryValue
      ? products
      : products.filter((product) => product.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <MainLayout>
      <main className="flex-1 bg-background">
        <section className="bg-navy">
          <div className="container">
            <div className="min-h-[450px] py-16 md:py-20 flex items-center justify-center ">
              <SectionHeader
                title={electricalEquipmentContent.heroTitle}
                align="center"
                as="h1"
                titleClassName="text-white text-4xl md:text-5xl lg:text-6xl"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="flex flex-col gap-6 mb-10">
              <SectionHeader
                title={electricalEquipmentContent.categoryTitle}
                align="left"
                titleClassName="text-3xl md:text-3xl lg:text-4xl"
              />
              <div className="flex flex-wrap gap-3">
                {electricalEquipmentCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category.value);
                      setCurrentPage(1);
                      scrollToTop();
                    }}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                      activeCategory === category.value
                        ? "bg-navy text-white border-navy"
                        : "bg-white text-foreground border-border hover:border-navy"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {totalPages > 1 ? (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 rounded border text-foreground transition-colors ${
                    currentPage === 1
                      ? "border-border/60 text-foreground/40"
                      : "border-border hover:border-navy"
                  }`}
                >
                  {electricalEquipmentContent.pagination.previousLabel}
                </button>
                {pageNumbers.map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded border text-sm font-semibold transition-colors ${
                      page === currentPage
                        ? "bg-navy text-white border-navy"
                        : "border-border text-foreground hover:border-navy"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 rounded border text-foreground transition-colors ${
                    currentPage === totalPages
                      ? "border-border/60 text-foreground/40"
                      : "border-border hover:border-navy"
                  }`}
                >
                  {electricalEquipmentContent.pagination.nextLabel}
                </button>
              </div>
            ) : null}
          </div>
        </section>

        <section className="bg-section-alt pt-20 pb-20">
          <div className="container">
            <div className="max-w-md mx-auto bg-card border border-border rounded-2xl shadow-sm p-8 ">
              <SectionHeader
                title={electricalEquipmentContent.contactTitle}
                subtitle={electricalEquipmentContent.contactSubtitle}
                align="left"
                titleClassName="text-3xl md:text-3xl lg:text-4xl"
              />
              <GetInTouchForm content={electricalEquipmentContent.form} />
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
