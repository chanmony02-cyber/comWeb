import LanguageSelector from "./LanguageSelector";
import {
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const TopBar = () => {
  return (
    // UPDATED: show top bar from tablet (md) upwards
    <div className="hidden xl:block bg-background text-foreground pt-4">
      <div className="container flex items-center justify-between h-[var(--topbar-height)] text-sm">
        <div className="flex items-center gap-2">
          <span>Have any questions? Call us: {siteConfig.phone}</span>
          <Phone className="w-3.5 h-3.5" />
        </div>
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.socials.facebook}
              className="hover:text-primary-blue transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              className="hover:text-primary-blue transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.socials.twitter}
              className="hover:text-primary-blue transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.socials.instagram}
              className="hover:text-primary-blue transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
