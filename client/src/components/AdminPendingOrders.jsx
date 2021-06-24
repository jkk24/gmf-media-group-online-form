import React from "react";
import { Table, Container } from "react-bootstrap";

const AdminPendingOrders = () => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Order Number</th>
            <th>Date Created</th>
            <th>Order Total</th>
            <th>Download Form</th>
            <th>Approve Signed Form</th>
            <th>Form Status</th>
            <th>Payment Status (Send Payment Link)</th>
            <th>Complete Order (Button)</th>
            <th>Order Status</th>
          </tr>
        </thead>
      </Table>
    </Container>
  );
};

export default AdminPendingOrders;
