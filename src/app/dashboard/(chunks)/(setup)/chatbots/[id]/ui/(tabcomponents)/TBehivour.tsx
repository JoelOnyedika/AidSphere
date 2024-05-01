import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Info } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Slider } from "@mui/material";

const TBehivour = () => {
  const marks = [
    {
      value: 33,
      label: "Formal",
      textColor: "white",
    },
    {
      value: 66,
      label: "Casual",
      textColor: "white",
    },
    {
      value: 99,
      label: "Enthuistatic",
      textColor: "white",
    },
  ];
  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <div className="text-slate-400">
      <div>
        <div>
          <Label className="font-bold">Instructions</Label>
        </div>
        <div className="mt-2">
          <Textarea
            rows={3}
            placeholder='Your name is "AidShere assistance, You will provide answers to questions about programming in Python. You will only reply in Russian "'
          />
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-blue-400 rounded-lg p-5 text-black flex">
          <div>
            <Info />
          </div>
          <div className="ml-4">
            <div>
              <h4 className="font-extrabold text text-lg">
                You can provide additional context too!
              </h4>
            </div>
            <div className="mt-3">
              <small>
                Once the chatbot is installed on your website, you can make it
                more "aware" by providing additional context to it dynamically
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

      <div className="mt-8">
        <div>
          <Label className="text-sm font-bold">Conversation style</Label>
        </div>
        <div className="text-white">
          <Slider
            aria-label="Always visible defaultValue={80}"
            color="info"
            text
            step={33}
            marks={marks}
            getAriaValueText={valuetext}
            className="text-white"
            sx={{
              "& .MuiSlider-markLabel": {
                color: (mark) => mark.textColor, // Apply the specified text color for each mark
              },
            }}
          />
        </div>
      </div>

      <div className="mt-8">
        <div>
          <Label className="text-sm font-bold">Creativity</Label>
        </div>
        <div className="text-white">
          <Slider
            aria-label="Always visible defaultValue={80}"
            color="info"
            text
            step={33}
            marks={marks}
            getAriaValueText={valuetext}
            className="text-white"
            sx={{
              "& .MuiSlider-markLabel": {
                color: (mark) => mark.textColor, // Apply the specified text color for each mark
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TBehivour;
