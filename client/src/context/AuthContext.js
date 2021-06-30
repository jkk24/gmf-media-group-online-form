import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [role, setRole] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const [id, setId] = useState(null);
  const [email, setEmail] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        role,
        setRole,
        loggedIn,
        setLoggedIn,
        id,
        setId,
        email,
        setEmail,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
