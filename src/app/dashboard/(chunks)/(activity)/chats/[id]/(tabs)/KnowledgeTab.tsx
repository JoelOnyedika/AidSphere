import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import TInformation from "./(tabcomponents)/TInformation";
import TKnowledge from "./(tabcomponents)/TKnowledge";
import { useTheme } from "next-themes";

const KnowledgeTab = () => {
  const { setTheme } = useTheme();
  setTheme("dark");
  return (
    <div className="mt-10 px-4">
      <Tabs defaultValue="information" className="w-[400px]">
        <TabsList className="mb-2">
          <TabsTrigger value="information">Information</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge</TabsTrigger>
        </TabsList>
        <hr style={{ opacity: 0.3 }} />
        <TabsContent value="information" className="">
          <TInformation />
        </TabsContent>
        <TabsContent value="knowledge">
          <TKnowledge />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default KnowledgeTab;
