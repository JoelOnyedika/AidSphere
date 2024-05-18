import React from "react";
import { Label } from "@/components/ui/label";
import { ChevronDown, Info } from "lucide-react";
import Chip from "../(ui)/Chip";
import { TicketVisualizerStatusData, TicketVisualizerStatusMainFormData } from "@/lib/constants";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Information = () => {
  return (
    <div className="whitespace-nowrap text-slate-500">
      <div className="mt-5">
        <div className="space-y-1">
          <div className="flex space-x-2">
            <Label className="font-semibold mt-1">Status</Label>
            <Info className="scale-75" />
          </div>
          <div className="border border-gray-600 flex items-center text-center box-border rounded-lg p-2 space-x-2">
            <Chip text="Open" color="bg-blue-700" />
            <Popover>
              <PopoverTrigger>
                <div className="justify-end items-end right-7">
                  <ChevronDown className="border border-solid rounded-md" />
                </div>
              </PopoverTrigger>
              <PopoverContent className="text-gray-400 w-full"> 
                {TicketVisualizerStatusData.map((data, _) => (
                  <div>
                    <Chip color={data.bgColor} text={data.name}/>
                  </div>
                ))}
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div>
          <div className="flex space-y-4 flex-col">
            <Label className="font-semibold mt-4 mb-1">Form data</Label>
            {TicketVisualizerStatusMainFormData.map((data, index) => (
              <div className="flex space-x-2" key={index}>
                <Info className="scale-75" />
                <Label className="mt-1">{data.name}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
