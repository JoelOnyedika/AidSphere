"use client";

import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import Loader from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { Plus, Ticket } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const TicketForms = () => {
  const [headerData, setHeaderData] = useState({
    icon: Ticket,
    title: "Ticket Forms",
    talks: "Access and manage all your ticket forms",
  });

  const [ticketFormInstanceData, setTicketFormInstanceData] = useState<
    null | string[]
  >(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex text-white overflow-scroll">
      <div>
        <Sidebar />
      </div>
      <div className="ml-10 flex flex-col flex-grow h-screen">
        <div>
          <div>
            <div>
              <Header headerData={headerData} />
            </div>
            <Button className="mt-4" variant={"blue"}>
              <Plus className="mr-2" />
              <span>Create new ticket form</span>
            </Button>
            <Link href={`/dashboard/ticket-forms/asdfasdfasdf`}>
                <div
                className={`text-gray-400 p-2 rounded-md cursor-pointer hover:bg-gray-600 ${
                    isClicked ? "bg-gray-600" : ""
                }`}
                onMouseLeave={() => setIsHovered(false)}
                >
                <div className="flex justify-between items-center w-full">
                    <div className="flex">
                    <div className="mr-2">
                        <Ticket />
                    </div>
                    <div>
                        <span className="font-semibold">name</span>
                    </div>
                    </div>
                    <div>
                    <span className="font-semibold">data.created_at</span>
                    </div>
                </div>
                </div>
            </Link>
            {/* FUTURE CODE WHEN INSTALLING THE BACKEND */}
            {/* <div className="mt-2 space-y-1 mr-40">
              {ticketFormInstanceData === null ? (
                <div className="inline-flex mt-2">
                  <div className="scale-75">
                    <Loader />
                  </div>
                  <div className="mt-1">
                    <span>Searching for your tickets, Hold on...🤔</span>
                  </div>
                </div>
              ) : ticketFormInstanceData.length === 0 ? (
                <span>
                  Whoops, you have not created any tickets yet, Click on the
                  create button to create one
                </span>
              ) : (
                ticketFormInstanceData.map((data: any, index: number) => (
                  <Link key={index} href={`/dashboard/tickets/asdfasdfasdf`}>
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
                            <Ticket />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketForms;
