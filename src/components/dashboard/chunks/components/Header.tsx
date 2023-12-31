import { FireExtinguisher, MessagesSquare } from "lucide-react";
import React from "react";

const Header = ({ headerData }: any) => {
  return (
    <div className="text-gray-400 space-y-2">
      <div className="mt-3 flex">
        {headerData?.icon && <headerData.icon className="mr-3 scale-75" />}

        <span>{headerData?.title}</span>
      </div>
      <div className="flex">
        <div className="p-2 flex items-center justify-center rounded-lg bg-gray-600 mr-3 box-border">
          {headerData?.icon && <headerData.icon className="" />}
        </div>

        <h1 className="text-4xl font-bold text-gray-300">{headerData?.title}</h1>
      </div>
      <div className="">
        <span>{headerData?.talks}</span>
      </div>
      <div className="pt-5">
        <hr className="border-t border-gray-600" />
      </div>
    </div>
  );
};

export default Header;
