import React, { useContext } from "react";
import { Tabs, Tab, Container, Jumbotron, Form, Button } from "react-bootstrap";
import PendingOrders from "../components/PendingOrders";
import CompletedOrders from "../components/CompletedOrders";
import AdminCompletedOrders from "../components/AdminCompletedOrders";
import AdminPendingOrders from "../components/AdminPendingOrders";
import UserList from "../components/UserList";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { role } = useContext(AuthContext);
  return role === "Placeholder" ? (
    <Container>
      <h1>Admin Dashboard</h1>
      <div>
        <Tabs defaultActiveKey="adminPendingOrders" id="uncontrolled-tab">
          <Tab eventKey="adminPendingOrders" title="All Pending Orders">
            <AdminPendingOrders />
          </Tab>
          <Tab eventKey="adminCompletedOrders" title="All Completed Orders">
            <AdminCompletedOrders />
          </Tab>
          <Tab eventKey="userList" title="All Users">
            <UserList />
          </Tab>
        </Tabs>
      </div>
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
      <Jumbotron fluid className="text-center">
        <Container>
          <h1>Start an order here!</h1>
          <br />
          <Form className="justify-content-center">
            <Button variant="outline-primary">Order</Button>
          </Form>
        </Container>
      </Jumbotron>
    </Container>
  ) : (
    <Container>
      <h1>Dashboard</h1>
      <div>
        <Tabs defaultActiveKey="pendingOrders" id="uncontrolled-tab">
          <Tab eventKey="pendingOrders" title="Pending Orders">
            <PendingOrders />
          </Tab>
          <Tab eventKey="completedOrders" title="Completed Orders">
            <CompletedOrders />
          </Tab>
        </Tabs>
      </div>
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
      <Jumbotron fluid className="text-center">
        <Container>
          <h1>Place an order here!</h1>
          <br />
          <Form className="justify-content-center">
            <Button variant="outline-primary">Order</Button>
          </Form>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default Dashboard;
