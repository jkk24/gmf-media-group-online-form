import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UserAPI from "../apis/UserAPI";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  let history = useHistory();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        role: "",
      }}
      validationSchema={schema}
      onSubmit={async (data, { setErrors }) => {
        try {
          const response = await UserAPI.post("/login", {
            email: data.email,
            password: data.password,
          });
          //   console.log(response.data);
          if (response.data.status === "success") {
            try {
              const confResponse = await UserAPI.post(
                "/checkConfirmationOnLogin",
                {
                  email: data.email,
                }
              );
              if (confResponse.data.confirmed === "true") {
                if (confResponse.data.adminConfirmed === "true") {
                  history.push("/dashboard");
                } else {
                  try {
                    await UserAPI.get("/logout");
                    alert("Please wait for admin confirmation!");
                    history.push("/login");
                  } catch (err) {
                    console.log(err);
                  }
                }
              } else {
                try {
                  await UserAPI.get("/logout");
                  alert("Please check your email for confirmation!");
                  history.push("/login");
                } catch (err) {
                  console.log(err);
                }
              }
            } catch (err) {
              console.log(err);
            }
          } else {
            if (response.data.target === "email") {
              setErrors({ email: response.data.status });
            } else {
              setErrors({ password: response.data.status });
            }
          }
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
            <Button type="submit">Submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
