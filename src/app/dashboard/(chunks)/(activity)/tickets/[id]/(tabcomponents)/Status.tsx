"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TicketVisualizerStatusMainData } from '@/lib/constants'
import React from 'react'
import Information from './(StatusTabs)/Information'
import History from './History'
import { Button } from '@/components/ui/button'

const Status = () => {
  return (
    <div>
        <div>
        <Tabs defaultValue="information" className="w-[400px]">
        <TabsList className="mb-2">
            {TicketVisualizerStatusMainData.map((data, index) => (
                <TabsTrigger value={data.trigger}>{data.name}</TabsTrigger>
            ))}
        </TabsList>
        <hr style={{ opacity: 0.3 }} />
            {TicketVisualizerStatusMainData.map((data, index) => (
                <TabsContent value={data.trigger} className="">
                    {renderContent(data.trigger)}
                </TabsContent>
            ))}
        <TabsContent value="knowledge">
        </TabsContent>
      </Tabs>
        </div>
    </div>
  )
}

const renderContent = (tabValue: string) => {
    switch (tabValue) {
      case "information":
        return (
          <Information/>
        );
      case "history":
        return (
          <History/>
        );
      case "previous-ticket":
        return <Button variant={"destructive"}>{"Comming soon :)"}</Button>
      case "related":
        return <Button variant={"blue"}>{"Comming soon :)"}</Button>
      default:
        return <span>Default content for {tabValue}</span>;
    }
  };

export default Status