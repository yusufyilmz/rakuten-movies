import React from "react";
import { MovieItem } from "./movieItem";
import { ListBox } from "../ListBox";
import { MovieCategorize, MovieContentData } from "../../context/types";

interface MovieListProps {
  movieList: MovieCategorize;
}

export const MovieList = ({ movieList }: MovieListProps): JSX.Element => {
  return (
    <ListBox width={288} name={movieList.short_name}>
      {movieList.contents?.data?.map((movie: MovieContentData) => (
        <MovieItem
          id={movie.id}
          key={movie.id}
          artwork={movie.images.artwork}
        />
      ))}
    </ListBox>
  );
};
