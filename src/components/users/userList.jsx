import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Badge, FormControl, Table } from "react-bootstrap";

import { Link } from "react-router-dom";
import Modal from "../jobs/Model";

import { Typography, Grid } from "@material-ui/core";

import Card from "react-bootstrap/Card";
import { post } from "../../utils/agent";
// import { getJOb, listJobs } from "../../utils/url";

export default function Job() {
  const [mount, setmount] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [pass, setPass] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  // fetchData

  const fetchData = async () => {
    post("/user/profile/getuser", {})
      .then((result) => {
        console.log({ result: result.body.doc });
        // setData(result.body.doc);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // search data

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    // console.log(searchTerm);
  };
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
                  ACTIVE Users
                </Typography>
                <Typography variant="h5">9999</Typography>
                <Typography variant="body2">Number Of Active Users</Typography>
              </Card.Body>
            </Grid>

            {/* <Grid item component={Card} xs={12} md={3} className="card">
              <Card.Body>
                <Typography color="textSecondary" gutterBottom>
                  EXPIRED JOBS
                </Typography>
                <Typography variant="h5"> 9999</Typography>

                <Typography variant="body2">Number Of Expired jobs</Typography>
              </Card.Body>
            </Grid> */}

            {/* <Grid item component={Card} xs={12} md={3} className="card">
              <Card.Body>
                <Typography color="textSecondary" gutterBottom>
                  SHORTLY EXPIRING JOBS
                </Typography>
                <Typography variant="h5">9999</Typography>

                <Typography variant="body2">Jobs going to expire</Typography>
              </Card.Body>
            </Grid> */}
          </Grid>
        </div>
        <br />
        {mount && <Modal pass={pass} />}
        Profile List
        <div className="tableContainer">
          {/* <Table>
            <thead className="tableHead">
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Skills</th>
                <th>Taluk</th>
                <th>Qualification</th>
                <th>Course</th>
                <th>WorkStatus</th>
                <th>Image</th>
                <th>Dob</th>
                <th>Status</th>
                <th></th>
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
                  <Link to="/filteruser">
                    <Button variant="light">
                      {" "}
                      <i className="fas fa-filter" />
                    </Button>
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.companyName}</td>
                  <td>{data.userId.name}</td>
                  <td>{data.course}</td>
                  <td>skills</td>
                  <td>{data.taluk}</td>
                  <td>{data.qualification}</td>
                  <td>{data.course}</td>
                  <td>
                    {data.status ? (
                      <Badge pill variant="success">
                        Active
                      </Badge>
                    ) : (
                      <Badge pill variant="danger">
                        Lapsed
                      </Badge>
                    )}
                  </td>
                  <td>Image</td>
                  <td>{data.dob}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => {
                        post("/job/getJob", {
                          _id: data._id,
                        }).then((res) => {
                          setPass(res.body.doc);
                          setmount(!mount);
                        });
                      }}
                    >
                      <i class="fas fa-info"></i>
                    </Button>
                  </td>
                  <td>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </Table> */}
        </div>
      </div>
    </div>
  );
}
