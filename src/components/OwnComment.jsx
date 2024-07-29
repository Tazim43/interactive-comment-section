import { useState } from "react";
import Button from "./Button";
import CommentHeader from "./CommentHeader";
import LikeButton from "./LikeButton";
import Reply from "./Reply";

function OwnComment({ userName, edit = "false" }) {
  const [editable, setEditable] = useState("false");

  const user = userName || "amyrobson";
  const msg =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat totam ipsum tempora voluptate facilis.";

  return (
    <div className=" bg-neutral-white p-5 rounded-md my-3">
      <div className=" flex">
        <LikeButton className="hidden lg:flex flex-col max-h-24" />

        <div className="m-2 w-full">
          <CommentHeader user={user} own={true} setEditable={setEditable} />

          {/* Comment text start */}
          <div
            className={`mb-2 flex flex-wrap w-full ${
              editable === "true" ? "justify-end" : ""
            }`}
          >
            <div
              className={
                editable === "true"
                  ? " p-2 focus:outline-none border-2 border-primary-blue rounded-md basis-full"
                  : ""
              }
              contentEditable={editable}
            >
              {
                msg // the comment goes here
              }
            </div>
            {editable === "true" ? (
              <Button
                name="Update"
                className=" mt-2 "
                setEditable={setEditable}
              />
            ) : (
              ""
            )}
          </div>
          {/* Comment text end  */}
        </div>
      </div>
      <div className="lg:hidden flex justify-between pt-2">
        <LikeButton className="flex lg:hidden flex-row w-25" />
        <Reply className="flex lg:hidden" />
      </div>
    </div>
  );
}

export default OwnComment;
