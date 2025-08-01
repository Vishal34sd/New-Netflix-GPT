import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='p-6 '>
         <h1 className='text-3xl font-bold py-6'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide'>
       
        <div className='flex'>
      {movies && movies.map((movie) => (
  <MovieCard key={movie.id} poster={movie.poster_path} />
))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
