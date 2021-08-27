import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, Table } from "react-bootstrap";
import { post } from "../../utils/agent";

function FilterJob() {
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
    <div className="filterJob" style={{ padding: "5rem" }}>
      <h1 style={{ textAlign: "center " }}>Filter</h1>
      <div className="formContainer container">
        <Form
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Form.Group className="form-group">
            <Form.Label>Company Name</Form.Label>
            <FormControl
              className="input"
              type="input"
              required
              name=""
              placeholder="name"
              onChange=""
              value=""
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" onChange="" className="input">
              {categories.map((data, index) => (
                <option key={index} value="">
                  {data.name.slice(1)}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Vacancies</Form.Label>
            <FormControl
              className="input"
              type="input"
              required
              name="vacancies"
              placeholder="vacancies"
              onChange=""
              value=""
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Salary</Form.Label>
            <FormControl
              className="input"
              type="input"
              required
              name="salary"
              placeholder="salary"
              onChange=""
              value=""
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Location</Form.Label>
            <FormControl
              className="input"
              type="input"
              required
              name="location"
              placeholder="location"
              onChange=""
              value=""
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Date</Form.Label>
            <FormControl
              className="input"
              type="date"
              required
              name="date"
              placeholder="location"
              onChange=""
              value=""
            />
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" className="input">
              <option key="" value="1">
                1
              </option>
              <option key="" value="0">
                0
              </option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="form-group">
            <Form.Label></Form.Label>
            <Button style={{ borderRadius: "1rem", marginTop: "3rem" }}>
              <i className="fas fa-filter" />
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div className="tableContainer">
        <Table>
          <thead className="tableHead">
            <tr>
              <th>SlNo</th>
              <th>Company Name</th>
              <th>Vacancies</th>
              <th>Job Position</th>
              <th>Category</th>
              <th>Salary</th>
              <th>Location</th>
              <th>Status</th>
              <th>lastDate</th>
              <th>PrimeMember</th>
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
              <td>10</td>
              <td>Designer</td>
              <td>Mechanical</td>
              <td>20000</td>
              <td>China</td>
              <td>1</td>
              <td>10/10/10</td>
              <td>yes</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default FilterJob;
