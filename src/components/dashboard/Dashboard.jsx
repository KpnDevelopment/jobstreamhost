import React from "react";
import "./dash.css";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Jobs</h1>
      <div class="cards">
        <div class="cards__item">
          <Card border="success" style={{ width: "23rem" }} className="mb-2">
            <Card.Header>Active Jobs</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1>253</h1>
              </Card.Title>
              {/* <Link to="/jobs">View More</Link> */}
            </Card.Body>
          </Card>
        </div>
        <div class="cards__item">
          <Card border="primary" style={{ width: "23rem" }} className="mb-2">
            <Card.Header>Total Jobs</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1>1234</h1>
              </Card.Title>
              {/* <Link to="/jobs">View More</Link> */}
            </Card.Body>
          </Card>
        </div>
        <div class="cards__item">
          <Card border="warning" style={{ width: "23rem" }} className="mb-2">
            <Card.Header>Shortly Expired Jobs</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1>9</h1>
              </Card.Title>
              {/* <Link to="/jobs">View More</Link> */}
            </Card.Body>
          </Card>
        </div>
        <div class="cards__item">
          <Card border="danger" style={{ width: "23rem" }} className="mb-2">
            <Card.Header>Expired Jobs</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1>35</h1>
              </Card.Title>
              {/* <Link to="/jobs">View More</Link> */}
            </Card.Body>
          </Card>
        </div>
      </div>

      <h1>Users</h1>

      <div class="cards">
        <div class="cards__item">
          <Card border="success" style={{ width: "23rem" }} className="mb-2">
            <Card.Header>Total Users</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1>999</h1>{" "}
              </Card.Title>
              {/* <Link to="/users">View More</Link> */}
            </Card.Body>
          </Card>
        </div>
        <div class="cards__item">
          <Card border="warning" style={{ width: "23rem" }} className="mb-2">
            <Card.Header bg="warning">Prime Users</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1>569</h1>{" "}
              </Card.Title>
              {/* <Link to="/users">View More</Link> */}
            </Card.Body>
          </Card>
        </div>
        <div class="cards__item">
          <Card border="danger" style={{ width: "23rem" }} className="mb-2">
            <Card.Header>Recently Expiring</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1>59</h1>{" "}
              </Card.Title>
              {/* <Link to="/users">View More</Link> */}
            </Card.Body>
          </Card>
        </div>
      </div>

      <h1>Plans</h1>

      <div class="cards">
        <div class="cards__item">
          <Card border="primary" style={{ width: "23rem" }} className="mb-2">
            <Card.Header>Plans</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1>3</h1>
              </Card.Title>
              {/* <Link to="/payment">View More</Link> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
