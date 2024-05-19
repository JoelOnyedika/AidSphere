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
import { MoveRight, Menu, X, ArrowRight } from "lucide-react";
import MobileNav from "./MobileNav";

interface INavbar {
  doesSessionExist: boolean
}

const Navbar = ({ doesSessionExist }: INavbar) => {
  const [toogleMobileNav, setToogleMobileNav] = useState(false)
  return (
    <div className="pt-[32px] pb-[32px] w-full border-b-slate-400 border-b-2">
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
                <NavigationMenuList className="space-x-10 text-md">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
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
                    <Link href={"/pricing"} className="inline">
                      Pricing
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href={"/docs"} className="inline">
                      Docs
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href={"/docs"} className="inline">
                      About
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <div className="inline-flex"></div>
            </div>
          </div>
          <div className="space-x-5 hidden md:flex text-sm">
            <div className="p-2 hover:border-slate-400">
              <Link href='/signup'>Sign in</Link>
            </div>
            <div className="px-4 py-2 hover:animate-wiggle hover:border-slate-400 rounded-md shadow-md bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl">
              <Link href='/signin' className="space-x-2 flex ">Sign up <ArrowRight className="scale-75" /> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
