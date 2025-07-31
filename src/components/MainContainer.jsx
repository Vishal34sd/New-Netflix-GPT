import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
     const movies = useSelector(store=>store.movies?.nowPlayingMovies);
     if(!movies) return ;

     const mainMovie = movies[0];
     const {original_title , overview , id} = mainMovie;
     console.log(mainMovie)
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <VideoBackground movieId={id}/>
      <VideoTitle title={ original_title} overview = {overview}/>
      
    </div>
  )
}

export default MainContainer
