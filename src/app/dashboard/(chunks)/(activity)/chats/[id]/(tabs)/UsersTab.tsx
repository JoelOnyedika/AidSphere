import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { truncateString } from "@/lib/shit-functions/functions";
import Link from "next/link";
import React from "react";

const UsersTab = () => {
  return (
    <div>
      <div className="space-y-4 h-full overflow-y-visible">
        <div className="border-l-blue-700 border-l-4 border-r-transparent pl-3 cursor-pointer border border-y-transparent border-solid flex flex-col space-x-2 mt-5">
          <div className="flex space-x-2">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col w-full mt-1 space-y-[2px] ">
              <div className="flex w-full justify-between">
                <Label>JoelOnyedika</Label>
                <small className="text-gray-500">2w</small>
              </div>
              <small className="font-semibold text-gray-500">
                {truncateString("joelonyedikaepic@gmail.com", 18)}
              </small>
            </div>
          </div>
          <div>
            <small  className="text-gray-300">
              {truncateString(
                "I have access to a specific video, but it sems to be in a music performance with no specific word",
                50
              )}
            </small>
          </div>
        </div>
        <div className="border-l-blue-700 border-l-4 border-r-transparent pl-3 cursor-pointer border border-y-transparent border-solid flex flex-col space-x-2 mt-5">
          <div className="flex space-x-2">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col w-full mt-1 space-y-[2px] ">
              <div className="flex w-full justify-between">
                <Label>JoelOnyedika</Label>
                <small className="text-gray-500">2w</small>
              </div>
              <small className="font-semibold text-gray-500">
                {truncateString("No email", 18)}
              </small>
            </div>
          </div>
          <div>
            <small  className="text-gray-300">
              {truncateString(
                "I have access to a specific video, but it sems to be in a music performance with no specific word",
                50
              )}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTab;
