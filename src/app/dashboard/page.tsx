"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import React, { useState } from "react";
import "@/app/globals.css";
import ChunkSetter from "@/components/dashboard/ChunkSetter";
import { FireExtinguisher, HdmiPort } from "lucide-react";
import Home from "./(chunks)/(hero)/home/page";

const Dashboard = () => {
  return (
    <div className="flex text-white">
      <div>
        <Sidebar />
      </div>
      <div className="ml-10 flex flex-col flex-grow h-screen">
        <div>
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
