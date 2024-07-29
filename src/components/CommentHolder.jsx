import React from "react";
import Comment from "./Comment";

function CommentHolder({ cData, user }) {
  return (
    <div>
      <Comment
        commentData={cData}
        currentUser={user}
        own={user.username === cData.user.username}
      />
      {/* Input replay  */}
      <div className=" lg:ml-10 pl-5 lg:pl-10 border-l-2 border-gray-300 ">
        {cData.replies.map((rpl) => {
          return (
            <Comment
              key={rpl.id}
              commentData={rpl}
              currentUser={user}
              own={user.username === rpl.user.username}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CommentHolder;
