import { useDispatch } from "react-redux";
import { addTopRatedMovies } from '../utils/movieSlice'
import { useEffect } from 'react'
import { API_OPTIONS, TOP_RATED_MOVIE_API } from '../utils/constant'

const useTopRatedMovies = ()=>{

const dispatch = useDispatch();

const fetchTopRatedMovies = async () => {
    const res = await fetch( TOP_RATED_MOVIE_API, API_OPTIONS);
    const json = await res.json();
    console.log(json);
    dispatch(addTopRatedMovies(json.results));
}

useEffect(() => {
   fetchTopRatedMovies()
}, [])

}

export default useTopRatedMovies ;  