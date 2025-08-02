import { useDispatch } from "react-redux";
import { addSearchData } from "../utils/searchMovieSlice";
import { API_OPTIONS, SEARCH_MOVIE_API } from "../utils/constant";

const useSearchMoviesData = () => {
  const dispatch = useDispatch();

  const searchMovies = async (query) => {
    if (!query || query.toLowerCase() === "undefined") return;

    try {
      const res = await fetch(
        `${SEARCH_MOVIE_API}${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await res.json();
      dispatch(addSearchData(json.results));
      console.log(json.results);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  return searchMovies;
};

export default useSearchMoviesData;
