import React, { useEffect, useState, useContext } from "react";
import { Table, Container } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import OrderAPI from "../apis/OrderAPI";

const UserCompletedOrders = () => {
  const { email } = useContext(AuthContext);
  const [orderList, setOrderList] = useState([]);

  const formatDT = (dt) => {
    dt = new Date(dt);
    return Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(dt);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await OrderAPI.post("/getUserCompletedOrders", {
          email: email,
        });
        console.log(response.data.data);
        setOrderList(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [email]);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Order Number</th>
            <th>Date Created</th>
            <th>Date Completed</th>
            <th>Order Total ($)</th>
            <th>Form</th>
            <th>Payment Status</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{order.order_id}</td>
                <td>{formatDT(order.createdAt)}</td>
                <td>{formatDT(order.updatedAt)}</td>
                <td>{order.total}</td>
                <td>View</td>
                <td>TODO</td>
                <td style={{ color: "green" }}>{order.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserCompletedOrders;
