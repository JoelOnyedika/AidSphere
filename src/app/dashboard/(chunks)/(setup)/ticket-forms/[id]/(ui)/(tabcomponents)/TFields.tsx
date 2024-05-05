import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ChevronUp, ChevronDown, Atom, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TFields = () => {
  const [activeItem, setActiveItem] = useState(true);
  const [addDefaultValue, setAddDefaultValue] = useState(false);

  // Function to toggle the active/inactive state of an item
  const toggleItem = () => {
    setActiveItem(!activeItem);
  };

  return (
    <div>
      <div>
        <Button variant="blue">
          <Atom className="mr-2 h-4 w-4" />
          Create new field
        </Button>
      </div>
      <div className="mt-3 space-y-3">
         {/* created fields */}
         <div className="mb-10 border border-gray-700 rounded-lg">
          <div className="flex justify-between bg-gray-600 rounded-t-lg p-2">
            <div className="flex">
              <div className="" onClick={() => toggleItem()}>
                {activeItem ? (
                  <ChevronDown className="mr-2 scale-90" />
                ) : (
                  <ChevronUp className="mr-2 scale-90" />
                )}
              </div>
              <span>Field</span>
            </div>
            <div className="bg-gray-500 rounded-lg p-[1px] box-border">
              <X className="scale-50" />
            </div>
          </div>
          <div
            className={`mt-5 text-slate-400 ${activeItem ? "show" : "hide"}`}
          >
            {activeItem && (
              <div
                className={`${
                  activeItem ? "show" : "hide"
                } space-y-5 px-4 pb-3`}
              >
                <div className="space-y-2">
                  <Label className="font-bold">Label</Label>
                  <Input value={"New field"} />
                </div>
                <div>
                  <RadioGroup defaultValue="option-one">
                    <div className=" items-center space-x-2">
                      <Label htmlFor="option-one" className="font-bold">
                        Required
                      </Label>
                      <input type="radio" name="" id="" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup defaultValue="option-one">
                    <div className="items-center space-x-2">
                      <Label htmlFor="option-one" className="font-bold">
                        File Upload
                      </Label>
                      <input type="radio" name="" id="" />
                    </div>
                  </RadioGroup>
                </div>
                {!addDefaultValue ? (
                  <Button
                    variant={"secondary"}
                    onClick={() => setAddDefaultValue(true)}
                  >
                    Add default value
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <Label className="font-bold">Default Value</Label>
                    <div className="flex space-x-2">
                      <Input />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="rounded-md p-[1px] box-border cursor-pointer bg-slate-600" onClick={() => setAddDefaultValue(false)}>
                              <X className="scale-50" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Remove default field</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {/* Default field */}
        <div className="mb-10 border border-gray-700 rounded-lg">
          <div className="flex justify-between bg-gray-600 rounded-t-lg p-2">
            <div className="flex">
              <div className="" onClick={() => toggleItem()}>
                {activeItem ? (
                  <ChevronDown className="mr-2 scale-90" />
                ) : (
                  <ChevronUp className="mr-2 scale-90" />
                )}
              </div>
              <span>Field</span>
            </div>
            <div className="bg-gray-500 rounded-lg p-[1px] box-border">
              <X className="scale-50" />
            </div>
          </div>
          <div
            className={`mt-5 text-slate-400 ${activeItem ? "show" : "hide"}`}
          >
            {activeItem && (
              <div
                className={`${
                  activeItem ? "show" : "hide"
                } space-y-5 px-4 pb-3`}
              >
                <div className="space-y-2">
                  <Label className="font-bold">Label</Label>
                  <Input value="Add a comment now" />
                </div>
                <div>
                  <RadioGroup defaultValue="option-one">
                    <div className=" items-center space-x-2">
                      <Label htmlFor="option-one" className="font-bold">
                        Required
                      </Label>
                      <input type="radio" name="" id="" />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <RadioGroup defaultValue="option-one">
                    <div className="items-center space-x-2">
                      <Label htmlFor="option-one" className="font-bold">
                        File Upload
                      </Label>
                      <input type="radio" name="" id="" />
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default TFields;
