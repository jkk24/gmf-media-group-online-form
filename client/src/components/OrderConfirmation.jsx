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

function createData(description, print, unit, unitsOrdered, total) {
  return { description, print, unit, unitsOrdered, total };
}

const rows = [
  createData("2-Page Spread", '16.50" x 10.75"', "$3,290.44"),
  createData("Back Page", '8.25" x 10.75"', "$2,141.30"),
  createData("Inside Front Cover 2", '8.25" x 10.75"', "$1,922.80"),
  createData("Inside Back Cover", '8.25" x 10.75"', "$1,857.25"),
  createData("Inside Front Cover 3-5", '8.25" x 10.75"', "$1,857.25"),
  createData("Full Page", '8.25" x 10.75"', "$1,775.53"),
  createData("Three Quarters Page", '5.59" x 9.76"', "$1,075.92"),
  createData("Half Page", '3.5" x 9.75"', "$1,142.81"),
  createData("Quarter Page", '3.5" x 9.75"', "$662.40"),
  createData("One Third", '2.25" x 9.75"', "$1,007.40"),
  createData("1/6 Vertical", '2.25" x 4.75"', "$322.00"),
  createData("One Eigth Page", '2.25" x 3.25"', "$259.33"),
];
const unit = [
  3290.44, 2141.3, 1922.8, 1857.25, 1857.25, 1775.53, 1075.92, 1142.81, 662.4,
  1007.4, 322.0, 259.33,
];

const OrderConfirmation = (props) => {
  const [printingOptionsChosen, setPrintingOptionsChosen] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      var tempPrintingOptionsChosen = [];
      for (var i = 0; i < props.printingOptions.length; i++) {
        if (props.printingOptions[i] > 0) {
          tempPrintingOptionsChosen.push(
            createData(
              rows[i].description,
              rows[i].print,
              rows[i].unit,
              props.printingOptions[i],
              props.printingOptions[i] * unit[i]
            )
          );
        }
      }
      console.log(tempPrintingOptionsChosen);
      setPrintingOptionsChosen(tempPrintingOptionsChosen);
    };
    fetchData();
  }, [props.printingOptions]);
  return (
    <Container>
      <Card>
        <CardContent>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Printing Options</Typography>
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
                    {printingOptionsChosen.map((option, index) => (
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
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Container>
  );
};

export default OrderConfirmation;
