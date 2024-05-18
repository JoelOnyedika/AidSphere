import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { truncateString } from "@/lib/shit-functions/functions";
import Link from "next/link";
import React from "react";
import { ChevronDown, Dot, Search, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Chip from "./(ui)/Chip";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  TicketVisualizerPriorityData,
  TicketVisualizerStatusData,
} from "@/lib/constants";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const UsersTab = () => {
  return (
    <div>
      <div className="space-y-4 h-full overflow-y-visible">
        <div className="flex space-x-2">
          <Popover>
            <PopoverTrigger>
              <Button variant={"secondary"}>
                <div className="mt-[1px]">
                  <small>Status</small>
                </div>
                <ChevronDown className="scale-75" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="text-gray-400">
              <div className="space-x-2 flex">
                {TicketVisualizerStatusData.map((data: any, index) => (
                  <div>
                    <Chip text={data.name} color={data.bgColor} icon={Dot} />
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <Button variant={"secondary"}>
                <div className="mt-[1px]">
                  <small>Priority</small>
                </div>
                <ChevronDown className="scale-75" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="text-gray-400">
              <div className="space-x-2 flex">
                {TicketVisualizerPriorityData.map((data: any, index) => (
                  <div>
                    <Chip text={data.name} color={data.bgColor} icon={Dot} />
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="my-4 rounded-lg border border-solid border-gray-700 flex">
          <Input
            className="text-white
          rounded-lg border border-none focus: border-gray-700"
            placeholder="Type in your message here?"
          />
                  <X
                    className="text-white
                  scale-50 p-0"
                  />
        </div>
        <div className="border-l-blue-700 border-l-4 border-r-transparent pl-3 cursor-pointer border border-y-transparent border-solid flex flex-col space-x-2 mt-10">
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
            <small className="text-gray-300">
              {truncateString(
                "I have access to a specific video, but it sems to be in a music performance with no specific word",
                50
              )}
            </small>
          </div>
          <div className="flex space-x-2">
            <div className="space-x-2">
              <Chip icon={Dot} text={"Open"} color={"bg-blue-700"} />
              <Chip
                icon={Dot}
                text={"Medium priority"}
                color={"bg-orange-700"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTab;
