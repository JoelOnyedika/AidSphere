import React from 'react';

interface YoutubeBoxProps {
    videoId: any
}

function YouTubeBox({ videoId }: YoutubeBoxProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-300 flex justify-center items-center rounded-md">
          <img src={thumbnailUrl} alt="Video Thumbnail" className="w-full h-auto" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Video Title</h2>
          <p className="text-gray-500">{videoUrl}</p>
        </div>
      </div>
      <div className="mt-4">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">Watch Video</a>
      </div>
    </div>
  );
}

export default YouTubeBox;
