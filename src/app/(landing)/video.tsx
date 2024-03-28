import { monasans, quicksand } from "@/lib/fonts";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Element } from "react-scroll";
import Mangoes from "@/assets/mangoes.png";

const testimonials = [
  {
    image: "https://www.picsa.pro/profile.jpg",
    title:
      "For a freelancer, traditional banks are really archaic. I know exactly how much I pay for every service I need.  ",
    subtitle: "Momento for services",
    name: "Julia Stephanie",
    role: "Founder . Zendesk",
  },
  {
    image: "https://www.picsa.pro/profile.jpg",
    title:
      "Excellent service! We are able to deposit the share capital online, and the customer service was really helpful.",
    subtitle: "Momento for SaaS",
    name: "Brandon Marron",
    role: "Founder . Starburst",
  },
];

export default function VideoSection() {
  return (
    <Element name="video">
      <section>
        <div className="flex flex-col bg-[#f9f9f9] px-5 py-20 md:px-32 md:py-32 lg:px-60 lg:py-32 ">
          <div className="flex flex-col bg-transparent w-full ">
            <div className="flex flex-row">
              <div className=" bg-lime-100  rounded-[15px]">
                <p className="mx-3 my-2 font-semibold text-[14px] text-black">
                  CASE STUDIES
                </p>
              </div>
              <div></div>
            </div>

            <div className=" md:flex md:flex-row lg:flex lg:flex-row   justify-between mt-6 items-end">
              <div>
                <h3
                  className={`font-normal text-[25px] md:text-[35px] lg:text-[35px]  text-black ${monasans.className} `}
                >
                  Loved by industry leaders
                  <br></br> See what customers are saying
                </h3>
              </div>
              <div className="flex w-fit flex-row bg-[#C1FB6B] hover:bg-[#b1e661] mt-5 md:mt-0 lg:mt-0 p-4 rounded-[15px] gap-2 items-center h-[55px]">
                <p className="text-[14px] md:text-[18px] lg:text-[18px] text-black font-medium">
                  Customer Stories
                </p>
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>

          <div className=" md:flex lg:flex flex-row gap-2 md:gap-16 lg:gap-16 w-full justify-center items-center">
            {testimonials.map((testimonial, index) => {
              return (
                <TestimonyContainer
                  key={index}
                  image={testimonial.image}
                  title={testimonial.title}
                  subtitle={testimonial.subtitle}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              );
            })}
          </div>
        </div>
      </section>
    </Element>
  );
}

function TestimonyContainer({ ...props }) {
  return (
    <div className="bg-slate-200 p-4 border-4  rounded-[30px] mt-20">
      <div className="relative w-full">
        <div className="relative lg:h-[300px]  md:h-[200px] h-[200px]">
        <Image
          className=" w-full blur rounded-[30px] object-cover  "
          alt="image"
          // width={500}
          // height={20}
          fill
          src={props.image}
        />
        </div>

        <div className="flex flex-row justify-between absolute top-2 m-4 w-full pr-8">
          <p
            className={`font-semibold text-[15px]  text-black ${monasans.className} `}
          >
            {props.name}
          </p>
          <p
            className={`font-semibold text-[15px]  text-black ${monasans.className} `}
          >
            {props.role}
          </p>
        </div>
      </div>
      <p className="mb-6 text-[16px] mt-9 font-medium">{props.title}</p>
      <p className="text-green-700 text-[18px] font-medium">{props.subtitle}</p>
    </div>
  );
}
