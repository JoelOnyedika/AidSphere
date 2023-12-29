"use client"
import Sidebar from "@/components/dashboard/Sidebar";
import React, { useState } from "react";
import '@/app/globals.css'

const Dashboard = () => {
  const [chunkId, setChunkId] = useState(1)
  return (
    <div className="flex text-white">
      <div>
        <Sidebar setChunkId={setChunkId}/>
      </div>
      <div>
        <h1>SUS</h1>
      </div>
    </div>
  );
};

export default Dashboard;
