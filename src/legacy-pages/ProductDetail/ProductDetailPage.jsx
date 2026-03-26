import { notFound } from "next/navigation";
import MainLayout from "@/layouts/MainLayout";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { RelatedProducts } from "./components/RelatedProducts";
import { ProductDetailContentSection } from "./components/ProductDetailContentSection";
import { products } from "@/data/products/products";

export default function ProductDetailPage({ params }) {
  const { id } = params;
  const product = products.find((item) => item.id === Number(id));

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
