import React, { ReactEventHandler, useRef, useState } from "react";
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
import { useRecoilState } from "recoil";
import {
  ticketBackgroundThemeState,
  ticketBrandColorState,
  ticketButtonTextState,
  ticketDescriptionTextState,
  ticketHeadlineTextState,
} from "@/lib/recoil/atoms";
import { capitalizeFirstLetter } from "@/lib/shit-functions/functions";


const TTicketForm = () => {
    const [ticketHeadline, setTicketHeadline] = useRecoilState(ticketHeadlineTextState)
    const [ticketDescription, setTicketDescription] = useRecoilState(ticketDescriptionTextState)
    const [ticketButtonText, setTicketButtonText] = useRecoilState(ticketButtonTextState)
    const [ticketBrandColor, setTicketBrandColor] = useRecoilState(ticketBrandColorState)
    const [ticketTheme, setTicketTheme] = useRecoilState(ticketBackgroundThemeState)

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
              className="w-full"
              type="text"
              placeholder="Create a ticket"
              onChange={(event: any) => setTicketHeadline(event.target.value)}
              value={ticketHeadline}
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
              onChange={(event: any) => setTicketDescription(event.target.value)}
              value={ticketDescription}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              htmlFor="description"
              className="text-gray-400 font-bold focus:outline-none"
            >
              Button Text
            </Label>
            <Input
              id=""
              type="text"
              placeholder="Button Text"
              onChange={(event: any) => setTicketButtonText(event.target.value)}
              value={ticketButtonText}
            />
          </div>
          <div>
            <Label className="text-gray-400 font-bold">Brand Color</Label>
            <div className="border border-gray-600 rounded-md">
              <div className="flex justify-center items-center p-3">
                {ChatUIBrandColors.map((rgb, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: `rgb(${rgb.rgbValue})`,
                      width: "50px",
                      borderRadius: ".3rem",
                      height: "40px",
                      display: "inline-block",
                      margin: "5px",
                      cursor: "pointer"
                    }}
                    onClick={() => setTicketBrandColor(rgb.rgbValue)}
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
                      <span>Toggle theme: {capitalizeFirstLetter(ticketTheme)}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => setTicketTheme("light")}
                    >
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setTicketTheme("dark")}
                    >
                      Dark
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div>
        </div>
        </div>
      );
}

export default TTicketForm