import React, { useEffect, useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import OrderAPI from "../apis/OrderAPI";
import { useParams } from "react-router-dom";

const ViewForm = () => {
  const { order_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [printingOptions, setPrintingOptions] = useState([]);
  const [digitalServices, setDigitalServices] = useState([]);
  const [advertisingDuration, setAdvertisingDuration] = useState([]);
  const [onlineAdvertising, setOnlineAdvertising] = useState([]);
  const [onlineType, setOnlineType] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await OrderAPI.post("/getOrderDetails", {
          order_id: order_id,
        });
        setLoading(true);
        //console.log(response.data.data);
        if (response.data.status === "success") {
          setLoading(false);
          setEmail(response.data.data.email);
          setPrintingOptions(response.data.data.printing_options);
          setDigitalServices(response.data.data.digital_services);
          setAdvertisingDuration(response.data.data.advertising_duration);
          setOnlineType(response.data.data.online_type);
          setOnlineAdvertising(response.data.data.online_advertising);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [order_id]);
  //return <h1>TESTING</h1>;
  return loading === false ? (
    <Container>
      <h1>(TODO: Convert Details Into Form)</h1>
      <Card>
        <CardContent>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Client</Typography>
            </AccordionSummary>
            <AccordionDetails>{email}</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Print Advertising</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table size="small" aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>Print</TableCell>
                      <TableCell>Unit</TableCell>
                      <TableCell>Number of Units Ordered</TableCell>
                      <TableCell>Total ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {printingOptions.map((option, index) => (
                      <TableRow key={index}>
                        <TableCell>{option.description}</TableCell>
                        <TableCell>{option.print}</TableCell>
                        <TableCell>{option.unit}</TableCell>
                        <TableCell>{option.unitsOrdered}</TableCell>
                        <TableCell>{option.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Online Advertising</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <h1>{onlineType[0]}</h1>
              <TableContainer component={Paper}>
                <Table size="small" aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>Size</TableCell>
                      <TableCell>Unit</TableCell>
                      <TableCell>Number of Months Ordered</TableCell>
                      <TableCell>Total ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {onlineAdvertising.map((option, index) => (
                      <TableRow key={index}>
                        <TableCell>{option.description}</TableCell>
                        <TableCell>{option.size}</TableCell>
                        <TableCell>{option.unit}</TableCell>
                        <TableCell>{option.monthsOrdered}</TableCell>
                        <TableCell>{option.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Digital Services</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {digitalServices.map((service, index) => (
                <ol key={index}>
                  <li>{service}</li>
                </ol>
              ))}
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Advertising Duration</Typography>
            </AccordionSummary>
            <AccordionDetails>{advertisingDuration[0]} Issues</AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Container>
  ) : (
    <h1>Loading...</h1>
  );
};

export default ViewForm;
