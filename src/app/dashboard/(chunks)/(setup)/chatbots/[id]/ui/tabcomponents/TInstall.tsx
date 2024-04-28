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
    <div>
      <div>
        <div className="mb-2">
            <Label className="text-gray-400 font-bold">Install on your site</Label>
        </div>
        <div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <div className="flex justify-between mb-1">
              <small className="text-white font-bold">HTML</small>
              <small
                onClick={copyToClipboard}
                className="text-white inline-flex"
              >
                <ClipboardList className="scale-75 mb-5"/>{copied ? "Copied!" : "Copy Code"}
              </small>
            </div>
            <pre className="bg-gray-900 p-4 rounded-md overflow-auto text-sm">
              <code>Yoo MAMA</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="my-8">
        <div className="bg-blue-400 rounded-lg p-5 text-black flex">
          <div>
            <Info />
          </div>
          <div className="ml-4">
            <div>
              <h4 className="font-extrabold text text-lg">
                New chatbot update available
              </h4>
            </div>
            <div className="mt-3">
              <small>
                Use the new script above on your website to enable the latest
                chatbot features.
              </small>
            </div>
            <div className="mt-3">
              <small>
                You can find refrence on how to do this in{" "}
                <Link className="text-blue-600" href={"/"}>
                  https://locahost:3000
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div>
      <Label className="text-gray-400">Want more context. See the full </Label><Link className="underline text-blue-500" href={'/docs'}>documentation</Link>
      
      </div>
    </div>
  );
};

export default TInstall;
