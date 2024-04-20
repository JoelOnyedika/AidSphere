import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { ChatbotUITabsData } from "@/lib/constants";
import { capitalizeFirstLetter } from "@/lib/shit-functions/functions";

const Tab = () => {
  const { setTheme } = useTheme()
  setTheme("dark")
  return (
    <Tabs defaultValue="chatbot" className="w-[400px]">
  <TabsList>
    {ChatbotUITabsData.map((data) => (
      <TabsTrigger key={data.name} value={data.name}>
        {capitalizeFirstLetter(data.name)}
      </TabsTrigger>
    ))}
  </TabsList>
  {ChatbotUITabsData.map((data) => (
    <TabsContent key={data.name} value={data.name}>
      value {data.name}
    </TabsContent>
  ))}
</Tabs>

  );
};

export default Tab;
