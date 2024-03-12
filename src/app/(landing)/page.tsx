"use client";

import MainHeader from "@/components/shared/main_header";
import Image from "next/image";
import { Hero } from "./hero";

export default function Home() {
  return (
    <main className="h-full w-full bg-[#EDF3F2]">
      <Hero />
    </main>
  );
}


