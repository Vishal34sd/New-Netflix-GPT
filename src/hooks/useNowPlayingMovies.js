import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'
import { API_OPTIONS, MOVIE_API } from '../utils/constant'

const useNowPlayingMovies = ()=>{

const dispatch = useDispatch();

const nowPlayingMovies = async () => {
    const res = await fetch(MOVIE_API, API_OPTIONS);
    const json = await res.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
}

useEffect(() => {
    nowPlayingMovies()
}, [])

}

export default useNowPlayingMovies ;  