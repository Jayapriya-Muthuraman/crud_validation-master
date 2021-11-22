import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import * as YUP from "yup";

const schema = YUP.object().shape({
  email: YUP.string().email().required("Please Enter Your Email ID"),
  firstName: YUP.string()
    .min(5, "First Name should have more than 4 characters")
    .required("Please Enter Your First Name"),
  lastName: YUP.string()
    .min(5, "Last Name should have more than 4 Characters")
    .required("Please Enter Your Last Name"),
  password: YUP.string()
    .min(5, "Password should have minimum 4 charcters")
    .required("Please Enter Your Password Name"),
  confirm_password: YUP.string().oneOf(
    [YUP.ref("password"), null],
    "Passwords must match"
  ),
});

function Register() {
  const [dummy, setDummy] = useState(true);
  return (
    <div className="d-flex justify-content-center mt-5">
      {dummy ? (
        <Card>
          <Card.Header className="text-center fs-4 fw-bold">
            Register
          </Card.Header>
          <Card.Body>
            <Formik
              initialValues={{
                email: "",
                firstName: "",
                lastName: "",
                password: "",
                confirm_password: "",
              }}
              validationSchema={schema}
              onSubmit={(values) => {
                setDummy(false);
              }}
            >
              <Form>
                <div className="mb-3">
                  <label>First Name</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="firstName"
                    component="input"
                  />
                  <ErrorMessage name="firstName" />
                </div>
                <div className="mb-3">
                  <label>Last Name</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="lastName"
                    component="input"
                  />
                  <ErrorMessage name="lastName" />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="email"
                    component="input"
                  />
                  <ErrorMessage name="email" />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <Field
                    className="form-control"
                    type="password"
                    name="password"
                    component="input"
                  />
                  <ErrorMessage name="password" />
                </div>
                <div className="mb-3">
                  <label>Confirm Password</label>
                  <Field
                    className="form-control"
                    type="password"
                    name="confirm_password"
                    component="input"
                  />
                  <ErrorMessage name="confirm_password" />
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </Card.Body>
        </Card>
      ) : (
        <div>
          <h2>Register Successfull</h2>
        </div>
      )}
    </div>
  );
}

export default Register;
