import React, { useState } from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  function ValidatEmail(email) {
    const reg =
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
    return reg.test(email);
  }

  const validation = () => {
    console.log("shashank");
    if (email == "") {
      setError({
        errorMessage: "Please enter your email Id",
        errorName: "email",
      });
      return false;
    }

    if (ValidatEmail(email) == false) {
      setError({
        errorMessage: "Invalid Email ID",
        errorName: "email",
      });
      return false;
    }

    if (name == "") {
      setError({
        errorMessage: "Please enter your name",
        errorName: "name",
      });
      return false;
    }

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
      localStorage.setItem("signup", JSON.stringify({ username, password }));
      history.push("/");
    }
  };
  return (
    <div className="signup">
      <CardTitle style={{ textAlign: "center" }} className="px-4">
        IDreamCareer
      </CardTitle>
      <CardText style={{ textAlign: "center" }} className="px-4">
        Sign up to add your daily tasks to this to do app.
      </CardText>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="Email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
            />
          </FormGroup>
          {error.errorName == "email" ? (
            <span className="invalid">{error.errorMessage}</span>
          ) : null}
          <FormGroup>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              value={name}
            />
          </FormGroup>
          {error.errorName == "name" ? (
            <span className="invalid">{error.errorMessage}</span>
          ) : null}
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
            Sign Up
          </Button>
        </Form>
      </div>
      <CardText
        style={{ textAlign: "center", fontSize: "11px", paddingTop: "8px" }}
        className="px-4"
      >
        By signing up, you agree to our Terms , Data Policy and Cookies Policy.
      </CardText>
      <CardText style={{ textAlign: "center" }}>
        Have an account?
        <Link to="/" style={{ color: "darkblue" }}>
          Log in
        </Link>
      </CardText>
    </div>
  );
};

export default Signup;
