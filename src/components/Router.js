import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import LearnResource from "./LearnResource";
import NavBar from "./Nav";
import LearnResourceSwitch from "./LearnResourceSwitch";

const PageRouter = () => (
  <Router>
    <div>
      <NavBar />
      <Route path="/" component={Home} exact />
      <Route path="/learn" component={LearnResource} />
      <Route path="/learn/:resourceId" component={LearnResourceSwitch} />
    </div>
  </Router>
);

export default PageRouter;
