"use client"
import {
  LucideMessageCircleQuestion,
  Plus,
  Anchor,
  MinusCircle,
} from "lucide-react";
import React, { useState } from "react";
import Header from "../../../../../components/dashboard/Header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/dashboard/Sidebar";

const Faq = () => {
  const [headerData, setHeaderData] = useState({
    icon: LucideMessageCircleQuestion,
    title: "FAQ",
    talks:
      "Add FAQ's to your knowledge sphere. Our AI will automatically extract relevant information",
  });
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="space-y-3">
      <div className="flex text-white">
        <div>
          <Sidebar />
        </div>
        <div className="ml-10 flex flex-col flex-grow h-screen">
          <div>
            <div>
              <Header headerData={headerData} />
            </div>
            <div className="bg-[#0e1425]">
              <Button className="bg-blue-500">
                <Plus className="mr-2" />
                Create new FAQ
              </Button>
            </div>

            <div className="pr-[90px]">
              <div className="w-full text-gray-300 hover:bg-slate-700 p-2 rounded-md justify-between flex">
                <div className="flex">
                  <Anchor className="scale-75 mr-2" />
                  <span className="font-bold">Untitled</span>
                </div>
                <div className="flex space-x-3">
                  <div>
                    <span>31-12-2023</span>
                  </div>
                  <div>
                    <span>5:30 PM</span>
                  </div>

                  <div
                    className="flex p-[1px] hover:bg-yellow-500 hover:text-white cursor-pointer pl-[5px] pr-[5px] box-border rounded-md bg-gray-800"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {!isHovered ? (
                      <React.Fragment>
                        <MinusCircle className="scale-75 mr-1" />
                        <span>Untrained</span>
                      </React.Fragment>
                    ) : (
                      <span>Train Model</span>
                    )}
                  </div>
                  <div className="p-[1px] box-border bg-gray-700 pl-3 pr-3 rounded-md">
                    <span>x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
