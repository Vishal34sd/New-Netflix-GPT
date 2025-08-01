import { useDispatch } from "react-redux";
import { addUpcomingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'
import { API_OPTIONS, UPCOMING_MOVIES_API } from '../utils/constant'

const useUpcomingMovies = ()=>{

const dispatch = useDispatch();

const fetchUpcomingMovies = async () => {
    const res = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    const json = await res.json();
    console.log(json);
    dispatch(addUpcomingMovies(json.results));
}

useEffect(() => {
    fetchUpcomingMovies()
}, [])

}

export default useUpcomingMovies ;  