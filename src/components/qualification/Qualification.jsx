import React, { useState, useEffect } from "react";
import { Button, Form, FormControl, Table } from "react-bootstrap";
import { post } from "../../utils/agent";
import * as ReactDOM from "react-dom";
import { addSkill, serImg, server } from "../../utils/url";
import { useRef } from "react";
import QualUpdate from "./QualUpdate";
function Qualification() {
  const [qual, setQual] = useState([]);

  const [values, setValues] = useState({
    name: "",
    parent: "",
    sortOrder: "",
    image: "",
  });
  const [passData, setPassData] = useState([]);
  const [mount, setmount] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const submit = () => {
    let body = {};
    let keys = ["name", "parent", "sortOrder"];
    for (let i = 0; i < keys.length; i++) {
      body[keys[i]] = values[keys[i]];
    }
    // for (let i of Object.keys(body)) {
    //   if (body[i] === "" || body[i].length === 0) {
    //     ReactDOM.findDOMNode(refs[i]).focus();

    //     return;
    //   }
    // }
    body.translations = {
      english: values.name,
    };
    body.name = values.name;
    post("/qualification/insert", body)
      .then((result) => {
        console.log(result);
      })
      .catch(console.log);

    // console.log(body);
  };

  const bool = [
    {
      value: "yes",
    },
    {
      value: "no",
    },
  ];
  const fetchData = async () => {
    const response = await post("/qualification/list").then((response) => {
      console.log(response.body.doc);
      setQual(response.body.doc);
    });
  };

  const setData = (event, key) => {
    setValues({ ...values, [key]: event.target.value });
  };
  return (
    <div className="container">
      <h1>Qualification Level</h1>
      <Form style={{ display: "flex", flexDirection: "row" }} onSubmit={submit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <FormControl
            className="input"
            type="input"
            required
            name="name"
            placeholder="name"
            onChange={(e) => setData(e, "name")}
            value={values.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Parent</Form.Label>
          <FormControl
            className="input"
            type="input"
            required
            name="parent"
            placeholder="parent"
            onChange={(e) => setData(e, "parent")}
            value={values.parent}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>SortOrder</Form.Label>
          <FormControl
            className="input"
            type="Number"
            required
            name="sortOrder"
            placeholder="sortOrder"
            onChange={(e) => setData(e, "sortOrder")}
            value={values.sortOrder}
          />
        </Form.Group>
        {/* <Form.Group>
          <Form.Label>Image</Form.Label>
          <FormControl
            type="file"
            required
            name="image"
            onChange={(e) => imageAdd(e)}
            value={imageAdd.image}
          />
        </Form.Group> */}
        <Form.Group>
          <Button style={{ marginTop: "3rem" }} onClick={() => submit()}>
            save
          </Button>
        </Form.Group>
      </Form>
      {mount && <QualUpdate pass={passData} />}

      {/* shoe category */}
      <div className="tableContainer container">
        <Table striped>
          <thead className="tableHead">
            <tr>
              <th>name</th>
              <th>SortOrder</th>
              {/* <th>Image</th> */}
              <th>Edit</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {qual.map((data, index) => (
              <tr key={index}>
                <td>{data.name.slice(1)}</td>
                <td>{data.sortOrder}</td>
                <td>
                  {/* edit operation */}
                  <Button
                    onClick={() => {
                      post("/qualification/list", {
                        _id: data._id,
                      }).then((res) => {
                        setPassData(res.body.doc);

                        setmount(!mount);
                      });
                    }}
                  >
                    edit
                  </Button>
                </td>
                {/* <td>
                  <img width="100" height="100" src={serImg + data.image} />
                </td> */}
                {/* <td>{data.parent}</td> */}
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      post("/qualification/update", {
                        _id: data._id,
                        status: 4,
                      })
                        .then(() => {
                          window.location.reload(true);
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

export default Qualification;
