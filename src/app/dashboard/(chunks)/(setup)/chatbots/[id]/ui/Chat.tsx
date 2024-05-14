import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  chatBackgroundThemeState,
  chatBrandColorState,
  chatDescriptionTextState,
  chatHeadlineTextState,
  chatLogoState,
  chatOrientationState,
  chatWelcomeMessageTextState,
} from "@/lib/recoil/atoms";
import { Send } from "lucide-react";
import React, { useEffect } from "react";
import { useRecoilValue, selector } from "recoil";
import Logo from "../../../../../../../../public/images/logo.png";

const Chat = () => {
  const chatHeadlineTextStateSelector = selector({
    key: "chatHeadlineText",
    get: ({ get }) => {
      const text: string = get(chatHeadlineTextState);
      return text;
    },
  });

  const chatDescriptionTextStateSelector = selector({
    key: "chatDescriptionText",
    get: ({ get }) => {
      const text: string = get(chatDescriptionTextState);
      return text;
    },
  });

  const chatWelcomeMessageTextStateSelector = selector({
    key: "chatWelcomeMessageText",
    get: ({ get }) => {
      const text: string = get(chatWelcomeMessageTextState);
      return text;
    },
  });

  const chatBrandColorStateSelector = selector({
    key: "chatBrandColor",
    get: ({ get }) => {
      const rgbValue: string = get(chatBrandColorState);
      return rgbValue;
    },
  });

  const chatBackgroundThemeStateSelector = selector({
    key: "chatBackgroundTheme",
    get: ({ get }) => {
      const theme: string = get(chatBackgroundThemeState);
      return theme;
    },
  });

  const chatLogoStateSelector = selector({
    key: "chatLogo",
    get: ({ get }) => {
      const logo: string = get(chatLogoState);
      return logo;
    },
  });

  const chatOrientationStateSelector = selector({
    key: "chatOrientation",
    get: ({ get }) => {
      const orientation: string = get(chatOrientationState);
      return orientation;
    },
  });

  const chatHeadline = useRecoilValue(chatHeadlineTextStateSelector);
  const chatDescription = useRecoilValue(chatDescriptionTextStateSelector);
  const chatWelcomeMessage = useRecoilValue(
    chatWelcomeMessageTextStateSelector
  );
  const chatBrandColor = useRecoilValue(chatBrandColorStateSelector);
  const chatBackgroundTheme = useRecoilValue(chatBackgroundThemeStateSelector);
  const chatLogo = useRecoilValue(chatLogoStateSelector);
  const chatOrientation = useRecoilValue(chatOrientationStateSelector);

  return (
    <div
      className={`${
        chatBackgroundTheme === "light" ? "bg-white" : "bg-slate-800"
      } rounded-2xl overflow-hidden w-[470px] h-[700px] flex flex-col`}
    >
      <div
        style={{ background: `rgb(${chatBrandColor})` }}
        className="rounded-t-2xl flex flex-col justify-center px-6 py-10 items-center"
      >
        <h1 className="text-white text-lg text-center font-bold">
          {chatHeadline}
        </h1>
        <span className="text-center break-all">{chatDescription}</span>
        <div>
          <button className="rounded-md p-2 mt-5 box-border shadow-md border border-gray-600">
            New Chat
          </button>
        </div>
      </div>
      <div className="p-4 flex-grow">
        {chatOrientation === "left" ? (
          <div className="space-y-8">
            <div className="flex justify-end mb-2">
              <div
                style={{ background: `rgb(${chatBrandColor})` }}
                className="text-white rounded-b-xl rounded-tl-lg p-4"
              >
                {chatWelcomeMessage}
              </div>
            </div>
            <div className="flex justify-start mb-2">
              <Avatar className="mr-2 mt-2">
                <AvatarImage src={chatLogo} alt="aidsphere logo" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div
                style={{ background: `rgb(${chatBrandColor})` }}
                className="rounded-b-lg rounded-tr-lg text-white max-w-2/3 break-words p-4"
              >
                Hello chat with our chatbot please
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex justify-start mb-2">
              <div
                style={{ background: `rgb(${chatBrandColor})` }}
                className="text-white rounded-b-xl rounded-tr-lg p-4"
              >
                {chatWelcomeMessage}
              </div>
            </div>
            <div className="flex justify-end mb-2">
              <div
                style={{ background: `rgb(${chatBrandColor})` }}
                className="rounded-b-lg rounded-tl-lg text-white max-w-2/3 break-words p-4"
              >
                Hello chat with our chatbot please
              </div>
              <Avatar className="ml-2 mt-2">
                <AvatarImage src={chatLogo} alt="aidsphere logo" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        )}
      </div>
      <div className="m-4 rounded-lg border border-solid border-gray-700 flex">
        <Input
          className={`${
            chatBackgroundTheme === "light" ? "text-slate-800" : "text-white"
          } rounded-lg border border-none focus: border-gray-700`}
          placeholder="Type in your message here?"
        />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={"ghost"}>
                <Send
                  className={`${
                    chatBackgroundTheme === "light"
                      ? "text-black"
                      : "text-white"
                  } scale-75 p-0`}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Send</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex justify-center items-center mt-5">
        <img src={Logo} alt="Aidsphere branding" />
      </div>
    </div>
  );
};

export default Chat;
