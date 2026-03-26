// src/router.jsx
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/config/routes";

const Home = lazy(() => import("@/features/Home"));
const AboutPage = lazy(() => import("@/features/About"));
const ElectricalEquipment = lazy(() => import("@/features/ElectricalEquipment"));
const SoftwareApplicationPage = lazy(
  () => import("@/features/SoftwareApplication"),
);
const ProductDetail = lazy(() => import("@/features/ProductDetail"));
const NotFound = lazy(() => import("@/features/NotFound"));
const ContactPage = lazy(() => import("@/features/Contact"));
const AllProjectsPage = lazy(() => import("@/features/AllProjects"));
const ProjectDetailPage = lazy(() => import("@/features/ProjectDetail"));
const DistributionGridPage = lazy(
  () => import("@/features/Industries/DistributionGrid"),
);
const CityInfrastructurePage = lazy(
  () => import("@/features/Industries/CityInfrastructure"),
);
const AgriculturePage = lazy(() => import("@/features/Industries/Agriculture"));
const ServicesPage = lazy(() => import("@/features/Services"));
const ConsultantsPage = lazy(() =>
  import("@/features/ServiceDetail").then((m) => ({ default: m.ConsultantsPage })),
);
const MaintenancePage = lazy(() =>
  import("@/features/ServiceDetail").then((m) => ({ default: m.MaintenancePage })),
);
const InspectionsPage = lazy(() =>
  import("@/features/ServiceDetail").then((m) => ({ default: m.InspectionsPage })),
);
const NewsEventsPage = lazy(() =>
  import("@/features/NewsEvents").then((m) => ({ default: m.NewsEventsPage })),
);
const NewsDetailPage = lazy(() =>
  import("@/features/NewsEvents").then((m) => ({ default: m.NewsDetailPage })),
);
const CareerPage = lazy(() => import("@/features/Career"));
const CareerDetailPage = lazy(() => import("@/features/CareerDetail"));

const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.HOMEPAGE} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route
          path={ROUTES.ELECTRICAL_EQUIPMENT}
          element={<ElectricalEquipment />}
        />
        <Route
          path={ROUTES.SOFTWARE_APPLICATION}
          element={<SoftwareApplicationPage />}
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
        <Route path={ROUTES.CAREER} element={<CareerPage />} />
        <Route path={ROUTES.CAREER_DETAIL} element={<CareerDetailPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

