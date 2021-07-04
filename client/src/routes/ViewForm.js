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
import RightLogo from "../components/RightLogo.png";
import MiddleLogo from "../components/MiddleLogo.png";
import LeftLogo from "../components/LeftLogo.png";

const ViewForm = () => {
  const { order_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [printingOptions, setPrintingOptions] = useState([]);
  const [digitalServices, setDigitalServices] = useState([]);
  const [advertisingDuration, setAdvertisingDuration] = useState([]);
  const [onlineAdvertising, setOnlineAdvertising] = useState([]);
  const [onlineType, setOnlineType] = useState([]);
  const [comments, setComments] = useState("");
  const [webDesignComments, setWebDesignComments] = useState("");
  const [webHostingComments, setWebHostingComments] = useState("");
  const [webDesignTotal, setWebDesignTotal] = useState(null);
  const [webHostingTotal, setWebHostingTotal] = useState(null);

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
          setComments(response.data.data.comments);
          setWebDesignComments(response.data.data.web_design_comments);
          setWebHostingComments(response.data.data.web_hosting_comments);
          setWebDesignTotal(response.data.data.web_design_total);
          setWebHostingTotal(response.data.data.web_hosting_total);
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
      <img src={LeftLogo} alt="logo" />
      <img src={MiddleLogo} alt="logo" />
      <img src={RightLogo} alt="logo" />
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
              <Container>
                {digitalServices.map((service, index) => (
                  <ol key={index}>
                    <li>{service}</li>
                  </ol>
                ))}
                <Typography variant="h6" gutterBottom>
                  Web Design Comments:
                </Typography>
                <Typography gutterBottom>{webDesignComments}</Typography>
                <Typography variant="h6" gutterBottom>
                  Web Design Total ($):
                </Typography>
                <Typography gutterBottom>{webDesignTotal}</Typography>
                <Typography variant="h6" gutterBottom>
                  Web Hosting Comments:
                </Typography>
                <Typography gutterBottom>{webHostingComments}</Typography>
                <Typography variant="h6" gutterBottom>
                  Web Hosting Total ($):
                </Typography>
                <Typography gutterBottom>{webHostingTotal}</Typography>
              </Container>
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Additional Comments</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Container>
                <Typography gutterBottom>{comments}</Typography>
              </Container>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Container>
  ) : (
    <h1>Loading...</h1>
  );
};

export default ViewForm;
