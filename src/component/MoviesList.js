import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = ({title, movieData}) => {
    
  return (
    <div>
        <h1 className='text-3xl font-bold text-white text-left py-5 px-2'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex'>{movieData && movieData.map(res => <MovieCard key={res.id} imgPath = {res.poster_path} /> )}</div>
        </div>
    </div>
  )
}

export default MoviesList