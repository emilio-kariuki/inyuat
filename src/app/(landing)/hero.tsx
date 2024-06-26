"use client";

import { Quicksand } from "next/font/google";
import { ArrowUpRight, ArrowDownFromLine } from "lucide-react";
import { Element, Link } from "react-scroll";
import { monasans } from "@/lib/fonts";
import { GridPattern } from "@/components/shared/pattern";

export function Hero() {
  return (
    <Element name="hero">
      <section className="relative px-1 py-0 md:py-20 lg:py-20 bg-black-100 mx-2 lg:mx-20 md:mx-20">
        <div className="flex flex-col justify-center items-center mt-5 mb-5 md:mt-28 md:mb-40 lg:mt-28 lg:mb-40 h-[600px] lg:h-[300px]">
          <h2
            className={`text-[30px] md:text-[45px] lg:text-[45px] font-normal max-w-[980px] text-center ${monasans.className}`}
          >
            Founded in{" "}
            <span className="text-green-700 text-[30px] md:text-[45px] lg:text-[45px] font-extrabold">
              2010
            </span>{" "}
            with the goal of providing the best quality fruits and vegetables.
          </h2>
          <h4
            className={`text-[18px] md:text-[20px] lg:text-[20px] font-normal max-w-2xl text-center mt-7 text-[#677085] ${monasans.className}`}
          >
            We are a family-owned business that is dedicated to providing our
            customers with the freshest.
          </h4>
          <DiscoverSection />

          <Link
            className="hidden lg:flex font-medium "
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className=" bg-white rounded-full p-5 absolute bottom-0  hover:bg-[#C1FB6B]">
              <ArrowDownFromLine />
            </div>
          </Link>
        </div>

        {/* <div className="text-green-900/10">
        <GridPattern x="80%" patternTransform="translate(0 80)" />
      </div> */}
      </section>
    </Element>
  );
}

function DiscoverSection() {
  return (
    <div className="flex gap-4 mt-7">
      <div className=" flex gap-2 items-center bg-[#C1FB6B] hover:bg-[#b1e661] p-4 rounded-[10px]">
        <p className="text-[14px] font-medium">Discover Our products</p>
        <ArrowUpRight size={20} />
      </div>
      <div className="bg-white hover:bg-slate-300 p-4 rounded-[10px]">
        <p className="text-[14px] font-medium">Learn more</p>
      </div>
    </div>
  );
}
