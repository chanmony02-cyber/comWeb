<<<<<<< Updated upstream:src/pages/NotFound/NotFound.jsx
<<<<<<<< Updated upstream:src/pages/NotFound/NotFound.jsx
﻿import { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
========
import { useEffect } from "react";
import Link from "next/link";
>>>>>>>> Stashed changes:src/legacy-pages/NotFound/NotFound.jsx

import MainLayout from "@/layouts/MainLayout";
import { notFoundContent } from "@/data/notFound/notFound";
=======
import Link from "next/link";
>>>>>>> Stashed changes:src/screens/NotFound/NotFound.jsx
import { ROUTES } from "@/config/routes";
import { getNotFoundContent } from "@/services/notFound";

<<<<<<<< Updated upstream:src/pages/NotFound/NotFound.jsx
export default function NotFound() {
<<<<<<< Updated upstream:src/pages/NotFound/NotFound.jsx
  const location = useLocation();

========
export default function NotFound({ pathname = "" }) {
>>>>>>>> Stashed changes:src/legacy-pages/NotFound/NotFound.jsx
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            {notFoundContent.title}
          </h1>
          <p className="mb-4 text-xl text-muted-foreground">
            {notFoundContent.message}
          </p>
          <Link
<<<<<<<< Updated upstream:src/pages/NotFound/NotFound.jsx
            to={ROUTES.HOME}
========
            href={ROUTES.HOME}
>>>>>>>> Stashed changes:src/legacy-pages/NotFound/NotFound.jsx
            className="text-navy underline hover:text-navy/90"
          >
            {notFoundContent.cta}
          </Link>
        </div>
=======
  const notFoundContent = getNotFoundContent();
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          {notFoundContent.title}
        </h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {notFoundContent.message}
        </p>
        <Link
          href={ROUTES.HOME}
          className="text-navy underline hover:text-navy/90"
        >
          {notFoundContent.cta}
        </Link>
>>>>>>> Stashed changes:src/screens/NotFound/NotFound.jsx
      </div>
    </MainLayout>
  );
}
