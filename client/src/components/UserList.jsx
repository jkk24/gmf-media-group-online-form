import React, { useState, useEffect, useContext } from "react";
import UserAPI from "../apis/UserAPI";
import { Table, Button } from "react-bootstrap";

const UserList = (props) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserAPI.get("/getAllUsers");
        // console.log(response.data.data);
        setUserList(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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

  return (
    <div style={{ margin: 0 }}>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Creation</th>
            <th>Approve</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => {
            const status = user.adminConfirmed;
            let statusElement;
            let approveElement = <td></td>;
            if (status == "true") {
              statusElement = <td style={{ color: "green" }}>APPROVED</td>;
            } else {
              statusElement = <td style={{ color: "red" }}>PENDING</td>;
              approveElement = (
                <td>
                  <Button>Approve</Button>
                </td>
              );
            }
            return (
              <>
                <td>{index}</td>
                <td>{user.email}</td>
                <td>{formatDT(user.createdAt)}</td>
                {approveElement}
                {statusElement}
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
