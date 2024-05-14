import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { truncateString } from "@/lib/shit-functions/functions";
import React from "react";

const ChatTabs = () => {
  return (
    <div className="px-5 space-y-3">
      <div>
        <h1 className="text-3xl font-bold">
          {truncateString(
            "I have access to the video but shit is not letting me do stuff",
            30
          )}
        </h1>
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
    </div>
  );
};

export default ChatTabs;
