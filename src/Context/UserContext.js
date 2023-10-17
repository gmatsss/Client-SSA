// UserContext.js
import React, { createContext, useState, useCallback } from "react";
import { fetchData } from "../api/FetchData";
import useOnce from "../api/UseOnce";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add this line

  const loadUser = useCallback(async () => {
    try {
      const response = await fetchData("User/getuser", "GET");
      setIsLoggedIn(response.isLoggedIn);
      setUser(response.user);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading to false once data is fetched
    }
  }, []);

  useOnce(loadUser);

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, isLoading, reloadUser: loadUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
