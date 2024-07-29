import React, { useState } from "react";

function MobileLikeBtn({ likeMenu }) {
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
    <div className=" flex text-blue-600 text-lg font-medium rounded-md mr-4 bg-gray-100 items-center">
      <div
        className={
          "w-11 cursor-pointer h-full pt-1 rounded-s-md  " +
          likeMenu.likes.upvoted
        }
        onClick={UpVote}
      >
        <img src="/images/icon-plus.svg" className=" m-3 mx-auto w-4" />
      </div>

      <div className=" mx-3 text-lg">{likeMenu.likes.count}</div>

      <div
        className={
          "w-11 cursor-pointer rounded-e-md h-full pt-2 " +
          likeMenu.likes.downvoted
        }
        onClick={DownVote}
      >
        <img src="/images/icon-minus.svg" className=" m-3 mx-auto w-4" />
      </div>
    </div>
  );
}

export default MobileLikeBtn;
