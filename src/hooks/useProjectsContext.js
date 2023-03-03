import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export const useProjectsContext = () => {
  //context is a object because useContext return a object
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error(
      "You must call useProjectContext inside a ProjectContextProvider"
    );
  }
  return context;
};
