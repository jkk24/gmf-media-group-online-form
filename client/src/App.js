import React, { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./routes/Register";
import Login from "./routes/Login";
import UserAPI from "./apis/UserAPI";
import { AuthContext } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { setLoggedIn, setRole, setId } = useContext(AuthContext);

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
          console.log(response.data);
        } else {
          console.log("You are not logged in!");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [setLoggedIn, setRole, setId]);

  // Temp Logout Button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserAPI.get("/logout");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={handleSubmit}>Logout</button>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
