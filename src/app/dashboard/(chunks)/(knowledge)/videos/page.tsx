"use client"
import React, { useState } from "react";
import Header from "../../../../../components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { Youtube, Plus } from "lucide-react";
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

const Videos = () => {
  const [headerData, setHeaderData] = useState({
    icon: Youtube,
    title: "Videos",
    talks:
      "Add Videos to your knowledge sphere. Our AI will automatically extract relevant information",
  });
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
      <div></div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="p-[120px] border border-white">
            <Plus />
            Upload
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-[#0e1425] border-none">
          <DialogHeader>
            <DialogTitle className="text-white">Add video URL</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="">
              <Label htmlFor="name" className="text-white mb-1 text-right">
                URL
              </Label>
              <Input
                id="name"
                placeholder="www.aidsense.com"
                className="col-span-3 text-white w-full"
              />
            </div>
          </div>
          <DialogFooter className="flex">
            <DialogClose>
              <Button type="submit" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-blue-500">
              Add video
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Videos;
