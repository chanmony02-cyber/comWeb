"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { resolveHref } from "@/lib/resolveHref";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavDropdown({ label, items, triggerClassName = "" }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "group flex items-center gap-1 text-md font-medium text-foreground hover:text-navy transition-colors focus:outline-none",
            triggerClassName,
          )}
          aria-haspopup="menu"
        >
          {label}
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={14}
        className="z-[100] min-w-64 rounded-xl border border-border bg-white p-2 shadow-xl"
      >
        {items.map((item) => (
          <DropdownMenuItem
            key={item.label}
            className="cursor-pointer rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-primary-blue hover:text-white focus:bg-primary-blue focus:text-white"
          >
            <Link href={resolveHref(item.href)}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
