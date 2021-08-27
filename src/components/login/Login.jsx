import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form, FormControl, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { post } from "../../utils/agent";
import validator from "validator";
function Login() {
  const [err, setErr] = useState("");
  const [perr, setPerr] = useState("");
  const [data, setData] = useState({
    mobile: "",
    password: "",
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;

    setData(newData);
    console.log(data);
  }
  // submit
  function submit(e) {
    e.preventDefault();
    post("/admin/user/login", data)
      .then((res) => {
        console.log(res.body.token);
        window.localStorage.setItem("auth-key", res.body.token);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
        <h1 style={{ color: "#000" }}>Login</h1>

        <Form
          size="lg"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          onSubmit={(e) => submit(e)}
        >
          <FormLabel>Username</FormLabel>
          <FormControl
            required
            className="input"
            type="string"
            name="mobile"
            placeholder="mob"
            onChange={(e) => handle(e)}
          />

          <FormLabel>Password</FormLabel>
          <FormControl
            required
            className="input"
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => handle(e)}
          />
          <Button type="submit">login</Button>
          {/* <Link to="/clogin">
            <a>create an account</a>
          </Link> */}
        </Form>
      </Card>
    </div>
  );
}
export default Login;
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
