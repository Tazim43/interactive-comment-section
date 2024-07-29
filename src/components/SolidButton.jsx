import React from "react";

function SolidButton({ name, onClick }) {
  return (
    <div
      className=" px-4 py-2 rounded-md cursor-pointer bg-primary-blue text-neutral-verylightgray font-semibold text-base  uppercase w-fit"
      onClick={onClick}
    >
      {name}
    </div>
  );
}

export default SolidButton;
