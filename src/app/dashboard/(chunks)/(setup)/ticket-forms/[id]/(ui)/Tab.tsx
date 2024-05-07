import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { TicketFormUITabsData } from "@/lib/constants";
import { capitalizeFirstLetter } from "@/lib/shit-functions/functions";
import TTicketForm from "./(tabcomponents)/TTicketForm";
import TKnowledge from "./(tabcomponents)/TKnowledge";
import TSettings from "./(tabcomponents)/TSettings";
import TInstall from "./(tabcomponents)/TInstall";
import TConnection from "./(tabcomponents)/TConnection";
import TFields from "./(tabcomponents)/TFields";

const Tab = () => {
  const { setTheme } = useTheme();
  setTheme("dark");

  return (
    <Tabs defaultValue="ticket form" className="w-[600px]">
      <TabsList>
        {TicketFormUITabsData.map((data) => (
          <TabsTrigger key={data.name} value={data.name}>
            {capitalizeFirstLetter(data.name)}
          </TabsTrigger>
        ))}
      </TabsList>
      {TicketFormUITabsData.map((data) => (
        <TabsContent key={data.name} value={data.name} className="mt-5">
          {renderContent(data.name)}
        </TabsContent>
      ))}
    </Tabs>
  );
};

const renderContent = (tabValue: string) => {
  switch (tabValue) {
    case "ticket form":
      return <TTicketForm />;
    case "knowledge":
      return <TKnowledge />;
    case "fields":
      return <TFields />;
    case "connections":
      return <TConnection />;
    case "install":
      return <TInstall />;
    case "settings":
      return <TSettings />;
    default:
      return <TTicketForm />;
  }
};

export default Tab;
