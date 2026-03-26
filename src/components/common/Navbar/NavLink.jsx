import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { resolveHref } from "@/lib/resolveHref";

const NavLink = forwardRef(
  ({ className, activeClassName, pendingClassName, to, href, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={resolveHref(href ?? to)}
        className={cn(className, activeClassName, pendingClassName)}
        {...props}
      />
    );
  },
);

export { NavLink };
