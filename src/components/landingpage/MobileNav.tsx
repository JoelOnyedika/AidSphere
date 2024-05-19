import React from "react";
import  {ArrowRight, X } from 'lucide-react'
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
      
    <div className="flex justify-between w-full">
      <NavigationMenu className="mx-3 my-3 bg-transparent ">
        <NavigationMenuList className="block text-left">
          {/*<NavigationMenuItem className="mb-5">
            <NavigationMenuTrigger className="text-md bg-transparent">
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
          </NavigationMenuItem>*/}
          <NavigationMenuItem className="mb-5">
            <Link href={"/pricing"} className="mr-5 text-md inline">
              Pricing
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-5">
            <Link href={"/docs"} className="text-md inline">
              Documentation
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-5">
            <Link href="/dashboard" className="text-md inline">
              Dashboard
            </Link>
          </NavigationMenuItem>
          <div className="flex mt-10 justify-between items-center w-full">
          <div className="px-4 py-2 hover:animate-wiggle hover:border-slate-400 rounded-md shadow-md bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl">
              <Link href='/login' className="space-x-2 flex ">Login <ArrowRight className="scale-75" /> </Link>
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <div >
        <X/>
      </div>
    </div>

      
      
    </div>
  );
};

export default MobileNav;
