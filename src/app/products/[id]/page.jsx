import { notFound } from "next/navigation";
import ProductDetailPage from "@/features/ProductDetail/ProductDetailPage";
import { createPageMetadata } from "@/config/seo";
import { products } from "@/data/products/products";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata({ params }) {
  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    return createPageMetadata("Product Detail", "Product details page.");
  }

  return createPageMetadata(product.name, product.description);
}

export default function Page({ params }) {
  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    notFound();
  }

  return <ProductDetailPage params={params} />;
}
