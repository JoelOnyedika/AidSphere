"use client";
import React, { useState, useEffect } from "react";
import { MessageSquare, MessageCircleMore, Plus } from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import {
  createChatbotInstance,
  getAllChatbotInstance,
} from "@/lib/supabase/queries";
import Loader from "@/components/global/loader";

const Chatbots = () => {
  const [headerData, setHeaderData] = useState({
    icon: MessageCircleMore,
    title: "Chatbots",
    talks: "Access and manage all your chatbots",
  });

  const [chatbotInstanceData, setChatbotInstanceData] = useState<
    null | string[]
  >(null);
  const [error, setError] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [chatbotCreationLoading, setChatbotCreationLoading] = useState(false)

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

  async function handleSubmit() {
    try {
      console.log('triggered')
        const { data, error: any } = await createChatbotInstance();
        if (error) {
          setError(error);
          return;
        }
        if (data) {
          console.log(data);
          allChatbotInstance();
        }
        setChatbotInstanceData(null)
        allChatbotInstance();
    } catch (error: any) {
      console.log(error, "asdf");
      setError(error);
      return;
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
            <Button className="bg-blue-500 mt-4" onClick={handleSubmit}>
                  <Plus className="mr-2" />
                  <span>Create Chatbot</span>  
            </Button>
            <div className="mt-2 space-y-1 mr-40">
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
                  Whoops, you have not created any chatbots yet, Click on the
                  create button to create one
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

export default Chatbots;
