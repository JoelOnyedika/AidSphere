"use client";
import React, { useState, useEffect } from "react";
import { CheckCircle, Link, MinusCircle, X } from "lucide-react";

interface YoutubeBoxProps {
  videoId: any;
  isTrained: boolean;
}

function YouTubeBox({ videoId, isTrained }: YoutubeBoxProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  const [videoTitle, setVideoTitle] = useState("");
  const [shortenedVideoTitle, setShortenedVideoTitle] = useState("");
  const [shortenedVideoUrl, setShortenedVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideoTitle = async () => {
      try {
        // Extract the video ID from the video URL
        const videoId = videoUrl.split("/").pop();

        // Fetch video details from YouTube Data API
        console.log(process.env.NEXT_PUBLIC_YOUTUBE_API_KEY);
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
        );
        const data = await response.json();

        // Set the video title
        const title = data.items[0].snippet.title;
        setVideoTitle(title);
        if (title.length > 20) {
          setShortenedVideoTitle(title.substring(0, 25) + "...");
        } else {
          setShortenedVideoTitle(title);
        }
      } catch (error) {
        console.error("Error fetching video title:", error);
      }
    };

    fetchVideoTitle();
  }, [videoUrl]);

  useEffect(() => {
    if (videoUrl.length > 20) {
      setShortenedVideoUrl(videoUrl.substring(0, 20) + "...");
    } else {
      setShortenedVideoUrl(videoUrl);
    }
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
            <div className="box-border rounded-md bg-slate-500 p-1">
              <div className="flex items-center text-white">
                <X className="scale-75" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouTubeBox;
