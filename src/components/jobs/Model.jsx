import React from "react";
import { useEffect, useState } from "react";

import { Badge } from "react-bootstrap";

import "./job.css";

import Card from "react-bootstrap/Card";
function Model(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(props.pass[0]);
    setData(props.pass[0]);
  }, []);
  return (
    <div>
      <div className="userdata">
        <Card border="primary">
          <Card.Header as="h5">
            <div className="card-user">{data.companyName}</div>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              {data.status ? (
                <Badge pill variant="success">
                  Active
                </Badge>
              ) : (
                <Badge pill variant="danger">
                  Expired
                </Badge>
              )}
              {data.certified ? (
                <Badge pill variant="success">
                  Certified
                </Badge>
              ) : (
                <Badge pill variant="danger">
                  Not Certified
                </Badge>
              )}
            </Card.Title>
            <Card.Text>Company Address : {data.companyaddress}</Card.Text>
            <Card.Text>Company Mobile : {data.companyMob}</Card.Text>
            <Card.Text>Number of Vacancies : {data.noOfVacencies}</Card.Text>
            <Card.Text>Job Position : {data.jobPosition}</Card.Text>
            <Card.Text>Description : {data.description}</Card.Text>
            <Card.Text>Working Time: {data.workingTime}</Card.Text>
            <Card.Text>Experience : {data.experience}</Card.Text>
            <Card.Text>Salary : {data.salary}</Card.Text>
            <Card.Text>Skills : {data.Skills}</Card.Text>
            <Card.Text>Feild : {data.feild}</Card.Text>
            <Card.Text>Working Time: {data.workingTime}</Card.Text>
            <Card.Text>Location : {data.location}</Card.Text>
            <Card.Text>Recruiter : {data.recruiter}</Card.Text>
            <Card.Text>Last Date : {data.lastDate}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Model;
