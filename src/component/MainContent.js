import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContent = () => {
    const movies = useSelector((res)=> res?.movies?.movieNowPlaying);
    console.log(movies)
    if(!movies) return;    
    const {original_title, id, overview} = movies[4];
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movie_id={id} />
    </div>
  )
}

export default MainContent