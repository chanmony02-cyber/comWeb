import MainLayout from "@/layouts/MainLayout";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { RelatedProducts } from "./components/RelatedProducts";
import { ProductDetailContentSection } from "./components/ProductDetailContentSection";
import { products } from "@/data/products/products";

export default function ProductDetailPage({ params }) {
  const product = products.find((item) => item.id === Number(params?.id));

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
      <ProductDetailContentSection product={product} />
      <RelatedProducts
        currentId={product.id}
        category={product.category}
      />
      <GetInTouchSection />
    </MainLayout>
  );
}
