"use client"
import React, { useState, useEffect } from "react";
import Header from "@/components/dashboard/Header";
import { FireExtinguisher, MessagesSquare, MessageCircleMore } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import Link from "next/link";
import { getAllChatbotInstance } from "@/lib/supabase/queries";
import Loader from "@/components/global/loader";

const Chats = () => {
  const [headerData, setHeaderData] = useState({
    icon: MessagesSquare,
    title: "Chats",
    talks: "Access and manage all your Chat sessions",
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [chatbotInstanceData, setChatbotInstanceData] = useState<
  null | string[]
>(null);
const [error, setError] = useState("");

  useEffect(() => {
    allChatbotInstance();
  }, []);

  async function allChatbotInstance() {
    try {
      const { data, error: any } = await getAllChatbotInstance();
      if (error) {
        setError(error);
        return;
      }
      if (data) {
        setChatbotInstanceData(data);
        console.log(data);
      }

    } catch (error: any) {
      console.log(error);
      setError(error);
    }
  }

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
            <div className="mt-10 space-y-1 mr-40">
            {chatbotInstanceData === null ? (
                <div className="inline-flex mt-2">
                <div className="scale-75">
                  <Loader />
                </div>
                <div className="mt-1">
                  <span>Searching for your chatbots, Hold on...🤔</span>
                </div>
              </div>
              ) : chatbotInstanceData.length === 0 ? (
                <span>
                  Whoops, you have not created any chatbots yet, Go to your chatbots and create one
                </span>
              ) : (
                chatbotInstanceData.map((data: any, index: number) => (
                  <Link key={index} href={"/"}>
                    {" "}
                    <div
                      className={`text-gray-400 p-2 rounded-md cursor-pointer hover:bg-gray-600 ${
                        isClicked ? "bg-gray-600" : ""
                      }`}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <div className="flex justify-between items-center w-full">
                        <div className="flex">
                          <div className="mr-2">
                            <MessageCircleMore />
                          </div>
                          <div>
                            <span className="font-semibold">{data.name}</span>
                          </div>
                        </div>
                        <div>
                          <span className="font-semibold">
                            {data.created_at}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
