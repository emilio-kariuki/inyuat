"use client";

import MainHeader from "@/components/shared/main_header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full bg-[#EDF3F2]">
      <Hero />
    </main>
  );
}

export function Hero() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mt-28">
        <h2 className="text-[45px] font-normal max-w-[980px] text-center">
          Founded in <span className="text-green-800 font-semibold">2010</span>{" "}
          with the goal of providing the best quality fruits and vegetables.
        </h2>
        <h4 className="text-[22px] font-normal max-w-2xl text-center mt-7 text-[#677085]">
          We are a family-owned business that is dedicated to providing our
          customers with the freshest.
        </h4>
        <DiscoverSection />
      </div>
    </section>
  );
}

export function DiscoverSection() {
  return (
    <div className="flex gap-4 mt-8" > 
      <div className="bg-[#C1FB6B] p-4 rounded-[10px]"> 
        <p  className="text-[14px] font-medium">Discover Our products</p>
      </div>
      <div className="bg-white p-4 rounded-[10px]">
        <p className="text-[14px] font-medium">Learn more</p>
      </div>
    </div>
  );
}
