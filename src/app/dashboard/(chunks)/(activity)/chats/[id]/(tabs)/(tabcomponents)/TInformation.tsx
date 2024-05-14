import { Baby, Clock } from "lucide-react";
import React from "react";

const TInformation = () => {
  return (
    <div className="text-slate-400 space-y-5 mt-7">
      <div>
        <span className="font-bold">Chat Data</span>
      </div>
      <div className="text-slate-400 space-y-4">
        <div className="flex justify-between w-full">
          <div className="flex">
            <Baby className="mr-2 scale-75" />
            <small className="mt-[3px]">Created by</small>
          </div>
          <div>
            <small className="mt-[3px]">Anonymous user</small>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex">
            <Clock className="mr-2 scale-75" />
            <small className="mt-[3px]">Starred</small>
          </div>
          <div>
            <small className="mt-[3px]">21-04-2024 09:52 PM</small>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex">
            <Clock className="mr-2 scale-75" />
            <small className="mt-[3px]">Created at</small>
          </div>
          <div>
            <small className="mt-[3px]">21-04-2024 09:52 PM</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TInformation;
