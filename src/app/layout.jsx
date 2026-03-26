import { Inter } from "next/font/google";
import "@/styles/index.css";
import { siteConfig } from "@/config/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
