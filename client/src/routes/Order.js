import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import OrderConfirmation from "../components/OrderConfirmation";

import { Select } from "formik-material-ui";
import { CheckboxWithLabel } from "formik-material-ui";

const schema = yup.object().shape({
  //printingOptions: yup.array().min(1),
});

function createData(description, print, unit) {
  return { description, print, unit };
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

const DigitalServices = [
  "Web Design",
  "Web Hosting",
  "SEO",
  "Local SEO",
  "Content Marketing",
  "Email Marketing",
  "Email Automation",
  "Featured News",
  "PPC",
  "Ad Words",
  "Video",
  "Link Building",
  "Ad Banners",
  "Branding",
];

const Order = () => {
  const [confirming, setConfirming] = useState(false);
  const [printingOptions, setPrintingOptions] = useState([]);
  const [typeOfAd, setTypeOfAd] = useState([]);
  const [digitalServices, setDigitalServices] = useState([]);
  const [advertisingDuration, setAdvertisingDuration] = useState([]);
  return confirming === true ? (
    <OrderConfirmation
      printingOptions={printingOptions}
      typeOfAd={typeOfAd}
      digitalServices={digitalServices}
      advertisingDuration={advertisingDuration}
    />
  ) : (
    <Formik
      initialValues={{
        printingOptions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        typeOfAd: [],
        digitalServices: [],
        advertisingDuration: [],
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }, errors) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
        setPrintingOptions(values.printingOptions);
        setTypeOfAd(values.typeOfAd);
        setDigitalServices(values.digitalServices);
        setAdvertisingDuration(values.advertisingDuration);
        setConfirming(true);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Container>
            <Card>
              <CardHeader title="Printing Options" />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table size="small" aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Print</TableCell>
                        <TableCell>Unit</TableCell>
                        <TableCell>Number of Units</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.description}</TableCell>
                          <TableCell>{row.print}</TableCell>
                          <TableCell>{row.unit}</TableCell>
                          <TableCell>
                            <Field
                              component={Select}
                              name={`printingOptions.${index}`}
                            >
                              <MenuItem value={0}>0</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                              <MenuItem value={6}>6</MenuItem>
                            </Field>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader title="Type of AD" />
              <CardContent>
                <Field
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name="typeOfAd"
                  value="display"
                  Label={{ label: "DSIPLAY" }}
                />
                <Field
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name="typeOfAd"
                  value="classified"
                  Label={{ label: "CLASSIFIED" }}
                />
                <Field
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name="typeOfAd"
                  value="banner"
                  Label={{ label: "BANNER" }}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader title="Digital Services" />
              <CardContent>
                {DigitalServices.map((service, index) => (
                  <Field
                    key={index}
                    component={CheckboxWithLabel}
                    type="checkbox"
                    name="digitalServices"
                    value={service}
                    Label={{ label: service }}
                  />
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader title="Advertising Duration" />
              <CardContent>
                <Field
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name="advertisingDuration"
                  value="2"
                  Label={{ label: "2x Issues" }}
                />
                <Field
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name="advertisingDuration"
                  value="4"
                  Label={{ label: "4x Issues" }}
                />
                <Field
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name="advertisingDuration"
                  value="6"
                  Label={{ label: "6x Issues" }}
                />
                <Field
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name="advertisingDuration"
                  value="8"
                  Label={{ label: "8x Issues" }}
                />
                <Field
                  component={CheckboxWithLabel}
                  type="checkbox"
                  name="advertisingDuration"
                  value="12"
                  Label={{ label: "12x Issues" }}
                />
                <Field
                  component={CheckboxWithLabel}
                  disabled
                  type="checkbox"
                  name="advertisingDuration"
                  value="custom"
                  Label={{ label: "__ Issues (TODO)" }}
                />
                <Field
                  component={CheckboxWithLabel}
                  disabled
                  type="checkbox"
                  name="advertisingDuration"
                  value="Sponsorship Event"
                  Label={{ label: "Sponsorship Event (TODO)" }}
                />
              </CardContent>
            </Card>
          </Container>
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Order;
