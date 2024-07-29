import React from "react";

function Reply({ className, setReplay }) {
  const handleClick = () => {
    setReplay((state) => {
      if (state == "true") return "false";
      else return "true";
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`${className} items-center px-4 py-2 rounded-md hover:cursor-pointer hover:opacity-60 transition-opacity duration-300`}
    >
      <img src="/images/icon-reply.svg" className=" bg-contain size-4" alt="" />
      <p className="pb-1 pl-2 font-semibold text-lg text-blue-600">Reply</p>
    </div>
  );
}

export default Reply;
