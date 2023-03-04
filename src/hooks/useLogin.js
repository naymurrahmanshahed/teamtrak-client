import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    const res = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await res.json();

    //!res.ok
    if (!res.ok) {
      setLoading(false);
      setError(json.error);
    }
    //res.ok

    if (res.ok) {
      //auth context
      dispatch({ type: "LOGIN", payload: json });
      //save user localstorage
      localStorage.setItem("user", JSON.stringify(json));

      setLoading(false);
    }
  };

  return { login, error, loading };
};
