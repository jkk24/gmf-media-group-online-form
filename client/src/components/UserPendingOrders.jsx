import React, { useEffect, useState, useContext } from "react";
import { Table, Container, Button } from "react-bootstrap";
import OrderAPI from "../apis/OrderAPI";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const UserPendingOrders = () => {
  let history = useHistory();
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

  const handleApprove = async (e) => {
    //console.log(e.target.id);
    try {
      const response = await OrderAPI.post("/approve", {
        order_id: e.target.id,
      });
      if (response === "success") {
        history.push("/dashboard");
      } else {
        history.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await OrderAPI.post("/getUserPendingOrders", {
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
            <th>Approval Status</th>
            <th>Order Number</th>
            <th>Date Created</th>
            <th>Order Total ($)</th>
            <th>Form</th>
            <th>Payment Status</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order, index) => {
            const status = order.user_approval;
            let element = <td></td>;
            if (status === "false") {
              element = (
                <td>
                  <Button id={order.order_id} onClick={handleApprove}>
                    Approve
                  </Button>
                </td>
              );
            } else {
              element = <td style={{ color: "green" }}>APPROVED</td>;
            }
            return (
              <tr key={index}>
                <td>{index}</td>
                {element}
                <td>{order.order_id}</td>
                <td>{formatDT(order.createdAt)}</td>
                <td>{order.total}</td>
                <td>
                  <Link to={"/order/view/" + order.order_id}>View</Link>
                </td>
                <td>TODO</td>
                <td style={{ color: "blue" }}>{order.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserPendingOrders;
