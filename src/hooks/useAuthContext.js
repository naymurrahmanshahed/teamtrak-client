import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  //context is a object because useContext return a object
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "You must call useAuthContext inside a AuthContextProvider"
    );
  }
  return context;
};
