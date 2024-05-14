"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import UsersTab from "./(tabs)/UsersTab";
import ChatTabs from "./(tabs)/ChatTab";
import KnowledgeTab from "./(tabs)/KnowledgeTab";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const ChatbotConversationVisualizer = () => {
  return (
    <div className="flex text-white">
      <div>
        <Sidebar />
      </div>
      <div className="ml-10 mt-5 flex">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <UsersTab />
            <hr style={{opacity: .5}} />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <ChatTabs />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <KnowledgeTab />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default ChatbotConversationVisualizer;
