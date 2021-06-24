import React from "react";
import {
  Tabs,
  Tab,
  Container,
  Jumbotron,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import PendingOrders from "../components/PendingOrders";
import CompletedOrders from "../components/CompletedOrders";

const Dashboard = () => {
  return (
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
          <Form class="justify-content-center">
            <Button variant="outline-primary">Order</Button>
          </Form>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default Dashboard;
