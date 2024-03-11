import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/MovieSlice";

const useMovieVideo = (movie_id) => {
    
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
        try {
          const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
              movie_id +
              "/videos?language=en-US",
            TMDB_OPTIONS
          );
          if (!data.ok) {
            throw new Error("Failed fetching Movie Video");
          }
          const jsonData = await data.json();
    
          const videoData = jsonData?.results.filter(
            (res) => res.type === "Trailer"
          );
          const trailerData = videoData.length
            ? videoData[0]
            : jsonData?.results[0];
          dispatch(addTrailerVideo(trailerData));
        } catch (error) {
          throw error.message;
        }
      };
    fetchData();
  }, []);
  
};

export default useMovieVideo;
