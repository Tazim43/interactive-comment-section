import React, { useState } from "react";

function LikeButton({ likeMenu }) {
  const UpVote = () => {
    if (!likeMenu.likes.clicked) {
      likeMenu.setLikes((old) => {
        return {
          clicked: true,
          count: old.count + 1,
          upvoted: "bg-gray-300",
          downvoted: old.downvoted,
        };
      });
    }
  };

  const DownVote = () => {
    if (!likeMenu.likes.clicked) {
      likeMenu.setLikes((old) => {
        return {
          clicked: true,
          count: old.count - 1,
          upvoted: old.upvoted,
          downvoted: "bg-gray-300",
        };
      });
    }
  };

  return (
    <div
      className={
        " hidden lg:flex flex-col h-24 text-blue-600 text-lg font-medium rounded-md mr-4 bg-gray-100 items-center"
      }
    >
      <div
        className={"w-11 cursor-pointer rounded-t-md " + likeMenu.likes.upvoted}
        onClick={UpVote}
      >
        <img src="/images/icon-plus.svg" className=" m-3 mx-auto w-3" />
      </div>

      <div className=" mx-3 text-lg">{likeMenu.likes.count}</div>

      <div
        className={
          "w-11 cursor-pointer flex-grow rounded-b-md " +
          likeMenu.likes.downvoted
        }
        onClick={DownVote}
      >
        <img src="/images/icon-minus.svg" className=" m-3 mx-auto w-3" />
      </div>
    </div>
  );
}

export default LikeButton;
