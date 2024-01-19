"use client";
import React from "react";
import "@/app/globals.css";
import { SidebarData } from "@/lib/constants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { useRouter } from "next/navigation";


const Sidebar = () => {
  const router = useRouter()
  const { sidebar } = SidebarData;
  return (
    <div>
      <div className="block space-y-5 box-border overflow-y text-gray-400 bg-gray-900 p-3 font-semibold pr-10">
        <div>
          <div>
            {sidebar.sidebarBase.map(
              (data: { id: number; title: string; icon: any, link: string }, id: number) => (
                <div
                  className="flex space-x-2 cursor-pointer box-border hover:bg-slate-700 p-1 rounded-md"
                  onClick={() => router.push(`/dashboard${data.link}`)}
                >
                  <div>{<data.icon className="scale-75" />}</div>
                  <span>{data.title}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <div className="mb-1">
            <span>ACTIVITY</span>
          </div>
          <div>
            {sidebar.sidebarActivity.map(
              (data: { id: number; title: string; icon: any, link: string }, id: number) => (
                <div
                  className="flex space-x-2 cursor-pointer box-border hover:bg-slate-700 p-1 rounded-md"
                   onClick={() => router.push(`/dashboard${data.link}`)}
                >
                  <div className="mb-2">
                    {<data.icon className="scale-75" />}
                  </div>
                  <span>{data.title}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <div className="mb-1">
            <span>KNOWLEDGE</span>
          </div>
          <div>
            {sidebar.sidebarKnowledge.map(
              (data: { id: number; title: string; icon: any, link: string }, id: number) => (
                <div
                  className="flex space-x-2 cursor-pointer box-border hover:bg-slate-700 p-1 rounded-md"
                   onClick={() => router.push(`/dashboard${data.link}`)}
                >
                  <div className="mb-2">
                    {<data.icon className="scale-75" />}
                  </div>
                  <span>{data.title}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <div className="mb-1">
            <span>SETUP</span>
          </div>
          <div>
            {sidebar.sidebarSetup.map(
              (data: { id: number; title: string; icon: any, link: string }, id: number) => (
                <div
                  className="flex space-x-2 cursor-pointer box-border hover:bg-slate-700 p-1 rounded-md"
                   onClick={() => router.push(`/dashboard${data.link}`)}
                >
                  <div className="mb-2">
                    {<data.icon className="scale-75" />}
                  </div>
                  <span>{data.title}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <div className="mb-1">
            <span>CONNECTIONS</span>
          </div>
          <div>
            {sidebar.sidebarConn.map(
              (data: { id: number; title: string; icon: any, link: string }, id: number) => (
                <div
                  className="flex space-x-2 cursor-pointer box-border hover:bg-slate-700 p-1 rounded-md"
                   onClick={() => router.push(`/dashboard${data.link}`)}
                >
                  <div className="mb-2">
                    {<data.icon className="scale-75" />}
                  </div>
                  <span>{data.title}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <div className="mb-1">
            <span>HELP</span>
          </div>
          <div>
            {sidebar.sidebarHelp.map(
              (data: { id: number; title: string; icon: any, link: string }, id: number) => (
                <div
                  className="flex space-x-2 cursor-pointer box-border hover:bg-slate-700 p-1 rounded-md"
                   onClick={() => router.push(`/dashboard${data.link}`)}
                >
                  <div className="mb-2">
                    {<data.icon className="scale-75" />}
                  </div>
                  <span>{data.title}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
