import { ROUTES } from "@/config/routes";

export const navItems = [
  { label: "Home", href: ROUTES.HOME },
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Services", href: "#", hasDropdown: true },
  { label: "Industries", href: "#", hasDropdown: true },
  { label: "Company", href: "#", hasDropdown: true },
];

export const productsDropdownItems = [
  { label: "Electrical Equipment", href: ROUTES.ELECTRICAL_EQUIPMENT },
  { label: "Software application", href: "#" },
];

export const companyDropdownItems = [
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Career", href: "#" },
  { label: "News & Events", href: "#" },
];

export const servicesDropdownItems = [
  { label: "All Services", href: "#" },
  { label: "Consultants", href: "#" },
  { label: "Maintenance", href: "#" },
  { label: "Inspections", href: "#" },
];

export const industriesDropdownItems = [
  { label: "Distribution Grid", href: "#" },
  { label: "City Infrastructure", href: "#" },
  { label: "Agriculture", href: "#" },
];
