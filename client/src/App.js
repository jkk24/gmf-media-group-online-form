import React, { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import UserAPI from "./apis/UserAPI";
import { AuthContext } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import ConfirmEmail from "./routes/ConfirmEmail";
import Order from "./routes/Order";
import TopNavBar from "./components/TopNavBar";

function App() {
  const { loggedIn, setLoggedIn, setRole, setId } = useContext(AuthContext);

  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    const fetchData = async () => {
      try {
        const response = await UserAPI.get("/loggedInUser");
        // console.log(response.data);
        if (Object.keys(response.data).length > 0) {
          setLoggedIn(true);
          setId(response.data.user_id);
          setRole("Placeholder");
        } else {
          setLoggedIn(false);
          setRole("None");
          setId(null);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [loggedIn, setLoggedIn, setRole, setId]);

  return (
    <div>
      <TopNavBar />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/confirmEmail/:userID" component={ConfirmEmail} />
        <Route path="/order" component={Order} />
      </Switch>
    </div>
  );
}

export default App;
