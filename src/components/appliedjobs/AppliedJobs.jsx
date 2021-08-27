import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, Table } from "react-bootstrap";
import { post } from "../../utils/agent";

function AppliedJobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []);

  // fetch category
  const fetchCategory = async () => {
    let response = await post("/skill/list/").then((response) => {
      console.log(response.body.doc);
      setCategories(response.body.doc);
    });
  };
  // search data

  function handleChange(event) {
    setSearchTerm(event.target.value);
    // console.log(searchTerm);
  }
  return (
    <div>
      <h1>appliedjobs</h1>
      <div className="filterJob" style={{ padding: "5rem" }}>
        <h1 style={{ textAlign: "center " }}>Filter</h1>
        <div className="formContainer">
          <Form
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Form.Group>
              <Form.Label>Job</Form.Label>
              <FormControl
                type="input"
                required
                name=""
                placeholder="name"
                onChange=""
                value=""
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" onChange="">
                {categories.map((data, index) => (
                  <option key={index} value="">
                    {data.name.slice(1)}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Vacancies</Form.Label>
              <FormControl
                type="input"
                required
                name="vacancies"
                placeholder="vacancies"
                onChange=""
                value=""
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Salary</Form.Label>
              <FormControl
                type="input"
                required
                name="salary"
                placeholder="salary"
                onChange=""
                value=""
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <FormControl
                type="date"
                required
                name="date"
                placeholder="location"
                onChange=""
                value=""
              />
            </Form.Group>
            <Button style={{ borderRadius: "1rem" }}>
              <i className="fas fa-filter" />
            </Button>
          </Form>
        </div>
        <div className="tableContainer">
          <Table>
            <thead className="tableHead">
              <tr>
                <th>SlNo</th>
                <th>CompanyName</th>
                <th>User Name</th>
                <th>Job Position</th>
                <th>Skills</th>
                <th>Salary</th>
                <th>Vacancies</th>
                <th>lastDate</th>
                <th>
                  <FormControl
                    className="search"
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Oppo</td>
                <td>Arun</td>
                <td>Designer</td>
                <td>Mechanical,aaa,bbbb</td>
                <td>20000</td>
                <td>1</td>
                <td>10/10/10</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default AppliedJobs;
