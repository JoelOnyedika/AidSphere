"use client";
import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  MessageCircleMore,
  Plus,
  MessagesSquareIcon,
} from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/dashboard/Sidebar";
import Tab from "./ui/Tab";
import Chat from "./ui/Chat";

const ChatbotInterface = () => {
  return (
    <div className="flex text-white overflow-hidden">
      <div>
        <Sidebar />
      </div>
      <div className="ml-10 mt-10 flex flex-col flex-grow mr-10">
        <div className="flex text-gray-300">
          <div>
            <MessageCircleMore className="mr-3" />
          </div>
          <div className="space-x-3">
            <Link href={"dashboard/chatbots"}>Chatbots</Link>
            <span> {">"} </span>
            <span>Untitled</span>
          </div>
        </div>
        <div className="mt-4 pt-4 text-gray-400 space-y-2 overflow-y-auto">
          <div className="flex">
            <div className="p-2 flex items-center justify-center rounded-lg bg-gray-600 mr-3 box-border">
              <MessageCircleMore className="" />
            </div>
            <h1
              className="text-4xl whitespace-nowrap break-normal font-bold text-gray-300"
              contentEditable={true}
            >
              Untitled
            </h1>
          </div>
          <div className="">
            <span
              className="whitespace-nowrap break-normal"
              contentEditable={true}
            >
              Add description
            </span>
          </div>
          <div className="pt-5">
            <hr className="border-t border-gray-600" />
          </div>
        </div>
        <div className="mt-10 flex w-full justify-between">
          <div>
            <Tab />
          </div>
          <div>
            <Chat />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ChatbotInterface;
