import { useEffect } from "react";
import Link from "next/link";

import MainLayout from "@/layouts/MainLayout";
import { notFoundContent } from "@/data/notFound/notFound";
import { ROUTES } from "@/config/routes";

export default function NotFound({ pathname = "" }) {
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
            href={ROUTES.HOME}
            className="text-navy underline hover:text-navy/90"
          >
            {notFoundContent.cta}
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
