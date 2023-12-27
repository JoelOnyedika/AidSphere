import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { MoveRight } from "lucide-react";
import Link from "next/link";
import { navbarComponents } from "@/lib/constants";

const MobileNav = () => {
  return (
    <div className="bg-black text-center absolute min-w-[200px] left-[0px] right-[0px]">
      <NavigationMenu className="mr-5 bg-transparent">
        <NavigationMenuList className="block text-left">
          <NavigationMenuItem className="mb-5">
            <NavigationMenuTrigger className="text-xl bg-transparent">
              Product
            </NavigationMenuTrigger>
            <NavigationMenuContent className="p-0">
              <ul className="grid bg-gray-800 text-white gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {navbarComponents.map((data: any, index: number) => (
                  <li className="row-span-3">
                    <Link href={data.href} key={index}>
                      <span className="font-bold">{data.title}</span>
                      <p>{data.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-5">
            <Link href={"/pricing"} className="mr-5 text-xl inline">
              Pricing
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-5">
            <Link href={"/docs"} className="text-xl inline">
              Documentation
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-5">
            <Link href="/dashboard" className="text-xl inline">
              Dashboard
            </Link>
          </NavigationMenuItem>
          <div className="flex mt-10 justify-between items-center w-full">
            <div className="mb-5 w-full flex">
              <Link href="/dashboard" className="text-xl inline p-3 bg-purple-400 rounded-full">
                Login
              </Link>
              <Link href="/dashboard" className="text-xl inline">
                Dashboard
              </Link>
            </div>

          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MobileNav;
