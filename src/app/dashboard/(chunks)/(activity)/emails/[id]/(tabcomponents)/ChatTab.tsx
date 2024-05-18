"use client"


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { truncateString } from "@/lib/shit-functions/functions";
import { Copy, Send, Paperclip, Bot } from "lucide-react";
import React, { useEffect, useState } from "react";

const ChatTabs = () => {
  const [isReplyBtnActive, setIsReplyBtnActive] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event:any) => {
    setInputValue(event.target.value)
    setIsReplyBtnActive(inputValue.length > 1)
  }
  
  return (
    <div className="px-5 space-y-3">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">
          {truncateString(
            "I have access to the video but shit is not letting me do stuff",
            30
          )}
        </h1>
        <div className="inline-flex">
          <span className="ml-2 mr-3 text-gray-300">sh7xdhssixtgeodf</span>
          <div className="p-[1px] flex items-center justify-center rounded-md bg-gray-600 mr-3 box-border">
            <Copy className="scale-50" />
          </div>
        </div>
      </div>
      <hr style={{ opacity: 0.3 }} />
      <form action="">  
        <div className="space-y-8">
          <div className="flex justify-end mb-2">
            <div>
              <div className="bg-blue-500 text-slate-300 rounded-b-xl rounded-tl-lg p-4">
                sdfgsdfgsdfg
              </div>
              <small className="justify-end items-end flex text-gray-400">
                21-04-2024 09:52 PM
              </small>
            </div>
            <Avatar className="ml-2 mt-2">
              <AvatarImage src={""} alt="aidsphere logo" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex justify-start mb-2">
            <Avatar className="mr-2 mt-2">
              <AvatarImage src={""} alt="aidsphere logo" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div>
              <div className="rounded-b-lg rounded-tr-lg text-slate-300 max-w-2/3 break-words p-4 bg-blue-500">
                Hello chat with our chatbot please
              </div>
              <small className="text-gray-400">21-04-2024 09:52 PM</small>
            </div>
          </div>
        </div>
        <div className="m-4 rounded-lg border border-solid border-gray-700 flex flex-col">
          <Textarea
            rows={5}
            className="text-white
            rounded-lg border border-none active:border-none focus:border-none"
            placeholder="Type in your message here?"
            onChange={handleInputChange}
            value={inputValue}
          />
          <div className="ml-1 mb-1 animate-pulse cursor-pointer animate-infinite">  
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                    <Bot />
                </TooltipTrigger>
                <TooltipContent>
                  <small>Generate AI response</small>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="flex space-x-2 m-4">
          <Button variant={"blue"} type="submit" disabled={!isReplyBtnActive}>
            <Send
              className="text-white
                    scale-75 p-0"
            />
            Reply
          </Button>
          <div>
          <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Paperclip className="scale-25"/>
                </TooltipTrigger>
                <TooltipContent>
                  <small>Attach file</small>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatTabs;
