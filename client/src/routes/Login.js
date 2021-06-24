import React, { useContext } from "react";
import LoginForm from "../components/LoginForm";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Container } from "react-bootstrap";

const Login = () => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn === true ? (
    <Redirect to="/dashboard" />
  ) : (
    <div>
      <Container>
        <h1>Login</h1>
        <LoginForm />
      </Container>
    </div>
  );
};

export default Login;
