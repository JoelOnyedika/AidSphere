import { Dot } from "lucide-react";
import React from "react";

const Chip = ({ icon, text, color }: any) => {
  const Icon = icon;
  return (
    <div
      className={`inline-flex ${color} cursor-pointer items-center justify-center box-border rounded-md pr-2 py-[1px] text-sm font-semibold text-slate-200`}
    >
      {icon ? <Icon className="scale-150 p-0" /> : <Dot className="scale-150 p-0" />}
      <small className="font-semibold text-md whitespace-nowrap">{text}</small>
    </div>
  );
};

export default Chip;
