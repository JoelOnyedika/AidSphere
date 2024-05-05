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
          Show AidSphere Brand on UI
        </Label>
        <Switch />
      </div>

      <div className="grid max-w-sm items-center gap-1.5">
        <div>
          <Label htmlFor="chatbotid" className="text-red-400 font-semibold">
            Area of No return
          </Label>
        </div>
        <div>
          <Button variant={"destructive"} ><Trash2 className="mr-2 h-4 w-4"/>Delete Chatbot</Button>
        </div>
      </div>
    </div>
  );
};

export default TSettings;
