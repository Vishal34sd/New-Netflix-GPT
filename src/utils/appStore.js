import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import searchMovieReducer from "./searchMovieSlice";


const appStore = configureStore({
    reducer : {
        movies : movieReducer,
        searchMovie : searchMovieReducer
    }
});


export default appStore ;