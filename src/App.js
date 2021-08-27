import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/home";
import Navbar from "./components/navbar/nav";
import UserList from "./components/users/userList";
import UserAdd from "./components/users/userAdd";
import Job from "./components/jobs/Job";
import JobAdd from "./components/jobs/JobAdd";
import Category from "./components/category/Category";
import Login from "./components/login/Login";
import FilterUser from "./components/users/FilterUser";
import FilterJob from "./components/jobs/FilterJob";
import Course from "./components/course/Course";
import Qualification from "./components/qualification/Qualification";
import AppliedJobs from "./components/appliedjobs/AppliedJobs";
// import createLogin from "./components/login/createLogin";
import useToken from "./utils/useToken";
import Plan from "./components/payment/Plan";
import ApplieduseList from "./components/appliedjobs/ApplieduseList";
function App() {
  const token = localStorage.getItem("auth-key");

  if (!token) {
    return <Login />;
  }
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path="/login" component={Login} />
          <Route path="/clogin" exact component={createLogin} /> */}
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/users" component={UserList}></Route>
          <Route path="/filteruser" exact component={FilterUser}></Route>
          <Route path="/users-add" component={UserAdd}></Route>
          <Route path="/category" exact component={Category}></Route>
          <Route path="/payment" component={Plan}></Route>
          <Route path="/jobs" component={Job}></Route>
          <Route path="/jobs-add" exact component={JobAdd}></Route>
          <Route path="/filterjob" exact component={FilterJob}></Route>
          {/* <Route path="/appliedjob" exact component={AppliedJobs}></Route> */}
          <Route
            path="/applicantlist/:id"
            exact
            component={ApplieduseList}
          ></Route>

          <Route path="/course" exact component={Course}></Route>
          <Route path="/qualification" exact component={Qualification}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
