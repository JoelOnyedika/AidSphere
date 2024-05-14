import React from "react";

const Chip = ({ icon, text, color }: any) => {
  const Icon = icon;
  return (
    <div
      className={`inline-flex ${color} cursor-pointer items-center justify-center box-border rounded-md pr-2 py-[1px] text-sm font-semibold text-slate-200`}
    >
      <Icon className="scale-150 p-0" />
      <small className="font-semibold whitespace-nowrap">{text}</small>
    </div>
  );
};

export default Chip;
