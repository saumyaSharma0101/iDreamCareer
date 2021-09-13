import React, { useState } from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const validation = () => {
    if (username == "") {
      setError({
        errorMessage: "Please enter your username",
        errorName: "username",
      });
      return false;
    }

    if (password == "") {
      setError({
        errorMessage: "Please enter your password",
        errorName: "password",
      });
      return false;
    }

    return true;
  };

  const submitButton = () => {
    if (validation()) {
      let value = localStorage.getItem("signup");
      value = JSON.parse(value);
      if (value.username == username && value.password == password) {
        history.push("/todolist");
      } else {
        setError({
          errorMessage: "Invalid Credentials.",
          errorName: "formerror",
        });
      }
    }
  };
  return (
    <div className="signup">
      <CardTitle style={{ textAlign: "center" }} className="px-4">
        IDreamCareer
      </CardTitle>
      <CardText style={{ textAlign: "center" }} className="px-4">
        Log In to add your daily tasks to this to do app.
      </CardText>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form className="px-4">
          <FormGroup>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="UserName"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
              value={username}
            />
          </FormGroup>
          {error.errorName == "username" ? (
            <span className="invalid">{error.errorMessage}</span>
          ) : null}
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="Password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              value={password}
            />
          </FormGroup>
          {error.errorName == "password" ? (
            <span className="invalid">{error.errorMessage}</span>
          ) : null}
          <Button
            className="btn"
            color="primary"
            style={{ width: "100%" }}
            block
            onClick={submitButton}
          >
            Log In
          </Button>
          {error.errorName == "formerror" ? (
            <span className="invalid" style={{ alignItems: "center" }}>
              {error.errorMessage}
            </span>
          ) : null}
        </Form>
      </div>

      <CardText
        style={{ textAlign: "center", fontSize: "11px", paddingTop: "8px" }}
        className="px-4"
      >
        By Logging In, you agree to our Terms , Data Policy and Cookies Policy.
      </CardText>
      <CardText style={{ textAlign: "center" }}>
        Doesn't have an account?
        <Link to="/signup" style={{ color: "darkblue" }}>
          Sign Up
        </Link>
      </CardText>
    </div>
  );
};

export default Login;
