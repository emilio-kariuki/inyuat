"use client";

import Image from "next/image";
import { Hero } from "./hero";
import { Element } from "react-scroll";
import { ServiceSection } from "./service";
import { FAQ } from "./faq";
import VideoSection from "./video";
import { Contact } from "lucide-react";
import ContactSection from "./contact";
import { ProductSection } from "./products";

export default function Home() {
  return (
    <main className="h-full w-full bg-[#EDF3F2]">
      <Hero />
      <ServiceSection />
      <ProductSection/>
      <VideoSection />
      <FAQ />
      <ContactSection />

    </main>
  );
}
