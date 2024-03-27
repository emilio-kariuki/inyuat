import {
  FileTextIcon,
  HeartHandshakeIcon,
  HomeIcon,
  MenuIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UserIcon,
  PhoneCall,
  Info,
  CircleHelp,
  Vegan,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation";
import { Hero } from "@/app/(landing)/hero";

export function MobileMenu() {
  return (
    <div className="block md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <MenuIcon className="h-6 w-6" color="#000000" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <HomeIcon className="mr-2 h-4 w-4" />
              <Link
                className="font-medium hover:text-white"
                activeClass="active"
                to={"hero"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div className=" hover:bg-green-800 px-5 py-2 rounded-[40px] hover:text-white">
                  <h2 className="font-medium hover:text-white">Home</h2>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Info className="mr-2 h-4 w-4" />
              <Link
                className="font-medium hover:text-white"
                activeClass="active"
                to={"about"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div className=" hover:bg-green-800 px-5 py-2 rounded-[40px] hover:text-white">
                  <h2 className="font-medium hover:text-white">About</h2>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Vegan className="mr-2 h-4 w-4" />
              <Link
                className="font-medium hover:text-white"
                activeClass="active"
                to={"products"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div className=" hover:bg-green-800 px-5 py-2 rounded-[40px] hover:text-white">
                  <h2 className="font-medium hover:text-white">Products</h2>
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CircleHelp className="mr-2 h-4 w-4" />
              <Link
                className="font-medium hover:text-white"
                activeClass="active"
                to={"faq"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div className=" hover:bg-green-800 px-5 py-2 rounded-[40px] hover:text-white">
                  <h2 className="font-medium hover:text-white">FAQ</h2>
                </div>
              </Link>{" "}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PhoneCall className="mr-2 h-4 w-4" />
              <Link
                className="font-medium hover:text-white"
                activeClass="active"
                to={"contact"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div className=" hover:bg-green-800 px-5 py-2 rounded-[40px] hover:text-white">
                  <h2 className="font-medium hover:text-white">Contact</h2>
                </div>
              </Link>{" "}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
