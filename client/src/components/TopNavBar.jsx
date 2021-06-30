import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import UserAPI from "../apis/UserAPI";

const TopNavbar = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  // Temp Logout Button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserAPI.get("/logout");
      console.log(response.data);
      setLoggedIn(false);
    } catch (err) {
      console.log(err);
    }
  };
  return loggedIn === true ? (
    <>
      <Navbar bg="light" variant="light" sticky="top" className="mx-auto">
        <Navbar.Brand href="/">Advertising Sales Agreement</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#TODO">Contact Us (TODO)</Nav.Link>
        </Nav>
        <Button onClick={handleSubmit}>Logout</Button>
      </Navbar>
    </>
  ) : (
    <Navbar bg="light" variant="light" sticky="top" className="mx-auto">
      <Navbar.Brand href="/">Advertising Sales Agreement</Navbar.Brand>
      <Nav className="mx-auto">
        <Nav.Link href="#TODO">Contact Us (TODO)</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default TopNavbar;
