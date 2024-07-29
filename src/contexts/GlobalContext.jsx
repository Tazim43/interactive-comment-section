import { createContext, useEffect, useState } from "react";
import jsonData from "../data.json";

const DataContext = createContext();

export const ContextWrapper = ({ children }) => {
  const [comments, setComments] = useState([]);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setComments(jsonData.comments);
    setCurrentUser(jsonData.currentUser);
  }, []);

  const props = {
    currentUser,
    comments,
    setComments,
  };

  return <DataContext.Provider value={props}>{children}</DataContext.Provider>;
};

export default DataContext;
