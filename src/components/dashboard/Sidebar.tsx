"use client";
import React, { useEffect, useState } from "react";
import "@/app/globals.css";
import { SidebarData } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { getUserCookies } from "@/lib/supabase/queries";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import {ChevronDown} from 'lucide-react'
import { truncateString } from "@/lib/shit-functions/functions";

const Sidebar = () => {
  const router = useRouter();
  const [userCookieData, setUserCookieData] = useState({
    username: "",
    email: "",
  });
  const [openAccountDialog, setOpenAccountDialog] = useState(false)

  useEffect(() => {
    async function fetchUserCookie() {
      const userCookie = await getUserCookies();
      const parsedValue = JSON.parse(userCookie.value);
      setUserCookieData({
        username: parsedValue.username,
        email: parsedValue.userEmail,
      });
    }
    fetchUserCookie();
  }, []);

  const { sidebar } = SidebarData;
  return (
    <div className="bg-gray-900 mt-4">
      <div className="ml-3">
        <div className="flex space-x-2 mb-3">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-[2px]">
            <div className="flex justify-between">
            <Label>JoelOnyedika</Label>
            <ChevronDown className="scale-50 p-0 cursor-pointer" onClick={() => setOpenAccountDialog(!openAccountDialog)}/>              
            </div>
            <Label className="font-semibold text-gray-500">{truncateString("joelonyedikaepic@gmail.com", 18)}</Label>
          </div>
        </div>
      </div>
        <hr style={{opacity: '0.5'}}/>
      <div className="block space-y-5 box-border overflow-y text-gray-400 font-bold bg-gray-900 p-3 pr-10">
        <div>
          <div>
            {sidebar.sidebarBase.map(
              (
                data: { id: number; title: string; icon: any; link: string },
                id: number
              ) => (
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
            <span className="text-sm text-slate-500">ACTIVITY</span>
          </div>
          <div>
            {sidebar.sidebarActivity.map(
              (
                data: { id: number; title: string; icon: any; link: string },
                id: number
              ) => (
                <div
                  className="flex mb-2 w-full space-x-2 cursor-pointer box-border hover:bg-slate-700 p-1 rounded-md"
                  onClick={() => router.push(`/dashboard${data.link}`)}
                >
                  <div className="">{<data.icon className="scale-75" />}</div>
                  <span>{data.title}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <div className="mb-1">
            <span className="text-sm text-slate-500">KNOWLEDGE</span>
          </div>
          <div>
            {sidebar.sidebarKnowledge.map(
              (
                data: { id: number; title: string; icon: any; link: string },
                id: number
              ) => (
                <div
                  className="flex mb-2 w-full space-x-2 cursor-pointer box-border hover:bg-slate-700 p-1 rounded-md"
                  onClick={() => router.push(`/dashboard${data.link}`)}
                >
                  <div className="">{<data.icon className="scale-75" />}</div>
                  <span>{data.title}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <div className="mb-1">
            <span className="text-sm text-slate-500">SETUP</span>
          </div>
          <div>
            {sidebar.sidebarSetup.map(
              (
                data: { id: number; title: string; icon: any; link: string },
                id: number
              ) => (
                <div
                  className="flex mb-2 w-full space-x-2 cursor-pointer box-border hover:bg-slate-700 p-1 rounded-md"
                  onClick={() => router.push(`/dashboard${data.link}`)}
                >
                  <div className="">{<data.icon className="scale-75" />}</div>
                  <span>{data.title}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <div className="mb-1">
            <span className="text-sm text-slate-500">CONNECTIONS</span>
          </div>
          <div>
            {sidebar.sidebarConn.map(
              (
                data: { id: number; title: string; icon: any; link: string },
                id: number
              ) => (
                <div
                  className="flex mb-2 w-full space-x-2 cursor-pointer box-border hover:bg-slate-700 p-1 rounded-md"
                  onClick={() => router.push(`/dashboard${data.link}`)}
                >
                  <div className="">{<data.icon className="scale-75" />}</div>
                  <span>{data.title}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div>
          <div className="mb-1">
            <span className="text-sm text-slate-500">HELP</span>
          </div>
          <div>
            {sidebar.sidebarHelp.map(
              (
                data: { id: number; title: string; icon: any; link: string },
                id: number
              ) => (
                <div
                  className="flex mb-2 w-full space-x-2 cursor-pointer box-border hover:bg-slate-700 p-1 rounded-md"
                  onClick={() => router.push(`/dashboard${data.link}`)}
                >
                  <div className="">{<data.icon className="scale-75" />}</div>
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
