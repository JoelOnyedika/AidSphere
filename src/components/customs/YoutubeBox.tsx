import React, { useState, useEffect } from "react";
import { CheckCircle, Link, MinusCircle, X } from "lucide-react";
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

interface YoutubeBoxProps {
  videoId: any;
  onDeleteBtnClick: (videoId: string) => void; // Define the type of onDeleteBtnClick
  isTrained: boolean;
  id: any
}

function YouTubeBox({ videoId, isTrained, onDeleteBtnClick, id }: YoutubeBoxProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  const [videoTitle, setVideoTitle] = useState("");
  const [shortenedVideoTitle, setShortenedVideoTitle] = useState("");
  const [shortenedVideoUrl, setShortenedVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideoTitle = async () => {
      try {
        // Fetch video details from YouTube Data API
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
        );
        const data = await response.json();
        console.log(data)

        // Set the video title
        const title = data.items[0].snippet.title;
        setVideoTitle(title);
        setShortenedVideoTitle(title.substring(0, 25) + "...");
      } catch (error) {
        console.error("Error fetching video title:", error);
      }
    };

    fetchVideoTitle();
  }, [videoId]);

  useEffect(() => {
    setShortenedVideoUrl(videoUrl.substring(0, 20) + "...");
  }, [videoUrl]);

  return (
    <div className="text-gray-400 border border-slate-700">
      <div>
        <iframe
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          width="100%"
          height="100%"
          src={videoUrl}
          id="widget4"
        ></iframe>
      </div>
      <div>
        <div className="p-3 space-y-2">
          <span>{shortenedVideoTitle}</span>
          <div className="flex">
            <Link className="scale-100 pr-2" /> <span>{shortenedVideoUrl}</span>
          </div>
          <div className="flex space-x-3 justify-end">
            {isTrained ? (
              <div className="box-border rounded-lg bg-green-400">
                <div className="flex text-white">
                  <CheckCircle className="pr-2" />
                  <small className="mt-1">Trained</small>
                </div>
              </div>
            ) : (
              <div className="box-border rounded-lg p-1 bg-orange-400">
                <div className="flex text-white">
                  <MinusCircle className="pr-2" />
                  <small className="mt-1">Untrained</small>
                </div>
              </div>
            )}
            <Dialog>
              <DialogTrigger asChild>
                <div
                  className="box-border rounded-md bg-slate-500 cursor-pointer p-1"
                 >
                  <div className="flex items-center text-white">
                    <X className="scale-75" />
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
                      onClick={() => onDeleteBtnClick(id)} // Call onDeleteBtnClick with the videoId
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
  );
}

export default YouTubeBox;
