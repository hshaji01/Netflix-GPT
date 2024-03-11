import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movies",
    initialState: {
        trailerVideo:null,
        movieNowPlaying: null,
        moviePopular:null,
        movieUpcoming:null,
        movieTopRated:null
    },
    reducers: {
        addNowPlayingMovies(state, action){
            state.movieNowPlaying = action.payload;
        },
        addTrailerVideo(state, action){
            state.trailerVideo = action.payload
        },
        addPopularMovies(state, action){
            state.moviePopular = action.payload;
        },
        addTopRatedMovies(state, action){
            state.movieTopRated = action.payload;
        },
        addUpcomingMovies(state, action){
            state.movieUpcoming = action.payload;
        },
    }
})
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = MovieSlice.actions;

export default MovieSlice.reducer;