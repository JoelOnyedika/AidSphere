import { Input } from "@/components/ui/input";
import React from "react";

const Chat = () => {
  return (
    <div
      className=" bg-white
     rounded-2xl overflow-hidden w-[470px] h-[700px]"
    >
      <div className="bg-blue-600 rounded-t-2xl flex flex-col justify-center px-6 py-10 items-center">
        <h1 className="text-white text-lg text-center font-bold">
          Chat with our AI
        </h1>
        <span className="text-center break-all">
          ASk any question and the AI will answer
        </span>
        <div>
          <button className="rounded-md p-2 mt-5 box-border shadow-md border border-gray-600">
            New Chat
          </button>
        </div>
      </div>
      <div className="p-4">
        <div>
          {/* Right Chatbox */}
          <div className="flex justify-end mb-2">
            <div className="bg-blue-500 text-white rounded-lg py-2 px-4">
              Hello vhat with our chtbot pls
            </div>
          </div>
          {/* Left Chatbox */}
          <div className="flex justify-start mb-2">
            <div className="bg-blue-500 text-white max-w-2/3 break-words rounded-lg py-2 px-4">
              Hello vhat with our chtbot pls
            </div>
          </div>
        </div>

        <div className="p-4 justify-bottom">
          <Input className="w-full text-black rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
