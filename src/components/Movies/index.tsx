import React from "react";
import { Col } from "react-bootstrap";
import { MovieCategories } from "./movieCategories";
import { useMovies } from "../../hooks/useMovies";
import { useNavigationBar } from "../../hooks/useNavigationBar";

export const Movies = (): JSX.Element => {
  const [movies] = useMovies();
  const [Navigation] = useNavigationBar();

  return (
    <Col>
      <Navigation />
      <MovieCategories items={movies} />
    </Col>
  );
};
