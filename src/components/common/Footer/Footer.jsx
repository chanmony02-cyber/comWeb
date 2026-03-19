import VHTLogo from "@/assets/images/VHT_Logo.png";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { ROUTES } from "@/config/routes";

const Footer = () => {
  return (
    <footer className="bg-topbar text-topbar-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-12">
          <div>
            <div className="card-logo bg-white p-1 rounded-lg w-fit">
              <a href={ROUTES.HOME} className="flex items-center">
                <img src={VHTLogo} alt="VHT Logo" className="h-14 w-auto" />
              </a>
            </div>

            <p className="mt-4 text-sm text-topbar-foreground/70 leading-relaxed">
              Delivering innovative technology solutions that empower businesses
              to achieve their full potential.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-topbar-foreground/10 flex items-center justify-center hover:bg-primary-blue hover:text-accent-foreground transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-topbar-foreground/10 flex items-center justify-center hover:bg-primary-blue hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-topbar-foreground/10 flex items-center justify-center hover:bg-primary-blue hover:text-accent-foreground transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-topbar-foreground/10 flex items-center justify-center hover:bg-primary-blue hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-5 text-sm text-topbar-foreground/70">
              {["Distribution Grid", "City Infrastructure", "Agriculture"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-primary-blue transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-5 text-sm text-topbar-foreground/70">
              {[
                "All Services",
                "Consultants",
                "Maintenance",
                "Inspections",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-primary-blue transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Useful Links</h4>
            <ul className="space-y-5 text-sm text-topbar-foreground/70">
              {["Home", "Services", "Contact Us", "News & Events"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-primary-blue transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-5 text-sm text-topbar-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> 123 Business
                Ave, Suite 100, City, Country
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" /> +(855) XXX XXX XXX
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" /> info@company.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-topbar-foreground/10 pt-6 text-center text-xs text-topbar-foreground/50">
          © {new Date().getFullYear()} VHT Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
