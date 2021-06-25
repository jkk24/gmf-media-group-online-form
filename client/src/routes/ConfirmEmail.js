import React, { useEffect, useState } from "react";
import UserAPI from "../apis/UserAPI";
import { useParams, Redirect } from "react-router-dom";

const ConfirmEmail = () => {
  const { userID } = useParams();
  const [confirmed, setConfirmed] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserAPI.post("/checkConfirmation", {
          user_id: userID,
        });
        console.log(response.data.confirmed);
        if (response.data.confirmed === "false") {
          const confirmationResponse = await UserAPI.post("/userConfirmEmail", {
            user_id: userID,
          });
          if (confirmationResponse.data.status === "success") {
            setConfirmed(true);
            alert("Email confirmed! Please wait for admin confirmation.");
          } else {
            alert("An error occurred");
          }
        } else {
          setConfirmed(true);
          alert(
            "Email already confirmed! Please log in or wait for admin confirmation."
          );
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [userID]);

  // return <Redirect to="/login" />;
  return confirmed === true ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default ConfirmEmail;
