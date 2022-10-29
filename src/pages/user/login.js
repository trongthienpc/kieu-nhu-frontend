import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardTitle, FormGroup, Label, Row } from "reactstrap";
import { Colxx } from "../../components/common/CustomBootstrap";
import { Formik, Form, Field } from "formik";
import { NotificationManager } from "../../components/common/react-notifications";

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = "Please enter your password";
  } else if (value.length < 4) {
    error = "Value must be longer than 3 characters";
  }
  return error;
};

const Login = ({ history, loading, error, loginUserAction }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, "Login Error", 3000, null, null, "");
    }
  }, [error]);
  const onUserLogin = (values) => {
    if (!loading) {
      if (values.email !== "" && values.password !== "") {
        loginUserAction(values, history);
      }
    }
  };
  const initialValues = { username, password };
  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">TO MY FRIEND</p>
            <p className="white mb-0">
              Please use your credentials to login.
              <br />
              If you are not a member, please contact KIEU NHU.
            </p>
          </div>
          <div className="form-side">
            <Link to="/" className="white">
              <span className="logo-single" />
            </Link>
            <CardTitle className="mb-4">
              {/* <IntlMessages id="user.login-title" /> */}
              Login
            </CardTitle>

            <Formik initialValues={initialValues} onSubmit={onUserLogin}>
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-bottom">
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      {/* <IntlMessages id="user.email" /> */}
                      Username
                    </Label>
                    <Field
                      className="form-control"
                      name="email"
                      //   validate={validateEmail}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </FormGroup>
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      {/* <IntlMessages id="user.password" /> */}
                      Password
                    </Label>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      validate={validatePassword}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </FormGroup>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/user/forgot-password">
                      {/* <IntlMessages id="user.forgot-password-question" /> */}
                      Forget password?
                    </Link>
                    <Button
                      color="primary"
                      className={`btn-shadow btn-multiple-state ${
                        loading ? "show-spinner" : ""
                      }`}
                      size="lg"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">
                        {/* <IntlMessages id="user.login-button" /> */}
                        LOGIN
                      </span>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};

export default Login;
