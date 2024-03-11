import React from "react";
import {  useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";

const VideoBackground = ({ movie_id }) => {
    useMovieVideo(movie_id);
    const trailerKey = useSelector(res=> res.movies.trailerVideo);
   

  return (
    <div className="w-screen video-container">
      <iframe id="youtube-video" className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerKey?.key + "?modestbranding=1&rel=0&loop=1&autoplay=1&mute=1&controls=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

    </div>
  );
};

export default VideoBackground;
