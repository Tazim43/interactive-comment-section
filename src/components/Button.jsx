import React from "react";

function Button({ name, icon = "", className = "", setEditable }) {
  const src = `/images/icon-${icon}.svg`;

  const handleClick = (e) => {
    if (name === "Edit") {
      return setEditable((edit) => {
        if (edit === "false") return "true";
        else return "false";
      });
    }
    if (name === "Update") {
      return setEditable("false");
    }
  };

  return (
    <div
      className={`${className} text-base px-4 rounded-md cursor-pointer items-center gap-2 font-semibold w-fit`}
      onClick={handleClick}
    >
      {icon != "" ? <img className=" size-3" src={src} /> : ""}
      {name}
    </div>
  );
}

export default Button;
