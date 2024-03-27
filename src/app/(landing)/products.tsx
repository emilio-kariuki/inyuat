import Birthday from "@/assets/logo.png";
import Passion from "@/assets/passion.jpeg";
import Chilli from "@/assets/chilli.jpeg";
import Sugar from "@/assets/sugar.jpeg";
import Corn from "@/assets/corn.png";
import Beans from "@/assets/beans.jpeg";
import Avocado from "@/assets/avocado.png";
import Mangoes from "@/assets/mangoes.png";
import Peas from "@/assets/peas.jpeg";
import Image from "next/image";
import * as React from "react";
import { monasans, quicksand } from "@/lib/fonts";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Quote } from "lucide-react";
import { Element } from "react-scroll";

const products = [
  {
    description:
      "We export passion fruit, It is a good source of vitamins and minerals such as Vitamin C, Vitamin A, and Vitamin B. It is also a good source of antioxidants, which can help protect the body against damage from free radicals.We package it to customer Specification.",
    title: "Passion Fruit",
    image: Passion,
  },
  {
    description:
      "We export chilli peppers,They are an excellent source of Vitamin C, Vitamin A, and Vitamin K, as well as various minerals and antioxidants. Eating chili peppers can help boost the immune system, promote healthy skin, and improve vision and eye health.We package it to customer Specification.",
    title: "Chilli Peppers",
    image: Chilli,
  },
  {
    description:
      "We export Sugar snap,They are a good source of vitamins and minerals such as Vitamin C, Vitamin K, Vitamin A and Vitamin B. They are also a good source of fiber which helps in digestion and weight management.We package it to customer Specification.",
    title: "Sugar Snap",
    image: Sugar,
  },
  {
    description:
      "We specialize in export of babycorn.With a high fiber content, vitamin A, vitamin C, and iron content, baby corn is nutrient-rich. Our baby corn is carefully sourced from small-scale farmers in Kenya.",
    title: "Baby Corn",
    image: Corn,
  },
  {
    description:
      "We specialize in export of french Beans and we sell them through out the year.They are a good source of vitamins and minerals such as Vitamin C, Vitamin K, Vitamin A and Vitamin B. They are also a good source of fiber which helps in digestion and weight management.",
    title: "French Beans",
    image: Beans,
  },
  {
    description:
      "We export from Kenya Hass avocado and Fuerte avocado varieties.Avocados of the finest quality are carefully selected, graded and packaged.",
    title: "Avocado",
    image: Avocado,
  },
  {
    description:
      "We export mangoes, They are a good source of Vitamin C, Vitamin A, Additionally, they are a good source of fiber, which can aid in digestion and weight management.",
    title: "Mangoes",
    image: Mangoes,
  },
  {
    description:
      "We export snow peas,They are a good source of vitamins and minerals such as Vitamin C, Vitamin K, Vitamin A and Vitamin B. They are also a good source of fiber which helps in digestion and weight management.We package it to customer Specification.",
    title: "Snow Peas",
    image: Peas,
  },
];

