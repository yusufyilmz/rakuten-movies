import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOnDemandFetch } from "./useOnDemandFetch";
import { fetchMovieDetailsSuccess, dataRequested } from "../context/actions";
import { useMovieDataStateContext } from "../context";
import { MovieDetail } from "../context/types";

export const useMovieDetail = (): [MovieDetail] => {
  const { id } = useParams();
  const [onDemandFetch] = useOnDemandFetch();
  const { state } = useMovieDataStateContext();

  useEffect(() => {
    onDemandFetch(`/movies/${id}`, dataRequested, fetchMovieDetailsSuccess, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }, [id, onDemandFetch]);

  return [state.movieDetails];
};
