import { ROUTES } from "@/config/routes";
import { products } from "@/data/products/products";

const featuredProductIds = [1, 2, 3];

export const featuredProducts = featuredProductIds
  .map((id) => products.find((product) => product.id === id))
  .filter(Boolean)
  .map((product) => ({
    id: product.id,
    image: product.image,
    title: product.name,
    description: product.description,
    category: product.category,
    href: ROUTES.PRODUCT_DETAIL.replace(":id", String(product.id)),
  }));
