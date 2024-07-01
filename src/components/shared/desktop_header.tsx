"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import { Mail, LogIn, LayoutDashboard } from "lucide-react";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function DesktopMenu() {
  const pathname = usePathname();

  return (
    <div className={cn("hidden lg:flex md:flex items-center mx-[30px] my-[20px] justify-between", 
                      pathname.includes("dashboard") ? "bg-white" : "bg-[#EDF3F2]")}>
      <RouteSection />

      <SignedOut>
        <ContactButton
          title="Get Started"
          icon={<LogIn color="#ffffff" className="h-[18px] w-[18px]" />}
          href={"/sign-in"}
        />
      </SignedOut>

      {pathname.includes("dashboard") ? (
        <div className="ml-20">
          <UserButton showName />
        </div>
      ) : (
        <SignedIn>
          <ContactButton
            title="Dashboard"
            icon={<LayoutDashboard color="#ffffff" className="h-[18px] w-[18px]" />}
            href={"dashboard"}
          />
          <div className="w-2"></div>
        </SignedIn>
      )}
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center" onClick={() => window.location.href = "/"}>
      <Image src={logo} alt="logo" className="h-[40px] w-[40px] rounded-full mr-[10px]" />
      <h3 className="font-bold text-[21px]">
        INYUAT <span className="text-[#16A349]">FARM FRESH</span>
      </h3>
    </div>
  );
}

function RouteLink({ name, path }: { name: string; path: string }) {
  const linkClassName = "hover:bg-green-800 px-5 py-2 rounded-[40px] hover:text-white";

  return name === "Dashboard" ? (
    <Link href={path}>
      <div className={linkClassName}>
        <h2 className="font-medium">{name}</h2>
      </div>
    </Link>
  ) : (
    <Scroll
      className="font-medium"
      activeClass="active"
      to={path}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <div className={linkClassName}>
        <h2 className="font-medium">{name}</h2>
      </div>
    </Scroll>
  );
}

function RouteSection() {
  const routes = [
    { name: "Home", path: "hero" },
    { name: "About", path: "about" },
    { name: "Products", path: "products" },
    { name: "FAQ", path: "faq" },
    { name: "Contact", path: "contact" }
  ];

  return (
    <div className="flex gap-5">
      {routes.map((route, index) => (
        <RouteLink key={index} {...route} />
      ))}
    </div>
  );
}

function ContactButton({ title, icon, href }: { title: string; icon: JSX.Element; href: string }) {
  return (
    <Link href={href}>
      <div className="flex bg-green-800 rounded-[13px] py-[15px] px-[20px] gap-4 items-center hover:bg-green-700 ml-20">
        {icon}
        <h5 className="font-medium text-[14px] text-white">{title}</h5>
      </div>
    </Link>
  );
}

export default DesktopMenu;
export { Logo, RouteSection, ContactButton };
