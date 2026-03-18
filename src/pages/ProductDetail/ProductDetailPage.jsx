import { useParams } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import { BackButton } from "@/components/ui/BackButton";
import { GetInTouchForm } from "@/components/ui/GetInTouchForm";

import { ProductImageGallery } from "./components/ProductImageGallery";
import { ProductInfoPanel } from "./components/ProductInfoPanel";
import { ProductTabs } from "./components/ProductTabs";
import { RelatedProducts } from "./components/RelatedProducts";

import { products } from "@/data/products/products";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <MainLayout>
        <div className="container py-20 text-center">
          <p className="text-muted-foreground text-lg">Product not found.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="container py-10">
        <BackButton />

        <h1 className="text-3xl font-bold text-navy text-center mt-6 mb-10 font-display">
          Product Detail
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ProductImageGallery images={product.images} name={product.name} />
          <ProductInfoPanel
            name={product.name}
            description={product.description}
          />
        </div>

        <div className="mt-10">
          <ProductTabs
            description={product.description}
            features={product.features}
            scopeOfApplication={product.scopeOfApplication}
            specs={product.specs}
          />
        </div>
      </section>

      <RelatedProducts currentId={product.id} category={product.category} />

      <section className="bg-section-alt pt-20 pb-20">
        <div className="container">
          <div className="max-w-md mx-auto bg-card border border-border rounded-2xl shadow-sm p-8 ">
            <GetInTouchForm />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
