import React from "react";

const LearnResourceSwitch = ({ match }) => {
  switch (match.params.resourceId) {
    case "learn-01":
      return (
        <div>
          <h3>{match.params.resourceId}</h3>
          <p>the first learn</p>
        </div>
      );
    case "learn-02":
      return (
        <div>
          <h3>{match.params.resourceId}</h3>
          <p>the second learn</p>
        </div>
      );
    default:
      console.log("default");
  }
};

export default LearnResourceSwitch;
