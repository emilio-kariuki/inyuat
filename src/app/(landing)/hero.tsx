"use client";

import { Quicksand, } from "next/font/google";
import { ArrowUpRight,ArrowDownFromLine } from "lucide-react";
import { Element, Link } from "react-scroll";
import { monasans } from "@/lib/fonts";
import { GridPattern } from "@/components/shared/pattern";




export function Hero() {
  return (
    <Element name="hero">
      <section>
      
        <div className="flex flex-col justify-center items-center mt-28 mb-40 h-[700px]">
          <h2
            className={`text-[45px] font-normal max-w-[980px] text-center ${monasans.className}`}
          >
            Founded in{" "}
            <span className="text-green-700 font-extrabold">2010</span> with the
            goal of providing the best quality fruits and vegetables.
          </h2>
          <h4 className={`text-[20px] font-normal max-w-2xl text-center mt-7 text-[#677085] ${monasans.className}`}>
            We are a family-owned business that is dedicated to providing our
            customers with the freshest.
          </h4>
          <DiscoverSection />
          
          
          <Link
            className="font-medium "
            activeClass="active"
            to='service'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="bg-white rounded-full p-5 absolute bottom-4 hover:bg-[#C1FB6B]">
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
