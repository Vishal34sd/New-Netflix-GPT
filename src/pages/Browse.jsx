import React from 'react'
import Header from '../components/Header'
import { API_OPTIONS, MOVIE_API } from '../utils/constant'
import { useEffect } from 'react'

const Browse = () => {

    const nowPlayingMovies = async ()=>{
        const res = await fetch(MOVIE_API,API_OPTIONS);
        const json = await res.json();
        console.log(json);
    }

    useEffect(()=>{
        nowPlayingMovies()
    },[])
  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse
