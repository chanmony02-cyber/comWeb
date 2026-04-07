<<<<<<< Updated upstream
import Link from "next/link";
import MainLayout from "@/layouts/MainLayout";
import { ROUTES } from "@/config/routes";

export default function NotFound() {
  return (
    <MainLayout>
      <main className="container py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-blue">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-navy font-display">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you’re looking for does not exist.
        </p>
        <Link
          href={ROUTES.HOME}
          className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 text-white font-semibold hover:bg-primary-blue"
        >
          Return home
        </Link>
      </main>
    </MainLayout>
  );
}
=======
export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <p className="text-muted-foreground text-lg">Page not found.</p>
    </div>
  );
}

>>>>>>> Stashed changes