export function ProductSection() {
  return (
    <Element name="products">
    <section className="relative px-1 py-20 bg-black-100 mx-5 md:mx-20 lg:mx-20">
      <div className="flex  w-full flex-col justify-center items-center ">
        {/* <h1
          className={`max-w-[600px] text-4xl font-bold text-slate text-center ${monasans.className} mb-10`}
        >
          What we offer to our customers is the best quality fruits 
        </h1> */}
        <div className="relative">
          <h3 className="text-center text-xl font-medium uppercase p-1">
            What we offer
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2200 800"
            fill="#000"
            className="absolute top-0 left-[50%] h-full w-full translate-x-[-50%] scale-[3] transform fill-[#004D3F]"
          >
            <path d="M1136 719c-183.3-3.2-366-25-546-59.7a1894.8 1894.8 0 0 1-186.9-44c-52.6-16-105.5-34.8-151.3-66-31.2-23.1-65.8-42.5-91.1-72.8-51.6-56-55.7-137.1-2.2-193.5 61.2-64 150.8-89.7 233.5-113.6 118.3-32.7 240.9-42.7 362-57.7C1083.5 57 1427 73.3 1747 170c-11.7-5.7-5.7-17.6 5.5-12a3350 3350 0 0 1 30.3 24.2c13.2 4.2 26 9.4 39 14.4 95.4 38.6 253.7 112.3 258 230.2-1.9 111-194.4 170.1-282.6 199.2-81.6 24.4-165.4 39.6-248 60.5-135.7 27.7-274.9 34.7-413.2 32.5Zm-61.1-24c133.1 3.5 266.5-2.5 398.9-17.5 51.3-6.4 102.6-13.6 153.4-23.5a770 770 0 0 0 170.4-70c-168.5 51-344.3 73-519.3 85.8-179.1 11-359.2 11.9-538-4 110.9 15.7 222.6 25.8 334.6 29.3Zm-178.5-32.2c191.7 6 384 0 574.3-24.7 124.8-16.3 249.5-39.7 368.5-81.3 95.9-68 162.5-184.4 47-271l-48-40.8c-33.6-13-68.2-23.3-102.8-33.4-3.5 3.5-9.3 1-11.4-3-139-39.9-283.5-53.3-427.5-60.3-247.7-11-496.5 10.7-739.8 58A1909.1 1909.1 0 0 0 388 248c-24.4 8-48.8 16.1-72.5 26-18 11.4-35 24.2-51.4 37.7-38 32.4-76.3 77.4-69.5 130.8 7 14.5 16.7 27.6 27.8 39.3 155.2 149 467.1 171.3 674 181Zm942.2-88.6a638 638 0 0 1-104.4 56c90.5-24.4 295.9-83.4 326.1-179.8 29-120.2-155.9-208-246.8-243.2 11.3 9 22 19.1 33.7 27.6 21.9 8 43 17.7 64.1 27.7 32.3 16 63.5 35.2 89.7 60.2 59.4 54.8 57.6 125.7-8.6 173.8-28.6 22-61.5 37.5-94.4 51.8-19.5 9.3-42 13.2-59.4 25.9ZM254 532.2a640.1 640.1 0 0 0 54.3 27 365.2 365.2 0 0 1-93.3-65c10.8 14.5 23 29.3 39 38Zm1651.3-248c98.3 78 58.8 185-23.5 256.5 206.6-78.5 185.6-195.9-3.3-279.2l26.8 22.7ZM195.5 491.6c-13.3-21.5-16.3-46.8-24-70.4-16-79.6 66.5-128.3 129-155 96.8-59.8 205.1-98.7 315.4-125.7-128.1 17.6-410 59.6-469.4 186.4-29.2 58.5 1.5 126.2 49 164.7Zm-8.8-107.1-.7 3.6c11.5-29.3 32-53.8 55-74.8-24.5 17.2-48.1 41-54.3 71.2ZM397 229.4c-5.3 2.3-10.5 4.8-15.6 7.5 143-43 291-66.3 439.2-83.8a2987.2 2987.2 0 0 1 519.8-14.3c-193.6-22.1-389.2-28-583.5-12.5-45 3.6-88.9 15.6-132.7 25.6A1235.4 1235.4 0 0 0 397 229.4Zm1336.8-31.2c25.6 7 51.1 14.5 76.2 23.2l-34-28c-20-6.9-40-13.6-60.4-19.3a1814 1814 0 0 0-135.3-34.2 2254.7 2254.7 0 0 0-695.7-33.4c196.8-6.7 394 7.8 588.6 37.5 36.4 5.8 72.7 12.1 109 19 50.9 8.8 104.7 12.5 151.6 35.2Z"></path>
          </svg>
        </div>
        <div className="h-20"></div>
        <CarouselSize />
      </div>

      <div className="flex items-center justify-center">
      <div className=" max-w-100 flex gap-2 items-center bg-[#004D3F] hover:bg-[#0a1b17] p-4 px-10 rounded-[10px] mt-10 justify-center">
        <p className="text-[15px] text-white font-medium">Order with Us</p>
        <ArrowUpRight size={20} color="#ffffff" />
      </div>
      </div>
    </section>
    </Element>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <div
      className={`flex flex-col max-w-[450px] min-h-[500px] justify-start items-start bg-transparent rounded-[10px] p-[15px] `}
    >
      <Image
        src={product.image}
        alt={`${product.title}'s profile`}
        style={{ objectFit: "cover" }}
        className="h-64 w-full rounded-[5px] mb-5"
      />
      <p
        className={`text-black text-[22px] font-semibold mb-8${monasans.className}`}
      >
        {product.title}
      </p>
      <p
        className={`text-[#333333] font-light text-[15px] ${quicksand.className}`}
      >
        {product.description}
      </p>
    </div>
  );
}

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
      className="w-full flex flex-col "
    >
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="lg:basis-1/3 md:basis-1/3 sm:basis-1/2"
          >
            <div className="p-1">
              <Card className="bg-[#E3E7EB] border-[0.1px] border-[#e9e9e9]">
                <ProductCard product={product} />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
