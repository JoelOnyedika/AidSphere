"use client"
import { Youtube } from 'lucide-react';
import React, { useState } from 'react';
import Header from '../../../../../components/dashboard/Header';
import { Button } from '@/components/ui/button';
import { UploadCloud } from 'lucide-react';
import Sidebar from '@/components/dashboard/Sidebar';

const Documents = () => {
  const [headerData, setHeaderData] = useState({
    icon: Youtube,
    title: "Documents",
    talks: "Add Documents to your knowledge sphere. Our AI will automatically extract relevant information",
  });

  const handleFileUpload = (event) => {
    const files = event.target.files;
    // Handle the uploaded files (e.g., send them to a server, process, etc.)
    console.log(files);
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
      
      <div className="mb-3 mt-6">
      <Button>
        <label htmlFor="fileUpload" className="bg-blue-500 cursor-pointer flex p-2 rounded-md">
          <UploadCloud className="mr-2" />
          Upload Documents
        </label>
        <input
          id="fileUpload"
          type="file"
          multiple
          onChange={handleFileUpload}
          className="hidden"
        />
      </Button>
      </div>
      <div>
        <small>You haven't uploaded any document yet</small>
      </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Documents;
