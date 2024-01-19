"use client"
import React, { useState } from "react";
import Header from "@/components/dashboard/Header";
import { FireExtinguisher, MessagesSquare, MessageCircleMore } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";

const Chats = () => {
  const [headerData, setHeaderData] = useState({
    icon: MessagesSquare,
    title: "Chats",
    talks: "Access and manage all your Chat sessions",
  });

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
            <div className="mt-10 mr-40">
              <div
                className={`text-gray-400 p-2 rounded-md cursor-pointer hover:bg-gray-600 ${isClicked ? 'bg-gray-600' : ''}`}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsClicked(!isClicked)}
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
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
