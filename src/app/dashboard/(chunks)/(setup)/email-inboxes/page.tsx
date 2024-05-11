"use client";
import React, { useState, useEffect } from "react";
import { MessageSquare, Inbox, Plus,  } from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import { Button } from "@/components/ui/button";
import Loader from "@/components/global/loader";

const EmailInbox = () => {
  const [headerData, setHeaderData] = useState({
    icon: Inbox,
    title: "Email Inboxes",
    talks: "Create, access and manage all your emails",
  });

  const [emailInstanceData, setEmailInstanceData] = useState<
    null | string[]
  >(null);
  const [error, setError] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="flex text-white">
    <div>
      <Sidebar />
    </div>
    <div className="ml-10 flex flex-col flex-grow h-screen">
      <div>
        <div>
          <div>
            <Header headerData={headerData} />
          </div>
          <Button variant="blue" className="mt-4">
                <Plus className="mr-2" />
                <span>Create Email Inbox</span>  
          </Button>
          {/* <div className="mt-2 space-y-1 mr-40">
            {emailInstanceData === null ? (
              <div className="inline-flex mt-2">
              <div className="scale-75">
                <Loader />
              </div>
              <div className="mt-1">
                <span>Searching for your emails, Hold on...🤔</span>
              </div>
            </div>
            ) : emailInstanceData.length === 0 ? (
              <span>
                Whoops, you have not created any emails yet, Click on the
                create button to create one
              </span>
            ) : (
              emailInstanceData.map((data: any, index: number) => (
                <Link key={index} href={`/dashboard/emails/${data.id}`}>
                  {" "}
                  <div
                    className={`text-gray-400 p-2 rounded-md cursor-pointer hover:bg-gray-600 ${
                      isClicked ? "bg-gray-600" : ""
                    }`}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex">
                        <div className="mr-2">
                          <Inbox />
                        </div>
                        <div>
                          <span className="font-semibold">{data.name}</span>
                        </div>
                      </div>
                      <div>
                        <span className="font-semibold">
                          {data.created_at}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div> */}
            <Link href={`/dashboard/email-inboxes/asdfasdfasdf`}>
                  {" "}
                  <div
                    className={`text-gray-400 p-2 rounded-md cursor-pointer hover:bg-gray-600 ${
                      isClicked ? "bg-gray-600" : ""
                    }`}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex">
                        <div className="mr-2">
                          <Inbox />
                        </div>
                        <div>
                          <span className="font-semibold">asdf</span>
                        </div>
                      </div>
                      <div>
                        <span className="font-semibold">
                          asdf
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EmailInbox