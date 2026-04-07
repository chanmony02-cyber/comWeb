import { notFound } from "next/navigation";
<<<<<<< Updated upstream
import MainLayout from "@/layouts/MainLayout";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { products } from "@/data/products/products";
import { RelatedProducts } from "@/pages/ProductDetail/components/RelatedProducts";
import { ProductDetailContentSection } from "@/pages/ProductDetail/components/ProductDetailContentSection";

export async function generateStaticParams() {
  return products.map((product) => ({ id: String(product.id) }));
}

export async function generateMetadata({ params }) {
  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    return {};
  }

=======

import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { ProductDetailContentSection } from "@/screens/ProductDetail/components/ProductDetailContentSection";
import { ProductTabs } from "@/screens/ProductDetail/components/ProductTabs";
import { RelatedProducts } from "@/screens/ProductDetail/components/RelatedProducts";
import {
  getProductById,
  getProducts,
  getRelatedProducts,
} from "@/services/products";

export function generateStaticParams() {
  return getProducts().map((product) => ({ id: String(product.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product" };
>>>>>>> Stashed changes
  return {
    title: product.name,
    description: product.description,
  };
}

<<<<<<< Updated upstream
export default function Page({ params }) {
  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    notFound();
  }

  return (
    <MainLayout>
      <ProductDetailContentSection product={product} />
      <RelatedProducts currentId={product.id} category={product.category} />
      <GetInTouchSection />
    </MainLayout>
  );
}
=======
export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product.category, product.id);

  return (
    <>
      <ProductDetailContentSection product={product} />
      <ProductTabs
        description={product.description}
        features={product.features}
        scopeOfApplication={product.scopeOfApplication}
        specs={product.specs}
      />
      <RelatedProducts
        relatedProducts={relatedProducts}
      />
      <GetInTouchSection />
    </>
  );
}

>>>>>>> Stashed changes
