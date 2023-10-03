// UserContext.js
import React, { createContext, useState, useCallback } from "react";
import { fetchData } from "../api/FetchData";
import useOnce from "../api/UseOnce";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loadUser = useCallback(async () => {
    try {
      const response = await fetchData("User/getuser", "GET");
      setIsLoggedIn(response.isLoggedIn);
      setUser(response.user);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useOnce(loadUser);

  console.log(user);

  return (
    <UserContext.Provider value={{ user, isLoggedIn, reloadUser: loadUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
