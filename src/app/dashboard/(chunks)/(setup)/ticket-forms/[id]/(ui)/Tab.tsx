import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { ChatbotUITabsData } from "@/lib/constants";
import { capitalizeFirstLetter } from "@/lib/shit-functions/functions";

const Tab = () => {
  const { setTheme } = useTheme();
  setTheme("dark");

  return (
    <Tabs defaultValue="chatbot" className="w-[600px]">
      <TabsList>
        {ChatbotUITabsData.map((data) => (
          <TabsTrigger key={data.name} value={data.name}>
            {capitalizeFirstLetter(data.name)}
          </TabsTrigger>
        ))}
      </TabsList>
      {ChatbotUITabsData.map((data) => (
        <TabsContent key={data.name} value={data.name} className="mt-5">
          {renderContent(data.name)}
        </TabsContent>
      ))}
    </Tabs>
  );
};

const renderContent = (tabValue: string) => {
  switch (tabValue) {
    case "chatbot":
      return (
        "<TChatbot />"
      );
    case "knowledge":
      return 'knowledge'
    case "behivour":
      return '<TBehivour/>'
    case 'connections':
      return '<TConnection />'
      case 'install':
        return '<TInstall />'
    case "settings":
      return (
        'settings'
      )
    default:
      return <span>Default content for {tabValue}</span>;
  }
};

export default Tab;
