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

const TicketVisualizer = () => {
  return (
    <div>
      <div className="flex text-white">
        <div>
          <Sidebar />
        </div>
        <div className="ml-10 flex flex-col space-y-3 mt-8 flex-grow h-screen">
          <div className="flex space-x-3 text-slate-400">
            <Ticket />{" "}
            <span className="hover:underline cursor-pointer">
              <Link href={"/dashboard/tickets"}>Tickets </Link>
            </span>{" "}
            <span>{">"}</span>{" "}
            <span className="hover:underline cursor-pointer">
              <Link href={"/dashboard/tickets/a-specific-id"}>Untitled</Link>
            </span>
          </div>
          <hr style={{ opacity: 0.5 }} />
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={25}>
              <UsersTab />
              <hr style={{ opacity: 0.5 }} />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <ChatTabs />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>adsf</ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
};

export default TicketVisualizer;
