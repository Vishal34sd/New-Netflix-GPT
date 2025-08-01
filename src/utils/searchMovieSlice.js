import { createSlice } from "@reduxjs/toolkit";


const searchMovieSlice = createSlice({
    name : "searchMovie",
    initialState : {
        searchMoviesData : null ,
    },
    reducers : {
        addSearchData : (state, action )=>{
            state.searchMoviesData = action.payload ;
        }
    }
});

export const {addSearchData} = searchMovieSlice.actions ;
export default searchMovieSlice.reducer ;