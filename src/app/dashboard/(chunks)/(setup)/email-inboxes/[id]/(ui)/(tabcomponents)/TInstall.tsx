import { Label } from "@/components/ui/label";
import { Info, ClipboardList, Copy } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const TInstall = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const code = "code ";
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };
  return (
    <div>
      <div>
        <div className="mb-2">
          <Label className="text-gray-400 font-bold">
            Install instructions
          </Label>
          <div className="flex space-y-3 mt-3 flex-col">
            <span className="text-gray-300">Set up email forwarding from your email provider to:</span>
            <div className="flex">
              <span className=" text-gray-300">sh7xdhssixtgeodf</span>
              <div className="p-[1px] flex items-center justify-center rounded-md bg-gray-600 mr-3 box-border">
                <Copy className="scale-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8"></div>
      <div>
        <Label className="text-gray-400">
          Want more context. See the full{" "}
        </Label>
        <Link className="underline text-blue-500" href={"/docs"}>
          documentation
        </Link>
      </div>
    </div>
  );
};

export default TInstall;
