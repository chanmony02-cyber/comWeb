<<<<<<< Updated upstream
=======
"use client";

>>>>>>> Stashed changes
import Link from "next/link";
import { forwardRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

<<<<<<< Updated upstream
const NavLink = forwardRef(function NavLink(
  { className, href, ...props },
  ref,
) {
  return <Link ref={ref} href={href} className={cn(className)} {...props} />;
});

NavLink.displayName = "NavLink";
=======
const NavLink = forwardRef(
  ({ className, activeClassName, to, ...props }, ref) => {
    const pathname = usePathname();
    const href = typeof to === "string" ? to : "/";
    const isActive = pathname === href;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);
// we want to rename when export if we don't use with "export default"
// NavLink.displayName = "NavLink";
>>>>>>> Stashed changes

export { NavLink };
