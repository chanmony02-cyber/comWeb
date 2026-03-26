import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const NavLink = forwardRef(function NavLink(
  { className, href, ...props },
  ref,
) {
  return <Link ref={ref} href={href} className={cn(className)} {...props} />;
});

NavLink.displayName = "NavLink";

export { NavLink };
