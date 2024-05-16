"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { monasans } from "@/lib/fonts";
import * as React from "react";

import { MobileMenu } from "./mobile_header";
import DesktopMenu, { Logo } from "./desktop_header";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "z-30 flex px-3 w-full items-center ",
        
        pathname.includes('dashboard') ?"sticky top-0" : "sticky top-0",
        pathname.includes('dashboard') ? "bg-white" : "bg-[#EDF3F2]"
      )}
    >
      <div className="mx-auto flex w-full max-w-[85rem] items-center justify-between py-6 md:py-3 lg:py-1">
        <Logo />

        <MobileMenu />
        <DesktopMenu />
      </div>
    </nav>
  );
}
