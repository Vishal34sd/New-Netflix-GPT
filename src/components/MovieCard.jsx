import React from 'react'
import { MOVIE_IMG_URL } from '../utils/constant'

const MovieCard = ({poster}) => {
  return (
    <div className="w-48 pr-4 hover:scale-110 shadow-xl ">
      <img alt="card" src={MOVIE_IMG_URL+poster}/>
    </div>
  )
}

export default MovieCard
