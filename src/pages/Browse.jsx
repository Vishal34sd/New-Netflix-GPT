import React from 'react'
import Header from '../components/Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from '../components/MainContainer'
import SecondaryContainer from '../components/SecondaryContainer'
import usePopularMovies  from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useSeachMoviesData from '../hooks/useSearchMoviesData'

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    useSeachMoviesData();

  return (
    <div className="relative ">
      <Header showSearch={true}/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse