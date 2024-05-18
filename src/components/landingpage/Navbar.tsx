"use client"
import React, {useState} from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navbarComponents } from "@/lib/constants";
import { MoveRight, Menu, X } from "lucide-react";
import MobileNav from "./MobileNav";

interface INavbar {
  doesSessionExist: boolean
}

const Navbar = ({ doesSessionExist }: INavbar) => {
  const [toogleMobileNav, setToogleMobileNav] = useState(false)
  return (
    <div className="pt-[32px] pb-[32px] w-full">
      <div className="flex space-between pl-[24px] pr-[24px]">
        <div className="justify-between ml-auto mr-auto w-full flex items-center">
          <div>
            <h3 className="text-3xl">AidSphere</h3>
          </div>
          <div className="justify-end items-center">
            <div className="md:hidden flex">
              <button className="bg-hidden" onClick={() => {
                setToogleMobileNav(!toogleMobileNav)
              }}>
              {toogleMobileNav ? <X /> && <MobileNav /> : <Menu />}
              </button>
            </div>
            <div className="hidden md:flex">
              <NavigationMenu className="mr-5 bg-transparent">
                <NavigationMenuList className="space-x-10">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-lg bg-transparent">
                      Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid text-white gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
                  <NavigationMenuItem>
                    <Link href={"/pricing"} className="text-lg inline">
                      Pricing
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href={"/docs"} className="text-lg inline">
                      Documentation
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <div className="inline-flex"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
