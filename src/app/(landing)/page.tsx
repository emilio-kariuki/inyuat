"use client";

import Image from "next/image";
import { Hero } from "./hero";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <main className="h-full w-full bg-[#EDF3F2]">
      <Hero />
    </main>
  );
}
