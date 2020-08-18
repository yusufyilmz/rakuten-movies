import React from "react";
import { Route, Switch } from "react-router-dom";
import { Movies } from "./Movies";
import { MovieDetail } from "./MovieDetail";
import { MovieVideo } from "./MovieVideo";
import { useBrowserEvents } from "../hooks/useBrowserEvents";
import { useFetchMovies } from "../hooks/useFetchMovies";

const Routes = (): JSX.Element => {
  useFetchMovies();
  useBrowserEvents();

  return (
    <Switch>
      <Route exact path="/movies">
        <Movies />
      </Route>
      <Route exact path="/MovieDetail/:id">
        <MovieDetail />
      </Route>
      <Route exact path="/movieVideo/:id">
        <MovieVideo />
      </Route>
    </Switch>
  );
};

export default Routes;
