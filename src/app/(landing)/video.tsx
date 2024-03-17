import { monasans, quicksand } from "@/lib/fonts";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Element } from "react-scroll";


export default function VideoSection(){
    return (
        <Element name="video">
            <section>
            <div className="flex flex-col #f9f9f9 px-16 py-32 w-full ">
              <h3 className="flex items-center bg-lime-100 p-4 rounded-[15px] ">
                CASE STUDIES
              </h3>
          <h3
            className={`font-medium text-[30px]  text-black ${monasans.className} mt-6`}
          >
            Loved by industry leaders
          </h3>
          <h3
            className={`text-[30px] font-medium max-w-4xl  text-black  ${monasans.className}`}
          >
            See what customers are saying
            
          </h3>
          <div className="flex items-end bg-[#C1FB6B] hover:bg-[#b1e661] p-4 rounded-[15px] gap-2">
            <p className="text-[18px] text-black font-medium">Customer Stories</p>
            <ArrowUpRight size={20} />
          </div>
          </div>
        <div className="bg-slate-200 box-content h-56 w-32 p-4 border-4">
        <Image alt='image' src={"https://www.picsa.pro/profile.jpg"} width={300} height={300}/>
        <p className="mb-8 text-[22px]">For a freelancer, traditional banks are archaic, I know exactly how much I pay for every service I need.</p>
        <p className="text-green-700">Momento for services</p>

        </div>
                
                
                
            </section>

        </Element>

    );
}