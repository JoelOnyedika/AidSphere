"use client";
import { Globe, Plus, Anchor, MinusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import Header from "../../../../../components/dashboard/Header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { addWebsiteToKnowledgebase } from "@/lib/supabase/queries";
import Loader from "@/components/global/loader";
import { useToast } from "@/components/ui/use-toast";
import { getWebsiteKnowledgeBaseData } from "@/lib/supabase/queries";
import Sidebar from "@/components/dashboard/Sidebar";

const Websites = () => {
  const [headerData, setHeaderData] = useState({
    icon: Globe,
    title: "Websites",
    talks:
      "Add websites to your knowledge sphere. Our AI will automatically extract relevant information",
  });

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [websiteData, setWebsiteData] = useState<string[] | null>([])
  const [websiteUrlMustStartWithHttps, setWebsiteUrlMustStartWithHttps] = useState(false)

  const { toast } = useToast();

useEffect(() => {
  const knowledgeData = async() => {
    try {
      const { data, error } = await getWebsiteKnowledgeBaseData();
      if (error) {
        console.log(error)
      }
      console.log(data)
      setWebsiteData(data)
    } catch (error) {
      console.log(error)
    }
  
  }
  knowledgeData()
  
}, [websiteUrl])

const handleAddWebsite = async () => {
  const { error, data } = await addWebsiteToKnowledgebase(websiteUrl);
  if (websiteUrl.startsWith("https://")) {
      setWebsiteUrlMustStartWithHttps(false)
    } else {
      setWebsiteUrlMustStartWithHttps(true)
    }
  if (error) {
    toast({
      description: `Error: ${error}`,
    });
  }
};


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleInputChange = (event) => {
    setWebsiteUrl(event.target.value);
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
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-blue-500 mt-4">
                    <Plus className="mr-2" />
                    Add a new website
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-[#0e1425] border-none">
                  <DialogHeader>
                    <DialogTitle className="text-white">
                      Add website URL
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-white mb-1 text-right"
                      >
                        URL
                      </Label>
                      <div>  
                      <Input
                        id="name"
                        placeholder="www.aidsense.com"
                        className="col-span-3 text-white w-full"
                        onChange={handleInputChange}
                        value={websiteUrl}
                      />
                      <small>{websiteUrlMustStartWithHttps && <span className="text-red-500">Link should start with https://</span>}</small>
                      </div>
                    </div>
                  </div>
                  <DialogFooter className="flex">
                    <DialogClose>
                      <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <DialogClose>
                      <Button
                        onClick={() => handleAddWebsite}
                        className="bg-blue-500"
                        disabled={websiteUrlMustStartWithHttps}
                      >
                        Add Website
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            {websiteData !== null ? websiteData.map((data, index) => (  
            <div className="mb-1" key={index}>
              <div className="pr-[90px]">
                <div className="w-full text-gray-300 justify-between flex hover:bg-slate-700 p-2 rounded-md">
                  <div className="flex">
                    <Anchor className="scale-75 mr-2" />
                    <span className="font-bold">{data.url}</span>
                  </div>
                  <div className="flex space-x-3">
                    <div>
                      <span>{data.created_at}</span>
                    </div>

                    <div
                      className="flex p-[1px] hover:bg-yellow-500 hover:text-white cursor-pointer pl-[5px] pr-[5px] box-border rounded-md bg-gray-800"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {!isHovered ? (
                        <React.Fragment>
                          <MinusCircle className="scale-75 mr-1" />
                          <span>{data.is_trained === false && "Untrained"}</span>
                        </React.Fragment>
                      ) : (
                        <span>Train Model</span>
                      )}
                    </div>
                    <div className="p-[1px] box-border bg-gray-800 pl-3 pr-3 rounded-md">
                      <span>x</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )) : (<div className="inline-flex">
            <div className="scale-75">
              <Loader/>
            </div>
              <span>Fetching data from database. Hold on</span>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Websites;
