import React, { useContext } from "react";
import RegistrationForm from "../components/RegistrationForm";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Container } from "react-bootstrap";

const Registration = () => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn === true ? (
    <Redirect to="/dashboard" />
  ) : (
    <div>
      <Container>
        <h1>Register</h1>
        <RegistrationForm />
      </Container>
    </div>
  );
};

export default Registration;
