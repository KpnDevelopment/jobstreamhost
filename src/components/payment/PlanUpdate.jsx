import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, Table } from "react-bootstrap";
import { post } from "../../utils/agent";

function PlanUpdate(props) {
  const [values, setValues] = useState({
    name: "",
    description: "",
    policy: "",
    amount: "",
  });
  useEffect(() => {
    setValues(props.pass[0]);
  });

  // submit data to server

  const submit = () => {
    let body = {};
    let keys = ["name", "description", "policy", "amount"];
    for (let i = 0; i < keys.length; i++) {
      body[keys[i]] = values[keys[i]];
    }
    // for (let i of Object.keys(body)) {
    //   if (body[i] === "" || body[i].length === 0) {
    //     ReactDOM.findDOMNode(refs[i]).focus();

    //     return;
    //   }
    // }
    body.name = values.name;
    post("/plan/edit", body)
      .then((result) => {
        console.log(result);
      })
      .catch(console.log);

    // console.log(body);
  };

  // handle values
  const setData = (event, key) => {
    setValues({ ...values, [key]: event.target.value });
    // console.log(values);
  };

  return (
    <div>
      <h1>update</h1>
      <div>
        <Form
          style={{ display: "flex", flexDirection: "row" }}
          onSubmit={submit}
        >
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <FormControl
              type="input"
              required
              name="name"
              placeholder="name"
              onChange={(e) => setData(e, "name")}
              value={values.name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Policy</Form.Label>
            <FormControl
              type="input"
              required
              name="policy"
              placeholder="policy"
              onChange={(e) => setData(e, "policy")}
              value={values.policy}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <FormControl
              type="input"
              required
              name="description"
              placeholder="description"
              onChange={(e) => setData(e, "description")}
              value={values.description}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <FormControl
              type="input"
              required
              name="amount"
              placeholder="amount"
              onChange={(e) => setData(e, "amount")}
              value={values.amount}
            />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>SortOrder</Form.Label>
            <FormControl
              type="Number"
              required
              name="sortOrder"
              placeholder="sortOrder"
            />
          </Form.Group> */}
          {/* <Form.Group>
            <Form.Label>Image</Form.Label>
            <FormControl type="file" required name="image" />
          </Form.Group> */}
          <Button onClick={() => submit()}>save</Button>
        </Form>
      </div>
    </div>
  );
}

export default PlanUpdate;
