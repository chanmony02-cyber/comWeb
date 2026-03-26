import { siteConfig } from "@/config/siteConfig";

export function createPageMetadata(title, description) {
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
  };
}
