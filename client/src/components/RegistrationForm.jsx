import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import UserAPI from "../apis/UserAPI";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(16).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")])
    .required(),
  company: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required("You must enter your state"),
  zip: yup.string().required(),
  phone: yup.string().required(),
  website: yup.string().required(),
});

UserAPI.defaults.withCredentials = true;

//Lets user input a test object into backend db
const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        company: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        fax: "",
        cell: "",
        website: "",
      }}
      validationSchema={schema}
      onSubmit={async (data, { setErrors }) => {
        console.log(data);
        try {
          const response = await UserAPI.post("/create", {
            password: data.password,
            email: data.email,
            address: data.address,
            company: data.company,
            city: data.city,
            state: data.state,
            zip: data.zip,
            phone: data.phone,
            fax: data.fax,
            cell: data.cell,
            website: data.website,
          });
          console.log(response);
          console.log(data);
        } catch (err) {
          console.log(err);
        }
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
            <Form.Group controlId="formEmail">
              <Form.Label> Email </Form.Label>
              <Form.Control
                type="text"
                name="email"
                values={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email!"
                isInvalid={!!(errors.email && touched.email)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label> Password </Form.Label>
              <Form.Control
                type="password"
                name="password"
                values={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your password!"
                isInvalid={!!(errors.password && touched.password)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label> Confirm your password </Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                values={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Confirm your password!"
                isInvalid={
                  !!(errors.confirmPassword && touched.confirmPassword)
                }
              />
              <Form.Control.Feedback type="invalid">
                Passwords do not match!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formCompany">
              <Form.Label> Company </Form.Label>
              <Form.Control
                type="text"
                name="company"
                values={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your company!"
                isInvalid={!!(errors.company && touched.company)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.company}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label> Address </Form.Label>
              <Form.Control
                type="text"
                name="address"
                values={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your address!"
                isInvalid={!!(errors.address && touched.address)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label> City </Form.Label>
              <Form.Control
                type="text"
                name="city"
                values={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your city!"
                isInvalid={!!(errors.city && touched.city)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label> State (Abbreviation) </Form.Label>
              <Form.Control
                type="text"
                name="state"
                values={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your state!"
                isInvalid={!!(errors.state && touched.state)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formZip">
              <Form.Label> Zip </Form.Label>
              <Form.Control
                type="text"
                name="zip"
                values={values.zip}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your zip! (MM/DD/YYYY)"
                isInvalid={!!(errors.zip && touched.zip)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label> Phone </Form.Label>
              <Form.Control
                type="text"
                name="phone"
                values={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Phone"
                isInvalid={!!(errors.phone && touched.phone)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formFax">
              <Form.Label> Fax (Optional) </Form.Label>
              <Form.Control
                type="text"
                name="fax"
                values={values.fax}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=""
                isInvalid={!!(errors.fax && touched.fax)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.fax}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formCell">
              <Form.Label> Cell (Optional) </Form.Label>
              <Form.Control
                type="text"
                name="cell"
                values={values.cell}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder=""
                isInvalid={!!(errors.cell && touched.cell)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cell}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formWebsite">
              <Form.Label> Website </Form.Label>
              <Form.Control
                type="text"
                name="website"
                values={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="website"
                isInvalid={!!(errors.website && touched.website)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.website}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
