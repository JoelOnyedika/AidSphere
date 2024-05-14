import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { truncateString } from "@/lib/shit-functions/functions";
import { Copy, Send } from "lucide-react";
import React from "react";

const ChatTabs = () => {
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
      <div className="space-y-8">
        <div className="flex justify-end mb-2">
          <div>
            <div className="bg-blue-500 text-white rounded-b-xl rounded-tl-lg p-4">
            sdfgsdfgsdfg 
            </div>
            <small className="justify-end items-end flex text-gray-400">21-04-2024 09:52 PM</small>
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
            <div className="rounded-b-lg rounded-tr-lg text-white max-w-2/3 break-words p-4 bg-blue-500">
              Hello chat with our chatbot please
            </div>
            <small className="text-gray-400">21-04-2024 09:52 PM</small>
          </div>
        </div>
      </div>
      <div className="m-4 rounded-lg border border-solid border-gray-700 flex">
        <Input
          className="text-white
          rounded-lg border border-none focus: border-gray-700"
          placeholder="Type in your message here?"
        />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={"ghost"}>
                <Send
                  className="text-white
                  scale-75 p-0"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Send</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ChatTabs;
