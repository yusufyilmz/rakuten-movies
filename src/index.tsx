import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Index = () => {
  return <App />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
