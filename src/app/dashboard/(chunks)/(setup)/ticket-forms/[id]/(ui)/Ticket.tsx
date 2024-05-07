import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ticketBackgroundThemeState,
  ticketBrandColorState,
  ticketButtonTextState,
  ticketDescriptionTextState,
  ticketHeadlineTextState,
} from "@/lib/recoil/atoms";
import React from "react";
import { selector, useRecoilValue } from "recoil";

const Ticket = () => {
  const ticketHeadlineTextStateSelector = selector({
    key: "ticketHeadlineText",
    get: ({ get }) => {
      const text: string = get(ticketHeadlineTextState);
      return text;
    },
  });

  const ticketDescriptionTextStateSelector = selector({
    key: "ticketDescriptionText",
    get: ({ get }) => {
      const text: string = get(ticketDescriptionTextState);
      return text;
    },
  });

  const ticketBrandColorStateSelector = selector({
    key: "ticketBrandColor",
    get: ({ get }) => {
      const rgbValue: string = get(ticketBrandColorState);
      return rgbValue;
    },
  });

  const ticketBackgroundThemeStateSelector = selector({
    key: "ticketBackgroundTheme",
    get: ({ get }) => {
      const theme: string = get(ticketBackgroundThemeState);
      return theme;
    },
  });

  const ticketButtonTextStateSelector = selector({
    key: "ticketButtonText",
    get: ({ get }) => {
      const text: string = get(ticketButtonTextState);
      return text;
    },
  });

  const ticketHeadline = useRecoilValue(ticketHeadlineTextStateSelector);
  const ticketDescription = useRecoilValue(ticketDescriptionTextStateSelector);
  const ticketBrandColor = useRecoilValue(ticketBrandColorStateSelector);
  const ticketBackgroundTheme = useRecoilValue(
    ticketBackgroundThemeStateSelector
  );
  const ticketButtonText = useRecoilValue(ticketButtonTextStateSelector);
  return (
    <div>
      <div
        className={`${
          ticketBackgroundTheme === "light" ? "bg-white" : "bg-slate-800"
        } px-6 pb-5 rounded-2xl overflow-hidden w-[500px] flex flex-col`}
      >
        <div
          className={`${
            ticketBackgroundTheme === "light" ? "text-slate-800" : "text-white"
          }  rounded-t-2xl flex flex-col justify-center px-6 py-10 items-center`}
        >
          <h1 className=" text-xl text-center font-bold">{ticketHeadline}</h1>
          <span className="text-center break-words">{ticketDescription}</span>
        </div>
        <div className="space-y-4">
          <div>
            <Label
              className={`${
                ticketBackgroundTheme === "light"
                  ? "text-gray-600"
                  : "text-white"
              }  font-bold`}
            >
              Label
            </Label>
            <Input
              placeholder="Type into me please"
              className={`${
                ticketBackgroundTheme === "light"
                  ? "text-slate-800"
                  : "text-white"
              } border w-full text-black focus-within:border-blue-500 focus-within:border-solid border-none`}
            />
          </div>
          <div>
            <Label
              className={`${
                ticketBackgroundTheme === "light"
                  ? "text-gray-600"
                  : "text-white"
              }  font-bold`}
            >
              Add Comment
            </Label>
            <Textarea
              placeholder="Hey, i have issues with..."
              id="message-2"
              cols={5}
              rows={5}
              className={`${
                ticketBackgroundTheme === "light"
                  ? "text-slate-800"
                  : "text-white"
              } border w-full text-black focus-within:border-blue-500 focus-within:border-solid border-none`}
            />
          </div>
        </div>

        <div className="flex items-start justify-between mt-3">
          <button
            className="rounded-md px-3 py-[6px]"
            style={{ background: `rgb(${ticketBrandColor})` }}
          >
            Upload
          </button>
          <Button className="rounded-md p-3" variant={"success"}>
            {ticketButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
