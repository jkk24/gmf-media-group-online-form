import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedIn === null) {
          return "Loading...";
        } else {
          if (loggedIn) {
            return <Component />;
          } else {
            return (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            );
          }
        }
      }}
    />
  );
};

export default ProtectedRoute;
