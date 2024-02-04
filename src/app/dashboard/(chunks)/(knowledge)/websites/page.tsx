"use client";
import { Globe, Plus, Anchor, MinusCircle, X } from "lucide-react";
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
import { addWebsiteToKnowledgebase, deleteInKnowledgebase, getKnowledgeBaseData } from "@/lib/supabase/queries";
import Loader from "@/components/global/loader";
import NotificationPopper from "@/components/customs/CustomNotificationPopper"; // Assuming you have a Notification component
import Sidebar from "@/components/dashboard/Sidebar";

const Websites = () => {
  const [headerData, setHeaderData] = useState({
    icon: Globe,
    title: "Websites",
    talks:
      "Add websites to your knowledge sphere. Our AI will automatically extract relevant information",
  });

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null); // Track hovered item index
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [websiteData, setWebsiteData] = useState<string[] | null>(null);
  const [websiteUrlMustStartWithHttps, setWebsiteUrlMustStartWithHttps] =
    useState(false);
  const [websiteUrlId, setWebsiteUrlId] = useState<null | number>(null)
  const [showNotificationPopper, setShowNotificationPopper] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState({ mode: "", message: "" });

  const fetchWebsiteData = async (): Promise<void> => {
    try {
      const result = await getKnowledgeBaseData('websites');
      if (result.error) {
        setNotificationMessage({mode: 'error', message:`Error: ${result.error}`});
        setShowNotificationPopper(true);
        setWebsiteData(null);
      }
      setWebsiteData(result.data);
    } catch (error: any) {
      setNotificationMessage({mode: 'error', message:`Error: ${result.error}`});
      setShowNotificationPopper(true);
      console.error("Caught error in fetchWebsiteData:", error);
    }
  };

  useEffect(() => {
    if (websiteUrl.startsWith("https://")) {
      setWebsiteUrlMustStartWithHttps(false);
    } else {
      setWebsiteUrlMustStartWithHttps(true);
    }

    fetchWebsiteData();
  }, [websiteUrl]);

  const handleAddWebsite = async () => {
    try {
      const result = await addWebsiteToKnowledgebase(websiteUrl);

      if (result.error) {
        setNotificationMessage({mode: 'error', message:`Error: ${result.error}`});
        setShowNotificationPopper(true);
      } else {
        setNotificationMessage({mode: 'success', message:`The website has been added to your knowledge sphere`});
        setShowNotificationPopper(true);
        setWebsiteData(null);
        fetchWebsiteData();
      }
    } catch (error) {
      setNotificationMessage({mode: 'error', message: `Error: ${error.message}`});
      setShowNotificationPopper(true);
      console.error("Error in handleAddWebsite:", error);
    }
  };

  const handleDeleteWebsite = async (id: number) => {
    try {
      const result = await deleteInKnowledgebase(id, 'websites');
  
      if (result.error) {
        setNotificationMessage({mode: 'error', message: `Error: ${result.error}`});
        setShowNotificationPopper(true);
      } else {
        console.log(`Website URL has been deleted from your knowledge sphere`);
        setNotificationMessage({mode: 'success', message: `Website URL has been deleted from your knowledge sphere`});
        setShowNotificationPopper(true);
        setWebsiteData(null);
        fetchWebsiteData();
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  
  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set hovered index
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset hovered index
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
                      <small>
                        {websiteUrlMustStartWithHttps && (
                          <span className="text-red-500">
                            Link should start with https://
                          </span>
                        )}
                      </small>
                    </div>
                  </div>
                </div>
                <DialogFooter className="flex">
                  <DialogClose>
                    <Button variant="secondary">Cancel</Button>
                  </DialogClose>
                  <DialogClose>
                    <Button
                      onClick={handleAddWebsite}
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
          {websiteData !== null ? (
            websiteData.map((data, index) => (
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
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {hoveredIndex === index ? (
                          <React.Fragment>
                            <MinusCircle className="scale-75 mr-1" />
                            <span>
                              {data.is_trained === false
                                ? "Untrained"
                                : "Train Model"}
                            </span>
                          </React.Fragment>
                        ) : (
                          <span>Train Model</span>
                        )}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="p-[1px] box-border bg-gray-800 hover:cursor-pointer hover:bg-gray-700 pl-3 pr-3 rounded-md" onClick={() => setWebsiteUrlId(data.id)}>
                            <div className="scale-95">
                              <X />
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-[#0e1425] border-none">
                          <DialogHeader>
                            <DialogTitle className="text-white">
                              Delete website URL
                            </DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div>
                              <Label
                                htmlFor="name"
                                className="text-white mb-1 text-right"
                              >
                                Are you sure you want to delete this website?
                              </Label>
                            </div>
                          </div>
                          <DialogFooter className="flex">
                            <DialogClose>
                              <Button variant="secondary">Cancel</Button>
                            </DialogClose>
                            <DialogClose>
                              <Button
                                onClick={() => handleDeleteWebsite(websiteUrlId)}
                                className="bg-red-500"
                              >
                                Delete
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="inline-flex mt-2">
              <div className="scale-75">
                <Loader />
              </div>
              <div className="mt-1">
                <span>Fetching data from database. Hold on...🤔</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {showNotificationPopper && (
        <NotificationPopper
          message={notificationMessage.message}
          mode={notificationMessage.mode} // Assuming it's an error for simplicity
          onClose={() => setShowNotificationPopper(false)}
        />
      )}
    </div>
  );
};

export default Websites;
