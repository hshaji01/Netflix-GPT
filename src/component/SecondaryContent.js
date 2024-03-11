import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux';

const SecondaryContent = () => {
    const movieList = useSelector(res=> res.movies);
  return (
    <div className='bg-black'>
        <div className=' -mt-52 relative z-10'>
            <MoviesList title={"Now Playing"} movieData = {movieList.movieNowPlaying} />  
            <MoviesList title={"Top Rated"} movieData = {movieList.movieTopRated} />          
            <MoviesList title={"Upcoming"} movieData = {movieList.movieUpcoming} />
            <MoviesList title={"Popular"} movieData = {movieList.moviePopular} />
        </div>
    </div>
    
  )
}

export default SecondaryContent