import React from "react";
import { useEffect, useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useRef } from "react";

import moment from "moment";
import * as ReactDOM from "react-dom";
import { createJob } from "../../utils/url";
import { post } from "../../utils/agent";
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 500,
//     "& > * + *": {
//       marginTop: theme.spacing(3),
//     },
//   },
// }));

export default function JobAdd() {
  const refs = useRef();
  const currentDate = moment().format("DD-MM-YYYY hh:mm:ss");
  const [skill, setSkill] = useState([]);
  const [courses, setCourses] = useState([]);
  const [qualification, setQualification] = useState([]);
  const [values, setValues] = useState({
    companyName: "",
    description: "",
    companyAddress: "",
    companyMob: "",
    jobPosition: "",
    noOfVacencies: "",
    Skills: "",
    status: "1",
    qualification: "",
    course: "",
    salary: "",
    experience: "",
    certified: "yes",
    field: "",
    workingTime: "",
    recruiter: "",
    lastDate: currentDate,
    location: "",
    primeMember: "yes",
    verifiedBy: "root",
  });

  useEffect(() => {
    fetchCategory();
    fetchCourse();
    fetchQual();
  }, []);
  const fetchCategory = async () => {
    let response = await post("/skill/list").then((response) => {
      console.log(response.body.doc);
      setSkill(response.body.doc);
    });
  };

  const fetchCourse = async () => {
    let response = await post("/course/list").then((response) => {
      console.log({ courses: response.body.doc });
      setCourses(response.body.doc);
    });
  };
  const fetchQual = async () => {
    let response = await post("/qualification/list").then((response) => {
      console.log(response.body.doc);
      setQualification(response.body.doc);
    });
  };

  // submit data

  const submit = () => {
    let body = {};
    let keys = [
      "companyName",
      "description",
      "companyAddress",
      "companyMob",
      "jobPosition",
      "noOfVacencies",
      "Skills",
      "status",
      "course",
      "qualification",
      "salary",
      "experience",
      "certified",
      "field",
      "workingTime",
      "recruiter",
      "lastDate",
      "location",
      "primeMember",
      "verifiedBy",
    ];
    for (let i = 0; i < keys.length; i++) {
      body[keys[i]] = values[keys[i]];
    }
    // for (let i of Object.keys(body)) {
    //   if (body[i] === "" || body[i].length === 0) {
    //     ReactDOM.findDOMNode(this.refs[i]).focus();

    //     return;
    //   }
    // }
    body.Skills = {
      Skills: values._id,
    };

    post(createJob, body)
      .then((result) => {
        // console.log(result);
      })
      .catch(console.log);

    console.log(body);
  };

  const bool = [
    {
      value: "yes",
    },
    {
      value: "no",
    },
  ];
  const SkillAdd = (e) => {
    let Skills = e.map((el) => el._id);
    console.log(Skills);
    setValues({ ...values });
  };

  // const courseAdd = (e) => {
  //   let course = e.map((el) => el._id);
  //   console.log(course);
  //   setValues({ ...values });

  // };
  // const qualificationAdd = (e) => {
  //   let qualification = e.map((el) => el._id);
  //   console.log(qualification);
  //   setValues({ ...values });

  // };

  const setData = (event, key) => {
    setValues({ ...values, [key]: event.target.value });
    console.log(values);
  };

  return (
    <div className="container">
      <Form className="form-con" onSubmit={submit}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>COMPANY NAME</Form.Label>
            <Form.Control
              required
              name="companyName"
              type="input"
              placeholder="Company Name"
              onChange={(e) => setData(e, "companyName")}
              value={values.companyName}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label> COMPANY ADDRESS</Form.Label>
            <Form.Control
              required
              as="textarea"
              name="companyAddress"
              type="input"
              placeholder="Company Address"
              onChange={(e) => setData(e, "companyAddress")}
              values={values.companyAddress}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label> COMPANY MOBILE</Form.Label>
            <Form.Control
              required
              name="companyMob"
              type="number"
              placeholder="Mobile"
              onChange={(e) => setData(e, "companyMob")}
              values={values.companyMob}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>JOB POSITION</Form.Label>
            <Form.Control
              required
              name="jobPosition"
              type="input"
              placeholder="Position"
              onChange={(e) => setData(e, "jobPosition")}
              values={values.jobPosition}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Skill</Form.Label>

          <Autocomplete
            name="Skills"
            multiple
            id="tags-outlined"
            options={skill}
            onChange={(e, values) => SkillAdd(values)}
            value={SkillAdd.Skills}
            getOptionLabel={(option) => option.name.slice(1)}
            renderInput={(params) => (
              <TextField
                placeholder="Category"
                {...params}
                variant="outlined"
                style={{ backgroundColor: "white" }}
              />
            )}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>QUALIFICATION</Form.Label>

          <Form.Row>
            <Form.Group controlId="course">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setData(e, "qualification")}
              >
                {qualification.map((data, index) => (
                  <option key={index} value={data._id}>
                    {data.name.slice(1)}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Label>Course</Form.Label>

          <Form.Row>
            <Form.Group controlId="course">
              {/* <Form.Label>Course</Form.Label> */}
              <Form.Control as="select" onChange={(e) => setData(e, "course")}>
                {courses.map((data, index) => (
                  <option key={index} value={data._id}>
                    {data.name.slice(1)}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="description">
            <Form.Label>JOB DESCRIPTION</Form.Label>
            <Form.Control
              required
              as="textarea"
              name="description"
              type="input"
              placeholder="Description"
              onChange={(e) => setData(e, "description")}
              values={values.description}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>WORKING TIME</Form.Label>
            <Form.Control
              required
              name="workingTime"
              type="input"
              placeholder="workingTime"
              onChange={(e) => setData(e, "workingTime")}
              values={values.workingTime}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>EXPERIENCE</Form.Label>
            <Form.Control
              required
              name="experience"
              type="input"
              placeholder="Experience"
              onChange={(e) => setData(e, "experience")}
              values={values.experience}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>LOCATION</Form.Label>
            <Form.Control
              required
              name="location"
              type="input"
              placeholder="Location"
              onChange={(e) => setData(e, "location")}
              values={values.location}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>LAST DATE</Form.Label>
            <Form.Group>
              <TextField
                required
                name="lastDate"
                placeholder="Last Date"
                onChange={(e) => setData(e, "lastDate")}
                values={values.lastDate}
                variant="standard"
                style={{ backgroundColor: "white" }}
                type="date"
              ></TextField>
            </Form.Group>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>NO-OF VACCANCY</Form.Label>
            <Form.Control
              required
              name="noOfVacencies"
              type="input"
              placeholder="No Of Vacancies"
              onChange={(e) => setData(e, "noOfVacencies")}
              values={values.noOfVacencies}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="salary">
            <Form.Label>SALARY</Form.Label>
            <Form.Control
              required
              name="salary"
              type="number"
              placeholder="Salary"
              onChange={(e) => setData(e, "salary")}
              values={values.salary}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>FEILD</Form.Label>
            <Form.Control
              required
              name="field"
              type="input"
              placeholder="Field"
              onChange={(e) => setData(e, "field")}
              values={values.field}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>RECRUITER</Form.Label>
            <Form.Control
              required
              name="recruiter"
              type="string"
              placeholder="Recruiter"
              onChange={(e) => setData(e, "recruiter")}
              values={values.recruiter}
            />
          </Form.Group>
        </Form.Row>
        {/* <Form.Row>
          <Form.Group as={Col} controlId="resume">
            <Form.Label>RESUME</Form.Label>
            <Form.File id="resume" />
          </Form.Group>
        </Form.Row> */}
        <Form.Row>
          <Form.Group controlId="status">
            <Form.Label>STATUS</Form.Label>
            <Form.Control as="select" onChange={(e) => setData(e, "status")}>
              <option value="1">ACTIVE</option>
              <option value="0">EXPIRED</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="certified">
            <Form.Label>CERTIFIED</Form.Label>
            <Form.Control
              values={values.certified}
              as="select"
              onChange={(e) => setData(e, "certified")}
            >
              {bool.map((data, index) => (
                <option key={index} values={data.value}>
                  {data.value}
                </option>
              ))}
              {/* <option value="yes" selected>
                CERTIFIED
              </option>
              <option value="no">NOT CERTIFIED</option> */}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="certified">
            <Form.Label> PRIME MEMBER</Form.Label>
            <Form.Control
              values={values.primeMember}
              as="select"
              onChange={(e) => setData(e, "primeMember")}
            >
              {bool.map((data, index) => (
                <option key={index} values={data.value}>
                  {data.value}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Link to="/jobs">
          <Button>Back</Button>
        </Link>
        <Button onClick={() => submit()}>Save</Button>
      </Form>
    </div>
  );
}
