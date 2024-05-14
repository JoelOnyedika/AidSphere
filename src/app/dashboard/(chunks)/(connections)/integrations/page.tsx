"use client"

import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar'
import { Blocks } from 'lucide-react';
import React, { useState } from 'react'

const Integrations = () => {
    const [headerData, setHeaderData] = useState({
        icon: Blocks,
        title: "Integrations",
        talks: "Integrate aidsphere to your favourite applications",
      });
  return (
    <div className="flex text-white">
    <div>
      <Sidebar />
    </div>
    <div className="ml-10 flex flex-col flex-grow h-screen">
      <div>
        <Header headerData={headerData} />
      </div>
    </div>
  </div>
  )
}

export default Integrations