import React from 'react'
import { MOVIE_IMG } from '../utils/constant'

const MovieCard = ({imgPath}) => {
  return (
    <div className='w-[189px] h-[259px]'><img className='h-full w-full rounded-lg px-1 movie-card' alt="Alternate" src = {MOVIE_IMG + imgPath} /></div>
  )
}

export default MovieCard