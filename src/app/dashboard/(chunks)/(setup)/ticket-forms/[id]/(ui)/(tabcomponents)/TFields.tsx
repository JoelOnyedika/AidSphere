import React, { useState } from "react";
import { ChevronUp, ChevronDown, Atom, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ticketInputTypes } from "@/lib/constants";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { ticketFieldsDataState } from "@/lib/recoil/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

const TFields = () => {
  interface IUpdatedFields {
    id: number;
    activeItem: boolean;
    label: string;
    defaultValue: string;
    showDefaultValue: boolean;
  }

  const setTicketFieldData = useSetRecoilState(
    ticketFieldsDataState
  );

  const [fields, setFields] = useState([
    {
      id: 1,
      activeItem: true,
      label: "Field 1",

      defaultValue: "",
      showDefaultValue: false,
      fileUpload: "",
      inputType: "text",
      required: "on",
    },
  ]);

  const [updatedFields, setUpdatedFields] = useState<IUpdatedFields>([]);
  const [playRemoveFieldAnim, setPlayRemoveFieldAnim] = useState(false);

  const handleOnChange = (id: number, newData: any) => {
    setFields((prevFields) => {
      const updated = prevFields.map((field) => {
        if (field.id === id) {
          return { ...field, ...newData };
        }
        return field;
      });

      setTicketFieldData(updated); // Update ticketFieldsDataState
      setUpdatedFields(updated);
      return updated;
    });
  };

  // Function to toggle the active/inactive state of a field
  const toggleItem = (id: number) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, activeItem: !field.activeItem } : field
      )
    );
  };

  // Function to add a new field
  const addField = () => {
    const newId = fields.length + 1;
    const newField = {
      id: newId,
      activeItem: true,
      label: "Field",
      defaultValue: "",
      showDefaultValue: false,
      fileUpload: false,
      inputType: "text",
      required: false,
    };

    // Update fields state
    setFields((prevFields) => [newField, ...prevFields]);

    // Update ticketFieldData state
    setUpdatedFields((prevData: any) => [newField, ...prevData]);
    setTicketFieldData((prevData: any) => [newField, ...prevData]);
  };

  // Function to handle removing a field
  const removeField = (id: number) => {
    if (id !== 1) {
      setPlayRemoveFieldAnim(true);
      const filteredFields = fields.filter((field) => field.id !== id);
      setFields(filteredFields);
      setUpdatedFields(updatedFields.filter((field) => field.id !== id));
      setTicketFieldData(filteredFields); // Pass filteredFields to setTicketFieldData
    }
  };
  

  // Function to toggle showing the default value input
  const toggleDefaultValue = (id: number) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id
          ? { ...field, showDefaultValue: !field.showDefaultValue }
          : field
      )
    );
  };

  function toogleAndSetDefaultInputTypes(id: number, inputType: string) {
    toggleDefaultValue(id);
    handleOnChange(id, { inputType: inputType });
  }

  function toogleAndSetDefaultValueBool(id: number, defaultValueBool: boolean) {
    toggleDefaultValue(id);
    handleOnChange(id, { showDefaultValue: !defaultValueBool });
  }

  function setDefaultValue(id: number, value: string) {
    handleOnChange(id, { defaultValue: value });
  }
  return (
    <div>
      <div>
        <Button variant="blue" onClick={addField}>
          <Atom className="mr-2 h-4 w-4" />
          Create new field
        </Button>
      </div>
      <div className="mt-3 space-y-3">
        {fields.map((field) => (
          <div
            className={`mb-10 animate-fade-down ${
              playRemoveFieldAnim && "animate-fade-up"
            } border show border-gray-700 rounded-lg`}
            key={field.id}
          >
            <div className="flex justify-between bg-gray-600 rounded-t-lg p-2">
              <div className="flex">
                <div className="" onClick={() => toggleItem(field.id)}>
                  {field.activeItem ? (
                    <ChevronDown className="mr-2 scale-90" />
                  ) : (
                    <ChevronUp className="mr-2 scale-90" />
                  )}
                </div>
                <div className="space-x-3">
                  <span>Field {field.id}</span>
                  <small>(Default)</small>
                </div>
              </div>
              <div
                className="bg-gray-500 rounded-lg cursor-pointer p-[1px] box-border"
                onClick={() => removeField(field.id)}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <X className="scale-50" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete field</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div
              className={`mt-5 text-slate-400 ${
                field.activeItem ? "show" : "hide"
              }`}
            >
              {field.activeItem && (
                <div
                  className={`${
                    field.activeItem ? "show" : "hide"
                  } space-y-5 px-4 pb-3`}
                >
                  <div className="space-y-2">
                    <Label className="font-bold">Label</Label>
                    <Input
                      value={field.label}
                      onChange={(e) =>
                        handleOnChange(field.id, { label: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <RadioGroup defaultValue="option-one">
                      <div className=" items-center space-x-2">
                        <Label htmlFor="option-one" className="font-bold">
                          Required
                        </Label>
                        <input
                          checked={field.required}
                          type="checkbox"
                          name=""
                          id=""
                          onChange={(e) =>
                            handleOnChange(field.id, {
                              required: e.target.checked,
                            })
                          }
                        />
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <RadioGroup defaultValue="option-one">
                      <div className="items-center space-x-2">
                        <Label htmlFor="option-one" className="font-bold">
                          File Upload
                        </Label>
                        <input
                          checked={field.fileUpload}
                          type="checkbox"
                          name=""
                          id=""
                          onChange={(e) =>
                            handleOnChange(field.id, {
                              fileUpload: e.target.checked,
                            })
                          }
                        />
                      </div>
                    </RadioGroup>
                  </div>

                  {field.id !== 1 && (
                    <>
                      <div>
                        <InputLabel
                          id="demo-simple-select-label"
                          style={{ color: "white" }}
                        >
                          Type
                        </InputLabel>

                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={field.inputType} // Assuming field.inputType holds the selected value
                          label="Type"
                          onChange={(e) =>
                            handleOnChange(field.id, {
                              inputType: e.target.value,
                            })
                          }
                          style={{ color: "white" }}
                          MenuProps={{
                            PaperProps: {
                              style: {
                                backgroundColor: "black",
                                color: "white",
                              }, // Customize background color of the select window
                              MenuListProps: {
                                style: { color: "white" }, // Customize text color of options
                              },
                            },
                          }}
                        >
                          {ticketInputTypes.map((data, index) => (
                            <MenuItem key={index} value={data.type}>
                              {data.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>
                      <div>
                        {!field.showDefaultValue ? (
                          <Button
                            variant={"secondary"}
                            onClick={() =>
                              toogleAndSetDefaultValueBool(
                                field.id,
                                field.showDefaultValue
                              )
                            }
                          >
                            Add default value
                          </Button>
                        ) : (
                          <div className="space-y-2">
                            <Label className="font-bold">Default Value</Label>
                            <div className="flex space-x-2">
                              <Input
                                onChange={(e) =>
                                  setDefaultValue(field.id, e?.target.value)
                                }
                              />
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <div
                                      className="rounded-md p-[1px] box-border cursor-pointer bg-slate-600"
                                      onClick={() =>
                                        toogleAndSetDefaultValueBool(
                                          field.id,
                                          field.showDefaultValue
                                        )
                                      }
                                    >
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
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TFields;
