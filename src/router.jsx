// src/router.jsx
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/config/routes";

const Home = lazy(() => import("@/pages/Home"));
const ElectricalEquipment = lazy(() => import("@/pages/ElectricalEquipment"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const AllProjectsPage = lazy(() => import("@/pages/AllProjects"));
const ProjectDetailPage = lazy(() => import("@/pages/ProjectDetail"));
const DistributionGridPage = lazy(
  () => import("@/pages/Industries/DistributionGrid"),
);
const CityInfrastructurePage = lazy(
  () => import("@/pages/Industries/CityInfrastructure"),
);
const AgriculturePage = lazy(() => import("@/pages/Industries/Agriculture"));
const ServicesPage = lazy(() => import("@/pages/Services"));
const ConsultantsPage = lazy(() =>
  import("@/pages/ServiceDetail").then((m) => ({ default: m.ConsultantsPage })),
);
const MaintenancePage = lazy(() =>
  import("@/pages/ServiceDetail").then((m) => ({ default: m.MaintenancePage })),
);
const InspectionsPage = lazy(() =>
  import("@/pages/ServiceDetail").then((m) => ({ default: m.InspectionsPage })),
);
const NewsEventsPage = lazy(() =>
  import("@/pages/NewsEvents").then((m) => ({ default: m.NewsEventsPage })),
);
const NewsDetailPage = lazy(() =>
  import("@/pages/NewsEvents").then((m) => ({ default: m.NewsDetailPage })),
);

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
        <Route path={ROUTES.ALL_PROJECTS} element={<AllProjectsPage />} />
        <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectDetailPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route
          path={ROUTES.DISTRIBUTION_GRID}
          element={<DistributionGridPage />}
        />
        <Route
          path={ROUTES.CITY_INFRASTRUCTURE}
          element={<CityInfrastructurePage />}
        />
        <Route path={ROUTES.AGRICULTURE} element={<AgriculturePage />} />
        <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
        <Route path={ROUTES.CONSULTANTS} element={<ConsultantsPage />} />
        <Route path={ROUTES.MAINTENANCE} element={<MaintenancePage />} />
        <Route path={ROUTES.INSPECTIONS} element={<InspectionsPage />} />
        <Route path={ROUTES.NEWS} element={<NewsEventsPage />} />
        <Route path={ROUTES.NEWS_DETAIL} element={<NewsDetailPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
