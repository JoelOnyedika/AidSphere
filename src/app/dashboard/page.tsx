"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import React, { useState } from "react";
import "@/app/globals.css";
import ChunkSetter from "@/components/dashboard/ChunkSetter";
import { FireExtinguisher } from "lucide-react";
import Home from "@/components/dashboard/chunks/Home";

const Dashboard = () => {
  const [chunkId, setChunkId] = useState(1);

  console.log(chunkId);
  return (
    <div className="flex text-white">
      <div>
        <Sidebar setChunkId={setChunkId} />
      </div>
      <div className="ml-10 flex flex-col flex-grow h-screen">
        <div className="w-full">{chunkId === 1 && <Home />}</div>
        <div>
          <ChunkSetter activeChunk={chunkId} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
