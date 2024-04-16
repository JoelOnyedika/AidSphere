"use client";
import React, { useEffect, useState } from "react";
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
import {
  addVideoToKnowledgebase,
  deleteInKnowledgebase,
  getKnowledgeBaseData,
} from "@/lib/supabase/queries";
import YouTubeBox from "@/components/customs/YoutubeBox";
import Notification from "@/components/customs/CustomNotificationPopper";
import Loader from "@/components/global/loader";


const Videos = () => {
  const [headerData, setHeaderData] = useState({
    icon: Youtube,
    title: "Videos",
    talks:
      "Add Videos to your knowledge sphere. Our AI will automatically extract relevant information",
  });
  const [videoUrl, setVideoUrl] = useState("");
  const [showNotificationPopper, setShowNotificationPopper] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState({
    mode: "",
    message: "",
  });
  const [videoData, setVideoData] = useState<string[] | null>(null);
  const [videoUrlMustStartWithHttps, setVideoUrlMustStartWithHttps] =
    useState(false);
  const [youtubeVideoId, setYoutubeVideoId] = useState<string | number | null>(
    null
  );

  const fetchVideoData = async (): Promise<void> => {
    try {
      const result = await getKnowledgeBaseData("videos");
      console.log(result);
      if (result === undefined) {
        fetchVideoData();
      }
      if (result.error) {
        setNotificationMessage({
          mode: "error",
          message: `Error: ${result.error}`,
        });
        setShowNotificationPopper(true);
        setVideoData(null);
      }

      setVideoData(result.data);
      setYoutubeVideoId(result.data.yt_video_id);
      console.log(videoData);
    } catch (error: any) {
      setNotificationMessage({
        mode: "error",
        message: `Error: ${result.error}`,
      });
      setShowNotificationPopper(true);
      console.error("Caught error in fetchVideoData:", error);
    }
  };

  useEffect(() => {
    if (videoUrl.startsWith("https://")) {
      setVideoUrlMustStartWithHttps(false);
    } else {
      setVideoUrlMustStartWithHttps(true);
    }

    fetchVideoData();
  }, [videoUrl]);

  const handleAddVideo = async () => {
    console.log("triggerd");
    try {
      const result = await addVideoToKnowledgebase(videoUrl);
      console.log(result);

      if (result.error) {
        setShowNotificationPopper(true);
        setNotificationMessage({
          mode: "error",
          message: `Error: ${result.error}`,
        });
      } else {
        setNotificationMessage({
          mode: "success",
          message: `The video has been added to your knowledge sphere`,
        });
        setShowNotificationPopper(true);
        console.log(videoData);
        setVideoData(null);
        fetchVideoData();
      }
    } catch (error) {
      setNotificationMessage({
        mode: "error",
        message: `Error: ${error.message}`,
      });
      setShowNotificationPopper(true);
      console.error("Error in handleAddVideo:", error);
    }
  };

  const handleDeleteVideo = async (id: number) => {
    try {
      const result = await deleteInKnowledgebase(id, "videos");

      if (result.error) {
        setNotificationMessage({
          mode: "error",
          message: `Error: ${result.error}`,
        });
        setShowNotificationPopper(true);
      } else {
        console.log(`Video URL has been deleted from your knowledge sphere`);
        setNotificationMessage({
          mode: "success",
          message: `Video URL has been deleted from your knowledge sphere`,
        });
        setShowNotificationPopper(true);
        setVideoData(null);
        fetchVideoData();
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  return (
    <div className="space-y-3">
      <div className="flex text-white">
        <div>
          <Sidebar />
        </div>
        <div className="ml-10 flex flex-col flex-grow h-screen">
          <div>
            <div className="pb-3">
              <Header headerData={headerData} />
            </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-left">
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="p-[120px] w-60 h-29 bg-slate-700 border border-slate-700"
                  >
                    <Plus />
                    Upload
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-[#0e1425] border-none">
                  <DialogHeader>
                    <DialogTitle className="text-white">
                      Add video URL
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="">
                      <Label
                        htmlFor="name"
                        className="text-white mb-1 text-right"
                      >
                        URL
                      </Label>
                      <Input
                        id="name"
                        placeholder="www.aidsense.com"
                        className="col-span-3 text-white w-full"
                        onChange={handleInputChange}
                        value={videoUrl}
                      />
                    </div>
                  </div>
                  <DialogFooter className="flex">
                    <DialogClose>
                      <Button type="submit" variant="secondary">
                        Cancel
                      </Button>
                    </DialogClose>
                    <DialogClose>
                      <Button
                        type="submit"
                        className="bg-blue-500"
                        onClick={handleAddVideo}
                      >
                        Add video
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            {videoData !== null ? (
              videoData.map((data, index) => (
                <div key={index} className="m-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                  <YouTubeBox
                    videoId={data.yt_video_id}
                    isTrained={data.is_trained}
                    onDeleteBtnClick={handleDeleteVideo}
                    id={data.id}
                  />
                </div>
              ))
            ) : (
              <div className="flex items-center">
                <div className="scale-75 mr-2">
                  <Loader />
                </div>
                <div className="mt-1">
                  <span>Fetching data from the database. Hold on...🤔</span>
                </div>
              </div>
            )}
          </div>
        </div>
          </div>
        
        {showNotificationPopper && (
          <Notification
            message={notificationMessage.message}
            mode={notificationMessage.mode}
          />
        )}
      </div>
    </div>
  );
};

export default Videos;
