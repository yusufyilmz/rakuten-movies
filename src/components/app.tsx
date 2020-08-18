import React from "react";
import { Row } from "react-bootstrap";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { MovieDataProvider } from "../context";
import Routes from "./Routes";

const customHistory = createBrowserHistory();

const App = (): JSX.Element => {
  return (
    <Row>
      <Router history={customHistory}>
        <MovieDataProvider>
          <Routes />
        </MovieDataProvider>
      </Router>
    </Row>
  );
};

export default App;
