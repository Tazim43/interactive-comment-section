import { useContext, useEffect, useState } from "react";
import CommentHeader from "./CommentHeader";
import InputComment from "./InputComment";
import LikeButton from "./LikeButton";
import Reply from "./Reply";
import MobileLikeBtn from "./MobileLikeBtn";
import DataContext from "../contexts/GlobalContext";

function Comment({ commentData, currentUser, own }) {
  const data = useContext(DataContext);

  const [likes, setLikes] = useState({
    count: 0,
    clicked: false,
    upvoted: "",
    downvoted: "",
  });

  const [isReply, setIsReply] = useState("false");

  useEffect(() => {
    if (commentData.id == 3) console.log(commentData);
    data.comments.map((e) => {
      if (e.id == commentData.id) {
        setLikes((old) => {
          return {
            count: e.score,
            clicked: old.clicked,
            upvoted: old.upvoted,
            downvoted: old.downvoted,
          };
        });

        e.replies.map((val) => {
          console.log(commentData.id, val.id);
          if (val.id == commentData.id) {
            setLikes((old) => {
              return {
                count: val.score,
                clicked: old.clicked,
                upvoted: old.upvoted,
                downvoted: old.downvoted,
              };
            });
          }
        });
      }
    });
  }, [data]);

  return (
    <>
      <div className=" bg-neutral-white p-5 rounded-md my-3">
        <div className=" flex">
          <LikeButton likeMenu={{ likes, setLikes }} />

          <div className=" w-full">
            <CommentHeader
              user={commentData.user}
              createdAt={commentData.createdAt}
              own={own}
              setReply={setIsReply}
            />
            <div>{commentData.content}</div>
          </div>
        </div>

        {/* Mobile Like and Replay  */}

        <div className="lg:hidden flex justify-between pt-2">
          <MobileLikeBtn likeMenu={{ likes, setLikes }} />
          <Reply className="flex lg:hidden" setReplay={setIsReply} />
        </div>
      </div>
      {isReply === "true" ? <InputComment userContent={currentUser} /> : ""}
    </>
  );
}

export default Comment;
