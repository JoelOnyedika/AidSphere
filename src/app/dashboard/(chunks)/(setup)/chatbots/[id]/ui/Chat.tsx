import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Send } from "lucide-react";
import React from "react";

const Chat = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden w-[470px] h-[700px] flex flex-col">
      <div className="bg-blue-600 rounded-t-2xl flex flex-col justify-center px-6 py-10 items-center">
        <h1 className="text-white text-lg text-center font-bold">
          Chat with our AI
        </h1>
        <span className="text-center break-all">
          Ask any question and the AI will answer
        </span>
        <div>
          <button className="rounded-md p-2 mt-5 box-border shadow-md border border-gray-600">
            New Chat
          </button>
        </div>
      </div>
      <div className="p-4 flex-grow">
        <div>
          {/* Right Chatbox */}
          <div className="flex justify-end mb-2">
            <div className="bg-blue-500 text-white rounded-lg py-2 px-4">
              Hello chat with our chatbot please
            </div>
          </div>
          {/* Left Chatbox */}
          <div className="flex justify-start mb-2">
            <div className="bg-blue-500 text-white max-w-2/3 break-words rounded-lg py-2 px-4">
              Hello chat with our chatbot please
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 rounded-lg border border-solid border-gray-700 flex">
        <Input
          className=" text-black rounded-lg border border-none focus: border-gray-700"
          placeholder="Type in your message here?"
        />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>
                <Send className="scale-75 p-0" />
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

export default Chat;
