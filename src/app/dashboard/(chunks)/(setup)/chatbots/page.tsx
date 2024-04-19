"use client";
import React, { useState } from "react";
import { MessageSquare, MessageCircleMore, Plus } from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import {createChatbotInstance} from '@/lib/supabase/queries'

const Chatbots = () => {
  const [headerData, setHeaderData] = useState({
    icon: MessageCircleMore,
    title: "Chatbots",
    talks: "Access and manage all your chatbots",
  });
  getChatbots()
  
  async function handleBtnClick() {
    const isUserChatbotLimitReached = false
    if (!isUserChatbotLimitReached) {
      const createChatbotInst = await createChatbotInstance()
      console.log(createChatbotInst)
    }
    
  }

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="flex text-white">
      <div>
        <Sidebar />
      </div>
      <div className="ml-10 flex flex-col flex-grow h-screen">
        <div>
          <div>
            <div>
              <Header headerData={headerData} />
            </div>
            <Button className="bg-blue-500 mt-4">
              <Plus className="mr-2" />
              Create Chatbot
            </Button>
            <div className="mt-2 space-y-1 mr-40">
              <Link href={"/"}>
                <div
                  className={`text-gray-400 p-2 rounded-md cursor-pointer hover:bg-gray-600 ${
                    isClicked ? "bg-gray-600" : ""
                  }`}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => handleBtnClick}
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex">
                      <div className="mr-2">
                        <MessageCircleMore />
                      </div>
                      <div>
                        <span className="font-semibold">Untitled</span>
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold">30-12-2023 07:51 PM</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbots;
