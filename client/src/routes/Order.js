import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import {
  Form,
  Table,
  Container,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import UserAPI from "../apis/UserAPI";

const schema = yup.object().shape({
  printingOption1: yup.number().required(),
  printingOption2: yup.number().required(),
  printingOption3: yup.number().required(),
  printingOption4: yup.number().required(),
  printingOption5: yup.number().required(),
  printingOption6: yup.number().required(),
  printingOption7: yup.number().required(),
  printingOption8: yup.number().required(),
  printingOption9: yup.number().required(),
  printingOption10: yup.number().required(),
  printingOption11: yup.number().required(),
  printingOption12: yup.number().required(),
  printingOptionTotal: yup.number().required(),
});

UserAPI.defaults.withCredentials = true;

//Lets user input a test object into backend db
const Order = () => {
  return (
    <Formik
      initialValues={{
        printingOption1: "",
        printingOption2: "",
        printingOption3: "",
        printingOption4: "",
        printingOption5: "",
        printingOption6: "",
        printingOption7: "",
        printingOption8: "",
        printingOption9: "",
        printingOption10: "",
        printingOption11: "",
        printingOption12: "",
      }}
      validationSchema={schema}
      onSubmit={async (data, { setErrors }) => {
        console.log(data);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        isInvalid,
      }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <Container>
              <Row className="justify-content-md-center">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Print</th>
                      <th>Unit</th>
                      <th>Number of Units</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2-Page Spread</td>
                      <td>16.50" x 10.75"</td>
                      <td>$3,290.44</td>
                      <td>
                        <Form.Group controlId="printingOption1">
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            values={values.printingOption1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              !!(
                                errors.printingOption1 &&
                                touched.printingOption1
                              )
                            }
                          >
                            <option value="">Choose one...</option>
                            <option value={0}>0</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>Back Page</td>
                      <td>8.25" x 10.75"</td>
                      <td>$2,141.30</td>
                      <td>
                        <Form.Group controlId="printingOption2">
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            values={values.printingOption2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              !!(
                                errors.printingOption2 &&
                                touched.printingOption2
                              )
                            }
                          >
                            <option value="">Choose one...</option>
                            <option value={0}>0</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>Inside Front Cover 2</td>
                      <td>8.25" x 10.75"</td>
                      <td>$1,922.80</td>
                      <td>
                        <Form.Group controlId="printingOption3">
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            values={values.printingOption3}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              !!(
                                errors.printingOption3 &&
                                touched.printingOption3
                              )
                            }
                          >
                            <option value="">Choose one...</option>
                            <option value={0}>0</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>Inside Back Cover</td>
                      <td>8.25" x 10.75"</td>
                      <td>$1,857.25</td>
                      <td>
                        <Form.Group controlId="printingOption4">
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            values={values.printingOption4}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              !!(
                                errors.printingOption4 &&
                                touched.printingOption4
                              )
                            }
                          >
                            <option value="">Choose one...</option>
                            <option value={0}>0</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>Inside Front Cover 3-5</td>
                      <td>8.25" x 10.75"</td>
                      <td>1,857.25</td>
                      <td>
                        <Form.Group controlId="printingOption5">
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            values={values.printingOption5}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              !!(
                                errors.printingOption5 &&
                                touched.printingOption5
                              )
                            }
                          >
                            <option value="">Choose one...</option>
                            <option value={0}>0</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>Full Page</td>
                      <td>8.25" x 10.75"</td>
                      <td>$1,775.53</td>
                      <td>
                        <Form.Group controlId="printingOption6">
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            values={values.printingOption6}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              !!(
                                errors.printingOption6 &&
                                touched.printingOption6
                              )
                            }
                          >
                            <option value="">Choose one...</option>
                            <option value={0}>0</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>Three Quarters Page</td>
                      <td>5.59" x 9.76"</td>
                      <td>$1,075.92</td>
                      <td>
                        <Form.Group controlId="printingOption7">
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            values={values.printingOption7}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              !!(
                                errors.printingOption7 &&
                                touched.printingOption7
                              )
                            }
                          >
                            <option value="">Choose one...</option>
                            <option value={0}>0</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>Half Page</td>
                      <td>3.5" x 9.75"</td>
                      <td>$1,142.81</td>
                      <td>
                        <Form.Group controlId="printingOption8">
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            values={values.printingOption8}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              !!(
                                errors.printingOption8 &&
                                touched.printingOption8
                              )
                            }
                          >
                            <option value="">Choose one...</option>
                            <option value={0}>0</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>Quarter Page</td>
                      <td>3.5" x 4.5"</td>
                      <td>$662.40</td>
                      <td>
                        <Form.Group controlId="printingOption9">
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            values={values.printingOption9}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              !!(
                                errors.printingOption9 &&
                                touched.printingOption9
                              )
                            }
                          >
                            <option value="">Choose one...</option>
                            <option value={0}>0</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>One Third Page</td>
                      <td>2.25" x 9.75"</td>
                      <td>$1,007.40</td>
                      <td>
                        <Form.Group controlId="printingOption10">
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            values={values.printingOption10}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              !!(
                                errors.printingOption10 &&
                                touched.printingOption10
                              )
                            }
                          >
                            <option value="">Choose one...</option>
                            <option value={0}>0</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>1/6 Vertical</td>
                      <td>2.25" x 4.75"</td>
                      <td>$322.00</td>
                      <td>
                        <Form.Group controlId="printingOption11">
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            values={values.printingOption11}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              !!(
                                errors.printingOption11 &&
                                touched.printingOption11
                              )
                            }
                          >
                            <option value="">Choose one...</option>
                            <option value={0}>0</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>One Eigth Page</td>
                      <td>2.25" x 3.25"</td>
                      <td>$259.33</td>
                      <td>
                        <Form.Group controlId="printingOption12">
                          <Form.Control
                            as="select"
                            size="sm"
                            custom
                            values={values.printingOption12}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              !!(
                                errors.printingOption12 &&
                                touched.printingOption12
                              )
                            }
                          >
                            <option value="">Choose one...</option>
                            <option value={0}>0</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={6}>6</option>
                          </Form.Control>
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row>
                <Col>
                  <Card className="text-center">
                    <Card.Header>Type of Ad</Card.Header>
                    <Form.Group>
                      <Form.Check
                        name="display"
                        label="DISPLAY"
                        onChange={handleChange}
                        isInvalid={!!errors.display}
                        feedback={errors.display}
                        id="display"
                        feedbackTooltip
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Check
                        required
                        name="classified"
                        label="CLASSIFIED"
                        onChange={handleChange}
                        isInvalid={!!errors.classified}
                        feedback={errors.classified}
                        id="classified"
                        feedbackTooltip
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Check
                        required
                        name="banner"
                        label="BANNER"
                        onChange={handleChange}
                        isInvalid={!!errors.banner}
                        feedback={errors.banner}
                        id="banner"
                        feedbackTooltip
                      />
                    </Form.Group>
                  </Card>
                </Col>
                <Col>
                  <Card className="text-center">
                    <Card.Header>DIGITAL SERVICES</Card.Header>
                    <Container>
                      <Col>
                        <Form.Group>
                          <Form.Check
                            required
                            name="webDesign"
                            label="Web Design"
                            onChange={handleChange}
                            isInvalid={!!errors.webDesign}
                            feedback={errors.webDesign}
                            id="webDesign"
                            feedbackTooltip
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            required
                            name="webHosting"
                            label="Web Hosting"
                            onChange={handleChange}
                            isInvalid={!!errors.webHosting}
                            feedback={errors.webHosting}
                            id="webHosting"
                            feedbackTooltip
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            required
                            name="SEO"
                            label="SEO"
                            onChange={handleChange}
                            isInvalid={!!errors.SEO}
                            feedback={errors.SEO}
                            id="SEO"
                            feedbackTooltip
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            required
                            name="localSEO"
                            label="Local SEO"
                            onChange={handleChange}
                            isInvalid={!!errors.localSEO}
                            feedback={errors.localSEO}
                            id="localSEO"
                            feedbackTooltip
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            required
                            name="contentMarketing"
                            label="Content Marketing"
                            onChange={handleChange}
                            isInvalid={!!errors.contentMarketing}
                            feedback={errors.contentMarketing}
                            id="contentMarketing"
                            feedbackTooltip
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            required
                            name="emailMarketing"
                            label="Email Marketing"
                            onChange={handleChange}
                            isInvalid={!!errors.emailMarketing}
                            feedback={errors.emailMarketing}
                            id="emailMarketing"
                            feedbackTooltip
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            required
                            name="emailAutomation"
                            label="Email Automation"
                            onChange={handleChange}
                            isInvalid={!!errors.emailAutomation}
                            feedback={errors.emailAutomation}
                            id="emailAutomation"
                            feedbackTooltip
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Check
                            required
                            name="featuredNews"
                            label="Featured News"
                            onChange={handleChange}
                            isInvalid={!!errors.featuredNews}
                            feedback={errors.featuredNews}
                            id="featuredNews"
                            feedbackTooltip
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            required
                            name="PPC"
                            label="PPC"
                            onChange={handleChange}
                            isInvalid={!!errors.PPC}
                            feedback={errors.PPC}
                            id="PPC"
                            feedbackTooltip
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            required
                            name="adWords"
                            label="Ad Words"
                            onChange={handleChange}
                            isInvalid={!!errors.adWords}
                            feedback={errors.adWords}
                            id="adWords"
                            feedbackTooltip
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            required
                            name="video"
                            label="Video"
                            onChange={handleChange}
                            isInvalid={!!errors.video}
                            feedback={errors.video}
                            id="video"
                            feedbackTooltip
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            required
                            name="linkBuilding"
                            label="Link Building"
                            onChange={handleChange}
                            isInvalid={!!errors.linkBuilding}
                            feedback={errors.linkBuilding}
                            id="linkBuilding"
                            feedbackTooltip
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            required
                            name="adBanners"
                            label="Ad Banners"
                            onChange={handleChange}
                            isInvalid={!!errors.adBanners}
                            feedback={errors.adBanners}
                            id="adBanners"
                            feedbackTooltip
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Check
                            required
                            name="branding"
                            label="Branding"
                            onChange={handleChange}
                            isInvalid={!!errors.branding}
                            feedback={errors.branding}
                            id="branding"
                            feedbackTooltip
                          />
                        </Form.Group>
                      </Col>
                    </Container>
                  </Card>
                </Col>
                <Col>
                  <Card className="text-center">
                    <Card.Header>Advertising Duration</Card.Header>
                    <Form.Group>
                      <Form.Check
                        required
                        name="twoIssues"
                        label="2x Issues"
                        onChange={handleChange}
                        isInvalid={!!errors.twoIssues}
                        feedback={errors.twoIssues}
                        id="twoIssues"
                        feedbackTooltip
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Check
                        required
                        name="fourIssues"
                        label="4x Issues"
                        onChange={handleChange}
                        isInvalid={!!errors.fourIssues}
                        feedback={errors.fourIssues}
                        id="fourIssues"
                        feedbackTooltip
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Check
                        required
                        name="sixIssues"
                        label="6x Issues"
                        onChange={handleChange}
                        isInvalid={!!errors.sixIssues}
                        feedback={errors.sixIssues}
                        id="sixIssues"
                        feedbackTooltip
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Check
                        required
                        name="eightIssues"
                        label="8x Issues"
                        onChange={handleChange}
                        isInvalid={!!errors.eightIssues}
                        feedback={errors.eightIssues}
                        id="eightIssues"
                        feedbackTooltip
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Check
                        required
                        name="twelveIssues"
                        label="12x Issues"
                        onChange={handleChange}
                        isInvalid={!!errors.twelveIssues}
                        feedback={errors.twelveIssues}
                        id="twelveIssues"
                        feedbackTooltip
                      />
                    </Form.Group>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Button type="submit">Submit</Button>
              </Row>
            </Container>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Order;
