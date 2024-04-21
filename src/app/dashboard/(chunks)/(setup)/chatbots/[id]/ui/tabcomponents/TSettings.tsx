import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Copy, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const TSettings = () => {
  return (
    <div className="space-y-11">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="chatbotid" className="text-gray-400 font-bold">
          Chatbot ID
        </Label>
        <div className="inline-flex">
          <span className="ml-2 mr-3 text-gray-300">sh7xdhssixtgeodf</span>
          <div className="p-[1px] flex items-center justify-center rounded-md bg-gray-600 mr-3 box-border">
            <Copy className="scale-50" />
          </div>
        </div>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="chatbotid" className="text-gray-400 font-semibold">
          Allowed Domains
        </Label>
        <Input type="text" placeholder="www.yourdomain.com" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="chatbotid" className="text-gray-400 font-semibold">
          Rate Limit
        </Label>
        <div className="inline-flex whitespace-nowrap break-words  text-gray-300 justify-center text-center">
          <span>Post</span>
          <Input type="text" value="60" className="ml-3 mr-3 w-full" />
          <span className="text-gray-300">messages every</span>
          <Input type="text" value="90" className="ml-3 mr-3 w-full" />
          <span className="text-gray-300">seconds</span>
        </div>
        <Input type="text" value={"Yo that's to fast! Please slow down"} />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="chatbotid" className="text-gray-400 font-semibold">
          Show AidSphere Brand on UI
        </Label>
        <Switch />
      </div>

      <div className="grid w-full max-w-sm gap-1.5">
        
        <Label htmlFor="chatbotid" className="text-red-400 font-semibold">
          Area of No return
        </Label>
        <Button><Trash2 />Delete Chatbot</Button>
      </div>
    </div>
  );
};

export default TSettings;
