import { useEffect } from "react";
import { useOnDemandFetch } from "./useOnDemandFetch";
import {
  fetchMoviesSuccess,
  fetchAllMoviesSuccess,
  dataRequested,
} from "../context/actions";
import { useMovieDataDispatchContext } from "../context";

const MOVIE_TYPES = [
  "populares-en-taquilla",
  "estrenos-para-toda-la-familia",
  "estrenos-imprescindibles-en-taquilla",
  "estrenos-espanoles",
  "si-te-perdiste",
  "nuestras-preferidas-de-la-semana",
];

export const useFetchMovies = (): void => {
  const [onDemandFetch] = useOnDemandFetch();
  const { dispatch } = useMovieDataDispatchContext();

  useEffect(() => {
    const promises = MOVIE_TYPES.map((movieType: string) => {
      const url = `/lists/${movieType}`;

      return onDemandFetch(url, dataRequested, fetchMoviesSuccess, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
    });

    Promise.all(promises).then((movies) => {
      dispatch(fetchAllMoviesSuccess(movies));
    });
  }, [dispatch, onDemandFetch]);
};
