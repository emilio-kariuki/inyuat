"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { monasans } from "@/lib/fonts";
import * as React from "react";

import { MobileMenu } from "./mobile_header";
import DesktopMenu, { Logo } from "./desktop_header";

export default function Header() {
  return (
    <nav
      className={cn(
        "z-30 flex mn-w-[] px-3 w-full items-center bg-[#EDF3F2]",
        "sticky top-0"
      )}
    >
      <div className="mx-auto flex w-full max-w-[85rem] items-center justify-between py-6 md:py-3 lg:py-3">
        <Logo />

        <MobileMenu />
        <DesktopMenu />
      </div>
    </nav>
  );
}
