import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, Table } from "react-bootstrap";
import { post } from "../../utils/agent";

function CourseUpdate(props) {
  const [course, setCourse] = useState([]);
  const [values, setValues] = useState({
    name: "",
    parent: "",
    sortOrder: "",
    image: "",
  });
  useEffect(() => {
    setValues(props.pass[0]);
  });

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
    post("/course/update", body)
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
  const setData = (event, key) => {
    setValues({ ...values, [key]: event.target.value });
  };
  return (
    <div>
      <h1>update</h1>
      <Form style={{ display: "flex", flexDirection: "row" }} onSubmit={submit}>
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
          <Form.Label>Parent</Form.Label>
          <FormControl
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
        <Button onClick={() => submit()}>save</Button>
      </Form>
    </div>
  );
}

export default CourseUpdate;
