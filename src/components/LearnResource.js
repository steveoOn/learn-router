import React from "react";
import { NavLink } from "react-router-dom";

const LearnResource = ({ match }) => (
  <aside>
    <h2>Pick one of example to learn!</h2>
    <ul>
      <li>
        <NavLink to={`${match.url}/learn-01`}>Learn-01</NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/learn-02`}>Learn-02</NavLink>
      </li>
    </ul>
  </aside>
);

export default LearnResource;
