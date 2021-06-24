import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, Redirect } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";

const Home = () => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn === true ? (
    <Redirect to="/dashboard" />
  ) : (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Card className="text-center">
        <Card.Header>Welcome</Card.Header>
        <Card.Body>
          <Link to="/login">
            <Button variant="primary">Login</Button>
          </Link>
        </Card.Body>
        <Card.Body>
          <Link to="/register">
            <Button variant="primary">Register</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
