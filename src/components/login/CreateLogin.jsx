import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form, FormControl, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { post } from "../../utils/agent";
import validator from "validator";

function Login() {
  const [err, setErr] = useState("");
  const [perr, setPerr] = useState("");
  const [mobErr, setMobErr] = useState("");
  const [values, setValues] = useState({
    password: "",
    mobile: "",
  });
  function validation(newData) {
    if (
      validator.isStrongPassword(newData.password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPerr("Is very Strong Password");
    } else if (
      validator.isStrongPassword(newData.password, {
        minLength: 6,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 1,
      })
    ) {
      setPerr("Is Strong Password");
    } else if (
      validator.isStrongPassword(newData.password, {
        minLength: 4,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      setPerr("Is weak Password");
    } else {
      setPerr("Enter Password");
    }
    if (validator.isMobilePhone(newData.mobile)) {
      setMobErr("");
    } else {
      setMobErr("Enter valid Mobile");
    }
  }
  const setData = (event, key) => {
    setValues({ ...values, [key]: event.target.value });
    console.log(values);
  };
  // submit
  const submit = () => {
    let body = {};
    let keys = ["password", "mobile"];
    for (let i = 0; i < keys.length; i++) {
      body[keys[i]] = values[keys[i]];
    }

    body.name = values.name;
    post("/admin/user/register", body)
      .then((result) => {
        console.log(result);
      })
      .catch(console.log);

    // console.log(body);
  };

  return (
    <div
      className="login"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "5rem",
      }}
    >
      <Card style={{ width: "30rem", padding: "3rem", borderRadius: "2rem" }}>
        <h1 style={{ color: "#000" }}>create account</h1>
        <Form
          size="lg"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          onSubmit={submit}
        >
          {/* <FormLabel>Username</FormLabel>

          <FormControl
            className="input"
            type="tel"
            name="email"
            placeholder="user name"
            required
            onChange={(e) => handle(e)}
          />
          {err === "not valid email" ? (
            <FormLabel style={{ color: "red" }}>{err}</FormLabel>
          ) : (
            <FormLabel></FormLabel>
          )} */}
          <FormLabel>Mobile</FormLabel>

          <FormControl
            className="input"
            type="tel"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            name="mobile"
            placeholder="mobile"
            required
            onChange={(e) => setData(e, "mobile")}
          />
          {mobErr !== "" ? (
            <FormLabel>{mobErr}</FormLabel>
          ) : (
            <FormLabel></FormLabel>
          )}
          <FormLabel>Password</FormLabel>

          <FormControl
            className="input"
            type="password"
            name="password"
            placeholder="password"
            required
            onChange={(e) => setData(e, "password")}
          />
          {perr === "Is very Strong Password" ||
          perr === "Is Strong Password" ? (
            <FormLabel style={{ color: "green" }}>{perr}</FormLabel>
          ) : (
            <FormLabel style={{ color: "red" }}>{perr}</FormLabel>
          )}
          <Button onClick={() => submit()}>submit</Button>
          <Link to="/login">
            <a>Login</a>
          </Link>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
