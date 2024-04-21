import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChatUIBrandColors } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TChatbot = () => {
  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    useState("255, 255, 255");
  const [chatData, setChatData] = useState({
    headline: "",
    description: "",
    welcomeMessage: "",
  });
  console.log(setChatData);
  const [position, setPosition] = React.useState("bottom");
  const { setTheme } = useTheme();
  const [backgroundTheme, setBackgroundTheme] = useState("light");

  return (
    <div className="space-y-11">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label
          htmlFor="headline"
          className="text-gray-400 font-bold focus:outline-none"
        >
          Headine
        </Label>
        <Input
          id="headline"
          value={chatData.headline}
          onChange={(e) => setChatData(e.target.value)}
          className="w-full"
          type="text"
          placeholder="Chat with our AI"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label
          htmlFor="description"
          className="text-gray-400 font-bold focus:outline-none"
        >
          Description
        </Label>
        <Input
          id="description"
          type="text"
          placeholder="Ask any question and our AI will answer!"
          onChange={(e) => setChatData(e.target.value)}
          value={chatData.description}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="headline" className="text-gray-400 font-bold">
          Welcome Message
        </Label>
        <Textarea
          placeholder="Hi there 👋
                            I'm the AI Assistant.
                            How can I help you today?"
          id="message-2"
          cols={5}
          rows={4}
          onChange={(e) => setChatData(e.target.value)}
          value={chatData.welcomeMessage}
        />
      </div>
      <div>
        <Label className="text-gray-400 font-bold">Brand Color</Label>
        <div className="border border-gray-600 rounded-md">
          <div className="flex justify-center items-center p-3">
            {ChatUIBrandColors.map((rgb, index) => (
              <span
                key={index}
                onClick={() => setSelectedBackgroundColor(rgb.rgbValue)}
                style={{
                  backgroundColor: `rgb(${rgb.rgbValue})`,
                  width: "50px",
                  borderRadius: ".3rem",
                  height: "40px",
                  display: "inline-block",
                  margin: "5px",
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between border border-gray-600 rounded-lg p-3">
        <div>
          <Label className="text-gray-400 font-bold">Theme</Label>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <span>Toggle theme: </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => setBackgroundTheme(setTheme("light"))}
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setBackgroundTheme(setTheme("dark"))}
                >
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div>
          <Label className="text-gray-400 font-bold">Orientation</Label>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <span>Change Orientation: Right</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Left</DropdownMenuItem>
                <DropdownMenuItem>Right</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div>
      <Label className="text-gray-400 font-bold">Logo</Label>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default TChatbot;
