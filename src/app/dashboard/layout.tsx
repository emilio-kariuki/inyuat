"use client";

import { cn } from "@/lib/utils";

import {
  BellIcon,
  ChevronRightIcon,
  CogIcon,
  HeartIcon,
  HistoryIcon,
  LayoutGridIcon,
  LoaderIcon,
  LucideProps,
  ShoppingBagIcon,
  StoreIcon,
  Users2Icon,
  AlignCenterVertical
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems: {
  title: string;
  href: string;
  icon: (p: LucideProps) => JSX.Element;

}[] = [
  {
    title: "Home",
    href: "/dashboard",
    icon: (p: LucideProps) => <LayoutGridIcon {...p} />,
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: (p: LucideProps) => <ShoppingBagIcon {...p} />,
  },
  {
    title: "Invoices",
    href: "/dashboard/invoices",
    icon: (p: LucideProps) => <StoreIcon {...p} />,
  },
  {
    title: "Inventory",
    href: "/dashboard/inventory",
    icon: (p: LucideProps) => <AlignCenterVertical {...p} />,
  },
  {
    title: "Profile & Settings",
    href: "/dashboard/profile",
    icon: (p: LucideProps) => <CogIcon {...p} />,
  },
  {
    title: "Recent Items",
    href: "/dashboard/recent",
    icon: (p: LucideProps) => <HistoryIcon {...p} />,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { push } = useRouter();



  return (
    <main className="mx-auto h-full min-h-screen w-full max-w-[1300px]  bg-white rounded-[10px]">
      <div className="sticky top-0 hidden  items-center gap-3 px-5 py-5 md:flex lg:flex border-b-[1px] border-gray-200">
        <span className="text-muted-foreground text-[14px]">Dashboard</span>
        <ChevronRightIcon className="text-muted-foreground h-3 w-5" />
        <span className="text-muted-foreground text-[14px]">
          {pathname === "/dashboard"
            ? "Home"
            : menuItems.slice(1).find((item) => pathname?.startsWith(item.href))
                ?.title}
        </span>
      </div>
      <div className="grid grid-cols-12 ">
        <section className="col-span-3 hidden md:block border-r-[1px] border-gray-200 ">
          <div className="sticky top-20 flex flex-col space-y-2 p-5">
            {menuItems
              .map((item, idx) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "hover:text-primary flex items-center space-x-3 rounded-md p-2 text-gray-600 transition-all hover:bg-green-100 md:w-[85%]",
                    pathname?.startsWith(item.href) &&
                      "text-primary bg-green-100 font-medium",
                    idx === 0 &&
                      pathname !== "/dashboard" &&
                      "bg-transparent font-normal text-gray-600"
                  )}
                >
                  {item.icon({ className: "h-5 w-5" })}
                  <span className="text-[14px]">{item.title}</span>
                </Link>
              ))}
          </div>
        </section>
        <section className="col-span-12 md:col-span-9">
          {children}
        </section>
      </div>
      <div className="absolute bottom-0 flex w-full items-center justify-between border-t border-gray-200/60 bg-white py-3 md:hidden">
        {menuItems
          .map((item, idx) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "hover:text-primary rounded-md p-2 text-gray-600 transition-all hover:bg-gray-100",
                pathname?.startsWith(item.href) &&
                  "text-primary bg-gray-100 font-medium",
                idx === 0 &&
                  pathname !== "/dashboard" &&
                  "bg-transparent font-normal text-gray-600"
              )}
            >
              {item.icon({ className: "h-5 w-5" })}
            </Link>
          ))}
      </div>
    </main>
  );
}
