import React, { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { post } from "../../utils/agent";
import * as ReactDOM from "react-dom";
// import { addSkill, serImg, server } from "../../utils/url";
import { useRef } from "react";

function CategoryUpdate(props) {
  // const [category, setCategory] = useState([]);
  const [values, setValues] = useState({
    name: "",
    parent: "",
    sortOrder: "",
    image: "",
  });

  useEffect(() => {
    // console.log({ log: props.pass[0] });
    // setCategory(props.pass[0]);
    setValues(props.pass[0]);
  });
  const submit = () => {
    let body = {};
    let keys = ["name", "parent", "sortOrder", "image"];
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
    post("/skill/updateSkill", body)
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

  const imageAdd = (e) => {
    let formdata = new FormData();
    formdata.append("image", e.target.files[0]);

    post("/image/insertOne", formdata).then((result) => {
      console.log(result.body.doc.path);
      // const files = { image: result.body.doc.path }];
      setValues({ ...values, image: result.body.doc.path });
    });
  };

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
        <Form.Group>
          <Form.Label>Image</Form.Label>
          <FormControl
            type="file"
            required
            name="image"
            onChange={(e) => imageAdd(e)}
            value={imageAdd.image}
          />
        </Form.Group>
        <Button onClick={() => submit()}>save</Button>
      </Form>
    </div>
  );
}

export default CategoryUpdate;
