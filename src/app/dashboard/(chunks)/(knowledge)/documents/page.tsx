"use client";
import { Rss, Youtube } from "lucide-react";
import React, { useState, useEffect } from "react";
import Header from "../../../../../components/dashboard/Header";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import Loader from "@/components/global/loader";

const Documents = () => {
  const [headerData, setHeaderData] = useState({
    icon: Youtube,
    title: "Documents",
    talks:
      "Add Documents to your knowledge sphere. Our AI will automatically extract relevant information",
  });

  const [file, setFile] = useState<File | null>(null);
  const [fileSelected, setFileSelected] = useState(false);
  const [didDocumentUpload, setDidDocumentUpload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (fileSelected) {
      handleFileUpload();
    }
  }, [fileSelected]);

  const handleFileUpload = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (!file) {
      console.log("No file uploaded");
      return;
    }

    try {
      console.log("Uploading file:", file);
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      setFileSelected(true);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      console.log(response);

      const jsonResponse = response.json();

      if (jsonResponse.success === true) {
        setDidDocumentUpload(true);
        setIsLoading(false);
        console.log("File uploaded successfully");
        setFileSelected(false);
        setFile(null);
      } else {
        console.log("Error document did not upload successfully");
        setDidDocumentUpload(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      // Reset the file state and selected flag after upload
      setFile(null);
      setFileSelected(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null); // Set to null if no file is selected
    setFileSelected(!!selectedFile); // Set to true if a file is selected
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
              <form onSubmit={handleFileUpload}>
                <Button disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <label
                        htmlFor="fileUpload"
                        className="bg-blue-500 cursor-pointer flex p-2 rounded-md"
                      >
                        <Loader />
                        <span className="ml-2">Uploading Document</span>
                      </label>
                      <input
                        id="fileUpload"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.txt,.doc,.docx"
                        name="file"
                      />
                    </>
                  ) : (
                    <>
                      <label
                        htmlFor="fileUpload"
                        className="bg-blue-500 cursor-pointer flex p-2 rounded-md"
                      >
                        <UploadCloud className="mr-2" />
                        <span>Upload Documents</span>
                      </label>
                      <input
                        id="fileUpload"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.txt,.doc,.docx"
                        name="file"
                      />
                    </>
                  )}
                </Button>
              </form>
            </div>
            <div>
              {didDocumentUpload ? (
                <small>Your document has been uploaded successfully</small>
              ) : (
                <small>You haven't uploaded any document yet</small>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
