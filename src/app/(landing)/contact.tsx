import { monasans, quicksand } from "@/lib/fonts";
import { Element } from "react-scroll";
import Link from "next/link";
import { ArrowUpRight, ArrowDownFromLine, MoveRight } from "lucide-react";

export default function ContactSection() {
  return (
    <Element name="contact">
      <section className="relative px-1 bg-black-100 mx-0 ">
        <div className="md:flex lg:flex flex-row justify-center items-end  bg-white">
          <div className="flex flex-col p-10 mr-32">
            <h1
              className={`text-3xl md:text-5xl lg:text-7xl font-bold text-black ${monasans.className}`}
            >
              Lets get<br></br>in touch
            </h1>

            <p
              className={`font-bold text-2xl  mt-8 md:mt-20 lg:mt-20 ${monasans.className}`}
            >
              Dont be afraid to <br></br>say hello to us
            </p>

            <p className=" mt-4 md:mt-8 lg:mt-8 text-gray-500">Phone</p>
            <p className="w-full font-semibold">+(254) 7686 44556</p>

            <p className=" mt-4 md:mt-8 lg:mt-8  text-gray-500">Email</p>
            <p className="font-semibold">info@inyuatfarmfresh@gmail.com</p>

            <p className=" mt-4 md:mt-8 lg:mt-8 text-gray-500">Office</p>
            <p className="font-semibold">
              Address: Airport North Rd,<br></br>Nairobi, Kenya
            </p>
            <Link
              href="https://www.google.com/maps/place/Panier+Vert+Fruits+and+Vegetables/@-1.319241,36.905432,14z/data=!4m6!3m5!1s0x182f13214568e0e5:0xb6e0c331012d2323!8m2!3d-1.3192414!4d36.9054322!16s%2Fg%2F11ts01f9sd?hl=en&entry=ttu"
              style={{
                textDecoration: "underline",
                color: "black",
                fontSize: 15,
              }}
            >
              {" "}
              <div className="flex gap-1">
                <p>See on Google Maps</p>
                <ArrowUpRight size={20} />
              </div>{" "}
            </Link>
          </div>
          <div className="h-10"></div>

          <div className="flex flex-col border-r-[0.5px] border-l-[0.5px]  border-transparent lg:border-gray-500 md:border-gray-500">
            <div className="flex flex-row justify-start items-center gap-4">
              {<MoveRight size={100} />}
              <p
                className={`${monasans.className} w-[350px] mr-2 lg:mr-0 md:mr-0`}
              >
                Great! We are excited to hear from you and lets start something
                special together<br></br> Reach out to us for enquiry{" "}
              </p>
            </div>

            <div>
              <div className="bg-black flex flex-col mx-5 lg:mx-0 md:mx-0 mt-10 py-10 lg:py-20 md:py-20 px-9 mx-w-2xl  ">
                <div>
                  <p className="font-semibold text-white mb-8 text-xl lg:text-5xl">
                    Contact Us
                  </p>
                  <div className="flex flex-col lg:gap-7 md:gap-7 gap-4">
                    <div className="flex flex-col justify-center items-center  gap-4">
                      <div className="w-full flex flex-col lg:flex-row md:flex-row gap-4 mt-5">
                        <input
                          className=" flex w-full  px-4 py-3 bg-transparent text-[14px] rounded-[5px]   border-[0.2px] border-gray placeholder:text-[11px]"
                          type="text"
                          placeholder="Name"
                        />

                        <input
                          className=" flex w-full  px-4 py-3 bg-transparent text-[14px] rounded-[5px]   border-[0.2px] border-gray placeholder:text-[11px]"
                          type="email"
                          placeholder="Email"
                        />
                      </div>

                      <div className=" w-full flex flex-col lg:flex-row md:flex-row gap-4 ">
                        <input
                          className=" flex w-full  px-4 py-3 bg-transparent text-[14px] rounded-[5px]  border-[0.2px] border-gray placeholder:text-[11px]"
                          type="phone"
                          placeholder="Phone"
                        />
                        <input
                          className=" flex w-full  px-4 py-3 bg-transparent text-[14px] rounded-[5px]   border-[0.2px] border-gray placeholder:text-[11px]"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center w-full items-center">
                  <div className="flex justify-center items-center mt-8 ">
                    <div className=" bg-[#54EA53] hover:bg-[#54d354] w-full px-16 py-3 rounded">
                      Submit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
