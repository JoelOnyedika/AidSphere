import { Label } from "@/components/ui/label";
import { Info, ClipboardList } from "lucide-react";
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
    <div className="space-y-3">
      <div className="mb-2">
        <div className="mb-2">
          <Label className="text-gray-400 font-bold">
          Install the "create ticket" widget
          </Label>
        </div>
        <div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <div className="flex justify-between mb-1">
              <small className="text-white font-bold">HTML</small>
              <small
                onClick={copyToClipboard}
                className="text-white inline-flex"
              >
                <ClipboardList className="scale-75 mb-5" />
                {copied ? "Copied!" : "Copy Code"}
              </small>
            </div>
            <pre className="bg-gray-900 p-4 rounded-md overflow-auto text-sm">
              <code>Yoo MAMA</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="mb-2">
          <Label className="text-gray-400 font-bold">
          Install the "tickets table" widget
          </Label>
        </div>
        <div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <div className="flex justify-between mb-1">
              <small className="text-white font-bold">HTML</small>
              <small
                onClick={copyToClipboard}
                className="text-white inline-flex"
              >
                <ClipboardList className="scale-75 mb-5" />
                {copied ? "Copied!" : "Copy Code"}
              </small>
            </div>
            <pre className="bg-gray-900 p-4 rounded-md overflow-auto text-sm">
              <code>Yoo MAMA</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="pt-3">
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
