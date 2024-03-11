import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContent from "./MainContent";
import SecondaryContent from "./SecondaryContent";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const isGptSearch = useSelector((res) => res.gpt.searchToggle);

  return (
    <div>
      <Header />
      {isGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContent />
          <SecondaryContent />
        </>
      )}
    </div>
  );
};

export default Browse;
