import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOnDemandFetch } from "./useOnDemandFetch";
import { fetchMovieVideoSuccess, videoRequested } from "../context/actions";
import { useMovieDataStateContext } from "../context";
import { useCustomHistory } from "./useCustomHistory";
import { MovieVideo } from "../context/types";

const getParams = (id: string) => {
  return {
    audio_language: "SPA",
    audio_quality: "2.0",
    content_id: id,
    content_type: "movies",
    device_serial: "device_serial_1",
    device_stream_video_quality: "FHD",
    player: "web:PD-NONE",
    subtitle_language: "MIS",
    video_type: "trailer",
  };
};

export const useMovieVideo = (): [MovieVideo | null, () => any] => {
  const { id } = useParams();
  const [onDemandFetch] = useOnDemandFetch();
  const [navigate] = useCustomHistory(`/movieDetail/${id}`);
  const { state } = useMovieDataStateContext();

  useEffect(() => {
    onDemandFetch(`/me/streamings`, videoRequested, fetchMovieVideoSuccess, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(getParams(id)),
    });
  }, [id, onDemandFetch]);

  const closeVideo = () => {
    navigate();
  };

  return [state.movieDetails ? state.movieDetails.video : null, closeVideo];
};
