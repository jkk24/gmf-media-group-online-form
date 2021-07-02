import React, { useEffect, useState, useContext } from "react";
import { Table, Container, Button } from "react-bootstrap";
import OrderAPI from "../apis/OrderAPI";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const UserPendingOrders = () => {
  let history = useHistory();
  const { email } = useContext(AuthContext);
  const [orderList, setOrderList] = useState([]);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    checkedB: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
                  <Button id={order.order_id} onClick={handleClickOpen}>
                    Approve
                  </Button>
                </td>
              );
            } else {
              element = <td style={{ color: "green" }}>APPROVED</td>;
            }
            return (
              <>
                <tr key={index}>
                  <td>{index}</td>
                  {element}
                  <td>{order.order_number}</td>
                  <td>{formatDT(order.createdAt)}</td>
                  <td>{order.total}</td>
                  <td>
                    <Link to={"/order/view/" + order.order_id}>View</Link>
                  </td>
                  <td>TODO</td>
                  <td style={{ color: "blue" }}>{order.status}</td>
                </tr>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    Terms and Conditions
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Before approving the order, please read our terms and
                      conditions and check the box when you are ready.
                    </DialogContentText>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedB}
                          onChange={handleChange}
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label="I have read and agree with the Terms and Conditions."
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button
                      id={order.order_id}
                      disabled={!state.checkedB}
                      onClick={handleApprove}
                      color="primary"
                    >
                      Approve
                    </Button>
                  </DialogActions>
                </Dialog>
              </>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserPendingOrders;
