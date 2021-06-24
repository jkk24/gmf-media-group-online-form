import React from "react";
import { Table, Container } from "react-bootstrap";

const PendingOrders = () => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Approve</th>
            <th>Status</th>
            <th>Email</th>
            <th>Name</th>
            <th>Overall Rating</th>
            <th>Bedside Manner</th>
            <th>Wait Time</th>
            <th>Availability</th>
            <th>Review</th>
            <th>Publication Date</th>
          </tr>
        </thead>
      </Table>
    </Container>
  );
};

export default PendingOrders;
