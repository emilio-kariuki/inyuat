import { monasans, quicksand } from "@/lib/fonts";
import { Element } from "react-scroll";
import { BookText, ArrowUpRight } from "lucide-react";

export function ServiceSection() {
  return (
    <Element name="service">
      <section>
        <div className="flex flex-col bg-[#004D3F] px-16 py-32 w-full items-center justify-center">
          <h3
            className={`font-medium text-[35px] mb-4 text-white ${monasans.className}`}
          >
            We offer a wide range of products
          </h3>
          <h3
            className={`text-[16px] font-normal max-w-4xl text-center gap-3 text-[#F9FAFA]  ${monasans.className}`}
          >
            Inyuat Farm Fresh was founded in 2010 with the goal of providing the
            world with the best quality fruits and vegetables. We are a
            family-owned business that is dedicated to providing our customers
            with the freshest home.
          </h3>
          <div className="flex justify-evenly gap-5 mt-20">
            {services.map((service, index) => {
              return (
                <ServiceContainer
                  key={index}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              );
            })}
          </div>
          <div className="flex flex-row justify-center items-center  mt-20">
            <h2
              className={`text-[30px] text-[#F9FAFA] font-normal ${quicksand.className} `}
            >
              Supported by 40+
              <br />
              <span>Companies and Restraunts</span>
            </h2>
            <div className="h-100 w-[1px] bg-white mx-8"></div>

            <div className="flex gap-5">
              <h2
                className={`text-[30px] text-[#F9FAFA] font-normal ${quicksand.className} `}
              >
                Google
              </h2>
              <h2
                className={`text-[30px] text-[#F9FAFA] font-normal ${quicksand.className} `}
              >
                Amazon
              </h2>
              <h2
                className={`text-[30px] text-[#F9FAFA] font-normal ${quicksand.className} `}
              >
                Facebook
              </h2>
              <h2
                className={`text-[30px] text-[#F9FAFA] font-normal ${quicksand.className} `}
              >
                Meta
              </h2>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

const services = [
  {
    title: "Fresh Vegetables",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    title: "Fresh Fruits",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    title: "Fresh Meat",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
];

function ServiceContainer({ ...props }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`rounded-full ${
          props.index == 0
            ? "bg-[#30B877]"
            : props.index == 1
            ? "bg-[#367BE0]"
            : "bg-[#FFDD04]"
        }  p-6`}
      >
        <BookText size={25} color={props.index == 2 ? "#000000" : "#ffffff"} />
      </div>
      <h2
        className={`text-[18px]  text-white font-medium mt-5 ${monasans.className}`}
      >
        {props.title}
      </h2>
      <h3
        className={`text-[14px] text-white font-normal max-w-[280px] text-center mt-2 ${monasans.className}`}
      >
        {props.description}
      </h3>
    </div>
  );
}
