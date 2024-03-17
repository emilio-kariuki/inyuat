import { monasans, quicksand } from "@/lib/fonts";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Element } from "react-scroll";

const testimonials = [
  {
    image: "https://www.picsa.pro/profile.jpg",
    title : "For a freelancer, traditional banks are really archaic. I know exactly how much I pay for every service I need.",
    subtitle : "Momento for services",
    name : "Julia Stephanie",
    role: "Founder . Zendesk"

  },
  {
    image: "https://www.picsa.pro/profile.jpg",
    title : "Excellent service! We are able to deposit the share capital online, and the customer service was really helpful.",
    subtitle : "Momento for SaaS",
    name : "Brandon Marron",
    role: "Founder . Starburst"

  }

]

export default function VideoSection() {
  return (
    <Element name="video">
      <section>
        <div className="flex flex-col bg-[#f9f9f9] px-32 py-32 ">
          <div className="flex flex-col bg-transparent w-full ">
            <div className="flex flex-row">
              <div className=" bg-lime-100  rounded-[15px]">
                <p className="mx-3 my-2 font-semibold text-[14px] text-black">
                  CASE STUDIES
                </p>
              </div>
              <div></div>
            </div>

            <div className="flex flex-row  justify-between mt-6 items-end">
              <div>
                <h3
                  className={`font-normal text-[35px]  text-black ${monasans.className} `}
                >
                  Loved by industry leaders
                  <br></br> See what customers are saying
                </h3>
              </div>
              <div className="flex flex-row bg-[#C1FB6B] hover:bg-[#b1e661] p-4 rounded-[15px] gap-2 items-center h-[55px]">
                <p className="text-[18px] text-black font-medium">
                  Customer Stories
                </p>
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>


      <div className="flex flex-row gap-16 w-full justify-center items-center">
      {
        testimonials.map((testimonial, index)=>{
          return <TestimonyContainer key={index} image={testimonial.image} title={testimonial.title} subtitle={testimonial.subtitle} 
          name ={testimonial.name} role={testimonial.role}/>
        })
      }
      </div>
        </div>
      </section>
    </Element>
  );
}

function TestimonyContainer({ ...props }) {
  return (
    <div className="bg-slate-200 p-4 border-4 w-1/2 rounded-[30px] mt-20">
      <div className="relative w-full">
        <Image
          className=" w-full blur rounded-[30px] object-cover lg:h-[400px] lg:w-[1000px] md:h-[200px] md:w-[200px] sm:h-[0px] sm:w-[0px]"
          alt="image"
          width={500}
          height={100}
          src={props.image}
        />
        <div className="flex flex-row justify-between absolute top-2 m-4 w-full pr-8">
          <p className={`font-semibold text-[20px]  text-black ${monasans.className} `}>{props.name}</p>
          <p className={`font-semibold text-[20px]  text-black ${monasans.className} `}>{props.role}</p>

        </div>
      </div>
      <p className="mb-8 text-[25px] mt-9 font-medium">
        {props.title}
      </p>
      <p className="text-green-700 text-[18px] font-medium">{props.subtitle}</p>

    </div>
  );
}
