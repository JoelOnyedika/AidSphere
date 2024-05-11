import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { EmailInboxUITabsData } from "@/lib/constants";
import { capitalizeFirstLetter } from "@/lib/shit-functions/functions";
import TEmailInbox from "./(tabcomponents)/TEmailInbox";
import TKnowledge from "./(tabcomponents)/TKnowledge";
import TSettings from "./(tabcomponents)/TSettings";
import TInstall from "./(tabcomponents)/TInstall";

const Tab = () => {
  const { setTheme } = useTheme();
  setTheme("dark");

  return (
    <Tabs defaultValue="email Inbox" className="w-[600px]">
      <TabsList>
        {EmailInboxUITabsData.map((data) => (
          <TabsTrigger key={data.name} value={data.name}>
            {capitalizeFirstLetter(data.name)}
          </TabsTrigger>
        ))}
      </TabsList>
      {EmailInboxUITabsData.map((data) => (
        <TabsContent key={data.name} value={data.name} className="mt-5 w-full">
          {renderContent(data.name)}
        </TabsContent>
      ))}
    </Tabs>
  );
};

const renderContent = (tabValue: string) => {
  switch (tabValue) {
    case "email Inbox":
      return (
        <TEmailInbox />
      );
    case "knowledge":
      return (<TKnowledge />)
      case 'install':
        return <TInstall />
    case "settings":
      return (
        <TSettings />
      )
    default:
      return <span>Default content for {tabValue}</span>;
  }
};

export default Tab;
