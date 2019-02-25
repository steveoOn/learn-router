import React from "react";
import ReactDOM from "react-dom";
import PageRouter from "./components/Router";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PageRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
