import React from "react";
import { Table, Container } from "react-bootstrap";

const CompletedOrders = () => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Date Created</th>
            <th>Order Total</th>
            <th>Download Form</th>
            <th>Order Status</th>
            <th>Date Completed</th>
          </tr>
        </thead>
      </Table>
    </Container>
  );
};

export default CompletedOrders;
