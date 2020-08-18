import React from "react";
import { useNavigationBar } from "../../hooks/useNavigationBar";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import { MovieCard } from "./movieCard";

export const MovieDetail = (): JSX.Element | null => {
  const [movieDetail] = useMovieDetail();
  const [Navigation] = useNavigationBar(movieDetail && movieDetail.title);

  if (!movieDetail) return null;

  return (
    <>
      <Navigation />
      <MovieCard movie={movieDetail} />
    </>
  );
};
