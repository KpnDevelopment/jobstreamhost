import React, { useEffect, useState } from "react";
import "./payment.css";
import { Button, Form, FormControl, Table } from "react-bootstrap";
import { post } from "../../utils/agent";
import PlanUpdate from "./PlanUpdate";

function Plan() {
  const [plan, setPlan] = useState([]);
  const [values, setValues] = useState({
    name: "",
    description: "",
    policy: "",
    amount: "",
  });
  const [passData, setPassData] = useState([]);
  const [mount, setmount] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

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
    post("/plan/insert", body)
      .then((result) => {
        console.log(result);
        window.location.reload(false);
      })
      .catch(console.log);

    // console.log(body);
  };

  // handle values
  const setData = (event, key) => {
    setValues({ ...values, [key]: event.target.value });
    // console.log(values);
  };

  // fetch payment data

  const fetchData = async () => {
    const response = await post("/plan/").then((response) => {
      console.log(response.body.doc);
      setPlan(response.body.doc);
    });
  };

  return (
    <div className="payment container">
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
        {/* {mount && <PlanUpdate pass={passData} />} */}
      </div>
      <div className="tableContainer">
        <Table striped>
          <thead className="tableHead">
            <tr>
              <th>Name</th>
              <th>Policy</th>
              <th>Description</th>
              <th>Amount</th>
              {/* <th>Icon</th> */}
            </tr>
          </thead>
          <tbody>
            {plan.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.policy}</td>
                <td>{data.description}</td>
                <td>{data.amount}</td>
                {/* <td>
                  <img width="100" height="100" src={data.icon} />
                </td> */}
                {/* <td>
                  <Button
                    onClick={() => {
                      post("/plan/", {
                        _id: data._id,
                      }).then((res) => {
                        setPassData(res.body.doc);

                        setmount(!mount);
                      });
                    }}
                  >
                    edit
                  </Button>
                </td> */}
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      post("/plan/delete", {
                        _id: data._id,
                      })
                        .then(() => {
                          window.location.reload(false);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    <i className="fas fa-times" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Plan;
// const plans = [
//   {
//     policy: "policy 1",
//     name: "Name !",
//     description: "policy 1 duration 2months ",
//     amount: "2000",
//     icon: "icon image here",
//   },
//   {
//     policy: "policy 2",
//     name: "Name 1213!",
//     description: " duration 6months ",
//     amount: "5000",
//     icon: "icon image here",
//   },
// ];
