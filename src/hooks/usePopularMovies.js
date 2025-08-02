import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import { API_OPTIONS, POPULAR_MOVIE_API } from '../utils/constant'
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = ()=>{

const dispatch = useDispatch();

const getPopularMovies = async () => {
    const res = await fetch(POPULAR_MOVIE_API, API_OPTIONS);
    const json = await res.json();
    dispatch(addPopularMovies(json.results));
}

useEffect(() => {
     getPopularMovies()
}, [])

}

export default usePopularMovies;  