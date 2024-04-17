"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import { Mail, LogIn, LayoutDashboard } from "lucide-react";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
export default function DesktopMenu() {
  return (
    <div className=" hidden lg:flex  md:flex items-center mx-[30px] my-[20px] justify-between bg-[#EDF3F2] ">
      <RouteSection />
      {/* <ContactButton /> */}
      <SignedOut>
        <ContactButton title="Get Started" icon={<LogIn color="#ffffff" className="h-[18px] w-[18px]" />} href={"/sign-in"}/>
      </SignedOut>
      <SignedIn >
        <ContactButton title="Dashboard" icon={<LayoutDashboard color="#ffffff" className="h-[18px] w-[18px]"/>}  href={"dashboard"} />
        <div className="w-2"></div>
        <UserButton showName />
        
      </SignedIn>
    </div>
  );
}

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src={logo}
        alt="logo"
        className="h-[40px] w-[40px] rounded-full mr-[10px]"
      />
      <h3 className="font-bold text-[21px]">
        INYUAT <span className="text-[#16A349]">FARM FRESH</span>
      </h3>
    </div>
  );
}

export function RouteSection() {
  const routes = [
    {
      name: "Home",
      path: "hero",
    },
   
    {
      name: "About",
      path: "about",
    },
    {
      name: "Products",
      path: "products",
    },
    {
      name: "Contact",
      path: "contact",
    },
    {
      name: "FAQ",
      path: "faq",
    },
  ];
  return (
    <div className="flex  gap-5">
      {routes.map((route, index) => {
        return (
          <Scroll
            className="font-medium hover:text-white"
            activeClass="active"
            to={route.path}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={index}
          >
            <div
              key={index}
              className=" hover:bg-green-800 px-5 py-2 rounded-[40px] hover:text-white"
            >
              <h2 className="font-medium hover:text-white">{route.name}</h2>
            </div>
          </Scroll>
        );
      })}
    </div>
  );
}

export function ContactButton({
  title ,
  icon ,
  href 
}:{
  title: string;
  icon: JSX.Element;
  href: string;

})  {
  return (
    <Link
    href={href}
    >
    <div className="flex bg-green-800 rounded-[13px] py-[15px] px-[20px] gap-4 items-center hover:bg-green-700 ml-20">
      {icon}
      <h5 className="font-medium text-[14px] text-white">{title}</h5>
      
      {/* <Mail color="#ffffff" className="h-[18px] w-[18px] " /> */}
    </div>
    </Link>
  );
}
