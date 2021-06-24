import React from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
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
    </Container>
  );
};

export default Dashboard;
