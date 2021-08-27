import React, { useState, useEffect } from "react";
import { Button, Form, FormControl, Table } from "react-bootstrap";
import { post } from "../../utils/agent";
import * as ReactDOM from "react-dom";
import { addSkill, serImg, server } from "../../utils/url";
import { useRef } from "react";
import CourseUpdate from "./CourseUpdate";
function Course() {
  const [course, setCourse] = useState([]);
  const [values, setValues] = useState({
    name: "",
    parent: "",
    sortOrder: "",
    image: "",
  });
  const [passData, setPassData] = useState([]);
  const [mount, setmount] = useState(false);

  //   const imageAdd = (e) => {
  //     let formdata = new FormData();
  //     formdata.append("image", e.target.files[0]);
  //   };
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
    post("/course/insert", body)
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
    const response = await post("/course/list").then((response) => {
      console.log(response.body.doc);
      setCourse(response.body.doc);
    });
  };

  const setData = (event, key) => {
    setValues({ ...values, [key]: event.target.value });
  };
  return (
    <div className="container">
      <h1>Course</h1>
      <Form style={{ display: "flex", flexDirection: "row" }} onSubmit={submit}>
        <Form.Group className="form-group">
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
        <Form.Group className="form-group">
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
        <Form.Group className="form-group">
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
        {/* <Form.Group  className="form-group">
          <Form.Label>Image</Form.Label>
          <FormControl
            type="file"
            required
            name="image"
            onChange={(e) => imageAdd(e)}
            value={imageAdd.image}
          />
        </Form.Group> */}
        <Form.Group className="form-group">
          <Form.Label></Form.Label>
          <Button style={{ marginTop: "3rem" }} onClick={() => submit()}>
            save
          </Button>
        </Form.Group>
      </Form>

      {mount && <CourseUpdate pass={passData} />}
      {/* shoe category */}
      <div className="tableContainer">
        <Table striped>
          <thead className="tableHead">
            <tr>
              <th>name</th>
              <th>SortOrder</th>
              {/* <th>Parent</th> */}
              <th>edit</th>
            </tr>
          </thead>
          <tbody>
            {course.map((data, index) => (
              <tr key={index}>
                <td>{data.name.slice(1)}</td>
                <td>{data.sortOrder}</td>
                <td>
                  {/* edit operation */}
                  <Button
                    onClick={() => {
                      post("/course/list", {
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
                {/* <td>{data._id}</td> */}
                {/* <td>
                  <Button variant="danger">
                    <i className="fas fa-times" />
                  </Button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Course;
