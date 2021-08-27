import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/styles";
import Button from "react-bootstrap/Button";
import { Badge, FormControl, Table } from "react-bootstrap";
import moment from "moment";
import "./job.css";
import { Link } from "react-router-dom";
import Modal from "./Model";

import { Typography, Grid } from "@material-ui/core";

import Card from "react-bootstrap/Card";
import { post } from "../../utils/agent";
// import { getJOb, listJobs } from "../../utils/url";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

export default function Job() {
  // const classes = useStyles();
  const [mount, setmount] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [activeJobs, setActiveJobs] = useState([]);
  const [data, setData] = useState([]);
  const [pass, setPass] = useState([]);
  const [userPass, setUserPass] = useState([]);
  useEffect(() => {
    fetchData();
    // console.log(data.filter(checkStatus).length);
    // console.log(data.name.length);
    console.log({ Active: sStatus.length });
  }, []);

  // date assign
  let date = moment().format("YYYY-MM-DD");
  // fetchData

  const fetchData = async (body) => {
    post("/job/filter", body)
      .then((result) => {
        console.log(result.body.doc);
        setData(result.body.doc);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let sStatus = data.filter((data) => data.status == 1);

  // search data

  function handleChange(event) {
    setSearchTerm(event.target.value);
    // console.log(searchTerm);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div className="dashcards">
          <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className="card">
              <Card.Body>
                <Typography color="textSecondary" gutterBottom>
                  ACTIVE JOBS
                </Typography>
                <Typography variant="h5">9999</Typography>
                <Typography variant="body2">Number Of Active Jobs</Typography>
              </Card.Body>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className="card">
              <Card.Body>
                <Typography color="textSecondary" gutterBottom>
                  EXPIRED JOBS
                </Typography>
                <Typography variant="h5"> 9999</Typography>

                <Typography variant="body2">Number Of Expired jobs</Typography>
              </Card.Body>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className="card">
              <Card.Body>
                <Typography color="textSecondary" gutterBottom>
                  SHORTLY EXPIRING JOBS
                </Typography>
                <Typography variant="h5">9999</Typography>

                <Typography variant="body2">Jobs going to expire</Typography>
              </Card.Body>
            </Grid>
          </Grid>
        </div>
        <br />
        {mount && <Modal pass={pass} />}
        {/* Job{date} */}
        <div className="tableContainer container">
          <Table striped>
            <thead className="tableHead">
              <tr>
                <th>SlNo</th>
                <th>Company Name</th>
                <th>Vacancies</th>
                <th>Company Mobile</th>
                <th>Job Position</th>
                {/* <th>Skills</th> */}
                <th>Salary</th>
                <th>Location</th>
                <th>Status</th>
                <th>lastDate</th>
                <th>PrimeMember</th>
                <th>
                  <Link to="/jobs-add">
                    <Button variant="light">
                      <i class="fas fa-plus" aria-hidden="true"></i>
                    </Button>
                  </Link>
                </th>
                <th>
                  <FormControl
                    className="search"
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                  />
                </th>
                <th>
                  <Link to="/filterjob">
                    <Button variant="light">
                      <i className="fas fa-filter" />
                    </Button>
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter(
                  (data) =>
                    data.companyName.includes(searchTerm) ||
                    data.location.includes(searchTerm) ||
                    data.salary.includes(searchTerm) ||
                    data.primeMember.includes(searchTerm)
                )
                .map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.companyName}</td>
                    <td>{data.noOfVacencies}</td>
                    <td>{data.companyMob}</td>
                    <td>{data.jobPosition}</td>
                    {/* <td>{data.Skills}</td> */}
                    <td>{"₹ " + data.salary}</td>
                    <td>{data.location}</td>

                    <td>
                      {data.status === 1 ? (
                        <Badge pill variant="success">
                          Active
                        </Badge>
                      ) : (
                        <Badge pill variant="danger">
                          Lapsed
                        </Badge>
                      )}
                    </td>
                    <td>{data.lastDate.substring(0, 10)}</td>
                    <td>{data.primeMember}</td>
                    <td>
                      <Button
                        variant="info"
                        onClick={() => {
                          post("/job/filter", {
                            _id: data._id,
                          }).then((res) => {
                            // console.log(res.body.doc);
                            setPass(res.body.doc);
                            setmount(!mount);
                          });
                        }}
                      >
                        <i class="fas fa-info"></i>
                      </Button>
                    </td>
                    <td>
                      <Link to={`/applicantlist/${data._id}`}>
                        <Button
                        // onClick={() => {
                        //   post("/user/filter", { _id: data._id }).then(
                        //     (res) => {
                        //       console.log(res.body);
                        //       setUserPass(res.body.doc);

                        //     }
                        //   );
                        // }}
                        >
                          Applicants
                        </Button>
                      </Link>
                    </td>
                    <td>
                      {date <= data.lastDate.substring(0, 10) ? (
                        <Button
                          variant="danger"
                          onClick={() => {
                            post("/job/delete", {
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
                      ) : (
                        <Button
                          variant="danger"
                          onClick={() => {
                            post("/job/delete", {
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
                          <i class="fas fa-calendar-times"></i>
                        </Button>
                      )}
                    </td>
                    <td></td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
