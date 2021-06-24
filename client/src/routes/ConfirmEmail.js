import React, { useEffect } from "react";
// import UserAPI from "../apis/UserAPI";
import { useParams, Redirect } from "react-router-dom";

const ConfirmEmail = (props) => {
  //let { userID } = useParams();
  useEffect(() => {
    // Define a function fetchData that calls APIs which is then called in useEffect
    // const fetchData = async () => {
    //   console.log(userID);
    //   //   try {
    //   //     const response = await UserAPI.post("/find", {
    //   //       user_id: ID,
    //   //     });
    //   //     console.log(response);
    //   //   } catch (err) {
    //   //     console.log(err);
    //   //   }
    // };
    // fetchData();
    alert("Email confirmed! Please log in now.");
  }, []);

  return <Redirect to="/login" />;
};

export default ConfirmEmail;
