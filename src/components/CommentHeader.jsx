import React from "react";
import Reply from "./Reply";
import Button from "./Button";
import getTimeString from "../utils/getTimeString";

function CommentHeader({ user, createdAt, own = false, setReply }) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center h-10 mb-2">
        <img
          src={user.image.png}
          className="mr-2 lg:mr-3 size-8 lg:size-10"
          alt="image"
        />
        <p className="text-base lg:text-lg font-medium">{user.username}</p>
        {own == true ? (
          <span className=" mx-2 bg-primary-blue px-2 rounded-sm text-neutral-white pb-1 text-sm font-medium">
            you
          </span>
        ) : (
          ""
        )}
        <p className="text-base font-normal ml-2 text-gray-500">
          {getTimeString(createdAt)}
        </p>
      </div>
      {own ? (
        <>
          <div className="flex pb-2">
            <Button
              name="Delete"
              icon="delete"
              className=" hidden lg:flex text-primary-red"
            />
            <Button
              name="Edit"
              icon="edit"
              className=" hidden lg:flex text-primary-blue"
            />
          </div>
        </>
      ) : (
        <Reply className=" hidden lg:flex" setReplay={setReply} />
      )}
    </div>
  );
}

export default CommentHeader;
