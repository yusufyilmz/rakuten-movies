import React from "react";
import { VideoPlayer } from "./videoPlayer";
import { useMovieVideo } from "../../hooks/useMovieVideo";

export const MovieVideo = (): JSX.Element => {
  const [video, closeVideo] = useMovieVideo();

  return (
    <>
      <VideoPlayer
        onClose={closeVideo}
        url={video && video.stream_infos[0].url}
      />
    </>
  );
};
