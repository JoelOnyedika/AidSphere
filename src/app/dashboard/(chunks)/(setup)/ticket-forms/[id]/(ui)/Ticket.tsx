import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ticketBackgroundThemeState,
  ticketBrandColorState,
  ticketButtonTextState,
  ticketDescriptionTextState,
  ticketFieldsDataState,
  ticketHeadlineTextState,
} from "@/lib/recoil/atoms";
import React, { useEffect, useState } from "react";
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

  const ticketFieldsDataStateSelector = selector({
    key: "ticketFieldData",
    get: ({ get }) => {
      const data: any = get(ticketFieldsDataState);
      return data;
    },
  });

  const ticketHeadline = useRecoilValue(ticketHeadlineTextStateSelector);
  const ticketDescription = useRecoilValue(ticketDescriptionTextStateSelector);
  const ticketBrandColor = useRecoilValue(ticketBrandColorStateSelector);
  const ticketBackgroundTheme = useRecoilValue(
    ticketBackgroundThemeStateSelector
  );
  const ticketButtonText = useRecoilValue(ticketButtonTextStateSelector);
  const ticketFieldData = useRecoilValue(ticketFieldsDataStateSelector);
  console.log(ticketFieldData);

  useEffect(() => {
    setUpdatedTicketFieldData(ticketFieldData);
  }, [ticketFieldData]);

  const [updatedTicketFieldData, setUpdatedTicketFieldData] = useState([]);
  const [value, setValue] = useState("");
  const [fieldValues, setFieldValues] = useState({});

  useEffect(() => {
    // Initialize field values based on ticketFieldData
    const initialValues = {};
    ticketFieldData.forEach((data) => {
      // If defaultValue is provided and showDefaultValue is true, set the default value
      if (data.defaultValue && data.showDefaultValue) {
        initialValues[data.id] = data.defaultValue;
      } else {
        initialValues[data.id] = "";
      }
    });
    setFieldValues(initialValues);
  }, [ticketFieldData]);

  const handleInputChange = (e, id) => {
    const newValue = e.target.value;
    setFieldValues((prevState) => ({
      ...prevState,
      [id]: newValue,
    }));
  };


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
            {updatedTicketFieldData.map(
              (data: any) =>
                data.id !== 1 && (
                  <div key={data.id} className={`mb-4 `}>
                    <Label
                      className={`${
                        ticketBackgroundTheme === "light"
                          ? "text-gray-600"
                          : "text-white"
                      } font-bold`}
                    >
                      {data.label}
                      {data.required && " *"}
                    </Label>
                    {data.inputType === "checkbox" ? (
                      <div className="">
                        <input checked={true} type="checkbox" name="" id="" />
                      </div>
                    ) : (
                      <Input
                        type={data.inputType}
                        placeholder={`Type ${data.inputType} into me please`}
                        value={fieldValues[data.id] || ""}
                        required={data.required === "on"}
                        onChange={(e) => handleInputChange(e, data.id)}
                        className={`${
                          ticketBackgroundTheme === "light"
                            ? "text-gray-600"
                            : "text-white"
                        } border w-full focus-within:border-blue-500 focus-within:border-solid border-none`}
                      />
                    )}
                  </div>
                )
            )}
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
              } border w-full focus-within:border-blue-500 focus-within:border-solid border-none`}
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
