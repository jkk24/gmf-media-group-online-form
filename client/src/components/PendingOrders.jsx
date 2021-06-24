import React from "react";
import { Table, Container } from "react-bootstrap";

const PendingOrders = () => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Date Created</th>
            <th>Order Total</th>
            <th>Download Form</th>
            <th>Upload Signed Form</th>
            <th>Form Status</th>
            <th>Payment Status</th>
            <th>Order Status</th>
          </tr>
        </thead>
      </Table>
    </Container>
  );
};

export default PendingOrders;
