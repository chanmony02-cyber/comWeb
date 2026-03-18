import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/config/routes";

const Home = lazy(() => import("@/pages/Home"));
const ElectricalEquipment = lazy(() => import("@/pages/ElectricalEquipment"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ContactPage = lazy(() => import("@/pages/Contact"));

const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.HOMEPAGE} element={<Home />} />
        <Route
          path={ROUTES.ELECTRICAL_EQUIPMENT}
          element={<ElectricalEquipment />}
        />
        <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
