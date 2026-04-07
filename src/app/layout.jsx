<<<<<<< Updated upstream
import { Inter } from "next/font/google";
import "@/styles/index.css";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
=======
import "@/styles/index.css";
import MainLayout from "@/layouts/MainLayout";

export const metadata = {
  title: {
    default: "VHT",
    template: "%s | VHT",
  },
  description: "VHT Company",
>>>>>>> Stashed changes
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< Updated upstream
      <body className={inter.className}>
        <Providers>{children}</Providers>
=======
      <body>
        <a
          href="#main"
          className=" sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow"
        >
          Skip to content
        </a>
        <MainLayout>
          <main id="main" className="flex-1">
            {children}
          </main>
        </MainLayout>
>>>>>>> Stashed changes
      </body>
    </html>
  );
}
