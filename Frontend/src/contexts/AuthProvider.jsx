// AuthContext.js
import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext(false);

export const AuthProvider = (props) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState(null);

  // const login = (userData) => {
  //   setIsLoggedIn(true);
  //   setUser(userData);
  // };

  // const logout = () => {
  //   setIsLoggedIn(false);
  //   setUser(null);
  // };

  const [universalLoggedin, setUniversalLoggedin] = useState(false);

  return (
    <AuthContext.Provider value={{ universalLoggedin, setUniversalLoggedin,name:"Heel" }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => useContext(AuthContext);
