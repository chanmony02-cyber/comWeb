import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavLink = forwardRef(
  ({ className, activeClassName, pendingClassName, to, href, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href ?? to}
        className={cn(className, activeClassName, pendingClassName)}
        {...props}
      />
    );
  },
);

export { NavLink };
