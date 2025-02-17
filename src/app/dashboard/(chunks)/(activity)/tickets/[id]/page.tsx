import Sidebar from "@/components/dashboard/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import React from "react";
import ChatTabs from "./(tabcomponents)/ChatTab";
import UsersTab from "./(tabcomponents)/UsersTab";
import { Ticket } from "lucide-react";
import Link from "next/link";
import Status from "./(tabcomponents)/Status";

const TicketVisualizer = () => {
  return (
    <div>
      <div className="flex text-white">
        <div>
          <Sidebar />
        </div>
        <div className="ml-5 flex flex-col space-y-3 mt-8 flex-grow h-screen">
          <div className="flex space-x-3 mb-5 text-slate-400">
            <Ticket />{" "}
            <span className="hover:underline cursor-pointer">
              <Link href={"/dashboard/tickets"}>Tickets </Link>
            </span>{" "}
            <span>{">"}</span>{" "}
            <span className="hover:underline cursor-pointer">
              <Link href={"/dashboard/tickets/a-specific-id"}>Untitled</Link>
            </span>
          </div>
          <div className="flex space-x-3 mt-4">
            <hr style={{ opacity: 0.5 }} />
            <div>
              <UsersTab />
              <hr style={{ opacity: 0.5 }} />
            </div>
            <div className="border border-gray-500"></div>
            <div>
              <ChatTabs />
            </div>
            <div className="border border-gray-500"></div>
            <div>
              <Status />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketVisualizer;
