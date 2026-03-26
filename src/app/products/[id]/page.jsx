import { notFound } from "next/navigation";
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

  return {
    title: product.name,
    description: product.description,
  };
}

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
