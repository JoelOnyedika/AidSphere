import React, { useRef, useState } from "react";
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


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRecoilState } from "recoil";
import { chatBackgroundThemeState, chatBrandColorState, chatDescriptionTextState, chatHeadlineTextState, chatLogoState, chatOrientationState, chatWelcomeMessageTextState } from "@/lib/recoil/atoms";

const TChatbot = () => {
  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    useState("255, 255, 255");
  const [position, setPosition] = React.useState("bottom");
  const [chatHeadline, setChatHeadline] = useRecoilState(chatHeadlineTextState)
  const [chatDescription, setChatDescription] = useRecoilState(chatDescriptionTextState)
  const [chatWelcomeMessage, setChatWelcomeMessage] = useRecoilState(chatWelcomeMessageTextState)
  const [chatBrandColors, setChatBrandColors] = useRecoilState(chatBrandColorState)
  const [chatBackgroundTheme, setChatBackgroundTheme] = useRecoilState(chatBackgroundThemeState)
  const [chatLogo, setChatLogo] = useRecoilState(chatLogoState)
  const [chatOrientation, setChatOrientation] = useRecoilState( chatOrientationState)

  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    // Trigger click event of the file input
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    // Handle image change and set the image to the state
    const imageFile = event.target.files[0];
    setChatLogo(URL.createObjectURL(imageFile));
  };

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
          value={chatHeadline}
          onChange={(e) => setChatHeadline(e.target.value)}
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
          onChange={(e) => setChatDescription(e.target.value)}
          value={chatDescription}
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
          onChange={(e) => setChatWelcomeMessage(e.target.value)}
          value={chatWelcomeMessage}
        />
      </div>
      <div>
        <Label className="text-gray-400 font-bold">Brand Color</Label>
        <div className="border border-gray-600 rounded-md">
          <div className="flex justify-center items-center p-3">
            {ChatUIBrandColors.map((rgb, index) => (
              <span
                key={index}
                onClick={() => setChatBrandColors(rgb.rgbValue)}
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
                  onClick={() => setChatBackgroundTheme("light")}
                >
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setChatBackgroundTheme("dark")}
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
                  <span>Change Orientation: {chatOrientation}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setChatOrientation('left')}>Left</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setChatOrientation('right')}>Right</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div>
      <Label className="text-gray-400 font-bold">Logo</Label>
      <Avatar className="cursor-pointer" onClick={handleAvatarClick}>
        <AvatarImage src={chatLogo} alt="Aidsphere logo" />
        <AvatarFallback>AS</AvatarFallback>
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </Avatar>
    </div>
    </div>
  );
};

export default TChatbot;
