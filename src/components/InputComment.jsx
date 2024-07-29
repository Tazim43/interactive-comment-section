import React, { useContext, useEffect, useState } from "react";
import SolidButton from "./SolidButton";
import DataContext from "../contexts/GlobalContext";

function InputComment({ userContent, setComments }) {
  const [cValue, setCValue] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { currentUser } = useContext(DataContext);

  useEffect(() => {
    if (currentUser && currentUser.image) {
      setImageUrl(currentUser.image.png);
    }
  }, [currentUser]);

  const handleClick = (e) => {
    const newComment = {
      id: 1,
      content: cValue,
      createdAt: Date.now(),
      score: 0,
      user: {
        image: {
          png: `/images/avatars/image-${userContent.username}.png`,
        },
        username: userContent.username,
      },
      replies: [],
    };
    setCValue(() => {
      return "";
    });

    setComments((old) => {
      return [...old, newComment];
    });
  };

  return (
    <div className="flex-wrap justify-between bg-neutral-white p-5 my-3 h-full rounded-md flex gap-3">
      <div className=" order-2 lg:order-1">
        <img className=" size-10" src={imageUrl} alt="avatar" />
      </div>
      <div className=" flex-1 basis-full lg:basis-auto order-1 lg:order-2">
        <textarea
          className=" focus:border-primary-blue border-neutral-lightgray border-2 resize-none w-full h-20 rounded-md focus:outline-none px-5 py-2 overflow-hidden "
          name="comment"
          placeholder="Add a comment..."
          value={cValue}
          onChange={(e) => {
            setCValue(e.target.value);
          }}
        ></textarea>
      </div>
      <div className=" order-3">
        <SolidButton onClick={handleClick} name="Send" />
      </div>
    </div>
  );
}

export default InputComment;
