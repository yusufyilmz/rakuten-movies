import { useMemo } from "react";
import { useMovieDataStateContext } from "../context";
import { MovieCategorize } from "../context/types";

export const useMovies = (): [Array<MovieCategorize>] => {
  const { state } = useMovieDataStateContext();

  const sortedMovies = useMemo(() => {
    return state.movies.sort((a: MovieCategorize, b: MovieCategorize) =>
      a.contents.data.length > b.contents.data.length ? -1 : 1
    );
  }, [state.movies]);

  return [sortedMovies];
};
