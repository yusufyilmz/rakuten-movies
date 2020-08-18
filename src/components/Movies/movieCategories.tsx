import React, { useMemo } from "react";
import { ListGroup } from "react-bootstrap";
import { MovieList } from "./movieList";
import { MovieCategorize } from "../../context/types";

interface MovieCategoriesProps {
  items: Array<MovieCategorize>;
}

export const MovieCategories = ({
  items,
}: MovieCategoriesProps): JSX.Element => {
  const movies = useMemo(
    () =>
      items.map((movieList: MovieCategorize) => {
        return <MovieList key={movieList.numerical_id} movieList={movieList} />;
      }),
    [items]
  );

  return <ListGroup>{movies}</ListGroup>;
};
