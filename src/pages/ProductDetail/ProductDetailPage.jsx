<<<<<<<< Updated upstream:src/pages/ProductDetail/ProductDetailPage.jsx
import { useParams } from "react-router-dom";
========
import { notFound } from "next/navigation";
>>>>>>>> Stashed changes:src/legacy-pages/ProductDetail/ProductDetailPage.jsx
import MainLayout from "@/layouts/MainLayout";
import { GetInTouchSection } from "@/components/ui/GetInTouchSection";
import { RelatedProducts } from "./components/RelatedProducts";
import { ProductDetailContentSection } from "./components/ProductDetailContentSection";
import { products } from "@/data/products/products";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 200, behavior: "smooth" });
    }
  };

  if (!product) {
    notFound();
  }

  return (
    <MainLayout>
      <ProductDetailContentSection product={product} />
<<<<<<<< Updated upstream:src/pages/ProductDetail/ProductDetailPage.jsx
      <RelatedProducts
        currentId={product.id}
        category={product.category}
        scrollToTop={scrollToTop}
      />
========
      <RelatedProducts currentId={product.id} category={product.category} />
>>>>>>>> Stashed changes:src/legacy-pages/ProductDetail/ProductDetailPage.jsx
      <GetInTouchSection />
    </MainLayout>
  );
}
