import { useContext } from "react";
import "./App.css";
import InputComment from "./components/InputComment";
import DataContext from "./contexts/GlobalContext";
import CommentHolder from "./components/CommentHolder";

function App() {
  const data = useContext(DataContext);

  return (
    <div className=" xl:w-6/12 lg:w-7/12 md:w-9/12 w-11/12 mx-auto mt-1 lg:mt-2">
      {data.comments.map((currentComment) => {
        return (
          <CommentHolder
            key={currentComment.id}
            cData={currentComment}
            user={data.currentUser}
          />
        );
      })}

      <InputComment
        userContent={data.currentUser}
        setComments={data.setComments}
      />
    </div>
  );
}

export default App;
