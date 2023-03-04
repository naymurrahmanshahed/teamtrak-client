import { useAuthContext } from "./useAuthContext";
import { useProjectsContext } from "./useProjectsContext";
export const useLogout = () => {
  const { dispatch: logoutDispatch } = useAuthContext();
  const { dispatch: projectDispatch } = useProjectsContext();
  const logout = () => {
    // clear ls
    localStorage.removeItem("user");

    // dispatch logout
    logoutDispatch({ type: "LOGOUT" });

    //dispatch project
    projectDispatch({ type: "SET_PROJECTS", payload: null });
  };

  return { logout };
};
